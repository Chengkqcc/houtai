<template>
  <div class="about">
    <el-row class="demo-autocomplete">
            <el-col :span="12">
                
        <div class="sub-title">激活即列出输入建议</div>
                <el-autocomplete
          class="inline-input"
          v-model="state1"
          :fetch-suggestions="querySearch"
          placeholder="请输入内容"
          @select="handleSelect"
        ></el-autocomplete>
              </el-col
      >
            <el-col :span="12">
                
        <div class="sub-title">输入后匹配输入建议</div>
                <el-autocomplete
          class="inline-input"
          v-model="state2"
          :fetch-suggestions="querySearch"
          placeholder="请输入内容"
          :trigger-on-focus="false"
          @select="handleSelect"
        ></el-autocomplete>
              </el-col
      >
          </el-row
    >
  </div>
</template>
<script>
  export default {
    data() {
      return {
        restaurants: [],
        state1: '',
        state2: ''
      };
    },
    methods: {
      querySearch(queryString, cb) {
        var restaurants = this.restaurants;
        var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
        // 调用 callback 返回建议列表的数据
        // arr.filter(function(item){
        //   return item == "222"
        // })
        
        cb(results);
      },
      createFilter(queryString) {
        return (restaurant) => {
          return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
      },
      loadAll() {
        return [
          {value:"王赛军",address:'605'},
          {value:"王雪婷",address:'302'},
          {value:"王泽豪",address:"605"},
          {value:"李晓涛",address:"605"},
          {value:"吴炳兴",address:"605"},
          {value:"左一诺",address:"302"},
          {value:"王赛军",address:"605"},

        ];
      },
      handleSelect(item) {
        console.log(item);
      }
    },
    mounted() {
      this.restaurants = this.loadAll();
    }
  }
</script>
