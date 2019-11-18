<template>
    <div class="container">

      <h4>{{ photoinfo.title }}</h4>
      <div>

        <span class="photo-time">时间：{{ photoinfo.add_time | newDate}}</span>
        <span class="photo-click">点击次数：{{ photoinfo.click }}</span>

      </div>

      <div class="image-info"></div>

      <div class="photo-info">

        <p v-html="photoinfo.content"></p>


      </div>

      <comment-box :id="this.id"></comment-box>

    </div>
</template>

<script>

  import { Toast } from "mint-ui"

  import Comment from '../subComponents/comments.vue'

    export default {
        name: "photoinfo",
        data(){

          return{

            id:this.$route.params.id,
            photoinfo:{}

          }

        },
      created(){

        this.getphotoinfo()

      },
      methods:{

          getphotoinfo(){

              this.$http.get('http://www.liulongbin.top:3005/api/getimageInfo/' + this.id).then(result => {

                  console.log(result.body);
                  if(result.body.status === 0){

                      Toast("获取成功了")
                    this. photoinfo=result.body.message[0]

                  }else{

                    Toast('获取失败了')
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
.container{

  padding-bottom: 50px;

}
</style>
