<template>
  <div class="love-ying">



    <div class="swiper-container4" :style="[{'height': windowHeight + 'px'}]">
      <div class="swiper-wrapper">
        <div class="swiper-slide">

          <div class="swiper-container">
            <div class="swiper-wrapper">
            <div class="swiper-slide"></div>
            <div class="swiper-slide"></div>
            <div class="swiper-slide"></div>
            <div class="swiper-slide"></div>
            </div>
            <!-- Add Pagination -->
            <!--<div class="swiper-pagination"></div>-->
          </div>

          <div class="container-content">
            坐标：河内<br/>
            读万卷书，行万里路。走的路越多，人就会越美。看，这个小美女是谁？
          </div>
          <div class="container-content">看，我可以托起一座山！</div>
          <div class="container-content">越南的建筑风格原来是这样的！</div>
          <div class="container-content">我是颖宝，我斜着拍也好看！</div>

        </div>
        <div class="swiper-slide">

          <div class="swiper-container1">
            <div class="swiper-wrapper">
            <div class="swiper-slide"></div>
            <div class="swiper-slide"></div>
            <div class="swiper-slide"></div>
            <div class="swiper-slide"></div>
            <div class="swiper-slide"></div>
            <div class="swiper-slide"></div>
            <div class="swiper-slide"></div>
            <div class="swiper-slide"></div>
            <div class="swiper-slide"></div>
            </div>
            <!-- Add Pagination -->
            <!--<div class="swiper-pagination"></div>-->
          </div>

          <div class="container-content-1">
            <span>今天是颖宝的生日</span>
            <span>，很幸运能够遇见颖宝</span>
            <span>，虽然认识的时间不长（快一年了好吗）</span>
            <span>，但是从心底里觉得颖宝是一个</span>
            <span>可爱，幽默，贤惠的姑娘</span>
            <span>，那么今天是颖宝的生日，祝愿颖宝每天都快乐！</span>
            <span>可以预见自己的白马王子</span>
            <span>！被宠成小公主！</span>
            <span>有可能幸福就在身边哦😄！</span>
          </div>

        </div>
        <div class="swiper-slide">

          <div class="swiper-container3">
            <div class="swiper-wrapper">
              <div class="swiper-slide"></div>
              <div class="swiper-slide"></div>
              <div class="swiper-slide"></div>
              <div class="swiper-slide"></div>
              <div class="swiper-slide"></div>
              <div class="swiper-slide"></div>
            </div>

            <!-- Add Pagination -->
            <!--<div class="swiper-pagination"></div>-->

            <!-- Add Arrows -->
            <!--<div class="swiper-button-prev"></div>-->
            <!--<div class="swiper-button-next"></div>-->
          </div>

          <div class="container-content-3">
            颖宝，无需证明给所有人看，只得到了一个明白的人就够了。做自己喜欢做的事，喜欢喜欢的人，你就是人生的主角。
            在你人生这部剧里，相信是有主角光环的，如此秀美、俏丽非凡的小主必将成为颜高腿长有内涵的终极女神！
          </div>

        </div>
        <div class="swiper-slide">Slide 4</div>
      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination"></div>
    </div>



  </div>
</template>

<script>
  import $ from 'jquery'
import '../assets/js/m.js'
import Swiper from 'swiper'

