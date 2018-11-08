<template>
  <div class="co-select">
    <div class="inner" v-clickOut="test">
      <div class="inputWrapper" @click="showOptions = !showOptions">
        <input type="text" readonly placeholder="请选择" :value="selected">
      </div>
      <ul class="options" v-show="showOptions">
        <li v-for="(item, index) in options" :key="index" @click="choose(item.value)">{{item.label ? item.label : item.value}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'co-select',
  data() {
    return {
      selected: '',
      showOptions: false
    }
  },
  props: {
    options: {
      type: Array,
      default: []
    }
  },
  methods: {
    choose(name) {
      this.showOptions = false
      if (name !== this.selected) {
        this.selected = name
        this.$emit('selected', name)
      }
    },
    outsideDirec() {
      this.showOptions = false
    },
    test() {
      this.showOptions = false
    },
    example2() {
      return 'xxx'
    }
  },
  directives: {
    clickOut: {
      bind: function(el, binding) {
        function handler(e) {
          if (el.contains(e.target)) return false
          if (binding.expression) {
            binding.value()
          }
        }
        el.handler = handler
        document.addEventListener('click', el.handler)
      },
      unbind: function(el) {
        document.removeEventListener('click', el.handler)
      }
    }
  }
}
</script>


<style lang="scss" scoped>
</style>