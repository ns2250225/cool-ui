<script>
export default {
  name: "m-table-content",
  props: ["id", "content", "item"],
  data() {
    return {}
  },
  render(createElement) {
    const prop = this.item;
    return createElement("div", [this.content.call(this, prop)])
  }
};
</script>
