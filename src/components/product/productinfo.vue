<template>
    <div class="box">

      <div class="mui-card">
            <mt-swipe :auto="4000">
              <mt-swipe-item v-for="item in thumimages" :key="item.id">

                <img :src="item.src" alt="">

              </mt-swipe-item>
             </mt-swipe>
      </div>
<!--      获取产品的轮播图信息end-->

        <div class="mui-card">
        <div class="mui-card-header">{{ productinfo.title}}</div>
        <div class="mui-card-content">
          <div class="mui-card-content-inner">
            <div>
                <span class="new-price">销售价：￥{{ productinfo.sell_price}}</span>
                <span class="old-price">市场价：￥{{ productinfo.market_price}}</span>
            </div>
            <br>
            购买数量:
            <div class="mui-numbox" data-numbox-min='1' data-numbox-max='9'>
                <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
                <input id="test" class="mui-input-numbox" type="number" v-model="productNum" readonly="readonly"  @change="changeNum" ref="num"/>
                <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
           </div>

            <div class="buy-button">

              <mt-button type="primary" size="small" @click="nowbuy">立即购买</mt-button>
              <mt-button type="danger" size="small" @click="clickCar" >加入购物车</mt-button>
            </div>

          </div>
        </div>

      </div>
<!--商品详情-->
      <div class="mui-card">
        <div class="mui-card-header">商品参数</div>
        <div class="mui-card-content">
          <div class="mui-card-content-inner">
            <p>商品货号：{{ productinfo.goods_no}}</p>
            <p>库存情况：{{ productinfo.stock_quantity}}</p>
            <p>上架时间：{{ productinfo.add_time | newDate}}</p>
          </div>

        </div>
        <div class="mui-card-footer">

          <mt-button type="primary" size="large"  plain @click="godesc(id)">图文介绍</mt-button>
          <br>
          <mt-button type="danger" size="large"  plain @click="gocommment(id)">商品评论</mt-button>

        </div>
      </div>

<!--      小红点-->
      <transition
      @before-enter="beforeenter"
      @enter="enter"
      @after-enter="afterenter"
      >
      <div class="red-icon" v-show="redball" ref="ball"></div>
      </transition>
    </div>
</template>

<script>
  import mui from '@/lib/mui/js/mui.js'//导入mui的js文件
    export default {
        data(){
          return{
            id:this.$route.params.id,
            thumimages:[],
            productinfo:{},
            redball:false,
            productNum:1


          }
        },
      mounted(){

          //初始化输入框
        mui('.mui-numbox').numbox()

      },
      created(){

          this.getproductinfo();
          this.getinfo();

      },
      methods:{
          getproductinfo(){
            this.$http.get('http://www.liulongbin.top:3005/api/getthumimages/'+this.id).then(result => {

              console.log(result.body);
              if(result.body.status === 0){

                this.thumimages=result.body.message

              }
            })
          },//获取产品的轮播图图片
          getinfo(){
            this.$http.get('http://www.liulongbin.top:3005/api/goods/getinfo/'+this.id).then( result=>{
              console.log(result.body)

              if(result.body.status===0){

                  this.productinfo=result.body.message[0];

              }

            })

          },//获取产品的 具体详情
          godesc(id){

            this.$router.push({name:"productdesc",param:{ id }})

          },//导航式路由-商品详情
          gocommment(id){

            this.$router.push({name:"productcomment",param:{ id }})

          },//导航式路由-评论组件
          nowbuy(){

            // this.$router.push('/buycar')
          this.$store.commit('clearMore')
          },//  清除购物车所有数据
        clickCar(){

          this.redball=!this.redball;
          var productList={id:this.id,count:parseInt(this.$refs.num.value),price:this.productinfo.sell_price,seleted:true,img:this.thumimages[0].src,title:this.productinfo.title};
          this.$store.commit("addToCar",productList);




        },//添加购物车&显示小红点
        beforeenter(el){

            el.style.transform="translate(0,0)"

        },//进入动画
        enter(el,done){

            //获取小球和购物车的的距离，可自由变动移动的距离
         const ballposition=this.$refs.ball.getBoundingClientRect();
         const carNum=document.getElementById('carNum').getBoundingClientRect();
         const carNumLeft=carNum.left-ballposition.left;
         const carNumTop=carNum.top-ballposition.top;

         console.log(carNumLeft,carNumTop)

          el.offsetWidth;
          el.style.transform=`translate(${carNumLeft}px,${carNumTop}px)`;
          el.style.transition="all 1s cubic-bezier(.4,-0.3,1,.68)";
          done();

        },//进程动画
        afterenter(el){

          this.redball=!this.redball

        },//结束动画
        changeNum(){

          this.productNum=parseInt(this.$refs.num.value)

        }//改变购车车的数字
          }
    }
</script>

<style scoped>
  .box{

    padding-bottom: 50px;
    position: relative;
  }
  .mint-swipe{

      height:300px;

  }

  .mint-swipe-item img{

    height:100%;
  }
  .mui-card-content-inner{

    text-align: left;
  }
  .new-price{
    font-size:14px;
  }
  .old-price{
    font-size:12px;
    color:red;
    text-decoration: line-through;
  }
  .buy-button{
    margin-top:10px;
  }

  .mui-card-footer{

    display: block;

  }
  .red-icon{

    width:10px;
    height:10px;
    border-radius: 50%;
    background-color:red;
    position: absolute;
    z-index:99;
    top:443px;
    left:144px;


  }
</style>
