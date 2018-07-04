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

        </div>
        <div class="swiper-slide">Slide 4</div>
      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination"></div>
    </div>



  </div>
</template>

<script>
  import $ from 'n-zepto'
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
      });
//
      var swiper = new Swiper('.swiper-container1', {
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
      });

      var swiper = new Swiper('.swiper-container3', {
        effect: 'flip',
        grabCursor: true,
        pagination: {
          el: '.swiper-pagination',
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });

      var swiper = new Swiper('.swiper-container4', {
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
      }
      & > .swiper-slide:nth-child(2) {
        background: url("http://118.190.207.166:8000/loveying/bg_2.jpeg") no-repeat center / 100% 100%;

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
      }
      & > .swiper-slide:nth-child(4) {
        background: url("../assets/img/ying/bg_4.jpeg") no-repeat center / 100% 100%;
      }



    }

  }




</style>
