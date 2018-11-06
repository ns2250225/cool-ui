<template>
    <label class="radio-box" :class="{'checked':vValue==modelValue,'disabled':disabled}">
        <input type="radio" :value="vValue" @change="onChange" :disabled="disabled" :checked="vValue==modelValue">
        <span class="radio-text"><slot></slot></span>
    </label>
</template>
<script>
export default {
    name: 'co-radio',
    data () {
        return {
            radioValue: this.modelValue,
            vValue: this.value
        }
    },
    model: {
        prop: 'modelValue',
        event: 'change'
    },
    props: {
        modelValue: {},
        disabled: {
            type: Boolean,
            default: false
        },
        value: {},
        change: Function
    },
    watch: {},
    methods: {
        onChange(){
            let v;
            if (this.value) {
                v = this.value;
            } else {
                v = this.modelValue ? this.modelValue : true;
            }
            this.$emit('change', v);
            this.vValue = v;
            this.change ? this.change(v) : ""
        },
        _radioValue(){
            if (this.value) {
            } else {
                if (this.modelValue) {
                    this.vValue = this.modelValue;
                } else {
                    this.$emit('change', false);
                }
            }
        }
    },
    mounted(){
        this._radioValue();
    },
    computed: {}
}
</script>