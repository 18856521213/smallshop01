<template>
    <div>
<!--      商品区-->

      <ul class="mui-table-view" v-for="(item,i) in $store.state.car" >
        <li class="mui-card mui-table-view-cell mui-media">

          <span class="product-icon">
            <mt-switch :value="item.seleted" @change="noff(item.id)" ref="kaiguan"></mt-switch>
          </span>
          <div class="product-info">
              <img class="mui-media-object mui-pull-left" :src="item.img">
              <div class="mui-media-body">
                {{ item.title }}
                <p class='mui-ellipsis'>
                  <span class="car-price">￥{{item.price}}</span>
                  <span>

<!--                        加减号-->
                                      <div class="mui-numbox" data-numbox-min='1' data-numbox-max='9' style="width:100px;height:30px;">
                                          <button class="mui-btn mui-btn-numbox-minus" type="button" @click="moveNum(item.id)">-</button>
                                          <input id="test" class="mui-input-numbox" type="number" :value="item.count"
                                                 ref="numbox" readonly="readonly"/>
                                          <button class="mui-btn mui-btn-numbox-plus" type="button" @click="addNum(item.id)">+</button>
                                     </div>
                  </span>
                  <span class="product-del" @click="removeCar(item.id)">删除</span>
                </p>
              </div>
          </div>
        </li>


      </ul>


      <!--      结算区-->
      <div class="mui-card">
        <div class="mui-card-content">
          <div class="mui-card-content-inner">
           <div class="all-price">
             <div class="price-all-font">
               <p>总计（不含运费）</p>
               <p>已勾选 <span>{{ $store.getters.priceCount}}</span> 件，共 <span>{{ $store.getters.allPrice}}</span>元</p>
             </div>
             <div>
               <mt-button type="danger">去结算</mt-button>
             </div>

           </div>

          </div>
        </div>
      </div>

      <p>{{ $store.state.car}}</p>

    </div>

</template>

<script>

  import mui from '@/lib/mui/js/mui.js'//导入mui的js文件

    export default {
        name: "Buycar",
      data(){return{
      }},
      mounted(){

        //初始化输入框
        mui('.mui-numbox').numbox()

      },
      methods:{
       //  getNewCount(id){
       //
       //    var newCount={ id:parseInt(id),count:this.$refs.numbox.value };
       //    this.$store.commit("changeNewCount",newCount)
       // }//getNewCount-----end
        moveNum(id){
          this.$store.commit('moveproductNum',{ id:parseInt(id) })
        },//减少购买商品数量
        addNum(id){
          this.$store.commit('addproductNum',{ id:parseInt(id) })
        },//增加商品数量
        removeCar(id,index){

          this.$store.commit("removeFormCar",id)

        },//删除购物车商品
        noff(id){
          // var noff=this.$refs.kaiguan.value
          // // this.$refs.kaiguan.value=!this.$refs.kaiguan.value
          // console.log(noff)
          // console.log(111)

          this.$store.commit("changeSwitch",{id:id})
        }

      },
    }
</script>

<style scoped>
  .mui-table-view{
    background-color:rgba(0,0,0,0);
    border:0;
  }
.product-icon,.product-info{
  float: left;
}
  .product-icon{
    width:20%;
  }
  .product-info{
    width:80%;
  }
  .mui-table-view .mui-media-object.mui-pull-left{
    padding:0;
    margin:0;
  }
  .mui-table-view-cell {
    padding: 15px 6px;

  }
  .mint-switch{
    margin-top:10px;
  }
  .mui-table-view .mui-media-object.mui-pull-left[data-v-b8962908]{

    margin-top:6px;

  }
  .car-price{
    color:red;
    font-size:12px;
  }
  .mui-media-body{
    font-size:12px;
    white-space:nowrap;
  }
  .product-del{
    color:#589ce9;
  }
  .all-price{
    display:flex;
    justify-content: space-between;
    align-items: center;
  }
  .price-all-font{
    text-align:left;
  }

</style>
