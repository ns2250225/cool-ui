<template>
  <col :width="width">
</template>

<script>
let id = 0

export default {
  name: "co-table-col",
  props: ["width", "prop", "label"],
  mounted() {
    var conf = {
      id: id++,
      width: this.width,
      prop: this.prop,
      label: this.label,
      content: null
    };

    if (this.$scopedSlots.default !== undefined) {
      conf.content = this.$scopedSlots.default
    }
    this.$parent.$emit("initCol", conf)
  }
}
</script>
