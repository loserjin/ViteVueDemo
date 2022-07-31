<template>
  <div>
    <h1>{{ couter }}</h1>
    <div>
      <button @click="add">add</button>
      <button @click="minus">minus</button>
    </div>
    <!-- 未用toRefs解构 -->
    <!-- <h1>名字：{{ obj.name }}，年龄：{{ obj.age }}</h1> -->
    <h1>名字：{{ name }}，年龄：{{ age }}</h1>
    <!-- 未用toRefs解构 -->
    <!-- <h1>children:{{ obj.children.name }}</h1> -->
    <h1>children:{{ children.name }}</h1>
    <button @click="changeName">改名字</button>
  </div>
</template>

<script>
import { ref, reactive, toRefs } from 'vue';
export default {
  name: 'Home',
  // setup 组件被创建之前执行，不需要使用this,this不会指向实例
  setup() {
    // 通过ref定义响应式变量（基本数据类型）
    // ref()返回带有value属性的对象
    const couter = ref(0);
    function add() {
      console.log(couter);
      couter.value++;
    }
    function minus() {
      couter.value--;
    }

    // 通过reactive定义引用类型的数据
    const obj = reactive({
      name: 'zhangsan',
      age: 20,
      children: {
        name: '小张',
      },
    });
    function changeName() {
      obj.name = 'lisi';
    }

    // 通过ES6的解构运算符解构的对象会使得它不再是响应式的 return {...obj}
    // toRefs使结构后的对象重新获得响应式
    // let {name,children} = toRefs(obj); return {name,children}
    return { couter, add, minus, ...toRefs(obj), changeName };
  },
  beforeCreate() {},
  created() {},
};
</script>

<style lang="scss" scoped></style>
