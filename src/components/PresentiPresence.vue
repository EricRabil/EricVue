<template>
  <div class="presence presenti-presence">
    <span class="presence-cta presence-cta-split">
      {{title}}
      <font-awesome-icon v-if="typeof paused === 'boolean'" :icon="['fa', paused ? 'pause' : 'play']" />
    </span>
    <div class="presence-detail">
      <c-link :link="image.link">
        <img class="detail-asset" :src="image.src" alt="Image" />
      </c-link>
      <div class="detail-text">
        <c-link class="detail-major" :link="largeText.link">
          {{largeText.text}}
        </c-link>
        <c-link v-for="({ text, link }, index) of smallTexts" :key="index" class="detail-minor" :link="link">
          {{text}}
        </c-link>
        <span v-if="start && !end">
          <time-bar :stopped="paused === true" :start="start" :end="end"></time-bar> Elapsed
        </span>
      </div>
    </div>
    <time-bar v-if="start && end" :stopped="paused === true" :start="start" :end="end"></time-bar>
  </div>
</template>

<script lang="ts">
import moment from 'moment'
import VueSlider from 'vue-slider-component'
import { Component, Prop, Vue } from 'vue-property-decorator'
import { Presence } from '../DiscordStatus.vue'
import ConditionalLink from './ConditionalLink.vue'
import 'vue-slider-component/theme/default.css'
import TimeBar from '@/components/TimeBar.vue'
import { PresenceStruct } from 'remote-presence-utils/js/types'

@Component({
  components: {
    CLink: ConditionalLink,
    VueSlider,
    TimeBar
  }
})
export default class PresentiChromePresence extends Vue {
  @Prop()
  presence: PresenceStruct;

  get image () {
    if (typeof this.presence.image === 'string') {
      return {
        src: this.presence.image
      }
    }

    return this.presence.image
  }

  get largeText () {
    if (typeof this.presence.largeText === 'string') {
      return {
        text: this.presence.largeText
      }
    }

    return this.presence.largeText
  }

  get smallTexts () {
    if (!this.presence.smallTexts || !Array.isArray(this.presence.smallTexts)) return []

    return this.presence.smallTexts.map(text => {
      if (typeof text === 'string') {
        return {
          text
        }
      }

      return text
    })
  }

  get paused () {
    return this.presence.isPaused
  }

  get gradient () {
    if (typeof this.presence.gradient === 'boolean') {
      return {
        enabled: this.presence.gradient
      }
    };

    return this.presence.gradient
  }

  get title () {
    return this.presence.title
  }

  get effective () {
    return this.presence.effective
  }

  get start () {
    if (!this.presence.timestamps) return
    return new Date(this.effective - this.presence.timestamps.position!)
  }

  get end () {
    if (!this.presence.timestamps || !this.presence.timestamps.duration) return
    return new Date(this.effective + (this.presence.timestamps.duration - (this.presence.timestamps.position || 0)))
  }
}
</script>
