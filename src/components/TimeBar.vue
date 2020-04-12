<template>
  <div class="time-bar" v-if="startStr && endStr">
    <span class="timer-timestamp">{{currentTime}}</span>
    <vue-slider :disabled="true" :value="progress"></vue-slider>
    <span class="timer-timestamp">{{endTime}}</span>
  </div>
</template>

<script lang="ts">
import moment from 'moment'
import VueSlider from 'vue-slider-component'
import { Component, Prop, Vue } from 'vue-property-decorator'
import 'vue-slider-component/theme/default.css'

@Component({
  components: {
    VueSlider
  }
})
export default class TimeBar extends Vue {
  @Prop()
  startStr: string;

  @Prop()
  endStr: string;

  progress = 0;
  currentTime = '00:00';
  endTime = '00:00';
  interval: ReturnType<typeof setInterval>;

  mounted () {
    this.interval = setInterval(() => {
      this.updateTime()
    }, 1000)
    this.updateTime()
  }

  beforeDestroy () {
    clearInterval(this.interval)
  }

  updateTime () {
    if (!this.start || !this.end) return
    let newProgress =
      100 *
      ((Date.now() - this.start.getTime()) /
        (this.end.getTime() - this.start.getTime()))
    if (newProgress >= 100) newProgress = 100
    this.progress = newProgress
    this.endTime = moment(this.end.getTime() - this.start.getTime()).format(
      'mm:ss'
    )
    if (this.progress >= 100) {
      this.currentTime = this.endTime
    } else {
      this.currentTime = moment(moment().diff(moment(this.start))).format(
        'mm:ss'
      )
    }
  }

  get start (): Date {
    return new Date(this.startStr)
  }

  get end (): Date {
    return new Date(this.endStr)
  }
}
</script>

<style lang="scss">
.time-bar {
  padding-top: 5px;
  display: flex;
  flex-flow: row;
  align-items: center;

  .timer-timestamp {
    font-size: 0.8em;

    &:first-child {
      margin-right: 10px;
    }

    &:last-child {
      margin-left: 10px;
    }
  }

  .vue-slider {
    flex-grow: 1;
  }

  .vue-slider {
    width: 95% !important;
    margin: 0 auto;

      .vue-slider-rail {
        border-radius: 15px;
        overflow: hidden;

        .vue-slider-process {
          border-radius: 0 !important;
        }
      }

    .vue-slider-dot {
      display: none;
      width: 10px !important;
      height: 10px !important;

      .vue-slider-dot-handle.vue-slider-dot-handle-disabled {
        cursor: initial;
      }

      .vue-slider-dot-tooltip {
        display: none;
      }
    }

    &.vue-slider-disabled {
      opacity: 1;
      cursor: initial;
    }
  }
}
</style>
