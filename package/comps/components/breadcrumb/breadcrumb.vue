<template>
  <div class="co-breadcrumb">
    <ul class="breadcrumb">
        <li v-for="(data, index) of datas" :key="index"><router-link :to="data.path"><i :class="data.icon"></i>{{ data.title }}</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'co-breadcrumb',
  props: {
    datas: {
      Array,
      default: ()=>({})
    },
  },
  computed: {
  }
}
</script>