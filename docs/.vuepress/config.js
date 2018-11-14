module.exports = {
    title: 'Cool UI', // 设置网站标题
    description: 'Just for fun', //描述
    dest: './dist',   // 设置输出目录
    port: 2233, //端口
    themeConfig: { //主题配置
      // Logo
      logo: '/logo.png',
      // 添加导航栏
      nav: [
        { text: '主页', link: '/' }, // 导航条
        { text: '组件文档', link: '/component/info' },
        { text: 'github',        // 这里是下拉列表展现形式。
          items: [
            { text: 'MyGithub', link: 'https://github.com/ns2250225/cool-ui' }
          ]
        }
      ],
      // 为以下路由添加侧边栏
      sidebar: [
        {
          title: '快速开始',
          children: [
            '/component/info',
            '/component/icon',
          ]
        },
        {
          title: '基础组件',
          collapsable: false,
          children: [
            '/component/button',
            '/component/radio',
            '/component/checkbox',
            '/component/input',
            '/component/inputNumber',
            '/component/select',
            '/component/switch',
            '/component/message',
            '/component/badge',
            '/component/table',
            '/component/pagination',
            '/component/tooltip',
            '/component/breadcrumb',
            '/component/tabs',
            '/component/dialog',
            '/component/sidebar',
            '/component/topnav',
            '/component/transfer',
            '/component/upload',
            '/component/carousel',
            '/component/datetimepicker',
          ]
        },
        {
          title: '其它组件',
          children: []
        }
      ]
    }
  }