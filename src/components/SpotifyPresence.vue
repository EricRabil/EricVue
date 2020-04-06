<template>
  <div class="presence spotify-presence">
    <span class="presence-cta">Listening to Spotify</span>
    <div class="presence-detail">
      <img ref="artHolder" class="detail-asset" :src="artwork" />
      <div class="detail-text">
        <span class="detail-major">
          {{song}}
        </span>
        <span class="detail-minor">
          by {{artist}}
        </span>
        <span v-if="album" class="detail-minor">
          on {{album}}
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { Presence, SpotifyAssets } from '../DiscordStatus.vue'

const scdn = (tag: string) => `https://i.scdn.co/image/${tag}`

@Component
export default class SpotifyPresence extends Vue {
  @Prop()
  presence: Presence;

  @Prop()
  assets: SpotifyAssets;

  $refs: {
    artHolder: HTMLImageElement;
  }

  get artwork (): string | null {
    const { largeImage } = this.presence.assets || {}
    if (!largeImage) return null
    const [protocol, tag] = largeImage.split(':')
    if (protocol !== 'spotify') return null
    return this.assets[tag].url
  }

  get album (): string | null {
    return (this.presence.assets && this.presence.assets.largeText) || null
  }

  get artist () {
    return this.presence.state
  }

  get song () {
    return this.presence.details
  }
}
</script>
