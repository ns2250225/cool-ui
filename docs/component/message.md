---
pageClass: message-page-class
---

# Message
## Message消息提醒

<template>
  <div class="message">
      <co-button @click="showMessage">消息提醒</co-button>
      <co-button type="primary" @click="showMessage2">消息提醒2</co-button>
      <co-button type="error" @click="showMessage3">消息提醒3</co-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    showMessage () {
      this.$message('这是一条消息提示')
    },
    showMessage2 () {
      this.$message({
        type: 'success',
        message: '这是一条成功的消息提示',
        iconClass: 'icon-smile-fill'
      })
    },
    showMessage3 () {
      this.$message({
        type: 'error',
        message: '这是一条带关闭符号的消息提示',
        iconClass: 'icon-frown-fill',
        showClose: true
      })
    }
  }
}
</script>


```html
<template>
  <div class="message">
      <co-button @click="showMessage">消息提醒</co-button>
      <co-button type="primary" @click="showMessage2">消息提醒2</co-button>
      <co-button type="error" @click="showMessage3">消息提醒3</co-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    showMessage () {
      this.$message('这是一条消息提示')
    },
    showMessage2 () {
      this.$message({
        type: 'success',
        message: '这是一条成功的消息提示',
        iconClass: 'icon-smile-fill'
      })
    },
    showMessage3 () {
      this.$message({
        type: 'error',
        message: '这是一条带关闭符号的消息提示',
        iconClass: 'icon-frown-fill',
        showClose: true
      })
    }
  }
}
</script>
```