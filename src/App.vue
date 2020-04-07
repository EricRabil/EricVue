<template>
  <div id="app">
    <div :class="['background', {'background-fast': smoothBackground === 1, 'background-smooth': smoothBackground === 2}]" :style="{'background-color': background}">
    </div>
    <div class="contents">
      <div class="greeting">
        <h1>Hi, I'm Eric Rabil</h1>
        <discord-status></discord-status>
        <social-things></social-things>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import SocialThings from '@/components/SocialThings.vue'

enum BackgroundState {
  INIT,
  PRELOAD,
  ROLLING
}

@Component({
  components: {
    SocialThings
  }
})
export default class App extends Vue {
  smoothBackground: BackgroundState = BackgroundState.PRELOAD;

  mounted () {
    this.$watch('background', (background) => {
      switch (this.smoothBackground) {
        case BackgroundState.INIT:
          // phase 1, fast transition
          this.smoothBackground = BackgroundState.PRELOAD
          break
        case BackgroundState.PRELOAD:
          // phase 2, standard transition
          this.smoothBackground = BackgroundState.ROLLING
          break
      }
    })

    this.$el.classList.remove('from-ssr')
  }

  get background () {
    return this.$store.state.backgroundColor
  }
}
</script>

<style lang="scss">
@import "reset-css";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  .background {
    background-image: linear-gradient(
      135deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 100%
    );
    // animation: rainbow 120s infinite;
    height: 100%;
    width: 100%;
    position: absolute;

    &.background-fast {
      transition: background-color 5s ease-in-out;
    }

    &.background-smooth {
      transition: background-color 16s ease-in-out;
    }
  }

  &.from-ssr {
    .background {
      background-color: #ff0000 !important;
    }

    .status-holder {
      display: none !important;
    }
  }

  .contents {
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    height: 100%;
    width: 100%;

    .greeting {
      display: flex;
      flex-flow: column;
      justify-content: center;
      align-items: center;
      color: white;

      h1 {
        font-size: 48px;
        margin: 40px 0;
        font-weight: bold;

        @media screen and (max-width: 425px) {
          font-size: 36px;
        }

        @media screen and (max-width: 800px) {
          @media screen and (max-height: 400px) {
            margin: 10px 0;
          }
        }
      }
    }
  }

  @keyframes rainbow {
    /* set your colors and when they should occur here */
    0%,
    100% {
      background-color: #970000;
    }
    20% {
      background-color: #bbbb00;
    }
    40% {
      background-color: #00bebe;
    }
    60% {
      background-color: #0000a1;
    }
    80% {
      background-color: #b400b4;
    }
  }
}

.toasted-container {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.tooltip {
  display: block !important;
  z-index: 10000;
  font-family: Avenir, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 0.8rem;

  .tooltip-inner {
    background: black;
    color: white;
    border-radius: 16px;
    padding: 5px 10px 4px;
  }

  .tooltip-arrow {
    width: 0;
    height: 0;
    border-style: solid;
    position: absolute;
    margin: 5px;
    border-color: black;
    z-index: 1;
  }

  $distance: 10px;

  &[x-placement^="top"] {
    margin-bottom: $distance;

    .tooltip-arrow {
      border-width: 5px 5px 0 5px;
      border-left-color: transparent !important;
      border-right-color: transparent !important;
      border-bottom-color: transparent !important;
      bottom: -5px;
      left: calc(50% - 5px);
      margin-top: 0;
      margin-bottom: 0;
    }
  }

  &[x-placement^="bottom"] {
    margin-top: $distance;

    .tooltip-arrow {
      border-width: 0 5px 5px 5px;
      border-left-color: transparent !important;
      border-right-color: transparent !important;
      border-top-color: transparent !important;
      top: -5px;
      left: calc(50% - 5px);
      margin-top: 0;
      margin-bottom: 0;
    }
  }

  &[x-placement^="right"] {
    margin-left: $distance;

    .tooltip-arrow {
      border-width: 5px 5px 5px 0;
      border-left-color: transparent !important;
      border-top-color: transparent !important;
      border-bottom-color: transparent !important;
      left: -5px;
      top: calc(50% - 5px);
      margin-left: 0;
      margin-right: 0;
    }
  }

  &[x-placement^="left"] {
    margin-right: $distance;

    .tooltip-arrow {
      border-width: 5px 0 5px 5px;
      border-top-color: transparent !important;
      border-right-color: transparent !important;
      border-bottom-color: transparent !important;
      right: -5px;
      top: calc(50% - 5px);
      margin-left: 0;
      margin-right: 0;
    }
  }

  &.popover {
    $color: #f9f9f9;

    .popover-inner {
      background: $color;
      color: black;
      padding: 24px;
      border-radius: 5px;
      box-shadow: 0 5px 30px rgba(black, .1);
    }

    .popover-arrow {
      border-color: $color;
    }
  }

  &[aria-hidden='true'] {
    visibility: hidden;
    opacity: 0;
    transition: opacity .15s, visibility .15s;
  }

  &[aria-hidden='false'] {
    visibility: visible;
    opacity: 1;
    transition: opacity .15s;
  }
}
</style>
