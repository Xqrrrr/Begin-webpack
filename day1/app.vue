<template>
  <div>
    <p class="name">{{name}}</p>
    <p class="name">{{love}}</p>
    <name-input :name="name" v-model="name" @focus="add()"></name-input>
    <child-a :p-child1="child1" :p-child2="child2" v-on:test1="onTest1" v-on:test2="onTest2"></child-a>
  </div>
</template>

<script>
import nameInput from './name.vue';
import childA from './childA.vue'
export default {
  name: 'app',
  data () {
    return {
      name: '肖齐睿',
      love: '2',
      test: 'test',
      child1: 'child1',
      child2: '这是child2，从第一个组件传过来的'
    }
  },
  components: {
    nameInput,
    childA
  },
  methods: {
    add () {
      console.log(1121231233)
    },
    onTest1 () {
      console.log("test1 runing")
    },
    onTest2 () {
      console.log("test2 runing")
    },
  }

}
</script>

<style scoped>
body {
  padding: 0;
  margin: 0;
}
.name {
  color: red;
  font-size: 22px;
  font-weight: bold;
  border: 1px solid #ccc;
}
</style>
