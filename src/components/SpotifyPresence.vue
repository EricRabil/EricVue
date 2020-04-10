<template>
  <div class="presence spotify-presence">
    <span class="presence-cta">Listening to Spotify</span>
    <div class="presence-detail">
      <img v-if="artwork" ref="artHolder" class="detail-asset" :src="artwork" alt="Album Artwork" />
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

@Component
export default class SpotifyPresence extends Vue {
  @Prop()
  presence: Presence;

  interval: ReturnType<typeof setTimeout>;

  mounted () {
    this.roll()
  }

  roll () {
    this.$store.commit('setBackground', this.next())
    this.interval = setTimeout(this.roll, 15000)
  }

  index = 0;
  next (): string | null {
    if (!this.palette) return null
    if (this.palette.length === 0) return null
    const value = this.palette[this.index]
    this.index += 1
    if (this.index >= this.palette.length) this.index = 0
    return value
  }

  get artwork (): string | null {
    if (!this.presence || !this.presence.data) return null
    return (this.presence as any).data.artwork
  }

  get palette (): string[] {
    if (!this.presence || !this.presence.data) return []
    return (this.presence as any).data.palette
  }

  get tag (): string | null {
    const { largeImage } = this.presence.assets || {}
    if (!largeImage) return null
    const [protocol, tag] = largeImage.split(':')
    if (protocol !== 'spotify') return null
    return tag
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
