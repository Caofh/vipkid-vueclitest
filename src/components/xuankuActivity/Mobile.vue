<template>
  <div class="activity-mobile">

    <div id="crop">
      <div class="crop-title">
        <div class="logo abc-img"><img src="../../assets/img/xuanku/logo.png"></div>

        <div class="crop-title-text">-雪拼大挑战-</div>
      </div>

      <div class="cut">

        <div class="cut-son" v-loading="loadingMark">

          <div v-if="!cropMark && imgOriginMark" class="abc-img">
            <img :src="imgOriginUrl">
          </div>
          <div class="upload-icon" v-else-if="!cropMark">
            <input ref="imgUpload" type="file" @change="changeFile($event)">
          </div>

          <vue-cropper v-if="cropMark" ref="cropper" :img="option.img" :fixed="option.fixed" :output-size="option.size" :output-type="option.outputType" :info="true" :full="option.full"
                       :can-move="option.canMove" :can-move-box="option.canMoveBox" :fixed-box="option.fixedBox" :original="option.original"
                       :auto-crop="option.autoCrop" :auto-crop-width="option.autoCropWidth" :auto-crop-height="option.autoCropHeight" :center-box="option.centerBox"
                       :high="option.high" @cropMoving="boxMove"></vue-cropper>

        </div>

      </div>
    </div>

    <br />
    <br />
    <br />

    <div class="btn-group abc-flex-x-center">
      <div class="up-img">
        上传图片
        <input ref="imgUpload" type="file" accept="image/*" @change="changeFile($event)">
      </div>

      <div v-if="cropMark" v-loading="confirmLoading" class="confirm" @click="cropButton">
        确定
      </div>
    </div>


    <!--弹窗-->
    <div v-if="dialogMark" class="dialog">
      <div class="base-body abc-flex-y-center">
        <div><input v-model="name" type="text" placeholder="姓名"></div>
        <div><input v-model="phone" type="text" placeholder="电话号码"></div>
        <div class="tip">***电话与最终奖品发放有关<br/>请填写真实号码</div>
        <div @click="dialogConfirm" class="abc-btn">确定</div>
      </div>
    </div>

  </div>
</template>

