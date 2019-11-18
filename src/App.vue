<template>
  <div id="app">
<!--头部-->
    <mt-header fixed title="一个小项目">

      <div to="/" slot="left" @click="goback" v-show="show">
        <mt-button icon="back">返回</mt-button>
      </div>


    </mt-header>
<!--头部-->





    <nav class="mui-bar mui-bar-tab">

      <router-link to="/top"  class="mui-tab-item-new" href="#tabbar">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>


      <router-link to="/message" class="mui-tab-item-new" href="#tabbar-with-chat">
        <span class="mui-icon mui-icon-email"></span>
        <span class="mui-tab-label">消息</span>
      </router-link>


      <router-link to="/buycar" class="mui-tab-item-new" href="#tabbar-with-contact">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge" id="carNum" >{{ $store.getters.getallCount }}</span></span>

        <span class="mui-tab-label">购物车</span>
      </router-link>


      <router-link to="/mind" class="mui-tab-item-new" href="#tabbar-with-map">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">我的</span>
      </router-link>
    </nav>



<transition>

  <router-view/>

</transition>

  </div>
</template>

<script>
export default {
  data(){
    return{
      value:"",
      show:false

    }
  },
created(){

    if(this.$route.path === '/top' || this.$route.path === '/Top'){

      this.show=false;

    }else{

      this.show=true;

    }


},
  methods:{

    goback(){

            this.$router.go(-1);


    }

  },

  watch:{

    '$route.path':function(newVal) {

            if(newVal === "/top" || newVal === "/message" || newVal === "/buycar" || newVal === "/mind"){

              this.show=false;

            }else{

              this.show=true;

            }

    }
  }

}
</script>

<style scoped>

  .mint-header{

    z-index:99;
  }
 html{
    width:100%;
    padding:0 !important;
    margin: 0 !important;

  }
#app {
  width:100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
  .mint-search{
      height:52px;
      width:100%;
  }
  #app[data-v-7ba5bd90]{

    padding:0;
    margin-top:40px;
    overflow-x:hidden;
  }
  .v-enter,{

    opacity: 0;
    transform:translateX(100%);

  }
 .v-leave-to{
   opacity: 0;
   transform:translateX(-100%);
   position: absolute;

 }
  .v-enter-active,.v-leave-active{

    transition:all 0.5s ease;

  }


/*重置样式*/
 .mui-bar-tab .mui-tab-item-new.mui-active {
   color: #007aff;
 }
 .mui-bar-tab .mui-tab-item-new {
   display: table-cell;
   overflow: hidden;
   width: 1%;
   height: 50px;
   text-align: center;
   vertical-align: middle;
   white-space: nowrap;
   text-overflow: ellipsis;
   color: #929292;
 }
 .mui-bar-tab .mui-tab-item-new .mui-icon {
   top: 3px;
   width: 24px;
   height: 24px;
   padding-top: 0;
   padding-bottom: 0;
 }

 .mui-bar-tab .mui-tab-item-new .mui-icon~ .mui-tab-label {
   font-size: 11px;
   display: block;
   overflow: hidden;
   text-overflow: ellipsis;
 }
</style>
