<template>
  <div class="presence presenti-presence">
    <span class="presence-cta">
      {{cta}}
    </span>
    <div class="presence-detail">
      <c-link :link="imageLink">
        <img class="detail-asset" :src="image" alt="Image" />
      </c-link>
      <div class="detail-text">
        <c-link class="detail-major" :link="largeTextLink">
          {{largeText}}
        </c-link>
        <c-link v-for="(smallText, index) of smallTexts" :key="index" class="detail-minor" :link="smallTextLinks[index]">
          {{smallText}}
        </c-link>
      </div>
    </div>
    <time-bar :start-str="start" :end-str="end"></time-bar>
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

export interface PresentiPresence extends Presence {
  assets?: {
    largeImage?: string;
    largeText?: string;
    smallImage?: string;
    smallText?: string;
    smallTexts?: string[];
  };
  data?: {
    largeTextLink?: string;
    smallTextLink?: string;
    smallTextLinks?: string[];
    imageLink?: string;
  };
}

@Component({
  components: {
    CLink: ConditionalLink,
    VueSlider,
    TimeBar
  }
})
export default class PresentiChromePresence extends Vue {
  @Prop()
  presence: PresentiPresence;

  get image () {
    return this.presence.assets?.largeImage
  }

  get largeText () {
    return this.presence.assets?.largeText
  }

  get largeTextLink () {
    return this.presence.data?.largeTextLink
  }

  get smallText () {
    return this.presence.assets?.smallText
  }

  get smallTextLink () {
    return this.presence.data?.smallTextLink
  }

  get smallTexts () {
    const { smallTexts, smallText } = this.presence.assets || {}
    const rawStrs = [smallText, ...(smallTexts || [])]
    return rawStrs
  }

  get smallTextLinks () {
    const { smallTextLink, smallTextLinks } = this.presence.data || {}
    return [smallTextLink, ...(smallTextLinks || [])]
  }

  get imageLink () {
    return this.presence.data?.imageLink
  }

  get cta () {
    const ctaType = this.presence.type.slice(0, 1).toUpperCase() + this.presence.type.slice(1).toLowerCase()
    return `${ctaType} ${this.presence.name}`
  }

  get start () {
    if (!this.presence.timestamps || !this.presence.timestamps.start) return null
    return this.presence.timestamps.start
  }

  get end () {
    if (!this.presence.timestamps || !this.presence.timestamps.end) return null
    return this.presence.timestamps.end
  }
}
</script>
