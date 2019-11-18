<template>
<div>

  <!--轮播图-->
  <mt-swipe :auto="4000" >
    <mt-swipe-item v-for="item in lunbotulist" :key="item.id">

      <img :src="item.img" alt="">

    </mt-swipe-item>

  </mt-swipe>
  <!--轮播图-->

  <!--九宫格-->

  <div class="mui-content">
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <router-link to="/top/topnews" class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <span class="mui-icon mui-icon-home"></span>
        <div class="mui-media-body">新闻</div></a></router-link>


      <router-link to="/top/topimage"  class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <span class="mui-icon mui-icon-image"></span>
        <div class="mui-media-body">图片</div></a></router-link>


      <router-link to="/top/topMessage"  class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <span class="mui-icon mui-icon-extra mui-icon-extra-gift"></span>
        <div class="mui-media-body">商品</div></a></router-link>


      <router-link to="/top/topdress"  class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <span class="mui-icon mui-icon-location"></span>
        <div class="mui-media-body">地址</div></a></router-link>


      <router-link to="/top/topsearch"  class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <span class="mui-icon mui-icon-search"></span>
        <div class="mui-media-body">搜索</div></a></router-link>


      <router-link to="/top/topiphon"  class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <span class="mui-icon mui-icon-phone"></span>
        <div class="mui-media-body">手机</div></a></router-link>

    </ul>
  </div>
  <!--九宫格-->




</div>
</template>

<script>

  import { Toast } from "mint-ui"

  export default {

    data() {
      return {

        lunbotulist: []

      }

    },


    created() {

      this.getlunbotu();

    },


    methods: {

      getlunbotu(){

        this.$http.get("http://www.liulongbin.top:3005/api/getlunbo").then(function(result){

          console.log(result.body)

          if(result.body.status === 0){

            this.lunbotulist=result.body.message;
            Toast({
              message:'数据加载成功',
              duration:500
            })

          }else{

           Toast({

             message:'数据获取失败了',
             duration: 1000

           })

          }




        })

      }
    }
  }
</script>


<style scoped>
.mint-swipe{

  height:200px;
}

.mint-swipe-item img{

  height:200px;
  width:100%;

}




</style>
