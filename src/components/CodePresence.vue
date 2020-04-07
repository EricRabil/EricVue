<template>
  <div class="presence code-presence">
    <span class="presence-cta">
      Coding
    </span>
    <div class="presence-detail">
      <img class="detail-asset" :src="largeImage" alt="Visual Studio Code Icon" />
      <div class="detail-text">
        <span class="detail-major">
          {{task}}
        </span>
        <span v-if="workspace" class="detail-minor">
          {{workspace}}
        </span>
        <span class="detail-minor">
          in {{appName}}
        </span>
        <span class="detail-muted" v-if="time">{{time}} elapsed</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import moment from 'moment'
import { Component, Prop, Vue } from 'vue-property-decorator'
import { Presence } from '../DiscordStatus.vue'

const DAPI_CDN = (app: string, asset: string) => `https://cdn.discordapp.com/app-assets/${app}/${asset}.png`

@Component
export default class CodePresence extends Vue {
  @Prop()
  presence: Presence;

  time: string | null = null;

  mounted () {
    setInterval(() => {
      this.updateTime()
    }, 1000)
    this.updateTime()
  }

  updateTime () {
    if (!this.start) return
    const start = moment(this.start)
    this.time = moment(moment().diff(start)).format('mm:ss')
  }

  get start (): string | null {
    if (!this.presence.timestamps) return null
    return this.presence.timestamps.start
  }

  get appName (): string | null {
    if (!this.assets) return null
    if (!this.assets.smallText) return null
    return this.assets.smallText
  }

  get task (): string | null {
    if (this.presence.details) {
      return this.presence.details
    }

    if (!this.assets) return null
    if (!this.assets.largeText) return null
    return this.assets.largeText
  }

  get workspace (): string | null {
    return this.presence.state || null
  }

  get largeImage (): string | null {
    if (!this.assets) return null
    if (!this.assets.largeImage) return null
    if (!this.presence.applicationID) return null
    return DAPI_CDN(this.presence.applicationID, this.assets.largeImage)
  }

  get smallImage (): string | null {
    if (!this.assets) return null
    if (!this.assets.smallImage) return null
    if (!this.presence.applicationID) return null
    return DAPI_CDN(this.presence.applicationID, this.assets.smallImage)
  }

  get assets () {
    if (!this.presence.assets) return null
    return this.presence.assets
  }
}
</script>
