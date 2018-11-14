---
pageClass: datetimepicker-page-class
---

# DateTimePicker
## DateTimePicker日期时间选择器

<template>
  <div class="datetimepicker-group">
      <co-date-picker :date="startTime" :option="option" :limit="limit"></co-date-picker>
  </div>
</template>

<script>
export default {
  data () {
    return {
        startTime: {
            time: ''
        },
        option: {
            type: 'min',
            week: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
            month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            format: 'YYYY-MM-DD HH:mm',
            placeholder: '请选择日期时间...',
            inputStyle: {
            'display': 'inline-block',
            'padding': '6px',
            'line-height': '22px',
            'font-size': '16px',
            'border': '2px solid #0791e0',
            'box-shadow': '0 1px 3px 0 rgba(0, 0, 0, 0.2)',
            'border-radius': '2px',
            'color': '#5F5F5F'
            },
            buttons: {
            ok: '确定',
            cancel: '取消'
            },
            overlayOpacity: 0.5,
            dismissible: true
        },
        limit: [{
            type: 'fromto',
            from: '2018-11-13',
            to: '2018-11-21'
        }]
    }
  },
  methods: {
  }
}
</script>


```html
<template>
  <div class="datetimepicker-group">
      <co-date-picker :date="startTime" :option="option" :limit="limit"></co-date-picker>
  </div>
</template>

<script>
export default {
  data () {
    return {
        startTime: {
            time: ''
        },
        option: {
            type: 'min',
            week: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
            month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            format: 'YYYY-MM-DD HH:mm',
            placeholder: '请选择日期时间...',
            inputStyle: {
            'display': 'inline-block',
            'padding': '6px',
            'line-height': '22px',
            'font-size': '16px',
            'border': '2px solid #0791e0',
            'box-shadow': '0 1px 3px 0 rgba(0, 0, 0, 0.2)',
            'border-radius': '2px',
            'color': '#5F5F5F'
            },
            buttons: {
            ok: '确定',
            cancel: '取消'
            },
            overlayOpacity: 0.5,
            dismissible: true
        },
        limit: [{
            type: 'fromto',
            from: '2018-11-13',
            to: '2018-11-21'
        }]
    }
  },
  methods: {
  }
}
</script>
```