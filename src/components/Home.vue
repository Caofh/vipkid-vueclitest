<template>
  <div class="home">
    当前设备像素比为：{{radio}}
    <img src="../assets/img/@1x.png">
    <img src="../assets/img/@2x.png">
    <img src="../assets/img/@3x.png">
  </div>
</template>

<script>
import '../assets/js/m.js'

export default {
  name: 'Home',
  data () {
    return {
      radio: window.devicePixelRatio,
      msg: 'I am home page !'
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import '../assets/css/pr2rem';

  .home {
    img {
      width: pr(750);
    }
  }

</style>
