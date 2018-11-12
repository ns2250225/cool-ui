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
          icon: 'vm-message-icon--close'
        },
        {
          href: '/charts',
          title: 'Charts',
          icon: 'vm-message-icon--close'
        },
        {
          href: '/tables',
          title: 'Tables',
          icon: 'vm-message-icon--close'
        },
        {
          title: 'Pages',
          icon: 'vm-message-icon--close',
          child: [
            {
              href: '/auth/login',
              title: 'Login Page',
              icon: 'vm-message-icon--close',
            },
            {
              href: '/auth/registration',
              title: 'Registration Page',
              icon: 'vm-message-icon--close'
            },
            {
              href: '#',
              title: '404 Page',
              icon: 'vm-message-icon--close'
            },
          ]
        },
        {
          href: '#',
          title: 'Mailbox',
          icon: 'vm-message-icon--close'
        },
        {
          title: 'Multiple Level',
          icon: 'vm-message-icon--close',
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
          icon: 'vm-message-icon--close'
        },
        {
          href: '/charts',
          title: 'Charts',
          icon: 'vm-message-icon--close'
        },
        {
          href: '/tables',
          title: 'Tables',
          icon: 'vm-message-icon--close'
        },
        {
          title: 'Pages',
          icon: 'vm-message-icon--close',
          child: [
            {
              href: '/auth/login',
              title: 'Login Page',
              icon: 'vm-message-icon--close',
            },
            {
              href: '/auth/registration',
              title: 'Registration Page',
              icon: 'vm-message-icon--close'
            },
            {
              href: '#',
              title: '404 Page',
              icon: 'vm-message-icon--close'
            },
          ]
        },
        {
          href: '#',
          title: 'Mailbox',
          icon: 'vm-message-icon--close'
        },
        {
          title: 'Multiple Level',
          icon: 'vm-message-icon--close',
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