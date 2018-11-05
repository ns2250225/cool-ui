<template>
  <div class="hello_btn">
    <div class="normal_btn">
      <h1>普通按钮</h1>
      <co-button>普通按钮</co-button>
      <co-button type="primary">primary按钮</co-button>
      <co-button type="success">success按钮</co-button>
      <co-button type="error">error按钮</co-button>
      <co-button type="warning">warning按钮</co-button>
    </div>
    <div class="plain_btn">
      <h1>简约按钮</h1>
      <co-button plain>普通按钮</co-button>
      <co-button plain type="primary">primary按钮</co-button>
      <co-button plain type="success">success按钮</co-button>
      <co-button plain type="error">error按钮</co-button>
      <co-button plain type="warning">warning按钮</co-button>
    </div>
    <div class="icon_btn">
      <h1>图标按钮</h1>
      <co-button icon="co__icon--checked"></co-button>
      <co-button icon="co__icon--checked" type="primary"></co-button>
      <co-button icon="co__icon--checked" type="success"></co-button>
      <co-button icon="co__icon--checked" type="error"></co-button>
      <co-button icon="co__icon--checked" type="warning"></co-button>
    </div>
    <div class="text_btn">
      <h1>文字按钮</h1>
      <co-button type="text" icon="co__icon--checked">文字按钮</co-button>
    </div>
    <div class="loading_btn">
      <h1>Loading按钮</h1>
      <co-button loading type="primary">loading按钮</co-button>
    </div>
    <h1>按钮组</h1>
    <co-button-group class="btn__group">
        <co-button type="warning">warning按钮</co-button>
        <co-button type="primary">primary按钮</co-button>
    </co-button-group>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    myBtn () {
        console.log("click!")
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h1 {
  position: absolute;
  left: 0;
}
.normal_btn {
  display: flex;
  justify-content: space-around;
}
.icon_btn {
  display: flex;
  justify-content: space-around;
}
.plain_btn {
  display: flex;
  justify-content: space-around;
}
.text_btn {
  display: flex;
  justify-content: space-around;
}
.loading_btn {
  display: flex;
  justify-content: space-around;
}
.btn__group {
  width: 400px;
  margin-left: 100px;
}
</style>
