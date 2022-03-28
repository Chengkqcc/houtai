<template>
    <div>
        <el-form :model="form" :rules="rules">
            <el-form-item prop='name'>
                <!-- 用户名的输入 -->
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item prop='pw'>
                <!-- 密码框的输入 -->
                <el-input v-model="form.pw"></el-input>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default ({
        name: "MyForm1",
        methods: {
            
        },
        data() {
            return {
                form:{
                    name:"赛君",
                    pw:"123456"
                },
                rules:{
                    name:[
                        {type:"string",required:true,pattern:/zhangsan/,message:"用户名错误"}
                    ],
                    pw:[]
                }
            }
        },
    })
</script>
<style scoped>

</style>