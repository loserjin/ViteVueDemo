<template>
  <div>
    <Inject />
    <button @click="changeName">改变名字</button>
  </div>
</template>

<script>
import Inject from './Inject.vue';
import { provide, ref } from 'vue';
export default {
  name:'provide',
  setup() {
    const name = ref('张三');
    // provide传值
    provide('name', name);
    function changeName() {
      name.value = '李四';
    }

    return { changeName };
  },
  components: {
    Inject,
  },
};
</script>

<style lang="scss" scoped></style>
