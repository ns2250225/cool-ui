---
pageClass: topnav-page-class
---

# TopNav
## TopNav顶部导航

<template>
  <div class="topnav-group">
      <co-topnav :menuData="topNavData"></co-topnav>
    </div>
</template>

<script>
export default {
  data () {
    return {
        topNavData: [
            {
            path: 'home',
            title: 'Home',
            icon: 'icon-yibiaopan'
            },
            {
            path: 'home',
            title: 'Index',
            icon: 'icon-xinhao'
            },
            {
            path: 'home',
            title: 'About',
            icon: 'icon-zhanghaoquanxianguanli'
            },
            {
            path: 'home',
            title: 'Blog',
            icon: 'icon-icon_fabu'
            }
        ]
    }
  },
  methods: {
  }
}
</script>


```html
<template>
  <div class="topnav-group">
      <co-topnav :menuData="topNavData"></co-topnav>
    </div>
</template>

<script>
export default {
  data () {
    return {
        topNavData: [
            {
            path: 'home',
            title: 'Home',
            icon: 'icon-yibiaopan'
            },
            {
            path: 'home',
            title: 'Index',
            icon: 'icon-xinhao'
            },
            {
            path: 'home',
            title: 'About',
            icon: 'icon-zhanghaoquanxianguanli'
            },
            {
            path: 'home',
            title: 'Blog',
            icon: 'icon-icon_fabu'
            }
        ]
    }
  },
  methods: {
  }
}
</script>
```