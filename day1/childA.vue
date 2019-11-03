<template>
  <div>
    <p>in child1:</p>
    <p>props: {{pChild1}}</p>
    <p>$attrs: {{$attrs}}</p>
    <p>$listeners: {{$listeners}}</p>

    <child-b v-bind="$attrs" v-on="$listeners"></child-b>
  </div>
</template>

<script>
import childB from './childB.vue'
export default {
  props: ['pChild1'],
  data () {
    return {};
  },
  inheritAttrs: false,
  components: { childB },
  mounted () {
    this.$emit('test1');

  }

}
</script>

<style scoped>
</style>
