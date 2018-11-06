<template>
  <div class="hello_btn">
    <h1>普通按钮</h1>
    <div class="normal_btn">
      <co-button icon="iconfont icon-duigou">普通按钮</co-button>
      <co-button icon="iconfont icon-icon_fabu" type="primary">primary按钮</co-button>
      <co-button icon="iconfont icon-shuaxin" type="success">success按钮</co-button>
      <co-button icon="iconfont icon-shanchu" type="error">error按钮</co-button>
      <co-button icon="iconfont icon-jinggao" type="warning">warning按钮</co-button>
    </div>
    <h1>简约按钮</h1>
    <div class="plain_btn">
      <co-button icon="iconfont icon-duigou" plain>普通按钮</co-button>
      <co-button icon="iconfont icon-icon_fabu" plain type="primary">primary按钮</co-button>
      <co-button icon="iconfont icon-shuaxin" plain type="success">success按钮</co-button>
      <co-button icon="iconfont icon-shanchu" plain type="error">error按钮</co-button>
      <co-button icon="iconfont icon-jinggao" plain type="warning">warning按钮</co-button>
    </div>
    <h1>图标按钮</h1>
    <div class="icon_btn">
      <co-button icon="iconfont icon-duigou" cycle></co-button>
      <co-button icon="iconfont icon-icon_fabu" type="primary" cycle></co-button>
      <co-button icon="iconfont icon-shuaxin" type="success" cycle></co-button>
      <co-button icon="iconfont icon-shanchu" type="error" cycle></co-button>
      <co-button icon="iconfont icon-jinggao" type="warning" cycle></co-button>
    </div>
    <h1>文字按钮</h1>
    <div class="text_btn">
      <co-button type="text" icon="iconfont icon-duigou">文字按钮</co-button>
    </div>
    <h1>Loading按钮</h1>
    <div class="loading_btn">
      <co-button loading type="primary">loading按钮</co-button>
    </div>
    <h1>按钮组</h1>
    <co-button-group class="btn__group">
        <co-button type="warning">按钮1</co-button>
        <co-button type="primary">按钮2</co-button>
        <co-button type="success">按钮3</co-button>
    </co-button-group>
  
    <h1 style="margin-top: 50px;">单选框</h1>
    <div class="radio-group">
      <co-radio-group :data="RadioData" v-model="val" @input="LogSomething"></co-radio-group>
    </div>

    <h1 style="margin-top: 50px;">多选框</h1>
    <div class="checkbox-group">
      <co-checkbox-group :data="RadioData" v-model="val2" @input="LogSomething"></co-checkbox-group>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      val: '1',
      val2: [],
      RadioData: [{
        text: '选项1',
        value: '1'
      }, {
        text: '选项2',
        value: '2'
      }]
    }
  },
  methods: {
    LogSomething () {
      console.log(this.val2)
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
  margin-left: 50px;
}
.icon_btn {
  display: flex;
  justify-content: space-around;
  margin-left: 50px;
}
.plain_btn {
  display: flex;
  justify-content: space-around;
  margin-left: 50px;
}
.text_btn {
  display: flex;
  justify-content: space-around;
  margin-left: 50px;
}
.loading_btn {
  display: flex;
  justify-content: space-around;
  margin-left: 50px;
}
.btn__group {
  width: 100px;
  margin-left: 100px;
}
.radio-group {
  margin-left: 100px;
  margin-top: 30px;
}
.checkbox-group {
  margin-left: 100px;
  margin-top: 50px;
}
</style>