export default {
  name: 'Love',
  data () {
    return {
      windowHeight: '', // 当前窗口高度

    }
  },
  created () {
    this.windowHeight = window.innerHeight // 设置当前高度

  },
  mounted () {

    this.$nextTick(() => {
      var swiper = new Swiper('.swiper-container', {
        effect: 'cube',
        grabCursor: true,
        cubeEffect: {
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        },
        pagination: {
          el: '.swiper-pagination',
        },
        on: {
          transitionEnd: function(event){
            //你的事件
            console.log(this.activeIndex)
            $('.container-content').hide().eq(this.activeIndex).fadeIn()
          },
        },
      });
//
      var swiper1 = new Swiper('.swiper-container1', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows : true,
        },
        pagination: {
          el: '.swiper-pagination',
        },
        on: {
          transitionEnd: function(event){
            //你的事件
            console.log(this.activeIndex)
            $('.container-content-1 span').eq(this.activeIndex).fadeIn()
          },
        },
      });

      var swiper3 = new Swiper('.swiper-container3', {
        effect: 'flip',
        autoplay: {
          delay: 1500,
          stopOnLastSlide: false,
          disableOnInteraction: false,
        },
        grabCursor: true,
        pagination: {
          el: '.swiper-pagination',
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });

      var swiper4 = new Swiper('.swiper-container4', {
//        on:{
//          transitionEnd: function(){
//            console.log(this.activeIndex)
//            const index = this.activeIndex
//
//            $('.swiper-container4').children('.swiper-wrapper').children('.swiper-slide').eq(index).css({
//              'background': 'red'
//            })
//
//          },
//        },
        direction: 'vertical',
//        spaceBetween: 30,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      });


    })

  },
  methods: {

  }

}

var doc = {
  init () {
    this.helper()
  },
  helper () {






  }





}



</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import '../assets/css/pr2rem';

  /*html, body {*/
    /*position: relative;*/
    /*height: 100%;*/
  /*}*/
  /*body {*/
    /*background: #fff;*/
    /*font-family: Helvetica Neue, Helvetica, Arial, sans-serif;*/
    /*font-size: 14px;*/
    /*color:#000;*/
    /*margin: 0;*/
    /*padding: 0;*/
  /*}*/
  html, body {
    position: relative;
    height: 100%;
  }
  body {
    background: #eee;
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
    font-size: 14px;
    color:#000;
    margin: 0;
    padding: 0;
  }

  .swiper-container4 {
    width: 100%;
    height: 100%;

    .swiper-wrapper {
      & > .swiper-slide {
        text-align: center;
        font-size: 18px;
        background: #fff;

        /* Center slide text vertically */
        /*display: -webkit-box;*/
        /*display: -ms-flexbox;*/
        /*display: -webkit-flex;*/
        /*display: flex;*/
        /*-webkit-box-pack: center;*/
        /*-ms-flex-pack: center;*/
        /*-webkit-justify-content: center;*/
        /*justify-content: center;*/
        /*-webkit-box-align: center;*/
        /*-ms-flex-align: center;*/
        /*-webkit-align-items: center;*/
        /*align-items: center;*/

        -webkit-transition: all 0.3s linear;
        -moz-transition: all 0.3s linear;
        -ms-transition: all 0.3s linear;
        -o-transition: all 0.3s linear;
        transition: all 0.3s linear;
      }
      & > .swiper-slide:first-child {
        background: url("http://118.190.207.166:8000/loveying/bg_1.jpeg") no-repeat center / 100% 100%;

        .swiper-container {
          width: 300px;
          height: 300px;
          margin-top: pr(100);
          position: absolute;
          left: 50%;
          margin-left: -150px;

          .swiper-slide {
            background-position: center;
            background-size: cover;
          }
          .swiper-slide:first-child {
            background-image:url(http://118.190.207.166:8000/loveying/realImg/part1_1.jpg)
          }
          .swiper-slide:nth-child(2) {
            background-image:url(http://118.190.207.166:8000/loveying/realImg/part1_2.jpg)
          }
          .swiper-slide:nth-child(3) {
            background-image:url(http://118.190.207.166:8000/loveying/realImg/part1_3.jpg)
          }
          .swiper-slide:nth-child(4) {
            background-image:url(http://118.190.207.166:8000/loveying/realImg/part1_4.jpg)
          }
        }

        .container-content {
          display: none;
          position: absolute;
          top: pr(900);
          width: pr(740);
          padding: 0 0 0 pr(10);
          text-align: center;
          color: #fff;
          font-size: pr(50);
        }
        .container-content:nth-child(2) {
          display: block;
        }

      }
      & > .swiper-slide:nth-child(2) {
        background: url("http://118.190.207.166:8000/loveying/bg_2.jpeg") no-repeat center / 100% 100%;
        overflow: hidden;

        .swiper-container1 {
          position: absolute;
          left: 50%;
          margin-left: -150px;
          margin-top: pr(100);
          width: 300px;
          height: 300px;

          .swiper-slide {
            background-position: center;
            background-size: cover;
            width: 300px;
            height: 300px;

          }
          .swiper-slide:first-child {
            background-image:url(http://118.190.207.166:8000/loveying/realImg/part2_1.jpg)
          }
          .swiper-slide:nth-child(2) {
            background-image:url(http://118.190.207.166:8000/loveying/realImg/part2_2.jpg)
          }
          .swiper-slide:nth-child(3) {
            background-image:url(http://118.190.207.166:8000/loveying/realImg/part2_3.jpg)
          }
          .swiper-slide:nth-child(4) {
            background-image:url(http://118.190.207.166:8000/loveying/realImg/part2_4.jpg)
          }
          .swiper-slide:nth-child(5) {
            background-image:url(http://118.190.207.166:8000/loveying/realImg/part2_5.jpg)
          }
          .swiper-slide:nth-child(6) {
            background-image:url(http://118.190.207.166:8000/loveying/realImg/part2_6.jpg)
          }
          .swiper-slide:nth-child(7) {
            background-image:url(http://118.190.207.166:8000/loveying/realImg/part2_7.jpg)
          }
          .swiper-slide:nth-child(8) {
            background-image:url(http://118.190.207.166:8000/loveying/realImg/part2_8.jpg)
          }
          .swiper-slide:nth-child(9) {
            background-image:url(http://118.190.207.166:8000/loveying/realImg/part2_9.jpg)
          }
        }

        .container-content-1 {
          font-weight: bold;
          position: absolute;
          top: pr(800);
          width: pr(730);
          padding: 0 0 0 pr(20);
          text-align: center;
          color: rgba(48, 149, 255, 0.78);
          font-size: pr(40);

          span {
            display: none;
          }
          span:first-child {
            display: inline;
          }
        }

      }
      & > .swiper-slide:nth-child(3) {
        background: url("http://118.190.207.166:8000/loveying/bg_3.jpeg") no-repeat center / 100% 100%;

        .swiper-container3 {
          width: 300px;
          height: 300px;
          position: absolute;
          left: 50%;
          margin-left: -150px;
          margin-top: pr(100);

          .swiper-slide {
            background-position: center;
            background-size: cover;
            width: 300px;
            height: 300px;
          }
          .swiper-slide:first-child {
            background-image:url(http://118.190.207.166:8000/loveying/realImg/part3_1.jpg)
          }
          .swiper-slide:nth-child(2) {
            background-image:url(http://118.190.207.166:8000/loveying/realImg/part3_2.jpg)
          }
          .swiper-slide:nth-child(3) {
            background-image:url(http://118.190.207.166:8000/loveying/realImg/part3_3.jpg)
          }
          .swiper-slide:nth-child(4) {
            background-image:url(http://118.190.207.166:8000/loveying/realImg/part3_4.jpg)
          }
          .swiper-slide:nth-child(5) {
            background-image:url(http://118.190.207.166:8000/loveying/realImg/part3_5.jpg)
          }
          .swiper-slide:nth-child(6) {
            background-image:url(http://118.190.207.166:8000/loveying/realImg/part3_6.jpg)
          }

        }

        .container-content-3 {
          font-weight: bold;
          position: absolute;
          top: pr(800);
          width: pr(720);
          padding: 0 0 0 pr(20);
          text-align: center;
          color: rgba(255, 119, 17, 0.59);
          font-size: pr(40);
        }
      }
      & > .swiper-slide:nth-child(4) {
        background: url("../assets/img/ying/bg_4.jpeg") no-repeat center / 100% 100%;
      }



    }

  }




</style>
