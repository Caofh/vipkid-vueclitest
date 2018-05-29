<template>
  <div class="viewport2">
    <div class="title">
      我是<span class="red">带有</span>meta标签的页面<br/>

      能展示多少就展示多少

    </div>
  </div>
</template>

<script>
//import '../assets/js/m.js'
import $ from 'n-zepto'

export default {
  name: 'Viewport2',
  data () {
    return {
      radio: window.devicePixelRatio,
      widthReal: window.innerWidth,
      fontSize: $('html').css('font-size'),
      msg: 'I am home page !'
    }
  },
  created () {
    document.write('<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">')
  },
  mounted () {
      console.log(this.fontSize)

  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  /*@import '../assets/css/pr2rem';*/

  .viewport2 {
    width:1000px;
    .title {
      width:800px;
      height:500px;
      line-height: 500px;
      background: #f71;
      .red {
        color: red;
      }
    }
  }
</style>
