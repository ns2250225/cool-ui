<template>
    <div :class="['co-tooltip', positionClass]">
      <p> <slot></slot> </p>
      <div class="tooltip">
        <p>{{ content }}</p>
      </div>
    </div>
</template>
<script>
export default {
    name: 'co-tooltip',
    data () {
        return {
        }
    },
    props: {
        content: {
            type: String,
            default: ''
        },
        position: {
            type: String,
            default: 'top',
            validator(val) {
                return ['left', 'top', 'right', 'bottom'].indexOf(val) > -1
            }
        }
    },
    components: {},
    mounted(){
    },
    methods: {
    },
    computed: {
        positionClass () {
            if (this.position == '') return 'top'
            if (this.position == 'top') return 'top'
            if (this.position == 'left') return 'left'
            if (this.position == 'right') return 'right'
            if (this.position == 'bottom') return 'bottom'
        }
    },
    filters: {}
}
</script>