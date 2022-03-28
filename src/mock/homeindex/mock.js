let Mock = require("mockjs")
let data = [
    {id:0,name:"黄安",text:"我是阿星，我最恶心"},
    {id:1,name:"郑威",text:"我是阿威，我喜欢黄安"},
    {id:2,name:"冯广志",text:"我是广志，我最666"},
    {id:3,name:"王赛军",text:"我是阿赛，我最no.1"},
    {id:4,name:"猪猪侠",text:"我是GGbo，我最爱吃棒棒糖"},
    {id:5,name:"蔡旭坤",text:"我是阿坤，我会唱 跳 rap"},
]
Mock.mock("/api/homeindex",'get',function(config){
    console.log(config)
    return data
})
Mock.mock(/\/api\/homeindex\/\d/,"delete",function(config){
    console.log(config)
    let arr = config.url.split("/") 
    let id = arr.pop()
    data.splice(id,1)
    // data.forEach(function(item,index){
    //     item.id = index
    // })
    data = data.map(function(item,id){
        return{
            id,
            name:item.name,
            text:item
        }
    })
    return data
})
Mock.mock(/\/api\/homeindex\/edit\/\d/,'put',function(config){
    console.log(config)
    let canshu = config.body
    let arr = config.url.split("/") 
    let id = arr.pop()
    canshu = JSON.parse(canshu)
    data[id].name = canshu.name
    data[id].text = canshu.text
    return data
})
Mock.mock("/api/homeindex","post",function(config){
    let obj = JSON.parse(config.body)
    let name = obj.name
    let text = obj.text
    data.push({id:data.length,name,text})
    return data
})