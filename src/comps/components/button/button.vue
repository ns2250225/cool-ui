<template>
    <button 
        class="co__btn"
        @click="handleClick"
        :style="{backgroundColor: bgColor, color: color, 'border-color':borderColor}"
        :class="[
        'co__btn--'+type,
        {'is-plain': plain, 'is-round': round, 'is-cycle': cycle,'is-long': long, 'co__btn--block': block, 'no-radius': noRadius},
        iconClass
        ]"
        :disabled="disabled"
    >
        <i :class="icon" v-if="icon"></i>
        <i class="iconfont icon-icon_loading" v-if="loading && !icon"></i>
        <slot></slot>
    </button>
</template>

<script>
export default {
  name: 'co-button',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    long: Boolean,
    loading: {
      type: Boolean,
      default: false
    },
    noRadius: {
      type: Boolean,
      default: false
    },
    bgColor: {
      type: String,
      default: ''
    },
    borderColor: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: ''
    },
    block: Boolean,
    disabled: Boolean,
    plain: Boolean,
    round: Boolean,
    cycle: Boolean
  },
  methods: {
    handleClick (event) {
      if (this.disabled) return
      this.$emit('click', event)// 传播方法名为click，你也可以自定义其他名字
    }
  },
  computed: {
    iconClass () {
      if (this.icon !== '') return 'co__hasIconBtn'
    },
    disabled () {
      if (this.loading && this.icon == '') return true
    }
  }
}
</script>

<style scoped lang="scss">
.iconfont.icon-icon_loading {
  animation: spin 1250ms linear infinite;
}
</style>
