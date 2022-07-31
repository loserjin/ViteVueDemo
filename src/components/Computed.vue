<template>
  <div>
    <h1>computed试验</h1>
    <h2>{{ msg }}</h2>
  </div>
</template>

<script>
import { ref, reactive, watch, toRefs, watchEffect, computed } from 'vue';
export default {
  // 组合式API，将同一个逻辑关注点相关代码收集在一起
  name: 'Watch',
  setup(props) {

    const counter = ref(0);
    const msg = ref('helloworld');

    // computed使用
    const reverseMsg = computed(() => {
      // 返回一个带有value属性的对象
      return msg.value.split('').reverse().join('');
    });
    console.log(reverseMsg.value); // 读取

    const user = reactive({
      name: 'xxx',
      age: 24,
      // computed对象内部使用
      reverseMsg: computed(() => {
        // 返回一个带有value属性的对象
        return msg.value.split('').reverse().join('');
      }),
    });
    
    return { counter, msg };
  },
  // 选项式API
  // computed:{
  //   reverseMsg:function(){
  //     return this.message.split('').reverse().join('')
  //   }
  // }
};
</script>

<style lang="scss" scoped></style>
