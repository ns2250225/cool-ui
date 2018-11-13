---
pageClass: transfer-page-class
---

# Transfer
## Transfer穿梭框

<template>
  <div class="transfer-group">
      <co-transfer :data="transfer_data" v-model="transfer_value" :titles="['源数据','目标数据']"></co-transfer>
  </div>
</template>

<script>
export default {
  data () {
    return {
        transfer_value: [],
        transfer_data: [
            {
                key: 1,
                name: '选项1',
                disabled: false
            },
            {
                key: 2,
                name: '选项2',
                disabled: true
            },
            {
                key: 3,
                name: '选项3',
                disabled: false
            },
            {
                key: 4,
                name: '选项4',
                disabled: false
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
  <div class="transfer-group">
      <co-transfer :data="transfer_data" v-model="transfer_value" :titles="['源数据','目标数据']"></co-transfer>
    </div>
</template>

<script>
export default {
  data () {
    return {
        transfer_value: [],
        transfer_data: [
            {
                key: 1,
                name: '选项1',
                disabled: false
            },
            {
                key: 2,
                name: '选项2',
                disabled: true
            },
            {
                key: 3,
                name: '选项3',
                disabled: false
            },
            {
                key: 4,
                name: '选项4',
                disabled: false
            }
        ]
    }
  },
  methods: {
  }
}
</script>
```