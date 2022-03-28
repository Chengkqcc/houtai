<template>
    <div>
        <button @click="add(5)">增加</button>
        <button @click="jian(2)">减少</button>
        <p>{{this.$store.state.count}}</p>
    </div>
</template>

<script>
    export default ({
        name: "HomeUser",
        methods: {
            add(a){  //用户行为
                //提交修改count的业务函数 业务函数在store里
                // 不能直接修改count
                // this.$store.commit("increment")
                this.$store.dispatch('asyncincrement',a)
                //dispatch 给 actions 提交方法
            },
            jian(a){
                this.$store.commit('decrement',a)
            }
        }
    })
</script>
<style scoped>

</style>