<template>
  <div>
    <div class="box">

      <router-link tag="div" :to="'/top/topMessage/productinfo/'+item.id "class="product"  v-for="item in productList" :key="item.id">

        <div>
          <img :src="item.img_url" alt="">
        </div>

        <div>
          <h4>{{ item.title }}</h4>

          <div class="product-font">
            <div class="price">
              <span class="price-new">￥{{ item.sell_price}}</span>
              <span class="price-old">￥{{ item.market_price}}</span>
            </div>

            <div class="product-HI">
              <span class="product-hot">热卖中</span>
              <span class="product-inventory">还剩{{ item.stock_quantity}}件</span>
            </div>
          </div>
        </div>


      </router-link>


      <!--    加载更多-->
      <mt-button type="danger" size="large" plain  @click="getproductlist">加载更多</mt-button>

    </div><!--box-end-->



  </div>
    
</template>

<script>


    export default {
      data(){

        return{

          // imgsrc:require('../../../src/lib/1122.jpg'),
          productList:[],
          pageindex:1


        }


      },
      created(){
        this.getproductlist()
      },
      methods:{

        getproductlist(){

             this.$http.get('http://www.liulongbin.top:3005/api/getgoods?pageindex='+this.pageindex).then(result => {

              console.log(result.body);
              if(result.body.status===0){

                this.productList=this.productList.concat(result.body.message)

              }

            })

        },
        getMoreProduct(){

          this.pageindex++;
          this.getproductlist();

        }
      }

    }
</script>

<style scoped>
.box{

  display: flex;
  justify-content: space-between;
  padding:10px 5px;
  flex-wrap: wrap;
  background-color:white;
  padding-bottom: 50px;

}
  .product{

    width:48%;
    height:280px;
    display: flex;
    flex-direction:column;
    justify-content: space-between;
    margin-bottom: 10px;
  }

  .product img{

    width:90%;

  }
.product-font{
  background-color:rgba(0,0,0,0.1);
  border-radius: 5px;

}
  .box h4{

    font-size:14px;
    text-align: left;
    padding:0 5px;

  }
  .price .product-HI{
    display:flex;
    justify-content: space-between;
    padding:0 20px;
  }
  .price{


    text-align: left;
    padding-bottom: 5px;
  }
  .price-new{

    font-size:18px;
    color:red;
  }
  .price-old{

    font-size:12px;
    text-decoration:line-through
  }
.product-HI{

  font-size:12px;
  padding:0 10px;
  display:flex;
  justify-content: space-between;

 }


</style>
