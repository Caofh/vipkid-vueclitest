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

        alert(imgData.imgUrl)

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
      this.$nextTick(() => {
        // 百度地图API功能
        var map = new BMap.Map("container");
        var point = new BMap.Point(116.417854,39.921988);
        map.centerAndZoom(point, 11);
        var opts = {
          position : point,    // 指定文本标注所在的地理位置
          offset   : new BMap.Size(30, -30)    //设置文本偏移量
        }
        var label = new BMap.Label("欢迎使用百度地图，这是一个简单的文本标注哦~", opts);  // 创建文本标注对象
        label.setStyle({
          color : "red",
          fontSize : "12px",
          height : "20px",
          lineHeight : "20px",
          fontFamily:"微软雅黑"
        });
        map.addOverlay(label);


        // 将百度水印去掉
        setTimeout(() => {
          $('.BMap_cpyCtrl').css({
            display: 'none',
          })
          $('[title="到百度地图查看此区域"]').css({
            display: 'none'
          })
        }, 300)


      })



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
