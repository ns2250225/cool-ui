<template>
    <div class="input-wrapper">
        <input class="basic-slide" v-bind="$props" v-model="inputValue" :type="inputType" :name="name" 
               :class="{'disabled': disabled}"
               :placeholder="placeholder"
               @focus="_focus"
               @blur="_blur"
               @keyup="_keyup"
               @keydown="_keydown" />
        <label>{{ label }}</label>
        <i :class="['eye-icon',{'iconfont icon-kaiguan':eyeShow,'iconfont icon-icon_fabu':!eyeShow}]"
              v-if="inputValue&&showEye && type=='password'" @click="eyeShow=!eyeShow"></i>
        <i class="iconfont icon-shanchu" v-if="clearIcon&&inputValue" @click="inputValue=''"></i>
    </div>
</template>
<script type="text/ecmascript-6">
export default {
    name: 'co-input',
    data() {
        return {
            inputValue: this.value,
            inputType: this.type,
            eyeShow: false
        }
    },
    watch: {
        inputValue(v){
            this.$emit('input', v);
        },
        eyeShow(v){
            this.inputType = v ? 'text' : 'password';
        }
    },
    props: {
        type: {
            type: String,
            default: 'text'
        },
        placeholder: String,
        value: String,
        label: String,
        disabled: {
            type: Boolean,
            default: false
        },
        readonly: {
            type: Boolean,
            default: false
        },
        maxLength: {
            type: Number,
            default: 50
        },
        clearIcon: {
            type: Boolean,
            default: false
        },
        showEye: {
            type: Boolean,
            default: false
        },
        name: String,
        focus: Function,
        change: Function,
        blur: Function,
        keyup: Function,
        keydown: Function
    },
    mounted(){
    },
    components: {},
    methods: {
        _focus(e){
            this.$emit('focus', e);
            this.focus ? this.focus(e) : "";
        },
        _blur(e){
            this.$emit('blur', e);
            this.blur ? this.blur(e) : "";
        },
        _keyup(e){
            this.$emit('keyup', e);
            this.keyup ? this.keyup(e) : "";
        },
        _keydown(e){
            this.$emit('keydown', e);
            this.keydown ? this.keydown(e) : "";
        }
    },
    computed: {}
}
</script>