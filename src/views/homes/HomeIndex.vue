<template>
  <div>
    <el-table :data="arrs">
      <el-table-column prop="id" label="id"> </el-table-column>
      <el-table-column prop="name" label="姓名"> </el-table-column>
      <el-table-column prop="text" label="文本"> </el-table-column>
      <el-table-column label="操作">
        <!-- 编辑 删除 -->
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
            >编辑</el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <el-button type="primary" class="addbtn" @click="addfn(1)">
        增加用户
    </el-button>
    <span>{{this.$store.state.count}}</span>




    <!-- 弹窗 -->
    <el-dialog :title="i==1?'添加用户':'编辑'" :visible.sync="dialogFormVisible">
  <el-form :model="form">
    <el-form-item label="姓名" :label-width="formLabelWidth">
      <el-input v-model="form.name" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="文本" :label-width="formLabelWidth">
        <el-input v-model="form.text" autocomplete="off"></el-input>    
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary"  @click="fnsure">确 定</el-button>
  </div>
</el-dialog>

  </div>
</template>

<script>
import instance from "../../api/index";
export default {
  name: "HomeIndex",
  methods: {
    addfn(i){
        //添加业务
        this. i = i
        console.log(i)
        this.form.name = ""
        this.form.text = ""
        this.dialogFormVisible = !this.dialogFormVisible
    },
    fnsure(){
        this.dialogFormVisible = false
        if(this.i ===1 ) this.handleAdd() //添加业务
        // 数组凹陷
        this.editHomeIndex()  //修改业务
    },
    async handleAdd(){
        //添加业务
        let name = this.form.name
        let text = this.form.text
        let {data} = await instance.post("/homeindex",{name,text})
        console.log(data)
        this.getHomeIndex()
    },
    async getHomeIndex() {
      let { data } = await instance.get("/homeindex");
      this.arrs = data;
      console.log(this.arrs);
    },
    handleEdit(index, row) {
      this.i = 0
      //用户行为
      console.log(index, row);
      this.dialogFormVisible = !this.dialogFormVisible
      this.form.name = row.name
      this.form.text = row.text
      this.form.id = row.id
    },
    handleDelete(index, row) {
      //用户行为
      console.log(index, row);
      this.$confirm("您确定删除该条信息吗？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          //  确定的回调函数
          console.log("删除成功");
          this.deleteHomeIndex(index)
        })
        .catch(() => {
          console.log("取消删除");
        });
    },
    // 删除业务
    async deleteHomeIndex(index) {
        let {data} = await instance.delete("/homeindex/"+index)
        console.log(data)
        this.getHomeIndex()
        
    },
    // 编辑业务
    async editHomeIndex() {
        let name = this.form.name;
        let text = this.form.text;
        let id = this.form.id;
        console.log(name,text)
        let {data} = await instance.put("/homeindex/edit/"+id,{name,text})
        console.log(data)
        this.getHomeIndex()
    },

  },
  data() {
    return {
      arrs: null,
      debounceedit: null, //新业务防抖封装
      debouncedelete: null, 
      dialogFormVisible:null,
      form:{
          name:"张三",
          text:"想要去那遥远地方",
          id:0
      },
      formLabelWidth:"120px",
      i:0   //区分是添加业务还是
    };
  },
  created() {
    this.getHomeIndex();
  },
};
</script>
<style scoped>
.addbtn{
    float: right;
    margin-right: 270px;
    margin-top: 40px;
}
</style>