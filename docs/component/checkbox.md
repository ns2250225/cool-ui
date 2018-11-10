---
pageClass: checkbox-page-class
---

# CheckBox
## 多选框组

<template>
  <div id="checkbox">
    <div class="checkbox-group">
        <co-checkbox-group :data="CheckboxData" v-model="val2" @change="LogSomething"></co-checkbox-group>
    </div>
  </div>
</template>

```html
<template>
  <div id="checkbox">
    <div class="checkbox-group">
        <co-checkbox-group :data="CheckboxData" v-model="val2" @change="LogSomething"></co-checkbox-group>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
        CheckboxData: [{
          text: '选项1',
          value: '1'
        }, {
          text: '选项2',
          value: '2'
        }, {
          text: '选项3',
          value: '3'
        }],
        val2: '1'
      }
  },
  methods: {
    LogSomething () {
        console.log(this.val2)
    }
  }
}
</script>
```

<script>
export default {
  data () {
    return {
        CheckboxData: [{
          text: '选项1',
          value: '1'
        }, {
          text: '选项2',
          value: '2'
        }, {
          text: '选项3',
          value: '3'
        }],
        val2: []
      }
  },
  methods: {
    LogSomething () {
        console.log(this.val2)
    }
  }
}
</script>