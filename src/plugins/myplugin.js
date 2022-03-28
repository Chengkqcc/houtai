// 插件
// let myplugin = {
//     install(Vue){
//         // 把插件都挂载 VUE的原型上
//         Vue.prototype.cuiplugin = function(){
//             //业务
//             console.log("chengkeqiang")
//         }
//     }
// }


let myplugin = function(Vue) {
    Vue.prototype.cfn = function() {
        console.log("====")
    }
    //防抖
    Vue.prototype.debouncefn = function(fn,wait){
        let timer = null;
        return function(){  //被封装后的新的业务函数
            clearTimeout(timer)
            timer = setTimeout(function(){
                fn()
            },wait)
        }
    }
}
export default myplugin