import Vue from "vue";
import VueRouter from "vue-router";
// import HomeView1 from "../views/HomeView1.vue";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  // {
  //   path: "/",
  //   name: "home",
  //   component: HomeView1,
  // },
  {
    path: "/",
    name: "Homeview",
    component: HomeView,
    children:[
      {
        path:"",
        component:()=>import("../views/homes/HomeIndex.vue")
      },
      {
        path:"2-1",
        meta:['数据管理',"用户列表"],
        component:()=>import("../views/homes/HomeUser.vue")
      },
      {
        path:"2-2",
        meta:['数据管理',"商家列表"],
        component:()=>import("../views/homes/HomeShop.vue")
      },
      {
        path:"2-3",
        meta:['数据管理',"食品列表"],
        component:()=>import("../views/homes/HomeFood.vue")
      },
      {
        path:"2-4",
        meta:['数据管理',"菜单列表"],
        component:()=>import("../views/homes/HomeOrder.vue")
      },{
        path:"2-5",
        meta:['数据管理',"管理员列表"],
        component:()=>import("../views/homes/HomePerson.vue")
      }
    ]
  },
  {
    path:"/form1",
    name:"MyForm1",
    component:()=>import("../views/MyForm1.vue")
  },
  {
    path:"/form",
    name:"MyForm",
    component:()=>import("../views/MyForm.vue")
  },
  {
    path:"/login",
    name:"Login",
    component:()=>import("../views/MyLogin.vue")
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = new VueRouter({
  routes,
});
router.beforeEach(function(to,from,next){
  let token = localStorage.getItem('token')
  if(to.name ==="Login"){
    next()
  }else{
    if(!token) return next({name:"Login"})
    if(token) next()
  }

})
export default router;
