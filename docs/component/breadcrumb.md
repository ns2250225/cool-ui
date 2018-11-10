---
pageClass: breadcrumb-page-class
---

# Breadcrumb
## Breadcrumb面包屑

<template>
  <div class="breadcrumb-group">
      <co-breadcrumb :datas="pathData"></co-breadcrumb>
    </div>
</template>

<script>
export default {
  data () {
    return {
        pathData: [{
            path: 'home',
            title: 'Home'
        }, {
            path: 'index',
            title: 'Index',
            icon: 'vm-message-icon--close'
        }, {
            path: 'button',
            title: 'Button',
            icon: 'vm-message-icon--close'
        }, {
            path: 'radio',
            title: 'Radio',
            icon: 'vm-message-icon--close'
        }, {
            path: 'checkbox',
            title: 'CheckBox',
            icon: 'vm-message-icon--close'
        }, {
            path: 'input',
            title: 'Input',
            icon: 'vm-message-icon--close'
        }, {
            path: 'loading',
            title: 'Loading'
        }]
    }
  },
  methods: {
  }
}
</script>


```html
<template>
  <div class="breadcrumb-group">
      <co-breadcrumb :datas="pathData"></co-breadcrumb>
    </div>
</template>

<script>
export default {
  data () {
    return {
        pathData: [{
            path: 'home',
            title: 'Home'
        }, {
            path: 'index',
            title: 'Index',
            icon: 'vm-message-icon--close'
        }, {
            path: 'button',
            title: 'Button',
            icon: 'vm-message-icon--close'
        }, {
            path: 'radio',
            title: 'Radio',
            icon: 'vm-message-icon--close'
        }, {
            path: 'checkbox',
            title: 'CheckBox',
            icon: 'vm-message-icon--close'
        }, {
            path: 'input',
            title: 'Input',
            icon: 'vm-message-icon--close'
        }, {
            path: 'loading',
            title: 'Loading'
        }]
    }
  },
  methods: {
  }
}
</script>
```