<template>
  <div>
    <SetUp />
    <h1>{{ counter }}</h1>
  </div>
</template>

<script setup>
// 顶层的绑定会被暴露给模板
// 使用setup语法糖的用处,把整个script标签中的区域都化为setup函数中的区域
// 组件直接引进来就可以使用无需在components中注册
import SetUp from './setup.vue';
// 定义变量,在模板使用不需要暴露出去,模板直接使用
// 定义响应式的变量,还是需要从vue中引入
import { ref } from 'vue';
const counter = ref(0);
console.log(counter);
</script>

<style lang="scss" scoped></style>
