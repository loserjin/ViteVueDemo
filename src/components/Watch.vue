<template>
  <div>
    <h1>watch试验</h1>
    <h2>{{ counter }}</h2>
    <button @click="changeCounter">changeCounter</button>
    <h2>{{ user.name }}</h2>
    <button @click="changeUseName">changeName</button>
  </div>
</template>

<script>
import { ref, reactive, watch, watchEffect } from 'vue';
export default {
  // 组合式API，将同一个逻辑关注点相关代码收集在一起
  name: 'Watch',
  setup(props) {
    // 关于props的解构
    // const title=toRefs(props,'title');
    // console.log(title.value)
    const counter = ref(0);
    function changeCounter() {
      counter.value++;
    }
    // 监听基本数据
    // watch(侦听的响应式引用，回调函数)
    watch(counter, (newVal, oldVal) => {
      console.log(`.......${oldVal}`);
      console.log(`.......${newVal}`);
    });

    const user = reactive({
      name: 'xxx',
      age: 24,
    });
    function changeUserName() {
      user.name = 'ooo';
    }
    // 监听引用数据类型无法监听到属性改变
    watch(user, (newVal, oldVal) => {
      console.log(`.......${oldVal}`);
      console.log(`.......${newVal}`);
    });
    // watchEffect(回调函数)注意：不需要指定监听的属性，组件初始化的时候会自动执行一次回调函数，自动收集依赖
    watchEffect(() => {
      console.log(user.name);
    });

    return { counter, changeCounter, user, changeUserName };
  },
};
</script>

<style lang="scss" scoped></style>
