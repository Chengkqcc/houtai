<template>
  <div class="home">
    <el-container>
        <el-aside>
          <el-menu>
            <!-- 菜单组件 -->
            <el-submenu index="1">
              <!-- 二级菜单 -->
              <template slot="title">
                <i class="el-icon-message"></i>导航1
              </template>
              <el-menu-item-group>
                <template slot="title">分组一</template>
                <el-menu-item>
                  选项一
                </el-menu-item>
                <el-menu-item>
                  选项二
                </el-menu-item>
              </el-menu-item-group>
              <!-- 分组二 -->
              <el-menu-item-group title="分组2">
                <el-menu-item>选项3</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-container>
          <el-header>
            z
          </el-header>
          <el-main>
            s
          </el-main>
        </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  components: {
  },
  mounted(){
  }
};
</script>
