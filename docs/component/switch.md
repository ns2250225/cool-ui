---
pageClass: switch-page-class
---

# Switch
## 滑动开关

<template>
  <div class="switch-button">
      <co-switch v-model="val4" @change="LogSomething"></co-switch>
      <co-switch v-model="val4" disabled></co-switch>
  </div>
</template>

<script>
export default {
  data () {
    return {
        val4: false
    }
  },
  methods: {
    LogSomething (val) {
        console.log(val)
    }
  }
}
</script>


```html
<template>
  <div class="switch-button">
      <co-switch v-model="val4" @change="LogSomething"></co-switch>
      <co-switch v-model="val4" disabled></co-switch>
  </div>
</template>

<script>
export default {
  data () {
    return {
        val4: false
    }
  },
  methods: {
    LogSomething (val) {
        console.log(val)
    }
  }
}
</script>
```