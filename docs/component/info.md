# 快速开始

## 安装
```
npm install my-cool-ui --save
```

## 全局使用
- 在main.js中引入
```js
// 引入全局css
import 'my-cool-ui/package/coolui.min.css'  

// 引入coolui.min.js
import coolui from 'my-cool-ui/package/coolui.min.js'  

// 注入到vue
Vue.use(coolui)
```

## 按需加载
- 在组件中引入
```js
import coButton from 'my-cool-ui/package/comps/components/button'
import coInput from 'my-cool-ui/package/comps/components/input'
...

components: {
    coButton,
    coInput,
    ...
}
```