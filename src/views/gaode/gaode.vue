<template>
    <div id="box">

        <div v-show="false" id="container"></div>

        <div id="container2"></div>
        <div @click="addPoint" class="abc-btn">添加</div>


    </div>
</template>

<script>
    import { pointArr } from './computed/index'
    import infoTem from './templates/info.tpl'

//    var infoTem = '<div>123</div>'

  export default {
    name: 'App',
    data () {
      return {

      }
    },
    components: {

    },
    created () {},
    mounted () {
      this.map = new AMap.Map('container',{
        zoom:11,//级别
        center: [116.397428, 39.90923],//中心点坐标
        viewMode:'3D'//使用3D视图
      });
      this.map2 = new AMap.Map('container2',{
        zoom:4,//级别
        center: [116.397428, 39.90923],//中心点坐标
        viewMode:'3D'//使用3D视图
      });




      this.map_1() // 第一种地图调用
      this.map_2() // 第二种地图调用
    },
    methods: {
      map_1 () {
        let map = this.map

        // 添加控件
        this.addPlugin(map)

        // 创建一个 Marker 实例：
        var marker = new AMap.Marker({
          position: new AMap.LngLat(116.39, 39.9),   // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
          title: '北京',
          draggable: true,
        });
        let markerArr = [marker]
        map.add(markerArr)

        marker.on('click', (e) => {
          console.log(123)
          var infoWindow = new AMap.InfoWindow({ //创建信息窗体
            isCustom: true,  //使用自定义窗体
            content:'<div style="width: 100px;height: 50px;border:1px solid #ccc;background: #fff;">信息窗体</div>', //信息窗体的内容可以是任意html片段
            offset: new AMap.Pixel(16, -45)
          })

          infoWindow.open(map, e.target.getPosition());//打开信息窗体

          setTimeout(() => {
            infoWindow.close(map, e.target.getPosition());//打开信息窗体
          }, 500)

        })

        marker.on('mouseup', (e) => {
          console.log(e)

          const x = e.lnglat.R || '' // 经度
          const y = e.lnglat.P || '' // 维度

          map.plugin('AMap.Geocoder', function() {
            var geocoder = new AMap.Geocoder({
              // city 指定进行编码查询的城市，支持传入城市名、adcode 和 citycode
              city: '010'
            })

            var lnglat = [x, y]

            geocoder.getAddress(lnglat, function(status, result) {
              if (status === 'complete' && result.info === 'OK') {
                // result为对应的地理位置详细信息
                console.log(result)

              }
            })
          })




        })

      },

      map_2 () {
        let map = this.map2

        // 添加控件
        this.addPlugin(map)

        // 创建10个点的实例
        let markerArr = this.creatPoint(0, 4)
//        map.add(markerArr) // 非点聚合方式

        // 点聚合方式
        let cluster = new AMap.MarkerClusterer(map, markerArr, {
          gridSize: 80
        });

      },

      addPoint () {
        let map = this.map2

        // 取5-6的坐标
        let markerArr = this.creatPoint(5, 6)
        map.add(markerArr)



      },




      // 创建多个点(start，count，开始和终点偏移，取值范围)
      creatPoint (start, count) {
        const map2 = this.map2

//        let point_arr = [
//          {
//            x: 116.406315,
//            y: 39.908775
//          },
//          {
//            x: 116.391467,
//            y: 39.927761
//          }
//        ]

        let point_arr = []
        pointArr().map((item, index) => {

          // 只取5个
          if (index >= start && index <= count) {
            let obj = {}
            obj.x = item.center.split(',')[0]
            obj.y = item.center.split(',')[1]

            point_arr.push(obj)
          }

        })

        let arr = []

        point_arr.map((item) => {
          let x = item.x || ''
          let y = item.y || ''

          if (x && y) {
            // 创建一个 Marker 实例：
            let marker = new AMap.Marker({
              position: [x, y],   // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
              title: '北京',
              draggable: false,
            });

            marker.on('click', (e) => {
              console.log(456)
              let html = infoTem({
                msg: '哈哈哈'
              })

              var infoWindow = new AMap.InfoWindow({ //创建信息窗体
                isCustom: true,  //使用自定义窗体
                content: html, //信息窗体的内容可以是任意html片段
                offset: new AMap.Pixel(16, -45)
              })

              infoWindow.open(map2, e.target.getPosition());//打开信息窗体

              setTimeout(() => {
                infoWindow.close(map2, e.target.getPosition());//打开信息窗体
              }, 500)

            })

            arr.push(marker)
          }

        })


        return arr
      },

      // 添加地图控件
      addPlugin (map) {
        // 同时引入工具条插件，比例尺插件和鹰眼插件
        map.plugin([
          'AMap.ToolBar',
          'AMap.Scale',
          'AMap.OverView',
          'AMap.MapType',
          'AMap.Geolocation',
        ], function(){
          // 在图面添加工具条控件，工具条控件集成了缩放、平移、定位等功能按钮在内的组合控件
          map.addControl(new AMap.ToolBar());

          // 在图面添加比例尺控件，展示地图在当前层级和纬度下的比例尺
          map.addControl(new AMap.Scale());

          // 在图面添加类别切换控件，实现默认图层与卫星图、实施交通图层之间切换的控制
          map.addControl(new AMap.MapType())

          // 在图面添加定位控件，用来获取和展示用户主机所在的经纬度位置
          map.addControl(new AMap.Geolocation());
        });
      },

    }
  }

</script>

<style scoped lang="scss">
    @import '../../assets/css/index';

    body {
        margin: 0;
    }
    #box {
        #container {
            width:800px;
            height: 500px;
            margin-bottom: 50px;
        }
        #container2 {
            width:800px;
            height: 500px;
        }






    }

</style>
