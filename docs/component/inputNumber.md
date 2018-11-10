---
pageClass: inputNumber-page-class
---

# InputNumber
## 数字输入框

<template>
  <div class="text-input-number">
    <co-input-number v-model="val3" :max="10"></co-input-number>
    <co-input-number v-model="val3" :max="10" disabled></co-input-number>
  </div>
</template>

<script>
export default {
  data () {
    return {
        val3: 1
      }
  },
  methods: {
  }
}
</script>


```html
<template>
  <div class="text-input-number">
    <co-input-number v-model="val3" :max="10"></co-input-number>
    <co-input-number v-model="val3" :max="10" disabled></co-input-number>
  </div>
</template>

<script>
export default {
  data () {
    return {
        val3: 1
      }
  },
  methods: {
  }
}
</script>
```