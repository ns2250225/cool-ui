<template>
  <div class="co-badge">
    <slot></slot>
    <sup
        v-show="!hidden && (content || content === 0 || isDot)"
        v-text="content"
        class="co-badge__content"
        :class="[
            'co-badge__content--' + type,
            {
            'is-fixed': $slots.default,
            'is-dot': isDot
            }
        ]">
    </sup>
  </div>
</template>

<script>
export default {
  name: 'co-badge',
  props: {
    value: {},
    max: Number,
    isDot: {
      type: Boolean,
      default: false
    },
    hidden: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      validator(val) {
        return ['primary', 'success', 'warning', 'info', 'danger'].indexOf(val) > -1
      }
    }
  },
  computed: {
    content() {
      if (this.isDot) return
      const value = this.value
      const max = this.max
      if (typeof value === 'number' && typeof max === 'number') {
        return max < value ? `${max}+` : value
      }
      return value
    }
  }
}
</script>