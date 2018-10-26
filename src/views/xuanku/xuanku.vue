

<template>
    <div id="container">
        <div class="title">
            <div class="logo abc-img">
                <img src="../../assets/img/xuanku/logo.png">
            </div>
        </div>

        <div class="search-container abc-flex-x-center">
            <div>手机后三位</div>
            <div>
                <Input class="search-input" suffix-icon="el-icon-search" clearable
                       @keyup.enter.native="enter" v-model="phone3" placeholder="手机尾号"></Input>
            </div>
            <Button @click="enter" class="search-btn">搜索</Button>
        </div>

        <div class="body abc-flex-x-center">

            <Table
                    :data="selectArr"
                    style="width: 100%">
                <TableColumn
                        prop="order_number"
                        label="序号"
                        width="180">
                </TableColumn>
                <TableColumn
                        prop="name"
                        label="姓名"
                        width="180">
                </TableColumn>
                <TableColumn
                        prop="phone_number"
                        label="手机号"
                        width="280">
                </TableColumn>
                <TableColumn
                        prop="typeStr"
                        label="人员类别"
                        width="180">
                </TableColumn>
                <TableColumn
                        prop="hand_color"
                        label="手环颜色"
                        width="180">
                </TableColumn>
                <TableColumn
                        prop="card_color"
                        label="卡片颜色"
                        width="200">
                </TableColumn>
            </Table>







            <!--<div class="header abc-flex-x-center">-->
                <!--<div>序号</div>-->
                <!--<div>姓名</div>-->
                <!--<div>手机号</div>-->
                <!--<div>人员类别</div>-->
                <!--<div>手环颜色</div>-->
                <!--<div>卡片颜色</div>-->
            <!--</div>-->

            <!--<div class="body abc-flex-y-center">-->
                <!--<div class="body-item abc-flex-x-center" v-for="item in selectArr">-->
                    <!--<div>{{item.order_number || ''}}</div>-->
                    <!--<div>{{item.name || ''}}</div>-->
                    <!--<div>{{item.phone_number || ''}}</div>-->
                    <!--<div>{{item.typeStr || ''}}</div>-->
                    <!--<div>{{item.hand_color || ''}}</div>-->
                    <!--<div>{{item.card_color || ''}}</div>-->
                <!--</div>-->

            <!--</div>-->

        </div>
    </div>
</template>

<script>
  import { getList } from '@/api/xuanku/index'
  import deepClone from '@/assets/js/deepClone'
  import { Button, Input, Table, TableColumn } from 'element-ui'

  export default {
    name: 'App',
    data () {
      return {
        data: [], // 数据

        phone3: '', // 手机后三位号码
        selectArr: [], // 搜索中的结果

      }
    },
    components: {
      Input,
      Button,
      Table,
      TableColumn
    },
    created () {},
    async mounted () {

      try {
        const dataList = await getList()
//        console.log(dataList)

        // 转换人员类型中文.
        dataList.data.map((item) => {
          item.typeStr = this.typeMapList(item.type)
        })

        // 赋值数据.
        this.data = dataList.data ? deepClone(dataList.data) : []
        this.selectArr = dataList.data ? deepClone(dataList.data) : []

      } catch (error) {
        alert('网络错误，请刷新页面！')

      }

    },
    methods: {
      // 赞助商类型映射
      typeMapList (type) {
        const typeNew = String(type)
        let typeStr = ''

        switch (typeNew) {
          case ('1'): typeStr = '赞助商'; break;
          case ('2'): typeStr = '单身'; break;
          case ('3'): typeStr = '非单身'; break;
          default: typeStr = '未知';
        }

        return typeStr

      },

      // 搜索方法
      enter () {
        let selectArr = []

        this.data.map((item) => {
          if (item.phone_number.includes(this.phone3)) {
            selectArr.push(item)
          }
        })

//        console.log(selectArr)

        this.selectArr = selectArr

      }

    }
  }

</script>

<style scoped lang="scss">
    body {
        margin: 0;
    }
    #container {
        margin: 0 auto;

        .logo {
            margin: 80px auto;
            width: 80px;
            height: 80px;
        }

        .search-container {
            margin-bottom: 50px;

            & > div {
                margin-right: 30px;
            }

            .search-input {
                width: 200px;
            }
        }

        .header {
            & > div {
                width: 100px;
                margin-right: 30px;
            }
        }

        .body {
            .body-item {
                & > div {
                    width: 100px;
                    margin-right: 30px;
                }
            }
        }





    }

</style>
