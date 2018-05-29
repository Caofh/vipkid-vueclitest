<template>
  <div class="viewport1">
    <div class="title">
      我是<span class="red">不带有</span>meta标签的页面<br/>

      将网站内容全部展示。

    </div>
  </div>
</template>

<script>
//import '../assets/js/m.js'
import $ from 'n-zepto'

export default {
  name: 'Viewport1',
  data () {
    return {
      radio: window.devicePixelRatio,
      widthReal: window.innerWidth,
      fontSize: $('html').css('font-size'),
      msg: 'I am home page !'
    }
  },
  created () {
//    document.write('<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">')
  },
  mounted () {
      console.log(this.fontSize)

  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  /*@import '../assets/css/pr2rem';*/

  .viewport1 {
    width:1000px;
    font-size:18px;
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
