---
pageClass: select-page-class
---

# Select
## 下拉选择框

<template>
  <div class="select-group">
      <co-select :options="options"></co-select>
      <co-select :options="options"></co-select>
  </div>
</template>

<script>
export default {
  data () {
    return {
        options: [{
        value: 1,
        label: '广州'
      }, {
        value: 2,
        label: '深圳'
      }, {
        value: 3,
        label: '上海'
      }, {
        value: 4,
        label: '北京'
      }]
    }
  },
  methods: {
  }
}
</script>


```html
<template>
  <div class="select-group">
      <co-select :options="options"></co-select>
      <co-select :options="options"></co-select>
  </div>
</template>

<script>
export default {
  data () {
    return {
        options: [{
            value: 1,
            label: '广州'
        }, {
            value: 2,
            label: '深圳'
        }, {
            value: 3,
            label: '上海'
        }, {
            value: 4,
            label: '北京'
        }]
    }
  },
  methods: {
  }
}
</script>
```