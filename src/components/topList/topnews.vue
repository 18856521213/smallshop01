<template>
    <div id="app">
      <ul class="mui-table-view">
        <li class="mui-table-view-cell mui-media" v-for="item in newList" :key="item.id">
          <router-link :to="'/top/topnews/newinfo/'+item.id">
            <img class="mui-media-object mui-pull-left" :src="item.img_url">
            <div class="mui-media-body">
              {{ item.title }}
              <p class='mui-ellipsis'>{{ item.zhaiyao }}</p>
              <div class="time-font">
                <p class="time-font-date">{{ item.add_time | newDate}}</p>
                <p class="time-font-click">查看次数：{{item.click }}</p>
              </div>
            </div>
          </router-link>
        </li>

      </ul>

    </div>
</template>

<script>

  import { Toast } from "mint-ui"



    export default {
       data(){
         return{
           newList:[]

         }
       },
      created(){
         this.getnewList()
      },
      methods:{
         getnewList(){

           this.$http.get("http://www.liulongbin.top:3005/api/getnewslist").then( result => {

             console.log(result.body);
             if(result.body.status === 0){

               this.newList=result.body.message;
               Toast({
                 message:'获取成功',
                 duration:500
               })
             }else{

               Toast('获取失败')
             }


           })

         }

      }
    }
</script>

<style scoped>
  #app{

    margin-top:0px !important;
    padding-bottom: 50px !important;
  }
.mui-media-body{

  text-align: left;

}

  .time-font-date{
    float:left;
    color:#226aff;
  }
  .time-font-click{
    float:right;
    color:#226aff;
  }
</style>
