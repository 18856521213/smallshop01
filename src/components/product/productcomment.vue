<template>
    <div class="box">

      <com-box :id="$route.params.id"></com-box>
    </div>
</template>

<script>

  import Comment from '../subComponents/comments.vue'
    export default {
      data(){
        return{

        }
      },
      methods:{

      },
      components:{
        "com-box":Comment
      }

  }
</script>

<style scoped>
.box{
  padding-bottom: 52px;
}
</style>
