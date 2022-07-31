<template>
  <div>
    <h1>setup的两个参数</h1>
    <h2>父组件传来的参数：{{ props.title }}</h2>
    <h2>{{ title }}</h2>
    <button @click="sendParent">子传父</button>
  </div>
</template>

<script>
import { toRefs, onUpdated, ref } from 'vue';
export default {
  name: 'SetUp',
  props: {
    title: {
      type: String,
      default: '空',
      require: true,
    },
  },
  setup(props, context) {
    // context:{attrs,slots,emit,expose}
    // console.log(props);
    // context.attrs

    const { title } = toRefs(props);
    onUpdated(() => {
      // 经过toRefs处理后的title变成了带有value的对象了
      console.log(title.value);
    });

    // 通过contex.$emit实现子传父
    const counter = ref(20);
    function sendParent() {
      context.emit('injectCounter', counter.value);
    }

    // 当setup retur的是一个函数时 通过context.expose暴露像暴露的数据
    // context.expose({
    //   sendParent,
    //   counter,
    // });
    // return () => h('div', counter.value);

    return { props, title, sendParent };
  },
};
</script>

<style lang="scss" scoped></style>