<script>
  import '@/assets/js/m'
  import { VueCropper }  from 'vue-cropper'
  import { uploadBase64Img, updateUser, getChallengeList, addUser } from '@/api/xuanku/index'

  export default {
    name: 'App',
    data () {
      return {
        loadingMark: true,
        confirmLoading: false, // 确认的loading
        dialogMark: false, // 弹窗显示标识

        name: '', // 姓名.
        phone: '', // 当前用户localStorage中的电话.
        imgUrl: '', // 当前用户的图片url.

        imgOriginMark: false, // 当前裁剪框展示标识
        imgOriginUrl: '', // 当前图片url

        cropMark: false,

        option: {
          img: '',
          size: 1,
          full: false,
          outputType: 'png',
          canMove: true,
          fixed: true, // 固定截图框比例
          fixedBox: false,
          original: false, // 裁剪图片是否撑满裁剪背景
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
    async mounted () {

      const phone = localStorage.getItem("xuanku_challenge_phone")
      if (phone) {
        this.phone = phone

        try {
          const dataList = await getChallengeList('phone='+phone+'')

          this.imgOriginMark = true
          this.imgOriginUrl = dataList.data[0].img_url || ''

          this.lazyImgLoading(this.imgOriginUrl, () => {
            this.loadingMark = false
          })

        } catch (error) {
          alert(error.message || '网络错误，请刷新页面')
        }

      } else {
        this.$nextTick(() => {
          this.loadingMark = false
        })

      }




    },
    components: {
      VueCropper
    },
    methods: {
      // 头像的交互效果（图片懒加载）
      lazyImgLoading (data, callback) {
        let img = new Image()
        img.src = data
        img.onload = function () {
          callback && callback()
        }
      },
      async dialogConfirm () {
        const data = {
          name: this.name || '',
          phone: this.phone || '',
          imgUrl: this.imgUrl || '',
        }

        try {
          const dataList = await addUser(data)
//        console.log(dataList)

          // 隐藏裁剪框
          this.loadingMark = true
          this.cropMark = false
          this.imgOriginMark = true
          this.imgOriginUrl =  this.imgUrl

          this.lazyImgLoading(this.imgUrl, () => {
            this.loadingMark = false
          })

          this.dialogMark = false
          localStorage.setItem('xuanku_challenge_phone', this.phone)

        } catch (error) {
          alert(error.message)

        }

      },

      // 截图框移动回调函数
      boxMove (e) {
        console.log(e)

      },
      // 裁剪按钮点击事件
      cropButton () {
        this.getCropBase64().then((base64) => {
//          console.log(base64)
          this.confirmLoading = true

          // 组织传参，将图片base64数据流上传
          let data = {
            image: base64,
            path: 'xuanku/challenge' // 服务器上存储图片的路径
          }

//          console.log(data)
          uploadBase64Img(data).then((data) => {
//            console.log(data)

            this.imgUrl = data.target_path || ''

            // 判断是否是注册用户
            if (this.phone) {
              this.submitUserInfo()
            } else {
              this.dialogMark = true
            }

            this.confirmLoading = false

          }).catch ((error) => {
            alert(error.message)

            this.confirmLoading = false

          })



        })

      },
      submitUserInfo () {
        const json = {
          phone: this.phone,
          imgUrl: this.imgUrl || ''
        }
//        console.log(json)
        updateUser(json).then((data) => {
//          console.log(data)

          // 隐藏裁剪框
          this.loadingMark = true
          this.cropMark = false
          this.imgOriginMark = true
          this.imgOriginUrl =  this.imgUrl

          this.lazyImgLoading(this.imgUrl, () => {
            this.loadingMark = false
          })

        }).catch ((error) => {
          alert(error.message)

        })
      },

      // 上传文件，初始化裁剪插件，初始化img原始图片.
      changeFile ($event) {
        const file = $event.target.files[0]

        // 图片文件 => base64 方法
        this.imgToBase64(file).then((e) => {
//          console.log(e.target.result)

          const base64 = e.target.result // 获取base64数据流
          this.option.img = base64 // 为裁剪原图片赋值.

          // 显示裁剪框
          this.cropMark = true

          // 清空type="file"的值，避免下次上传同名文件不触发change事件
          this.$refs['imgUpload'].value =''

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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import '../../assets/css/pr2rem.scss';

  .activity-mobile {
    font-size: pr(14);
    margin: 0 auto;

    #crop {
      padding: pr(50) 0;
      .crop-title {
        width: 100%;

        .logo {
          margin: 0 auto;
          width: pr(80);
          height: pr(80);
          margin-bottom: pr(20);
        }

        .crop-title-text {
          font-size: pr(40);
          text-align: center;
          margin-bottom: pr(20);
        }

      }


      .cut {
        position: relative;
        width: pr(600);
        height: pr(600);
        margin: 0 auto;

        .cut-son {
          width: 100%;
          height: 100%;

          .upload-icon {
            position: relative;
            width: 100%;
            height: 100%;
            background: url("../../assets/img/xuanku/upload.png") no-repeat center / pr(128) pr(128);

            input {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              opacity: 0;
            }
          }

          .abc-img {
            width: 100%;
            height: 100%;
          }

        }

      }

    }

    .btn-group {
      .up-img {
        position: relative;
        width: pr(150);
        height: pr(80);
        text-align: center;
        line-height: pr(80);
        background: #f71;
        color: #fff;
        font-size: pr(30);
        border-radius: pr(15);

        input {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
        }
      }

      .confirm {
        position: relative;
        margin-left: pr(150);
        width: pr(150);
        height: pr(80);
        text-align: center;
        line-height: pr(80);
        background: #f71;
        color: #fff;
        font-size: pr(30);
        border-radius: pr(15);
      }

    }

    .dialog {
      position: fixed;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      background: rgba(0, 0, 0, 0.5);

      .base-body {
        position: absolute;
        width: pr(500);
        height: pr(500);
        left: 50%;
        top: 50%;
        margin-top: pr(-200);
        margin-left: pr(-250);
        background: #fff;

        & > div {
          margin-bottom: pr(30);

          input {
            width: pr(300);
            height: pr(80);
            font-size: pr(30);
            line-height: pr(30);
            border: none;
            border-bottom: 1px solid #999;
          }

        }
        & > .tip {
          color: #ff0000;
          font-size: pr(30);
        }
        & > .abc-btn {
          border-radius: 0;
          background: #f71;
          border-color: #f71;
        }

      }

    }

  }


</style>
