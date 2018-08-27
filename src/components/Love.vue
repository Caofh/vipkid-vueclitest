<template>
  <div class="love">
    <div class="text">
      哈哈哈哈哈，打不过我吧-----没有办法，我就是这么强大！
    </div>



  </div>
</template>

<script>
import '../assets/js/m.js'
//import $ from 'n-zepto'

export default {
  name: 'Love',
  data () {
    return {
      type: 0,
      contentArr: [
        '房证写你名😁', '保大😁', '我妈会游泳😁', '工资全给你😁', '天天给按摩😁', '吵架先道歉😁', '经常送礼物😁', '天天情人节😁',
        '让你欺负一辈子😁', '天天逗你开心😁'
      ]
    }
  },
  created () {
    this.$messagebox.confirm('', {
      title: '做我女朋友',
      message: '好吗？好吗？好吗？',
      showConfirmButton: true,
      confirmButtonText: '好',
      showCancelButton: true,
      cancelButtonText: '不要'
    }).then(action => {
      if (action == 'confirm') {     //确认的回调
        this.success()

      }

    }).catch(err => {
      if (err == 'cancel') {     //取消的回调
        this.callback()

      }
    })


  },
  mounted () {
    console.log(wx)
    wx.config({
      debug: false,
      appId: 'wx78db3ae4f16b702c', // 必填，公众号的唯一标识
      timestamp: 1535369454311, // 必填，生成签名的时间戳
      nonceStr: 'abc', // 必填，生成签名的随机串
      signature:'abc',// 必填，签名，见附录1
      jsApiList: ['onMenuShareTimeline','onMenuShareAppMessage','error'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
    });
    wx.ready(function () {
      //获取“分享到朋友圈”按钮点击状态及自定义分享内容接口
      wx.onMenuShareTimeline({
        title: '', // 分享标题
        link: '', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        imgUrl: '', // 分享图标
        success: function () {
          alert('确认分享')
          // 用户确认分享后执行的回调函数
        },
        cancel: function () {
          // 用户取消分享后执行的回调函数
        }
      });
      //获取“分享给朋友”按钮点击状态及自定义分享内容接口
      wx.onMenuShareAppMessage({
        title: '', // 分享标题
        desc: '', // 分享描述
        link: '', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        imgUrl: '', // 分享图标
        type: '', // 分享类型,music、video或link，不填默认为link
        dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
        success: function () {
          // 用户确认分享后执行的回调函数
        },
        cancel: function () {
          // 用户取消分享后执行的回调函数
        }
      });
    })


  },
  methods: {
    callback () {
      if (this.type >= this.contentArr.length) {
        this.type = 0
      }

      const content = this.contentArr[this.type]
      this.type++

      this.dialog(null, content, this.success, this.callback)
    },
    success () {
      this.$messagebox.alert('从今天起你不是动物了', '你太有眼光了！')

    },

    dialog (title = '', content = '', success, fail) {
      this.$messagebox.confirm('', {
        title: title,
        message: content,
        showConfirmButton: true,
        confirmButtonText: '好',
        showCancelButton: true,
        cancelButtonText: '不要'
      }).then(action => {
        if (action == 'confirm') {     //确认的回调
          success && success()
        }

      }).catch(err => {
        if (err == 'cancel') {     //取消的回调
          fail && fail()
        }
      })

    }

  }

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import '../assets/css/pr2rem';

  .text {
    width: pr(600);
    height: pr(200);
    font-size: pr(30);
    position: fixed;
    top: 50%;
    left: 50%;
    margin-top: pr(-100);
    margin-left: pr(-300);
  }

</style>
