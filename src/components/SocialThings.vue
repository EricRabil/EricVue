<template>
  <div class="social-tray">
    <social-link link="https://github.com/EricRabil" icon="github" />
    <social-link link="https://twitter.com/ericrabil" icon="twitter" />
    <social-link link="https://instagram.com/ericrabil" icon="instagram" />
    <social-link link="https://old.reddit.com/u/ericrabil" icon="reddit" />
    <social-link
      icon="discord"
      @click="copy"
      v-tooltip.bottom="'eric#1111'"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import SocialLink from '@/components/SocialLink.vue'

@Component({
  components: {
    SocialLink
  }
})
export default class SocialThings extends Vue {
  async copy () {
    await this.$copyText('eric#1111')
    this.$toasted.show('I copied my Discord to the clipboard 💕', { className: 'toast' }).goAway(2000)
  }
}
</script>

<style lang="scss">
.social-tray {
  display: flex;
  flex-flow: row;
  padding: 40px;

  @media screen and (max-width: 800px) {
          @media screen and (max-height: 400px) {
            padding: 10px;

          }}
}
</style>
