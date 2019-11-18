<template>
    <div>
      <!--这是头部滑动部分-->
      <div id="slider" class="mui-slider">
        <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
          <div class="mui-scroll" >

            <a v-for="item in cates" :key="item.id" :class="['mui-control-item', item.id == 0 ? 'mui-active' : '']"
               href="#item1mobile" data-wid="tab-top-subpage-1.html " @click="getListphoto(item.id)">
              {{ item.title }}
            </a>


          </div>
        </div>

      </div>
      <!--这是头部滑动部分end-->
      <!--懒加载-->
      <ul class="photo-list">
        <router-link :to="'/top/topmail/photoinfo/' + item.id " v-for="item in list" :key="item.id" >
          <img v-lazy="item.img_url">
          <p v-html="item.content"></p>
        </router-link>
      </ul>
      <!--懒加载END-->


    </div>
</template>

<script>

  import mui from '@/lib/mui/js/mui.js'//导入mui的js文件


    export default {
          data(){
            return{

              cates:[],
              list:[]

            }
          },

      created(){

            this.getsAllcategory();
            this.getListphoto(0);

      },

      mounted(){

        //初始化触摸控件
          mui('mui-scroll-wrapper').scroll({

          deceleration:0.0005 //减速系数,系数越大，滚动 速度 越慢，滚动距离越小

        })


      },
      methods:{

            getsAllcategory(){

              this.$http.get('http://www.liulongbin.top:3005/api/getimgcategory').then(result=>{

                  if(result.body.status === 0){

                    console.log(result.body);

                    result.body.message.unshift({title:"全部",id:0});

                    this.cates=result.body.message

                  }

              })


            },//加载标题

        getListphoto(cateId) {

              this.$http.get("http://www.liulongbin.top:3005/api/getimages/"+cateId).then(result => {

                  if(result.body.status === 0){

                    console.log(result.body)

                    this.list=result.body.message

                  }

              })

        }






      }


    }
</script>

<style scoped>
* {
  touch-action: pan-y;

}
.photo-list{

  margin:0;
  padding:0;
  text-align: center;
  padding-bottom: 50px;


}
  .photo-list li{

    list-style: none;
    padding-bottom: 10px;


  }


</style>
