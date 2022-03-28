import Vuex from 'vuex'
import Vue from "vue"
Vue.use(Vuex)   //在vue应用中安装vuex
let store1 = new Vuex.Store({
    state:{
        count:0
    },    //存放数据
    mutations:{ //存放用户提交的方法(业务函数)
        //mutations 唯一修改 state 的方法
        increment(state,payload){   //修改 state 的业务函数
            //store.commit 提交业务函数
            // 每个mutataions 的第一个参数就是state本身
            console.log()
            state.count = state.count+payload
        },
        reduce(state,payload){
            state.count = state.count - payload
        }
    },
    actions:{
        asyncincrement(context,payload){
            //存放异步的 提交mutation
            // 每个 action 的第一个参数是上下文对象 就是store
            setTimeout(function(){
                context.commit('increment',payload)
                console.log(payload)
            },2000)
        }
    }

})

export default store1
