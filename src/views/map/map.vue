<template>
  <div id="app">
    <div id="container">

    </div>



      <crop :beforeCrop="beforeCrop" :uploadSuccess="uploadSuccess" :cropClick="cropClick"
            :boxMoveSuccess="boxMoveSuccess" :option="option"></crop>
  </div>
</template>

<script>
  import $ from 'n-zepto'
  import crop from '../cropper2/cropper2.vue'

  export default {
    name: 'App',
    data () {
      return {
        option: {
//          img: 'https://qn-qn-kibey-static-cdn.app-echo.com/goodboy-weixin.PNG',
          img: '',
          size: 1,
          full: false,
          outputType: 'png',
          canMove: true,
          fixed: true, // 固定截图框比例
          fixedBox: false,
          original: true, // 裁剪图片是否撑满裁剪背景
          canMoveBox: true,
          autoCrop: true,
          // 只有自动截图开启 宽度高度才生效
          autoCropWidth: 200,
          autoCropHeight: 200,
          centerBox: false,
          high: true
        },
      }
    },
    created () {

    },
    components: { // crop_plugin
      crop
    },
    methods: {
      // 校验文件规则
      beforeCrop (fileData) {
        console.log(fileData)

        return true

      },
      // 上传七牛成功后回调(存在即上传七牛，不存在则不上传七牛；返回：七牛的图片url、图片裁剪的宽高)
      uploadSuccess (imgData) {
        console.log(imgData)

      },

      // 裁剪按钮的回调(返回：base64数据流，图片裁剪的宽高)
      cropClick (data) {
        console.log(data)


      },
      // 裁剪框移动时的相关位置信息
      boxMoveSuccess (data) {
        console.log(data)
      }

    },
    mounted () {
      var map = new BMap.Map("container")
      var point = new BMap.Point(116.404, 39.915)

      map.centerAndZoom(point, 15) // 15为默认缩放级别

      map.enableScrollWheelZoom(true) // 开启鼠标滚轮缩放


      var marker = new BMap.Marker(point);        // 创建标注
      map.addOverlay(marker);

      var traffic = new BMap.TrafficLayer();        // 创建交通流量图层实例
      map.addTileLayer(traffic);






      window.setTimeout(function(){
        map.panTo(new BMap.Point(116.409, 39.918))
      }, 2000)



      // 将百度水印去掉
      setTimeout(() => {
        $('.BMap_cpyCtrl').css({
          display: 'none',
        })
        $('[title="到百度地图查看此区域"]').css({
          display: 'none'
        })
      }, 300)

    }
  }

</script>

<style scoped lang="scss">
  body {
    margin: 0;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    /*margin-top: 60px;*/

    #container {
      width: 800px;
      height: 500px;
    }
  }
</style>
