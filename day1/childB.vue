<template>
  <div>
    <p>in child2:</p>
    <p>props: {{pChild2}}</p>
    <p>$attrs: {{$attrs}}</p>
    <input @input="add()" />
  </div>
</template>

<script>
export default {
  props: ['pChild2'],
  data () {
    return {};
  },
  inheritAttrs: false,
  methods: {

  },
  mounted () {
    this.$emit('test2');
  }
}
</script>

<style scoped>
</style>
