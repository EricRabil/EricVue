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

interface PresenceState {
  gradient?: {
    color?: string;
    transition?: string;
  };
}

@Component({
  components: {
    PresentiPresence
  }
})
export default class DiscordStatus extends Vue {
  presences: PresenceStruct[] = [];
  presenceState: PresenceState = {};
  stream: PresenceStream = null!;
  effective: number = Date.now();

  created () {
    this.respawnSocket()
  }

  respawnSocket () {
    this.stream = new PresenceStream('eric', { url: PRESENCE_URL })
    this.stream.on('presence', (activities) => { this.presences = activities })
    this.stream.on('state', (state) => { this.presenceState = state })
    this.stream.connect()
  }

  mounted () {
    this.$watch('presenceState', (state: PresenceState) => {
      const { color, transition } = state.gradient || {}
      this.$store.commit('setBackground', color)
      this.$store.commit('setTransition', transition)
    }, { deep: true })
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

  &.presence-asset-only {
    min-width: 125px;

    .presence-cta {
      grid-template-columns: 1fr;
      text-align: center;
      padding-bottom: 0;
    }

    .time-bar {
      font-size: 0.75em;

      .timer-timestamp {
        margin: 0 auto;
      }
    }

    .presence-detail {
      padding-top: $presence-spacing;
    }
  }

  .presence-detail {
    display: grid;
    grid-template-columns: min-content minmax(0, 175px);
    column-gap: $presence-spacing;

    &.presence-single {
      grid-template-columns: 1fr;
    }

    .detail-asset {
      height: 75px;
      border-radius: 5px;
    }

    .asset-holder {
      display: flex;
      justify-content: center;
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
