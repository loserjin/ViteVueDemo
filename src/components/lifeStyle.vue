<template>
  <div>
    <h1>生命周期</h1>
    <button @click="changeTitle">改变title</button>
    <SetUp :title="title" class="box" @injectCounter="injectCounter" />
  </div>
</template>

<script>
import SetUp from './setup.vue';
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, ref } from 'vue';
export default {
  setup() {
    // 在setup中使用生命周期钩子函数
    // 函数中有一个参数，是一个回调函数
    onBeforeMount(() => {
      console.log('BeforeMount');
    });
    // 可多次使用执行
    onBeforeMount(() => {
      console.log('BeforeMount');
    });

    onMounted(() => {
      console.log('mounted');
    });

    onBeforeUpdate(() => {
      console.log('beforeUpdate');
    });

    onUpdated(() => {
      console.log('update');
    });

    const title = ref('hhhh');
    function changeTitle() {
      title.value = 'pppp';
    }

    //接受子组件传过来的数据
    function injectCounter(value) {
      console.log(value);
    }
    return { title, changeTitle, injectCounter };
  },
  // methods: {
  //   injectCounter(value) {
  //     console.log(value);
  //   },
  // },
  // mounted(){
  //   // 接收子组件通过context.expose暴露出来的数据
  //   // this.$refs.content.xxx
  // },
  // 组件注册
  components: {
    SetUp,
  },
};
</script>

<style lang="scss" scoped></style>
