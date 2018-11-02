<template>
  <transition name="loading-fade">
    <div
    v-show="visible"
    class="loading-mask"
    :style="{ backgroundColor: background || ''}"
    :class="[customClass, { 'is-fullscreen': fullscreen }]">
      <div class="loading-wrapper">
        <div class="loading-svg">
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" style="enable-background:new 0 0 50 50;" xml:space="preserve">
            <circle cx="16" cy="3" r="2.55739">
              <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline"></animate>
            </circle>
            <circle transform="rotate(45 16 16)" cx="16" cy="3" r="2.6239">
              <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.125s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline"></animate>
            </circle>
            <circle transform="rotate(90 16 16)" cx="16" cy="3" r="1.55212">
              <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.25s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline"></animate>
            </circle>
            <circle transform="rotate(135 16 16)" cx="16" cy="3" r="0">
              <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.375s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline"></animate>
            </circle>
            <circle transform="rotate(180 16 16)" cx="16" cy="3" r="0">
              <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.5s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline"></animate>
            </circle>
            <circle transform="rotate(225 16 16)" cx="16" cy="3" r="0">
              <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.625s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline"></animate>
            </circle>
            <circle transform="rotate(270 16 16)" cx="16" cy="3" r="0.161172">
              <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.75s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline"></animate>
            </circle>
            <circle transform="rotate(315 16 16)" cx="16" cy="3" r="1.00457">
              <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.875s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline"></animate>
            </circle>
            <circle transform="rotate(180 16 16)" cx="16" cy="3" r="0">
              <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.5s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline"></animate>
            </circle>
          </svg>
        </div>
        <p v-if="text" class="loading-text">{{ text }}</p>
      </div>
    </div>
  </transition>
</template>

<script>
/* no-unused-vars */
export default {
  name: 'loading',
  data () {
    return {
      visible: false,
      background: null,
      fullscreen: true,
      text: 'Loading...',
      customClass: ''
    }
  },
  methods: {
    // handleAfterLeave () {
    //   this.$emit('after-leave')
    // },
    setText (text) {
      this.text = text
    }
  }
}
</script>
<style lang="scss" scoped>
.loading-fade-enter,
.loading-fade-leave-active {
  opacity: 0;
}

.loading-mask {
  position: absolute;
  z-index: 2000;
  background-color: rgba(255, 255, 255, .9);
  margin: 0;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transition: opacity 0.3s;
}

.loading-mask.is-fullscreen {
  position: fixed;
}

.loading-wrapper {
  top: 50%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
}

.loading-svg {
  width: 60px;
  height: 60px;
  fill: #03a9f4;
}

.loading-text {
  font-size: 14px;
  margin: 5px 0;
}
</style>
