<template>
    <div class="transfer clearfix">
        <div class="transfer-panel">
            <div class="transfer-head">
                <span class="checkbox" :class="{'checked':checkbox0}" @click="_checkbox(0)"></span>
                <span v-text="titles[0]"></span>
                <span class="num" v-text="_total"></span>
            </div>
            <div class="transfer-content">
                <input class="transfer-search" v-model="leftSearchValue" />
                <ul>
                    <li :class="{'disabled':item.disabled}" v-for="item in left_data" v-if="value.indexOf(item.key)==-1"
                        @click="_click(item, 0)">
                        <span class="checkbox" :class="{'disabled':item.disabled,'checked':item.checked}"></span>{{item.name}}
                    </li>
                </ul>
            </div>
        </div>
        <div class="transfer-control">
            <div class="transfer-table">
                <a class="transfer-control-btn" :class="{'control-move':moveToRight}" 　@click="_change(0)" v-text="btnText[0]">&gt;</a>
                <a class="transfer-control-btn" :class="{'control-move':moveToLeft}" @click="_change(1)" v-text="btnText[1]">&lt;</a>
            </div>
        </div>
        <div class="transfer-panel">
            <div class="transfer-head">
                <span class="checkbox" :class="{'checked':checkbox1}" @click="_checkbox(1)"></span>
                <span v-text="titles[1]"></span>
                <span class="num" v-text="_totalRight"></span>
            </div>
            <div class="transfer-content">
                <input class="transfer-search" v-model="rightSearchValue" />
                <ul>
                    <li :class="{'disabled':item.disabled}" v-for="item in data1" v-if="value.indexOf(item.key)!=-1"
                        @click="_click(item, 1)">
                        <span class="checkbox" :class="{'disabled':item.disabled,'checked':item.checked}"></span>{{item.name}}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'co-transfer',
        data () {
            return {
                data1: this.data,
                left_data: this.data,
                tmp_data: this.data,
                checkbox0: false,
                checkbox1: false,
                moveToRight: false,
                moveToLeft: false,
                leftSearchValue: '',
                rightSearchValue: ''
            }
        },
        props: {
            data: Array,
            titles: Array,
            value: Array,
            btnText: {
                type:Array,
                default:function () {
                    return ['>','<']
                }
            }
        },
        components: {},
        watch: {
            leftSearchValue: function (newInput, oldInput) {
                if (newInput === '' && oldInput !== '') {
                    this.left_data = this.tmp_data
                } else {
                    this.left_data = this.left_data.filter(item => item.name.includes(newInput))
                }
            },
            rightSearchValue: function (newInput, oldInput) {
                if (newInput === '' && oldInput !== '') {
                    this.data1 = this.tmp_data
                } else {
                    this.data1 = this.data1.filter(item => item.name.includes(newInput))
                }
            },
            left_data: function (newVal, oldVal) {
                return this.data1.filter(item => this.value.indexOf(item.key)==-1)
            }
        },
        methods: {
            _click(item, d){
                if (!item.disabled) {
                    if (typeof item.checked == "undefined") {
                        this.$set(item, 'checked', true);
                    } else {
                        item.checked = !item.checked;
                    }
                    
                    let arrayRight = [];
                    let arrayLeft = [];
                    for (let i = 0; i < this.data1.length; i++) {
                        if (d > 0 && this.value.indexOf(this.data1[i].key) != -1 && !this.data[i].disabled) {
                            arrayRight.push(this.data1[i].checked);
                        } else if (d == 0 && this.value.indexOf(this.data1[i].key) == -1 && !this.data[i].disabled) {
                            arrayLeft.push(this.data1[i].checked);
                        }
                    }
                    
                    if (arrayLeft.indexOf(undefined) != -1 || arrayLeft.indexOf(false) != -1) {
                        this.checkbox0 = false;
                    } else if (arrayLeft.length > 0) {
                        this.checkbox0 = true;
                    }
                    if (arrayRight.indexOf(undefined) != -1 || arrayRight.indexOf(false) != -1) {
                        this.checkbox1 = false;
                    } else if (arrayRight.length > 0) {
                        this.checkbox1 = true;
                    }
                    
                    if (arrayLeft.indexOf(true) != -1) {
                        this.moveToRight = true
                    } else {
                        this.moveToRight = false
                    }
                    if (arrayRight.indexOf(true) != -1) {
                        this.moveToLeft = true
                    } else {
                        this.moveToLeft = false
                    }
                }
            },
            _checkbox(d){
                //全选
                if (d > 0) {
                    //right
                    this.checkbox1 = !this.checkbox1;
                    this._checkboxAll(d, this.checkbox1);
                } else {
                    //left
                    this.checkbox0 = !this.checkbox0;
                    this._checkboxAll(d, this.checkbox0);
                }
            },
            _checkboxAll(d, checked){
                //全选或全不选
                for (let i = 0; i < this.data1.length; i++) {
                    if (d > 0 && this.value.indexOf(this.data1[i].key) != -1 && !this.data[i].disabled) {
                        //将右边除disabled外的设为checked状态
                        if (typeof this.data1[i].checked == "undefined") {
                            this.$set(this.data1[i], 'checked', checked);
                        } else {
                            this.data1[i].checked = checked;
                        }
                        this.moveToLeft = checked;
                    } else if (d == 0 && this.value.indexOf(this.data1[i].key) == -1 && !this.data[i].disabled) {
                        if (typeof this.data1[i].checked == "undefined") {
                            this.$set(this.data1[i], 'checked', checked);
                        } else {
                            this.data1[i].checked = checked;
                        }
                        this.moveToRight = checked;
                    }
                }
            },
            _change(d){
                //改变
                for (let i = 0; i < this.data1.length; i++) {
                    if (d == 0 && this.moveToRight) {
                        //将左边勾选的移到右边，同时移除勾选状态，置灰切换按钮
                        if (this.data1[i].checked) {
                            if(this.value.indexOf(this.data1[i].key) == -1){
                                this.value.push(this.data1[i].key);
                            }
                            this.data1[i].checked = false;
                        }
                    } else if (d == 1 && this.moveToLeft) {
                        if (this.data1[i].checked) {
                            let index = this.value.indexOf(this.data[i].key);
                            if (index > -1) {
                                this.value.splice(index, 1);
                            }
                            this.data1[i].checked = false;
                        }
                    }
                }
                this.moveToRight = false;
                this.moveToLeft = false;
                this.checkbox0 = false;
                this.checkbox1 = false;
                this.$emit('input', this.value);
                this.$emit('change', d, this.value);
            }
        },
        computed: {
            _total(){
                
                let num = 0;
                let all = 0;
                for (let i = 0; i < this.data1.length; i++) {
                    
                    if (this.value.indexOf(this.data1[i].key) == -1 && this.data1[i].checked) {
                        num++;
                    }
                    
                    if (this.value.indexOf(this.data1[i].key) == -1) {
                        all++;
                    }
                }
                return num + '/' + all
            },
            _totalRight(){
                //已勾选的个数
                let num = 0;
                let all = 0;
                for (let i = 0; i < this.data1.length; i++) {
                    
                    if (this.value.indexOf(this.data1[i].key) != -1 && this.data1[i].checked) {
                        num++;
                    }
                    
                    if (this.value.indexOf(this.data1[i].key) != -1) {
                        all++;
                    }
                }
                return num + '/' + all
            }
        },
        mounted(){
            // console.log(titles);
        },
        filters: {}
    }
</script>