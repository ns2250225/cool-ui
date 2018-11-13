<template>
  <nav class="top-navbar">
    <span class="navbar-toggle" @click="toggleCollapse">
        <i class="icon-dakai"></i>
    </span>
    <a href="#" class="logo"><slot name="logo">CoolUI</slot></a>
    <ul class="main-nav" :class="{ active: isActive }" >
      <li v-for="item in menuData" :key="item">
        <router-link :to="item.path" class="nav-links"><i :class="item.icon"></i>{{ item.title }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'co-topnav',
  props: {
    menuData: {
      type: Array,
      required: true
    },
    collapsed: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
        isActive: false
    }
  },
  created() {
  },
  methods: {
    toggleCollapse() {
      this.isCollapsed = !this.isCollapsed
      this.isActive = !this.isActive
      this.$emit('collapse', this.isCollapsed)
    }
  }
}
</script>


<style lang="scss">
</style>
