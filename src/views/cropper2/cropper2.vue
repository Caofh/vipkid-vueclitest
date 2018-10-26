<template>
  <div id="app">
      <div>基于vue的图片裁剪插件-"vue-image-crop-upload"调研</div>

      <br />
      <br />
      <br />

      <div id="crop2">
          <p>例子</p>
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
  import axios from 'axios'
  import { VueCropper }  from 'vue-cropper'
  import { getToken } from '../../api/cropper/cropper'

  // 上传七牛base64图片接口
  function uploadImg64 (data) {
    const url = `http://upload.qiniu.com/putb64/-1/key/${data.path}`

    let obj = {}
    obj = axios.create({
      // baseURL: url,
      timeout: 10000,
      headers: {
        'Content-Type': data.contentType,
        'Authorization': data.authorization,
      }
    })

    obj.interceptors.request.use(config => {
      return config
    }, err => {
      return Promise.reject(err)
    })

    obj.interceptors.response.use(res => {
      return res.data
    }, err => {

      const error = err
      return Promise.reject(error)

    })

    return obj.post( url,  data.dataURL)

  }

  export default {
    name: 'App',
    props: ['beforeCrop', 'uploadSuccess', 'cropClick', 'boxMoveSuccess', 'option'], // 外部回调
    data () {
      return {
        imgAddress: '', // test图片链接
      }
    },
    components: {
      VueCropper,
    },
    created () {},
    mounted () {
      console.log(window['vue-cropper'])

    },
    methods: {
      // 上传文件，初始化裁剪插件，初始化img原始图片.
      changeFile ($event) {
        const file = $event.target.files[0]

        // 外部控制校验文件规则
        if (String(this.beforeCrop(file)) == 'false') return

        // 图片文件 => base64 方法
        this.imgToBase64(file).then((e) => {
          // console.log(e.target.result)
          const base64 = e.target.result // 获取base64数据流
          this.option.img = base64 // 为裁剪原图片赋值.

          // 清空type="file"的值，避免下次上传同名文件不触发change事件
          this.$refs['imgUpload'].value =''

        })

      },
      // 裁剪按钮点击事件
      cropButton () {
        this.getCropBase64().then((data) => {
          // console.log(data)

          // 组织导出数据
          const outData = {
            imgUrl: data,
            imgWidth: this.$refs.cropper.cropW,
            imgHeight: this.$refs.cropper.cropH,
          }
          this.cropClick && this.cropClick(outData)


          // 如果不传uploadSuccess属性，则不上传至七牛云.
          if (this.uploadSuccess) {
            this.uploadQiNiu(data)
          }

        })

      },
      // 上传裁剪后的图片到七牛云.
      async uploadQiNiu (data = '') {
        const timestamp = new Date().getTime() // 时间戳
        const uploadAddress = `teacher_abc_text/image/183455/detail/183455_detail_${timestamp}` // 定义上传路径

        try {
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

          try {
            const uploadList = await uploadImg64(json)

            const key = uploadList.key || '' // 七牛返回的图片半路径
            const imgUrl = this.getCloudUrl(key) // 获取七牛图片全路径

            // 组织导出数据
            const outData = {
              imgUrl: imgUrl,
              imgWidth: this.$refs.cropper.cropW,
              imgHeight: this.$refs.cropper.cropH,
            }
            this.uploadSuccess && this.uploadSuccess(outData)

          } catch (error) {
            console.log(error)
          }


        } catch (error) {
          console.log(error)
        }


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
      // 获取七牛云的图片路径
      getCloudUrl (url = '') {
        return 'http://file.sayabc.com/' + url
      },

      // 截图框移动回调函数
      boxMove (e) {
        const outData = {
          e: e,
          boxWidth: this.$refs.cropper.cropW,
          boxHeight: this.$refs.cropper.cropH,
        }
        this.boxMoveSuccess && this.boxMoveSuccess(outData)
      },



      // 图片文件 => base64 方法(封装成一个promise对象)
      imgToBase64 (file) {
        const toBase64 = new Promise(function(resolve, reject){
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = function (e) {//上传成功，执行上传成功之后的事件
            resolve(e)
          }

        });

        return toBase64;
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
      width: 300px;
      height: 300px;
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
