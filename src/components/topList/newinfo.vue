<template>
    <div id="box">
      <h4>{{ getnewContent.title }}</h4>

      <div class="box">
          <p class="content-time">{{ getnewContent.add_time | newDate }}</p>
          <p class="content-click">点击次数：{{ getnewContent.click }} 次</p>
      </div>

      <div v-html="getnewContent.content"></div>

      <comment-box :id="this.id"></comment-box>
    </div>
</template>

<script>

  import { Toast } from "mint-ui"
  import Comment from '../subComponents/comments.vue'

    export default {
      data(){
        return {
          id: this.$route.params.id,
          getnewContent:{}
        }
      },
      created(){
        this.getnewinfo()
      },
      methods:{

        getnewinfo(){

          this.$http.get('http://www.liulongbin.top:3005/api/getnew/'+this.id).then(result=>{

            if(result.body.status===0){

              console.log(result.body);
              this.getnewContent=result.body.message[0]
              // Toast({
              //   message:'获取成功',
              //   duration:500
              // })

            }else{
              Toast("获取失败了")
            }

          })


        }

      },
      components:{
        "comment-box":Comment
      }

    }
</script>

<style scoped>
  #box{
    padding-bottom:50px !important;

  }
  .box{
    height:20px;

  }
  .content-time{
    float:left;
    color:#226aff

  }
  .content-click{
    float:right;
    color:#226aff

  }
</style>
