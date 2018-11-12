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
            title: '',
            icon: 'icon-yibiaopan'
        }, {
            path: 'index',
            title: 'Index',
            icon: 'icon-search'
        }, {
            path: 'button',
            title: 'Button',
            icon: 'icon-shanchu'
        }, {
            path: 'radio',
            title: 'Radio',
            icon: 'icon-gongdan'
        }, {
            path: 'checkbox',
            title: 'CheckBox',
            icon: 'icon-icon_fabu'
        }, {
            path: 'input',
            title: 'Input',
            icon: 'icon-shuaxin'
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
            title: '',
            icon: 'icon-yibiaopan'
        }, {
            path: 'index',
            title: 'Index',
            icon: 'icon-search'
        }, {
            path: 'button',
            title: 'Button',
            icon: 'icon-shanchu'
        }, {
            path: 'radio',
            title: 'Radio',
            icon: 'icon-gongdan'
        }, {
            path: 'checkbox',
            title: 'CheckBox',
            icon: 'icon-icon_fabu'
        }, {
            path: 'input',
            title: 'Input',
            icon: 'icon-shuaxin'
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