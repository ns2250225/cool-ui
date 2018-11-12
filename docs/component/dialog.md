---
pageClass: dialog-page-class
---

# Dialog
## Dialog对话框弹窗

<template>
  <div class="dialog-group">
      <co-button type="primary" @click="isDialogOpen=true">打开Dialog对话框</co-button>
      <co-dialog width="30" v-show="isDialogOpen" @close="closeDialog">
        <div slot="header">这是标题</div>
        <div slot="body">这是内容</div>
        <div slot="footer">
          这是底部信息
          <co-button style="display:inline-block;" icon="vm-message-icon--close" type="error" cycle @click="closeDialog"></co-button>
        </div>
      </co-dialog>
    </div>
</template>

<script>
export default {
  data () {
    return {
        isDialogOpen: false
    }
  },
  methods: {
      closeDialog () {
          this.isDialogOpen = false
      }
  }
}
</script>


```html
<template>
  <div class="dialog-group">
      <co-button type="primary" @click="isDialogOpen=true">打开Dialog对话框</co-button>
      <co-dialog width="30" v-show="isDialogOpen" @close="closeDialog">
        <div slot="header">这是标题</div>
        <div slot="body">这是内容</div>
        <div slot="footer">
          这是底部信息
          <co-button style="display:inline-block;" icon="vm-message-icon--close" type="error" cycle @click="closeDialog"></co-button>
        </div>
      </co-dialog>
    </div>
</template>

<script>
export default {
  data () {
    return {
        isDialogOpen: false
    }
  },
  methods: {
      closeDialog () {
          this.isDialogOpen = false
      }
  }
}
</script>
```