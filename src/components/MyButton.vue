<template>
    <div>
        <div class="btn">
            <p>666啊</p>
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default ({
        name: "MyButton",
        methods: {
            
        }
    })
</script>
<style scoped>
.btn{
    background: red;
}
</style>