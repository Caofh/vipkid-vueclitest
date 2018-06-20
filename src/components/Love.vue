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
      title: '哈哈哈',
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
