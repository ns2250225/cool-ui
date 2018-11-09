<template>
    <div class="checkbox-group">
        <Checkbox v-for="(item, index) in data" :key="index" :value="item.value" :text="item.text"
                  :disabled="item.disabled" :name="name"
                  :modelValue="_selectValue(item)" :change="_change"></Checkbox>
    </div>
</template>
<script>
import Checkbox from './checkbox'
export default {
    name: 'co-checkbox-group',
    data () {
        return {
            groupValue: this.value//初始选中值
        }
    },
    props: {
        data: Array,
        value: Array,
        name: String,
        change: Function
    },
    components: {Checkbox},
    methods: {
        _selectValue(item){
            if (this.value.indexOf(item.value) != -1) {
                return item.value
            } else {
                return ''
            }
        },
        _change(checked, value){
            //选中时checked=value，没选中时checked为空
            if (checked) {
                //选中时往数组里添加当前选中的值
                this.groupValue.push(checked);
            } else {
                //没选中时，在数组里移除当前值
                const index = this.groupValue.indexOf(value);
                this.groupValue.splice(index, 1);
            }
            //这里不用emit也可以，同一个数组
            this.$emit('input', this.groupValue);
            this.change ? this.change(this.groupValue) : ""
        }
    },
    computed: {},
    mounted(){
    },
    filters: {}
}
</script>