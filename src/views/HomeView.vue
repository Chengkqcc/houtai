<template>
  <div>
    <el-container>
      <el-aside style="background-color: rgb(50, 64, 87)" class="aside">
        <el-menu style="background=color:rgb(50,64,87) text-color:#fff" :router="true">
          <!-- 1级菜单 -->
          <el-menu-item class="item" index="/">
            <i class="el-icon-menu"></i>
            <span slot="title" >首页</span>
          </el-menu-item>
          <!-- 二级菜单 -->
          <el-submenu index="2" class="item">
            <template slot="title">
              <i class="el-icon-document"></i>
              <span>数据管理</span>
            </template>
            <el-menu-item-group style="background-color: rgb(50, 64, 87)">
              <el-menu-item index="2-1" style="color: #fff"
                >用户列表</el-menu-item
              >
              <el-menu-item index="2-2" style="color: #fff"
                >商家列表</el-menu-item
              >
              <el-menu-item index="2-3" style="color: #fff"
                >食品列表</el-menu-item
              >
              <el-menu-item index="2-4" style="color: #fff"
                >订单列表</el-menu-item
              >
              <el-menu-item index="2-5" style="color: #fff"
                >管理员列表</el-menu-item
              >
            </el-menu-item-group>
          </el-submenu>
          <!-- 二级菜单 添加数据 -->
          <el-submenu index="3" class="item">
            <template slot="title">
              <i class="el-icon-plus"></i>
              <span>添加数据</span>
            </template>
            <el-menu-item-group style="background-color: rgb(50, 64, 87)">
              <el-menu-item index="3-1" style="color: #fff"
                >用户列表</el-menu-item
              >
              <el-menu-item index="3-2" style="color: #fff"
                >商家列表</el-menu-item
              >
            </el-menu-item-group>
          </el-submenu>
          <!-- 二级菜单图表分布 -->
          <el-submenu index="4" class="item">
            <template slot="title">
              <i class="el-icon-star-on"></i>
              <span>图表</span>
            </template>
            <el-menu-item-group style="background-color: rgb(50, 64, 87)">
              <el-menu-item index="4-1" style="color: #fff"
                >用户分布</el-menu-item
              >
            </el-menu-item-group>
          </el-submenu>
          <!-- 二级菜单编辑 -->
          <el-submenu index="5" class="item">
            <template slot="title">
              <i class="el-icon-edit"></i>
              <span>编辑</span>
            </template>
            <el-menu-item-group style="background-color: rgb(50, 64, 87)">
              <el-menu-item index="5-1" style="color: #fff"
                >文本编辑</el-menu-item
              >
            </el-menu-item-group>
          </el-submenu>
          <!-- 设置 -->
          <el-submenu index="6" class="item">
            <template slot="title">
              <i class="el-icon-setting"></i>
              <span>设置</span>
            </template>
            <el-menu-item-group style="background-color: rgb(50, 64, 87)">
              <el-menu-item index="6-1" style="color: #fff"
                >管理员设置</el-menu-item
              >
            </el-menu-item-group>
          </el-submenu>
          <!-- 说明 -->
          <el-submenu index="7" class="item">
            <template slot="title">
              <i class="el-icon-warning"></i>
              <span>说明</span>
            </template>
            <el-menu-item-group style="background-color: rgb(50, 64, 87)">
              <el-menu-item index="7-1" style="color: #fff">说明</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header class="header">
          <!-- 面包屑 -->
          <div>
            <el-breadcrumb separator="/">
              <el-breadcrumb-item :to="{path:'/'}">首页</el-breadcrumb-item>
               <el-breadcrumb-item v-for="(item,index) in this.$route.meta" :key="index">{{item}}</el-breadcrumb-item>
            </el-breadcrumb>
          </div>
          <!--  -->
          <div>
            <el-dropdown >
              <img src="@/assets/logo.png" class="img" alt="" />
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>首页</el-dropdown-item>
                <el-dropdown-item>退出</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  methods: {},
  mounted(){

  }
};
</script>
<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #eff2f7;
}
.img {
  width: 36px;
  height: 36px;
  border-radius: 50%;
}
.aside .item:hover {
  background: #817f7f;
}
.aside {
  height: 100vh;
}
.aside .item {
  background: rgb(50, 64, 87);
}
.aside .item span {
  color: #fff;
}
</style>