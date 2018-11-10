<template>
    <div class="radio-group">
        <Radio v-for="(item, index) in data" :key="index" v-model="groupValue" :value="item.value"
               :disabled="item.disabled">{{item.text}}
        </Radio>
    </div>
</template>
<script>
import Radio from './radio'
export default {
    name: 'co-radio-group',
    data(){
        return {
            groupValue: this.value
        }
    },
    watch: {
        groupValue(v){
            this.$emit('input', v)
            this.$emit('change', v)
            this.change ? this.change(v) : ''
        }
    },
    props: {
        value: {},
        modelValue: {},
        data: Array,
        change: Function
    },
    components: {Radio},
    methods: {},
    mounted(){
    },
    computed: {}
}
</script>