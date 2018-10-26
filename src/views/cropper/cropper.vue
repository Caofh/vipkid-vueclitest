<template>
  <div id="app">
      <div>基于vue的图片裁剪插件-"vue-image-crop-upload"调研</div>

      <!--<view class="crop-1">-->
          <!--<a class="btn" @click="toggleShow">set avatar</a>-->
          <!--<my-upload field="img"-->
                     <!--@crop-success="cropSuccess"-->
                     <!--@crop-upload-success="cropUploadSuccess"-->
                     <!--@crop-upload-fail="cropUploadFail"-->
                     <!--v-model="show"-->
                     <!--:width="300"-->
                     <!--:height="300"-->
                     <!--url="/upload"-->
                     <!--:params="params"-->
                     <!--:headers="headers"-->
                     <!--img-format="png"></my-upload>-->
          <!--<img :src="imgDataUrl">-->

      <!--</view>-->

      <div>
          上传图片
          <input ref="imgUpload" type="file" @change="changeFile($event)">
      </div>
      <div @click="cropButton">
          裁剪图片
      </div>

      <img :src="imgAddress">

      <div id="crop2">
          <div class="model" v-show="model" @click="model = false">
              <div class="model-show">
                  <img :src="modelSrc" alt="">
              </div>
          </div>
          <p>例子</p>
          <div class="cut">
              <vue-cropper ref="cropper" :img="option.img" :output-size="option.size" :output-type="option.outputType" :info="true" :full="option.full"
                           :can-move="option.canMove" :can-move-box="option.canMoveBox" :fixed-box="option.fixedBox" :original="option.original"
                           :auto-crop="option.autoCrop" :auto-crop-width="option.autoCropWidth" :auto-crop-height="option.autoCropHeight" :center-box="option.centerBox"
                           @real-time="realTime" :high="option.high" @img-load="imgLoad" ></vue-cropper>
          </div>
          <div class="test-button">
              <button @click="changeImg" class="btn">changeImg</button>
              <label class="btn" for="uploads">upload</label>
              <input type="file" id="uploads" style="position:absolute; clip:rect(0 0 0 0);" accept="image/png, image/jpeg, image/gif, image/jpg"
                     @change="uploadImg($event, 1)">
              <button @click="startCrop" v-if="!crap" class="btn">start</button>
              <button @click="stopCrop" v-else class="btn">stop</button>
              <button @click="clearCrop" class="btn">clear</button>
              <button @click="refreshCrop" class="btn">refresh</button>
              <button @click="changeScale(1)" class="btn">+</button>
              <button @click="changeScale(-1)" class="btn">-</button>
              <button @click="rotateLeft" class="btn">rotateLeft</button>
              <button @click="rotateRight" class="btn">rotateRight</button>
              <button @click="finish('base64')" class="btn">preview(base64)</button>
              <button @click="finish('blob')" class="btn">preview(blob)</button>
              <a @click="down('base64')" class="btn">download(base64)</a>
              <a @click="down('blob')" class="btn">download(blob)</a>
              <div style="display:block; width: 100%;">
                  <label class="c-item">
                      <span>上传图片是否显示原始宽高 (针对大图 可以铺满)</span>
                      <input type="checkbox" v-model="option.original">
                      <span>original: {{ option.original}}</span>
                  </label>
                  <label class="c-item">
                      <span>能否拖动图片</span>
                      <input type="checkbox" v-model="option.canMove">
                  </label>
                  <label class="c-item">
                      <span>能否拖动截图框</span>
                      <input type="checkbox" v-model="option.canMoveBox">
                      <span>canMoveBox: {{ option.canMoveBox}}</span>
                  </label>
                  <label class="c-item">
                      <span>截图框固定大小</span>
                      <input type="checkbox" v-model="option.fixedBox">
                      <span>fixedBox: {{ option.fixedBox}}</span>
                  </label>
                  <label class="c-item">
                      <span>是否输出原图比例的截图</span>
                      <input type="checkbox" v-model="option.full">
                      <span>full: {{ option.full}}</span>
                  </label>
                  <label class="c-item">
                      <span>是否自动生成截图框</span>
                      <input type="checkbox" v-model="option.autoCrop">
                      <span>autoCrop: {{ option.autoCrop}}</span>
                  </label>
                  <label class="c-item">
                      <span>是否根据dpr生成适合屏幕的高清图片</span>
                      <input type="checkbox" v-model="option.high">
                      <span>high: {{ option.high}}</span>
                  </label>
                  <label class="c-item">
                      <span>截图框是否限制在图片里(只有在自动生成截图框时才能生效)</span>
                      <input type="checkbox" v-model="option.centerBox">
                      <span>centerBox: {{ option.centerBox}}</span>
                  </label>
                  <label class="c-item">
                      <p>输出图片格式</p>
                      <label>jpg
                          <input type="radio" name="type" value="jpeg" v-model="option.outputType">
                      </label>
                      <label>png
                          <input type="radio" name="type" value="png" v-model="option.outputType">
                      </label>
                      <label>webp
                          <input type="radio" name="type" value="webp" v-model="option.outputType">
                      </label>
                  </label>
              </div>
          </div>
          <div class="show-preview" :style="{'width': previews.w + 'px', 'height': previews.h + 'px',  'overflow': 'hidden', 'margin': '5px'}">
              <div :style="previews.div">
                  <img :src="previews.url" :style="previews.img">
              </div>
          </div>
      </div>
  </div>
