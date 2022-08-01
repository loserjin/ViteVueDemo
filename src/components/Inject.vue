<template>
  <div>
    <h1>inject</h1>
    <h2>provide过来的值{{ name }}</h2>
  </div>
</template>

<script>
import { inject } from 'vue';
export default {
  name: 'Inject',
  setup() {
    // 接收provide传来的值
    const name = inject('name');
    return { name };
  },
};
</script>

<style lang="scss" scoped></style>
