<template>
  <div>
    <input v-model="value" v-on="inputListeners" />
  </div>
</template>

<script>
export default {

  props: {
    name: {
      type: String,
      defulat () {
        return ''
      }
    }
  },
  data () {
    return {
      value: this.name
    }
  },
  computed: {
    inputListeners () {
      var _this = this;
      return Object.assign({},
        this.$listeners,
        {
          input (event) {
            _this.$emit('input', event.target.value)
          }
        }
      )
    }
  },
  methods: {
    input ($event) {
      this.$emit('input', $event.target.value)
    }
  }
  ,
  mounted () {

  },
  updated () {
    //在data中的数据改变的时候会进入update,数据改变就会进入update

  }
}
</script>

<style scoped>
</style>