</template>

<script>
  import $ from 'n-zepto'
  import 'babel-polyfill'; // es6 shim
  import myUpload from 'vue-image-crop-upload';
  import { VueCropper }  from 'vue-cropper'

  import { getToken, uploadFile, uploadImg64 } from '@/api/cropper/cropper'
  import crop from './computed/crop'

  export default {
    name: 'App',
    data () {
      return {
        imgAddress: '', // test图片链接


//        show: true,
//        params: {
//          token: '123456798',
//          name: 'avatar'
//        },
//        headers: {
//          smail: '*_~'
//        },
//        imgDataUrl: '', // the datebase64 url of created image


        // crop2例子
        model: false,
        modelSrc: '',
        crap: false,
        previews: {},
        lists: [
//          {
//            img: 'https://qn-qn-kibey-static-cdn.app-echo.com/goodboy-weixin.PNG'
//          },
//          {
//            img: 'https://avatars2.githubusercontent.com/u/15681693?s=460&v=4'
//          },
          {
            img: 'https://tpdoc.cn/uploads/dream/jianzhu.png'
          }
        ],
        option: {
//          img: 'https://qn-qn-kibey-static-cdn.app-echo.com/goodboy-weixin.PNG',
          img: '',
          size: 1,
          full: false,
          outputType: 'png',
          canMove: true,
          fixedBox: false,
          original: false,
          canMoveBox: true,
          autoCrop: true,
          // 只有自动截图开启 宽度高度才生效
          autoCropWidth: 200,
          autoCropHeight: 150,
          centerBox: false,
          high: true
        },
        show: true
      }
    },
    components: {
      'my-upload': myUpload,
      VueCropper,
    },
    created () {},
    async mounted () {
      console.log(window['vue-cropper'])









    },
    methods: {
      cropButton () {
        this.getCropBase64().then((data) => {

          console.log(data)
          this.uploadQiNiu(data)



        })


      },
      // 获取裁剪之后的base64数据
      getCropBase64 () {
        const p = new Promise((resolve, reject) => {
          // 获取裁剪之后的base64资源
          this.$refs.cropper.getCropData((data) => {
            resolve(data)

          })
        })

        return p
      },
      // 上传裁剪后的图片到七牛云.
      async uploadQiNiu (data = '') {
        const timestamp = new Date().getTime() // 时间戳
        const uploadAddress = `teacher_abc_text/image/183455/detail/183455_detail_${timestamp}` // 定义上传路径

        // 现获取token(走咱们自己的后端)
        const dataList = await getToken(uploadAddress)
        const token = dataList.token // 获取到token

        // axios调研成功.
        // 编码上传路径
        const path = window.btoa(uploadAddress.split('.').pop())
        const dataURL = data.replace(/^data[\S]+;base64,/, '');
        const json = {
          path: path,
          dataURL: dataURL,
          contentType: 'application/octet-stream',
          authorization: 'UpToken ' + token
        }
        const uploadList = await uploadImg64(json)

        const key = uploadList.key || '' // 七牛返回的图片半路径
        const imgUrl = this.getCloudUrl(key) // 获取七牛图片全路径

        console.log(uploadList)

      },
      // 获取七牛云的图片路径
      getCloudUrl (url = '') {
        return 'http://file.sayabc.com/' + url
      },
      // 上传文件，初始化裁剪插件，初始化img原始图片.
      changeFile ($event) {
        const file = $event.target.files[0]

        // 图片文件 => base64 方法
        crop.imgToBase64(file).then((e) => {
//          console.log(e.target.result)

          const base64 = e.target.result
          this.option.img = base64 // 为裁剪原图片赋值.

          // 清空type="file"的值，避免下次上传同名文件不触发change事件
          this.$refs['imgUpload'].value =''

        })

//        var reader=new FileReader();
//        reader.readAsDataURL(fileName);
//        reader.onload=function (e) {//上传成功，执行上传成功之后的事件
//          var str = e.target.result;
//
//          //将上传成功后的图片显示在特定位置
//          console.log(str)
//          that.imgAddress = str
//
//
//        }


//        const timestamp = new Date().getTime() // 时间戳
//        const uploadAddress = `teacher_abc_text/image/183455/detail/${fileName}_${timestamp}` // 七牛地址
//        const dataList = await getToken(uploadAddress)
//
//        console.log(dataList)
//
//        const token = dataList.token
//        const uploadRes = await uploadFile({userid: 183455, token: token, key: uploadAddress, 'file': $event.target.files[0]})
//
//        console.log(uploadRes)

      },




// 直传七牛不裁剪方法.
//        const timestamp = new Date().getTime() // 时间戳
//        const uploadAddress = `teacher_abc_text/image/183455/detail/${fileName}_${timestamp}` // 七牛地址
//        const dataList = await getToken(uploadAddress)
//
//        console.log(dataList)
//
//        const token = dataList.token
//        const uploadRes = await uploadFile({userid: 183455, token: token, key: uploadAddress, 'file': $event.target.files[0]})
//
//        console.log(uploadRes)






        // crop1例子
//      toggleShow() {
//        this.show = !this.show;
//      },
//      /**
//       * crop success
//       *
//       * [param] imgDataUrl
//       * [param] field
//       */
//      cropSuccess(imgDataUrl, field){
//        console.log('-------- crop success --------');
//        this.imgDataUrl = imgDataUrl;
//      },
//      /**
//       * upload success
//       *
//       * [param] jsonData  server api return data, already json encode
//       * [param] field
//       */
//      cropUploadSuccess(jsonData, field){
//        console.log('-------- upload success --------');
//        console.log(jsonData);
//        console.log('field: ' + field);
//      },
//      /**
//       * upload fail
//       *
//       * [param] status    server api return error status, like 500
//       * [param] field
//       */
//      cropUploadFail(status, field){
//        console.log('-------- upload fail --------');
//        console.log(status);
//        console.log('field: ' + field);
//      }


      // crop2例子
      changeImg() {
        this.option.img = this.lists[~~(Math.random() * this.lists.length)].img
      },
      startCrop() {
        // start
        this.crap = true
        this.$refs.cropper.startCrop()
      },
      stopCrop() {
        //  stop
        this.crap = false
        this.$refs.cropper.stopCrop()
      },
      clearCrop() {
        // clear
        this.$refs.cropper.clearCrop()
      },
      refreshCrop() {
        // clear
        this.$refs.cropper.refresh()
      },
      changeScale(num) {
        num = num || 1
        this.$refs.cropper.changeScale(num)
      },
      rotateLeft() {
        this.$refs.cropper.rotateLeft()
      },
      rotateRight() {
        this.$refs.cropper.rotateRight()
      },
      finish(type) {
        // 输出
        // var test = window.open('about:blank')
        // test.document.body.innerHTML = '图片生成中..'
        if (type === 'blob') {
          this.$refs.cropper.getCropBlob((data) => {
            var img = window.URL.createObjectURL(data)
            this.model = true
            this.modelSrc = img
          })
        } else {
          this.$refs.cropper.getCropData((data) => {
            this.model = true
            this.modelSrc = data
          })
        }
      },
      // 实时预览函数
      realTime(data) {
        this.previews = data
        console.log(data)
      },

      finish2(type) {
        this.$refs.cropper2.getCropData((data) => {
          this.model = true
          this.modelSrc = data
        })
      },
      finish3(type) {
        this.$refs.cropper3.getCropData((data) => {
          this.model = true
          this.modelSrc = data
        })
      },
      down(type) {
        // event.preventDefault()
        var aLink = document.createElement('a')
        aLink.download = 'demo'
        // 输出
        if (type === 'blob') {
          this.$refs.cropper.getCropBlob(async (data) => {

            // 二进制图片资源
            this.downImg = window.URL.createObjectURL(data)
//            console.log(this.downImg)

            aLink.href = window.URL.createObjectURL(data)
            aLink.click()
          })
        } else {
          this.$refs.cropper.getCropData(async (data) => {

            // base64图片资源
            this.downImg = data
//            this.imgAddress = data
//            return false

            const timestamp = new Date().getTime() // 时间戳
            const uploadAddress = `teacher_abc_text/image/183455/detail/base64test_${timestamp}` // 七牛地址
            const dataList = await getToken(uploadAddress)
            console.log(dataList)

            const token = dataList.token

            // axios调研成功.
            var dataURL = this.downImg.replace(/^data[\S]+;base64,/, '');
//            var path = window.btoa('***' + '.' + uploadAddress.split('.').pop())
            var path = window.btoa(uploadAddress.split('.').pop())
            const json = {
              path: path,
              dataURL: dataURL,
              contentType: 'application/octet-stream',
              authorization: 'UpToken ' + token
            }
            const uploadList = await uploadImg64(json)

            console.log(uploadList)





            // 完整的ok的方法
//            var dataURL = this.downImg.replace(/^data[\S]+;base64,/, '');
//            var path = window.btoa('***' + '.' + uploadAddress.split('.').pop())
//
//            $.ajax({
//              url: 'http://upload.qiniu.com/putb64/-1/key/' + path,
//              type: 'POST',
//              beforeSend (request) {
//                request.setRequestHeader('Content-Type', 'application/octet-stream')
//                request.setRequestHeader('Authorization', 'UpToken ' + token) // token服务端请求
//              },
//              data: dataURL,
//              timeout: 1000,
//              success: function (data) {
//                console.log(data)
//
//                // 最终将data中的key，前面加上七牛域名http://file.sayabc.com/ 就是最终图片路径，
//                // http://file.sayabc.com/***.teacher_abc_text/image/183455/detail/base64test_1539776907948 . 最终路径
//              }
//            })




//            aLink.href = data
//            aLink.click()
          })
        }
      },

      uploadImg(e, num) {
        //上传图片
        // this.option.img
        var file = e.target.files[0]
        if (!/\.(gif|jpg|jpeg|png|bmp|GIF|JPG|PNG)$/.test(e.target.value)) {
          alert('图片类型必须是.gif,jpeg,jpg,png,bmp中的一种')
          return false
        }
        var reader = new FileReader()
        reader.onload = (e) => {
          let data
          if (typeof e.target.result === 'object') {
            // 把Array Buffer转化为blob 如果是base64不需要
            data = window.URL.createObjectURL(new Blob([e.target.result]))
          } else {
            data = e.target.result
          }
          if (num === 1) {
            this.option.img = data
          } else if (num === 2) {
            this.example2.img = data
          }
        }
        // 转化为base64
        // reader.readAsDataURL(file)
        // 转化为blob
        reader.readAsArrayBuffer(file)
      },
      imgLoad(msg) {
        console.log(msg)
      }
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



/*crop2的css样式*/
  * {
      margin: 0;
      padding: 0;
  }

  .cut {
      width: 500px;
      height: 500px;
      margin: 30px auto;
  }

  .c-item {
      max-width: 800px;
      margin: 10px auto;
      margin-top: 20px;
  }

  .content {
      margin: auto;
      max-width: 1200px;
      margin-bottom: 100px;
  }

  .test-button {
      display: flex;
      flex-wrap: wrap;
      align-content: center;
      justify-content: center;
  }

  .btn {
      display: inline-block;
      line-height: 1;
      white-space: nowrap;
      cursor: pointer;
      background: #fff;
      border: 1px solid #c0ccda;
      color: #1f2d3d;
      text-align: center;
      box-sizing: border-box;
      outline: none;
      margin:20px 10px 0px 0px;
      padding: 9px 15px;
      font-size: 14px;
      border-radius: 4px;
      color: #fff;
      background-color: #50bfff;
      border-color: #50bfff;
      transition: all .2s ease;
      text-decoration: none;
      user-select: none;
  }

  .des {
      line-height: 30px;
  }

  code.language-html {
      padding: 10px 20px;
      margin: 10px 0px;
      display: block;
      background-color: #333;
      color: #fff;
      overflow-x: auto;
      font-family: Consolas, Monaco, Droid, Sans, Mono, Source, Code, Pro, Menlo, Lucida, Sans, Type, Writer, Ubuntu, Mono;
      border-radius: 5px;
      white-space: pre;
  }

  .show-info {
      margin-bottom: 50px;
  }

  .show-info h2 {
      line-height: 50px;
  }

  /*.title, .title:hover, .title-focus, .title:visited {
    color: black;
  }*/

  .title {
      display: block;
      text-decoration: none;
      text-align: center;
      line-height: 1.5;
      margin: 20px 0px;
      background-image: -webkit-linear-gradient(left,#3498db,#f47920 10%,#d71345 20%,#f7acbc 30%,#ffd400 40%,#3498db 50%,#f47920 60%,#d71345 70%,#f7acbc 80%,#ffd400 90%,#3498db);
      color: transparent;
      -webkit-background-clip: text;
      background-size: 200% 100%;
      animation: slide 5s infinite linear;
      font-size: 40px;
  }

  .test {
      height: 500px;
  }

  .model {
      position: fixed;
      z-index: 10;
      width: 100vw;
      height: 100vh;
      overflow: auto;
      top: 0;
      left: 0;
      background: rgba(0, 0, 0, 0.8);
  }

  .model-show {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100vw;
      height: 100vh;
  }

  .model img {
      display: block;
      margin: auto;
      max-width: 80%;
      user-select: none;
      background-position: 0px 0px, 10px 10px;
      background-size: 20px 20px;
      background-image: linear-gradient(45deg, #eee 25%, transparent 25%, transparent 75%, #eee 75%, #eee 100%),linear-gradient(45deg, #eee 25%, white 25%, white 75%, #eee 75%, #eee 100%);
  }

  .c-item {
      display: block;
      user-select: none;
  }

  @keyframes slide {
      0%  {
          background-position: 0 0;
      }
      100% {
          background-position: -100% 0;
      }
  }

</style>
