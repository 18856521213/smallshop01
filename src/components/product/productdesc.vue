<template>
   <div>

     <div class="mui-card">
       <div class="mui-card-header">{{ productdesc.title }}</div>

       <div class="mui-card-content">
         <div class="mui-card-content-inner" v-html="productdesc.content">

         </div>

       </div>
     </div>

   </div>


</template>

<script>
    export default {
        data(){
          return{
            productdesc:{}
          }

        },
      created(){
          this.getproductdesc()
      },
      methods:{

          getproductdesc(){

            this.$http.get('http://www.liulongbin.top:3005/api/goods/getdesc/'+this.$route.params.id).then(result => {

              console.log(result.body);
              if(result.body.status===0){

                this.productdesc=result.body.message[0];

              }

            })
          }

      }
    }
</script>

<style>
.mui-card-header{

  font-size:14px;

}
img{
    width:100%;
  height:auto;
  margin: 0;
  padding:0;
  }
</style>
