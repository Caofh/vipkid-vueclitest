<template>
    <component :is="currentView"></component>
</template>

<script>
  import $ from 'n-zepto'

  import Pc from '@/components/xuankuActivity/Pc'
  import Mobile from '@/components/xuankuActivity/Mobile'

  export default {
    name: 'App',
    data () {
      return {
        currentView : null,
        resizeTimer : null
      }
    },
    created () {
      this.checkView();
      this.setCurrentView();
    },
    components: { // crop_plugin

    },
    methods: {
      checkView(){
        this.resizeTimer = null;
        window.addEventListener('resize',()=>{
          if (this.resizeTimer) {
            clearTimeout(this.resizeTimer)
          }
          this.resizeTimer = setTimeout(()=>{
            this.setCurrentView()
          }, 100);
        })

      },
      setCurrentView(){
        let clientWidth = document.documentElement.clientWidth;
        this.currentView = clientWidth <= 750 ? Mobile : Pc;
      },

    },
    mounted () {

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

  }
</style>
