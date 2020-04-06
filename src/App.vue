<template>
  <div id="app">
    <div class="background">
    </div>
    <div class="contents">
      <div class="greeting">
        <h1>Hi, I'm Eric Rabil</h1>
        <discord-status></discord-status>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class App extends Vue {

}
</script>

<style lang="scss">
@import "reset-css";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  .background {
    background-color: #ff0000;
    background-image: linear-gradient(
      135deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 100%
    );
    // animation: rainbow 120s infinite;
    height: 100%;
    width: 100%;
    position: absolute;
  }

  .contents {
    position: absolute;

    .greeting {
      height: 100vh;
      width: 100vw;

      display: flex;
      flex-flow: column;
      justify-content: center;
      align-items: center;
      color: white;

      h1 {
        font-size: 48px;
        margin: 10px 0;
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
</style>
