---
pageClass: pagination-page-class
---

# Pagination
## Pagination分页组件

<template>
  <div class="pagination">
      <co-pagination 
        v-model="page"
        :page-count="20"
        :click-handler="LogSomething"
        :prev-text="'上一页'"
        :next-text="'下一页'">
      </co-pagination>
    </div>
</template>

<script>
export default {
  data () {
    return {
        page: 1
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
  <div class="pagination">
      <co-pagination 
        v-model="page"
        :page-count="20"
        :click-handler="LogSomething"
        :prev-text="'上一页'"
        :next-text="'下一页'">
      </co-pagination>
    </div>
</template>

<script>
export default {
  data () {
    return {
        page: 1
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