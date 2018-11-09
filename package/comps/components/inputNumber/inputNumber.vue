<template>
    <div class="input-number">
        <span role="button" class="co-input-number-min" :class="{'disabled': inputValue<=min || disabled}" @click="_numberControl(-1)">-</span>
        <input type="text" class="co-input-number" v-model="inputValue" :class="{'disabled': disabled}" :disabled="disabled">
        <span role="button" class="co-input-number-add" :class="{'disabled': inputValue>=max || disabled}" @click="_numberControl(1)">+</span>
    </div>
</template>
<script>
export default {
    name: 'co-input-number',
    data(){
        return {
            inputValue: this.value
        }
    },
    watch: {
        inputValue(value){
            let val = Number(value);
            if (this.disabled) {
                this.inputValue = this.value;
                return false
            }
            if (!isNaN(val)) {
                if (val > this.max) {
                    this.inputValue = this.max;
                } else if (val < this.min) {
                    this.inputValue = this.min;
                }
                this.$emit('input', val);
                this.change ? this.change(val) : ""
            } else {
                this.inputValue = this.value;
            }
        }
    },
    props: {
        value: {
            type: Number,
            default: 1
        },
        max: {
            type: Number,
            default: 0
        },
        min: {
            type: Number,
            default: 0
        },
        step: {
            type: Number,
            default: 1
        },
        disabled: {
            type: Boolean,
            default: false
        },
        change: Function
    },
    mounted(){
    },
    components: {},
    methods: {
        _numberControl(type){
            let inputValue = Number(this.inputValue);
            if (!isNaN(inputValue && !this.disabled)) {
                if (type > 0 && inputValue < this.max) {
                    //add
                    if ((inputValue + this.step) < this.max) {
                        this.inputValue = inputValue + this.step;
                    }
                    else {
                        this.inputValue = this.max;
                    }
                } else if (type < 0 && inputValue > this.min) {
                    //min
                    if ((inputValue - this.step) > this.min) {
                        this.inputValue = inputValue - this.step;
                    } else {
                        this.inputValue = this.min;
                    }
                }
            }
        }
    },
    computed: {}
}
</script>