// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.filter("newDate",function(dateStr){

  var dt =new Date(dateStr);

  var y=dt.getFullYear();
  var m=dt.getMonth()+1;
  var d=dt.getDate();
  return y+"-"+m+"-"+d;

})





// 导入mint组件库
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.use(MintUI)
//导入mui组件库
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'




//导入vue-resource
import VueResource from "vue-resource"
Vue.use(VueResource)

//全局定义数据上传数据格式
Vue.http.options.emulateJSON = true;

//导入vuex,全局数据商店
import Vuex from 'vuex'
Vue.use(Vuex)


const car = JSON.parse(localStorage.getItem('car' )|| "[]")
//建立一个vuex实例
const store = new Vuex.Store({

    state:{//存放数据的地方$store.state.xxx
       car:car//将购物车中的商品数据吗，用一个 数组存储起来，{id:"",count:"购买的数量",price:"商品的单价"}
    },
    mutations:{//存放方法的地方 this.$store.commit("函数名")，按需传入唯一参数
          addToCar(state,productList){

            var flag=false;//先默认是没有的，继续下面的函数

            state.car.some(item=>{

              if(item.id==productList.id){

                item.count += parseInt( productList.count );

                flag=true;
                return true;
              }
            })
            if(!flag){
              state.car.push(productList)
            }//将添加的商品加到car[]里面去

            localStorage.setItem('car',JSON.stringify(state.car))

          },
          clearMore(state){

            localStorage.clear(state.car);

          },

      // changeNewCount(state,newCount){
      //
      //   state.car.some(item => {
      //
      //     if(item.id == newCount.id){
      //
      //       item.count = parseInt(newCount.count)
      //       return true
      //
      //     }
      //
      //   })
      //   //再次存入到本地存储中
      //   localStorage.setItem('car',JSON.stringify(state.car))
      //
      // },

      //添加数字
      addproductNum(state,newCount){
          state.car.some(item => {

            if(item.id == newCount.id){
              item.count += 1
              return true
            }

          })

        localStorage.setItem('car',JSON.stringify(state.car))

      },

     //减少数字
      moveproductNum(state,newCount){
        state.car.some(item => {

          if(item.id == newCount.id){
            item.count -= 1
            return true
          }

        })

        localStorage.setItem('car',JSON.stringify(state.car))

      },

      removeFormCar(state,id){
                state.car.some((item,i)=>{

                  if(item.id = id){
                    state.car.splice(i,1)
                    return true
                   }

                })
        localStorage.setItem('car',JSON.stringify(state.car))
      },
      //存储开关状态的改变
      changeSwitch(state,Switch){

            state.car.some(item =>{
              if(item.id == Switch.id){

                 item.seleted = !item.seleted


              }
            })
        localStorage.setItem('car',JSON.stringify(state.car))
      }

    },
  getters:{//调取的方法this.$store.getters.***

      getallCount(state){

        var c=0;
        state.car.forEach(item => {

          c += parseInt(item.count)

        })

        return c
      },//计算购物车中所有的商品总数

      priceCount(state){
        var dd=0;
        state.car.forEach(item =>{

          if(item.seleted == true){

            dd += parseInt(item.count)

          }
        })

        return dd
      },

    allPrice(state){
        var priceall=0;
      state.car.forEach(item =>{

        if(item.seleted == true){

          priceall += parseInt(item.count)*parseInt(item.price)

        }
      })
      return priceall
    }


  }



})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  render:c => c(App),
  store,
  router,
  components: { App },
  template: '<App/>'
})
