<template>
  <div class="status-holder" v-if="presences.length > 0">
    <div class="presence-root" v-for="(presence, idx) of presences" :key="idx">
      <presenti-presence :effective="effective" :presence="presence"></presenti-presence>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { PresenceStream } from 'remote-presence-connector'
import { PresenceStruct } from 'remote-presence-utils'
import PresentiPresence from '@/components/PresentiPresence.vue'

const PRESENCE_URL = process.env.VUE_APP_WS || 'ws://localhost:8138/presence/'

export interface Presence {
  name: string;
  type: string;
  url: string | null;
  details: string | null;
  state: string | null;
  applicationID: string | null;
  timestamps?: {
    start: string | null;
    end: string | null;
  };
  party: string | null;
  assets?: {
    largeText?: string;
    smallText?: string;
    largeImage?: string;
    smallImage?: string;
  };
  flags: number;
  emoji: string | null;
  createdTimestamp: number;
  data?: any;
}

export interface PresenceResponse {
  userID: string;
  guild: string;
  status: string;
  activities: Presence[];
  spotifyAssets: {
    [tag: string]: {
      url: string;
      palette: string[];
    };
  };
}

export type SpotifyAssets = PresenceResponse['spotifyAssets'];

@Component({
  components: {
    PresentiPresence
  }
})
export default class DiscordStatus extends Vue {
  presences: PresenceStruct[] = [];
  spotifyAssets: SpotifyAssets = {};
  stream: PresenceStream = null!;
  gradients: string[] = [];
  effective: number = Date.now();

  interval: ReturnType<typeof setTimeout>;

  roll () {
    const color = this.next()
    if (color) this.$store.commit('setBackground', color)
    this.interval = setTimeout(this.roll, color ? 15000 : 1000)
  }

  index = 0;
  next (): string | null {
    if (!this.gradients) return null
    if (this.gradients.length === 0) return null
    const value = this.gradients[this.index]
    this.index += 1
    if (this.index >= this.gradients.length) this.index = 0
    return value
  }

  created () {
    this.respawnSocket()
  }

  respawnSocket () {
    this.stream = new PresenceStream('eric', { url: PRESENCE_URL })
    this.stream.on('presence', (activities) => { this.presences = activities })
    this.stream.connect()
  }

  mounted () {
    this.$watch('presences', (presences: PresenceStruct[]) => {
      const [gradient] = presences.filter(p => {
        if (!p.shades || p.shades.length === 0) return
        if (typeof p.gradient === 'boolean') return p.gradient === true
        else return p.gradient?.enabled
      }).sort((a, b) => {
        const aPriority: number = typeof a.gradient === 'boolean' ? 0 : (a.gradient?.priority || 0)
        const bPriority: number = typeof b.gradient === 'boolean' ? 0 : (b.gradient?.priority || 0)
        return bPriority - aPriority
      }).map(p => p.shades)
      this.gradients = gradient || []
      clearTimeout(this.interval)
      this.roll()
      this.$emit('gradient-shift')
    }, { deep: true })
    this.roll()
  }
}
</script>

<style lang="scss">
$presence-spacing: 15px;
$min-row: 800px;

.status-holder {
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: $min-row) {
    @media screen and (orientation: portrait) {
      flex-flow: column;
    }
  }
}

.presence-root {
  margin: 0 10px;

  @media screen and (max-width: $min-row) {
    @media screen and (orientation: portrait) {
      margin: 10px 0;
    }
  }
}

.presence {
  display: flex;
  flex-flow: column;
  border: 1px solid rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  padding: $presence-spacing;

  @media screen and (max-width: 350px) {
    font-size: 0.85rem;
  }

  a[href] {
    text-decoration: none;
    color: white;

    &:hover {
      text-decoration: underline;
    }
  }

  .presence-cta {
    font-size: 0.7em;
    text-transform: uppercase;
    font-weight: bolder;
    padding-bottom: $presence-spacing;
    display: grid;
    grid-template-columns: minmax(0, 1fr) 15px;
    column-gap: $presence-spacing;
  }

  .presence-detail {
    display: grid;
    grid-template-columns: min-content minmax(0, 175px);
    column-gap: $presence-spacing;

    .detail-asset {
      height: 75px;
      border-radius: 5px;
    }

    .detail-text {
      display: flex;
      flex-flow: column;
      font-size: 0.9em;
      line-height: 1.2rem;

      .detail-major {
        font-weight: bold;
      }

      .detail-minor {
      }

      .detail-muted {
        // font-weight: bold;
        font-size: 0.8em;
        line-height: 1rem;
      }
    }
  }
}
</style>
