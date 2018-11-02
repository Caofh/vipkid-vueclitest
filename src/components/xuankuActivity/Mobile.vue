<template>
  <div class="activity-mobile">

    <div id="crop">
      <div class="logo abc-img"><img src="../../assets/img/xuanku/logo.png"></div>
      <div class="cut">
        <vue-cropper ref="cropper" :img="option.img" :fixed="option.fixed" :output-size="option.size" :output-type="option.outputType" :info="true" :full="option.full"
                     :can-move="option.canMove" :can-move-box="option.canMoveBox" :fixed-box="option.fixedBox" :original="option.original"
                     :auto-crop="option.autoCrop" :auto-crop-width="option.autoCropWidth" :auto-crop-height="option.autoCropHeight" :center-box="option.centerBox"
                     :high="option.high" @cropMoving="boxMove"></vue-cropper>
      </div>
    </div>

    <br />
    <br />
    <br />

    <div>
      上传图片
      <input ref="imgUpload" type="file" @change="changeFile($event)">
    </div>
    <div @click="cropButton">
      裁剪图片
    </div>




  </div>
</template>

<script>
  import '@/assets/js/m'
  import { VueCropper }  from 'vue-cropper'

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
  mounted () {

  },
  components: {
    VueCropper
  },
  methods: {
    // 截图框移动回调函数
    boxMove (e) {
      console.log(e)

    },
// 裁剪按钮点击事件
    cropButton () {
      this.getCropBase64().then((data) => {
         console.log(data)


      })

    },

  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import '../../assets/css/pr2rem.scss';

  .activity-mobile {
    font-size: pr(14);
    margin: 0 auto;

    #crop {
      .logo {
        margin: 0 auto;
        width: pr(80);
        height: pr(80);
      }

      .cut {
        width: pr(600);
        height: pr(600);
        margin: 0 auto;
      }



    }




  }


</style>
