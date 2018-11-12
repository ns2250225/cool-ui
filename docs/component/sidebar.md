---
pageClass: sidebar-page-class
---

# Sidebar
## SideBar侧栏导航

<template>
  <div class="sidebar-group">
      <co-sidebarmenu :menu="menuData" :collapsed="collapsed" @collapse="onCollapse"></co-sidebarmenu>
    </div>
</template>

<script>
export default {
  data () {
    return {
        menuData: [
        {
          href: '/',
          title: 'Dashboard',
          icon: 'icon-gongdan'
        },
        {
          href: '/charts',
          title: 'Charts',
          icon: 'icon-search'
        },
        {
          href: '/tables',
          title: 'Tables',
          icon: 'icon-icon_fabu'
        },
        {
          title: 'Pages',
          icon: 'icon-shanchu',
          child: [
            {
              href: '/auth/login',
              title: 'Login Page',
              icon: 'icon-gongnengdingyi',
            },
            {
              href: '/auth/registration',
              title: 'Registration Page',
              icon: 'icon-shiyongwendang'
            },
            {
              href: '#',
              title: '404 Page',
              icon: 'icon-yishouquan'
            },
          ]
        },
        {
          href: '#',
          title: 'Mailbox',
          icon: 'icon-tianshenpi'
        },
        {
          title: 'Multiple Level',
          icon: 'icon-shujukanban',
          child: [
            {
              href: '#',
              title: 'Page 01',
            },
            {
              title: 'Page 02',
              child: [
                {
                  href: '#',
                  title: 'Page 04',
                },
                {
                  href: '#',
                  title: 'Page 05',
                }
              ]
            },
            {
              href: '#',
              title: 'Page 03'
            },
            {
              title: 'Level 2',
              child: [
                {
                  href: '#',
                  title: 'Level 3',
                  child: [
                    {
                      href: '#',
                      title: 'Page',
                    },
                    {
                      href: '#',
                      title: 'Page',
                    }
                  ]
                },
              ]
            },
          ]
        },
      ],
      collapsed: false
    }
  },
  methods: {
      onCollapse(val) {
        console.log(`collapsed ${val}`)
        this.collapsed = val
      }
  }
}
</script>


```html
<template>
  <div class="sidebar-group">
      <co-sidebarmenu :menu="menuData" :collapsed="collapsed" @collapse="onCollapse"></co-sidebarmenu>
    </div>
</template>

<script>
export default {
  data () {
    return {
        menuData: [
        {
          href: '/',
          title: 'Dashboard',
          icon: 'icon-gongdan'
        },
        {
          href: '/charts',
          title: 'Charts',
          icon: 'icon-search'
        },
        {
          href: '/tables',
          title: 'Tables',
          icon: 'icon-icon_fabu'
        },
        {
          title: 'Pages',
          icon: 'icon-shanchu',
          child: [
            {
              href: '/auth/login',
              title: 'Login Page',
              icon: 'icon-gongnengdingyi',
            },
            {
              href: '/auth/registration',
              title: 'Registration Page',
              icon: 'icon-shiyongwendang'
            },
            {
              href: '#',
              title: '404 Page',
              icon: 'icon-yishouquan'
            },
          ]
        },
        {
          href: '#',
          title: 'Mailbox',
          icon: 'icon-tianshenpi'
        },
        {
          title: 'Multiple Level',
          icon: 'icon-shujukanban',
          child: [
            {
              href: '#',
              title: 'Page 01',
            },
            {
              title: 'Page 02',
              child: [
                {
                  href: '#',
                  title: 'Page 04',
                },
                {
                  href: '#',
                  title: 'Page 05',
                }
              ]
            },
            {
              href: '#',
              title: 'Page 03'
            },
            {
              title: 'Level 2',
              child: [
                {
                  href: '#',
                  title: 'Level 3',
                  child: [
                    {
                      href: '#',
                      title: 'Page',
                    },
                    {
                      href: '#',
                      title: 'Page',
                    }
                  ]
                },
              ]
            },
          ]
        },
      ],
      collapsed: false
    }
  },
  methods: {
      onCollapse(val) {
        console.log(`collapsed ${val}`)
        this.collapsed = val
      }
  }
}
</script>
```