import Vue from 'vue'
import Router from 'vue-router'
import Top from '@/components/teb/Top.vue'
import Message  from  '@/components/teb/Message.vue'
import Buycar  from  '@/components/teb/Buycar.vue'
import Mind  from  '@/components/teb/Mind.vue'
import TopNews  from  '@/components/toplist/topnews.vue'
import TopMessage  from  '@/components/toplist/topMessage.vue'
import TopImage  from  '@/components/toplist/topemail.vue'
import TopDress from  '@/components/toplist/topDress.vue'
import TopSearch from '@/components/toplist/topSearch.vue'
import TopIphon from '@/components/toplist/topIphon.vue'
import Newinfo from '@/components/toplist/newinfo.vue'
import Photoinfo from '@/components/photo/photoinfo.vue'
import Productinfo from '@/components/product/productinfo.vue'
import Productdesc from '@/components/product/productdesc.vue'
import Productcomment from '@/components/product/productcomment.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {path:"/",redirect:'Top'},
    {path: '/top', component: Top},
    {path: '/message', component: Message},
    {path: '/buycar', component: Buycar},
    {path: '/mind', component: Mind},
    {path: '/top/topnews', component: TopNews},
    {path: '/top/topmessage', component: TopMessage},
    {path: '/top/topimage', component: TopImage},
    {path: '/top/topdress', component: TopDress},
    {path: '/top/topsearch', component: TopSearch},
    {path: '/top/topiphon', component: TopIphon},
    {path: '/top/topnews/newinfo/:id', component: Newinfo},
    {path:'/top/topmail/photoinfo/:id',component:Photoinfo},
    {path:'/top/topMessage/productinfo/:id',component:Productinfo},
    {path:'/top/topMessage/productinfo/productdesc/:id',component:Productdesc,name:"productdesc"},
    {path:'/top/topMessage/productinfo/productcomment/:id',component:Productcomment,name:"productcomment"}

  ],
  linkActiveClass:"mui-active"
})
