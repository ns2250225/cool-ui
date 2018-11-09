---
pageClass: radio-page-class
---

# Radio
## 单选框
<template>
<div class="radio-group">
    <co-radio-group :data="RadioData" v-model="val"></co-radio-group>
</div>
</template>
<script>
    var RadioData = [{
        text: '选项1',
        value: '1'
    }, {
        text: '选项2',
        value: '2'
    }, {
        text: '选项3',
        value: '3'
    }]
    var val = 1
</script>