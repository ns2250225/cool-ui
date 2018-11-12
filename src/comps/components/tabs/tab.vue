<template>
    <div class="tabs-panel-content">
        <slot />
    </div>
</template>

<script>
    export default {
        name: 'co-tab',
        props: {
            label: {
                required: true
            },
            name: {
                required: true
            },
            fontsize: {
                type: String
            },
            tabheight: {
                type: String
            },
            frontIcon: {
                type: String,
                default: ''
            },
            postIcon: {
                type: String,
                default: ''
            },
            RedDot: {
                type: String,
                default: ''
            },
            color: {
                type: String
            }
        },
        data() {
            return {
                isActive: false,
            }
        },
        computed: {
            tabHeader() {
                return this.frontIcon + this.label + this.postIcon + this.RedDot
            },
            tabHash() {
                return `${this.name.toLowerCase()}`
            },
            fontSize() {
                return parseInt(this.fontsize)
            },
            tabHeight() {
                return parseInt(this.tabheight)
            }
        },
    }
</script>



<style lang="scss">
</style>