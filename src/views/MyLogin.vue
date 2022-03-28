<template>
    <div class="login">

        <div class="myform">
                    <div class="title">
            <h3>SEEC 3 后台管理系统</h3>
        </div>
            <el-form :model="formdata" :rules="rules">
                <el-form-item prop="user">
                    <el-input v-model="formdata.user" placeholder="username"></el-input>
                </el-form-item>
                <el-form-item prop="pw">
                    <el-input v-model="formdata.pw" placeholder="password"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" class="btn" @click="submitfn">登录</el-button>
                </el-form-item>
            </el-form>
            <p class="tip">温馨提示：</p>
            <p class="tip">未登录过的新用户，自动注册</p>
            <p class="tip">注册过的用户可凭账号密码登录</p>
        </div>
    </div>
</template>

<script>
import instance from "../api/index.js"
    export default ({
        name: "MyLogin",
        methods: {
            submitfn(){
                //点击提交业务
                // this.loginfn()
                this.newdebouncefn()
            },
            async loginfn(){
                //登录业务
                let user = this.formdata.user
                let pw = this.formdata.pw
                let {data} = await instance.post("/login",{user,pw})
                console.log(data)
                // 存 token
                if(data.message === "fail") return this.$message.error("登录失败")
                if(data.message === "success"){
                    localStorage.setItem("token",data.data.token)
                    this.$message({
                        type:"success",
                        message:"登陆成功",
                        duration:2000,
                        onClose:()=>{
                            this.$router.push("/")
                        }
                    })
                    
                }
            }
        },
        data(){
            let userfn = function(rule,value,callback){
                console.log(rule)
                let rg = /^[A-z]\w{2,6}\w$/
                if(rg.test(value)) return
                return callback(new Error("用户格式不对"))
            }
            let userfn2 = function(rule,value,callback){
                console.log(rule)
                let rg = /^\w{2,6}/
                if(rg.test(value)) return
                return callback(new Error("密码格式不对"))
            }
            return{
                formdata:{
                    user:"admin",
                    pw:'123456'
                },
                rules:{
                    user:[
                        {validator:userfn,trigger:"blur"}
                    ],
                    pw:[{validator:userfn2,trigger:"blur"}]
                },
                newdebouncefn:null  //用于接收防抖封装后的业务函数
            }
        },
        created(){
            // instance.post("/login",{user:"admin",pw:"123456"})
            // .then(res=>console.log(res.data))
            this.newdebouncefn = this.debouncefn(this.loginfn,1000)
            //就是防抖封装后的新的业务函数
        }
    })
</script>
<style scoped>
.tip{
    font-size: 12px;
    color: red;
    text-align: center;
}
.btn{
    width: 100%;
}
.login{
    width: 100vw;
    height: 100vh;
    background: #324057;
}
.title{
    width: 100%;
    position: absolute;
    top: -50px;    

}
.login .title h3{
    color: #fff;
}
.login .myform{
    background: #fff;
    width: 370px;
    height: 260px;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -185px;
    margin-top: -130px;
    box-sizing: border-box;
    padding: 20px 20px 0px;
}
</style>