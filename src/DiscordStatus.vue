<template>
  <div class="status-holder">
    <div v-for="(presence, idx) of presences" :key="idx">
      <spotify-presence v-if="presence.name === 'Spotify'" :presence="presence" :assets="spotifyAssets"></spotify-presence>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import SpotifyPresence from '@/components/SpotifyPresence.vue'

const PRESENCE_URL = 'http://localhost:8138'
const ENDPOINT = (id: string) => `${PRESENCE_URL}/presence/${id}`
const USER = '163024083364216832'

export interface Presence {
    name: string;
    type: string;
    url: string | null;
    details: any;
    state: any;
    applicationID: string | null;
    party: string | null;
    assets?: {
      largeText?: string;
      largeImage?: string;
    };
    flags: number;
    emoji: string | null;
    createdTimestamp: number;
  };

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

function getPresence (): Promise<PresenceResponse> {
  return new Promise(resolve => {
    const url = ENDPOINT(USER)
    const xhr = new XMLHttpRequest()

    xhr.addEventListener('readystatechange', () => {
      if (xhr.readyState === 4 && xhr.status === 200) {
        resolve(JSON.parse(xhr.responseText))
      }
    })

    xhr.open('GET', url, true)
    xhr.send()
  })
}

@Component({
  components: {
    SpotifyPresence
  }
})
export default class DiscordStatus extends Vue {
  presences: Presence[] = [];
  spotifyAssets: SpotifyAssets = {};

  created () {
    this.refresh()

    setInterval(this.refresh, 1000 * 60)
  }

  async refresh () {
    const { activities, spotifyAssets } = await getPresence()
    this.presences = activities
    this.spotifyAssets = spotifyAssets
  }
}
</script>

<style lang="scss">
$presence-spacing: 15px;

.presence {
  display: flex;
  flex-flow: column;
  border: 1px solid rgba(0,0,0,0.25);
  border-radius: 5px;
  padding: $presence-spacing;

  .presence-cta {
    font-size: 0.7rem;
    text-transform: uppercase;
    font-weight: bolder;
    padding-bottom: $presence-spacing;
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
      font-size: 0.9rem;
      line-height: 1.2rem;

      .detail-major {
        font-weight: bold;
      }

      .detail-minor {
      }
    }
  }
}
</style>
