---
pageClass: input-page-class
---

# Input
## 输入框

<template>
  <div class="text-input">
    <co-input placeholder="请输入一些内容" clearIcon type="password" label="姓名" v-model="textv"></co-input>
    <co-input placeholder="禁止输入"  label="禁止" disabled  v-model="textv"></co-input>
  </div>
</template>

<script>
export default {
  data () {
    return {
        textv: ''
      }
  },
  methods: {
  }
}
</script>


```html
<template>
  <div class="text-input">
    <co-input placeholder="请输入一些内容" clearIcon type="password" label="姓名" v-model="textv"></co-input>
    <co-input placeholder="禁止输入"  label="禁止" disabled  v-model="textv"></co-input>
  </div>
</template>

<script>
export default {
  data () {
    return {
        textv: ''
      }
  },
  methods: {
  }
}
</script>
```