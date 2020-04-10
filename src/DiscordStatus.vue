<template>
  <div class="status-holder" v-if="presences.length > 0">
    <div class="presence-root" v-for="(presence, idx) of presences" :key="idx">
      <spotify-presence
        v-if="presence.name === 'Spotify'"
        :presence="presence"
        :assets="spotifyAssets"
      ></spotify-presence>
      <code-presence v-else-if="presence.name === 'Visual Studio Code'" :presence="presence"></code-presence>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import SpotifyPresence from '@/components/SpotifyPresence.vue'
import CodePresence from '@/components/CodePresence.vue'

const PRESENCE_URL = process.env.VUE_APP_WS || 'ws://localhost:8138/presence'

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
    SpotifyPresence,
    CodePresence
  }
})
export default class DiscordStatus extends Vue {
  presences: Presence[] = [];
  spotifyAssets: SpotifyAssets = {};
  socket: WebSocket = null!;

  created () {
    this.respawnSocket()
  }

  respawnSocket () {
    this.socket = new WebSocket(PRESENCE_URL)
    this.socket.addEventListener('message', ({ data }) => {
      const { activities, spotifyAssets } = JSON.parse(data)

      this.presences = activities
      this.spotifyAssets = spotifyAssets
    })
    this.socket.addEventListener('close', () => setTimeout(() => this.respawnSocket(), 5000))
  }

  observing = false;

  mounted () {
    this.$watch('presences', presences => {
      if (this.observing) return

      const recompute = () => {
        if (!this.$el || !this.$el.children) return
        const children = Array.from(this.$el.children)
        children.sort((a, b) => b.clientWidth - a.clientWidth)
        children.forEach((c, i) => {
          (c as HTMLElement).style.order = i.toString()
          c.classList.toggle('no-margin', i === 1)
        })
      }

      const observer = new MutationObserver(mutations => {
        recompute()
      })

      recompute()

      observer.observe(this.$el, {
        childList: true,
        subtree: true,
        characterData: true
      })
      this.observing = true
    })
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

  .presence-cta {
    font-size: 0.7em;
    text-transform: uppercase;
    font-weight: bolder;
    padding-bottom: $presence-spacing;

    &.presence-cta-split {
      display: grid;
      grid-template-columns: 75px minmax(0, 1fr);
      column-gap: $presence-spacing;
    }
  }

  .presence-detail {
    display: grid;
    grid-template-columns: 75px minmax(0, 1fr);
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
