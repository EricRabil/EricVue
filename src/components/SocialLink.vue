<template>
  <a :href="link" :aria-label="icon" class="fa-wrap" v-on="$listeners">
    <font-awesome-icon :icon="['fab', icon]" />
  </a>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class SocialLink extends Vue {
  @Prop()
  link: string;

  @Prop()
  icon: string;
}
</script>

<style lang="scss">
a.fa-wrap {
  color: white;
  font-size: 2rem;
  margin: 0 10px;
  cursor: pointer;

  svg {
    fill: white;
  }
}
</style>
