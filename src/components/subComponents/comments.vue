<template>
    <div class="comment-comtainer">
      <h4>发表评论</h4>
      <textarea placeholder ="请输入你的评论（最多120字）" maxlength="120" v-model="msg"></textarea>

      <mt-button type="primary" size="large" @click="postcontent">发表评论</mt-button>

      <div class="content-box" v-for="(item,i) in getcomment" :key="i">

        <div class="content-title">
          <span>第{{ i+1 }}楼</span>
          <span>{{ item.user_name }}</span>
          <span>发表时间：{{ item.add_time | newDate}}</span>
        </div>
        <div class="content-body">
          {{ item.content }}
        </div>
      </div>

<!--加载更多的案件-->
      <mt-button type="danger" size="large" plain  @click="getmore">加载更多</mt-button>

    </div>
</template>

<script>



  import { Toast } from "mint-ui"

    export default {

      data(){

        return{

            getcomment:[],
            pageIndex:1,
            msg:""

        }

      },
      created(){

        this.getComment()

      },

      methods:{

        getComment(){

          this.$http.get("http://www.liulongbin.top:3005/api/getcomments/"+this.id+"?pageindex="+this.pageIndex).then(result=>{

            if(result.body.status=== 0){

              console.log(result.body)

              this.getcomment= this.getcomment.concat(result.body.message)

              Toast("获取成功啦")

            }else{

              Toast("获取失败了")

            }

          })

        },//获取评论数据

        getmore(){

          this.pageIndex++;
          this.getComment();

        },//获取更多

        postcontent(){

          if(this.msg.trim().length === 0){

            return Toast("评论内容不能为空")

          };

            this.$http.post("http://www.liulongbin.top:3005/api/postcomment/"+this.$route.params.id,{

              content:this.msg.trim()

            }).then(result => {

              if(result.body.status ===0){

                var cmt ={user_name:"叼叼的男主角",add_time:Date.now(),content:this.msg.trim()};
                Toast("评论成功");

              }else{

                Toast("评论失败");

              };

              this.getcomment.unshift(cmt);

              this.msg="";

            })


        }//上传评论数据

      },

      props:["id"],//父组件向子组件传递数据



    }
</script>

<style scoped>
    .comment-comtainer{

      margin-top:20px;

    }
    textarea{
      font-size:14px;
      height:180px;
      margin:0;
    }
  .content-title{
    font-size:12px;
    background-color:#ccc;
    height:30px;
    line-height: 30px;
    text-align: left;
  }
  .content-body{

    font-size:13px;
    height:40px;
    text-align: left;
    margin-left:20px;
    line-height:40px;
    overflow: hidden;


  }
</style>
