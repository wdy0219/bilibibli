import Vue from 'vue'
import VueRouter from 'vue-router'
import register from '../views/Register.vue'
import login from '../views/Login.vue'
import userinfo from '../views/Userinfo.vue'
import edit from '../views/Edit.vue'
import home from '../views/Home.vue'


Vue.use(VueRouter)

const routes = [
  { path: '/', 
    component: home,
    
  },
  
  {
    path: '/register',
    component: register
  },
  {
    path: '/login',
    component: login
  },
  {
    path: '/userinfo',
    component: userinfo,
    meta:{
      istoken:true
    }
  },
  {
    path:'/edit',
    component: edit,
    meta:{
      istoken:true
    }
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to,from,next) => {
  // console.log(to); 

  if (!localStorage.getItem('token') && !localStorage.getItem('id') && to.meta.istoken == true) {
    router.push('/login')
    Vue.prototype.$msg.fail('请重新登录')
    return
  }
  next()
})

export default router
