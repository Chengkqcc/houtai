<template>
  <div>
    <el-form :model="form" :rules="rules">
      <el-form-item prop="name">
        <!-- 用户名的输入 -->
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item prop="pw">
        <!-- 密码框的输入 -->
        <el-input v-model="form.pw"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "MyForm",
  methods: {},
  data() {
    let myfn = function(rule,value,callback){
        console.log(rule,value)
        //rule 是校验规则
        // value是表单值
        let rg = /\d/
        console.log(rg.test(value))
        if(!rg.test(value)){
            return callback(new Error("信息不对"))
        }
        
    }
    return {
      form: {
        name: "赛君",
        pw: "123456",
      },
      rules: {
        name: [
          {
            validator:myfn,
            trigger:"blur"
          }
        ],
        pw: [],
      },
      //valitor 跟 message pattren 等二选一
      //trigger 什么时候触发正则校验 值是事件名
    };
  },
};
</script>
<style scoped>
</style>