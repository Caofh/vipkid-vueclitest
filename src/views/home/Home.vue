<template>
  <div id="app">
    <!--<Home></Home>-->



    <div class="container-father">


      <div class="part">
        <div class="container-body">
          <div v-for="item in [1,2,3,4,5,6,7,1,2,3,4,5,6,7,1,2,3,4,5,6,7,
        1,2,3,4,5,6,7,1,2,3,4,5,6,7,1,2,3,4,5,6,7,1,2,3,4,5,6,7,1,2,3,4,5,6,7,
        1,2,3,4,5,6,7,1,2,3,4,5,6,7,1,2,3,4,5,6,7,1,2,3,4,5,6,7,
        1,2,3,4,5,6,7,1,2,3,4,5,6,7,1,2,3,4,5,6,7,1,2,3,4,5,6,7,]">哈哈哈哈哈</div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import Home from '@/components/Home.vue'

export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<style lang="scss">
  @import "../../assets/css/pr2rem";

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
}

  .container-father {
    width: 100%;

    .part {
      margin-top: pr(100);
      width: pr(500);
      height: pr(200);
      background: #f71;
      overflow-y: scroll;

      .container-body {
        font-size: pr(24);
      }
    }


  }
</style>
