<template>
  <div class="hello_btn">
    <h1>普通按钮</h1>
    <div class="normal_btn">
      <co-button icon="vm-message-icon--close">普通按钮</co-button>
      <co-button type="primary">primary按钮</co-button>
      <co-button type="success">success按钮</co-button>
      <co-button type="error">error按钮</co-button>
      <co-button type="warning">warning按钮</co-button>
    </div>
    <h1>简约按钮</h1>
    <div class="plain_btn">
      <co-button icon="vm-message-icon--close" plain>普通按钮</co-button>
      <co-button plain type="primary">primary按钮</co-button>
      <co-button plain type="success">success按钮</co-button>
      <co-button plain type="error">error按钮</co-button>
      <co-button plain type="warning">warning按钮</co-button>
    </div>
    <h1>图标按钮</h1>
    <div class="icon_btn">
      <co-button icon="vm-message-icon--close" cycle></co-button>
      <co-button icon="vm-message-icon--close" type="primary" cycle></co-button>
      <co-button icon="vm-message-icon--close" type="success" cycle></co-button>
      <co-button icon="vm-message-icon--close" type="error" cycle></co-button>
      <co-button icon="vm-message-icon--close" type="warning" cycle></co-button>
    </div>
    <h1>文字按钮</h1>
    <div class="text_btn">
      <co-button type="text" icon="vm-message-icon--success">文字按钮</co-button>
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
      <co-radio-group :data="RadioData" v-model="val" @change="LogSomething"></co-radio-group>
    </div>

    <h1 style="margin-top: 50px;">多选框</h1>
    <div class="checkbox-group">
      <co-checkbox-group :data="RadioData" v-model="val2" @change="LogSomething"></co-checkbox-group>
    </div>

    <h1 style="margin-top: 50px;">输入框</h1>
    <div class="text-input">
      <co-input placeholder="请输入一些内容" clearIcon showEye type="password" label="姓名" v-model="textv"></co-input>
      <co-input placeholder="禁止输入"  label="禁止" disabled  v-model="textv"></co-input>
    </div>

    <h1 style="margin-top: 25px;">数字输入框</h1>
    <div class="text-input-number">
      <co-input-number v-model="val3" :max="10"></co-input-number>
      <co-input-number v-model="val3" :max="10" disabled></co-input-number>
    </div>

    <h1 style="margin-top: 25px;">下拉选择框</h1>
    <div class="select-group">
      <co-select :options="options"></co-select>
      <co-select :options="options"></co-select>
    </div>

    <h1 style="margin-top: 25px;">Switch滑动开关</h1>
    <div class="switch-button">
      <co-switch v-model="val4" @change="LogSomething"></co-switch>
      <co-switch v-model="val4" disabled></co-switch>
    </div>

    <h1 style="margin-top: 40px;">Message消息提醒</h1>
    <div class="message">
      <co-button @click="showMessage">消息提醒</co-button>
      <co-button type="primary" @click="showMessage2">消息提醒2</co-button>
      <co-button type="error" @click="showMessage3">消息提醒3</co-button>
    </div>

    <h1 style="margin-top: 40px;">Badge小红点</h1>
    <div class="badge-group">
      <co-badge value="18">
        <co-button plain>数字</co-button>
      </co-badge>
      <co-badge :value="18" :max="10">
        <co-button plain>最大值</co-button>
      </co-badge>
      <co-badge value="Hot">
        <co-button plain>文字</co-button>
      </co-badge>
      <co-badge isDot>
        <co-button plain>红点</co-button>
      </co-badge>
    </div>

    <h1 style="margin-top: 40px;">表格</h1>
    <div class="table-group">
      <co-table :data="table_data">
            <co-table-col
            prop="kind"
            label="分类"
            width="15%">
            </co-table-col>
            <co-table-col
            prop="title"
            label="标题"
            width="30%">
            </co-table-col>
            <co-table-col
            prop="author"
            label="作者"
            width="20%">
            </co-table-col>
            <co-table-col
            prop="likes"
            label="浏览量"
            width="10%">
            </co-table-col>
            <co-table-col
            label="操作"
            prop="active"
            width="20%">
                <template slot-scope="row">
                    <co-button icon="vm-message-icon--close" type="error" cycle @click="showRow(row)"></co-button>
                </template>
            </co-table-col>
        </co-table>
    </div>
    
    <h1 style="margin-top: 40px;">分页组件</h1>
    <div class="pagination">
      <co-pagination 
        v-model="page"
        :page-count="20"
        :click-handler="LogSomething"
        :prev-text="'上一页'"
        :next-text="'下一页'">
      </co-pagination>
    </div>

    <h1 style="margin-top: 40px;">Tooltip提示</h1>
    <div class="tooltip-group">
      <co-tooltip :content="'Left'" :position="'left'">Left</co-tooltip>
      <co-tooltip :content="'Top'" :position="'top'">Top</co-tooltip>
      <co-tooltip :content="'Bottom'" :position="'bottom'">Bottom</co-tooltip>
      <co-tooltip :content="'Right'" :position="'right'">Right</co-tooltip>
    </div>

    <h1 style="margin-top: 40px;">BreadCrumb面包屑</h1>
    <div class="breadcrumb-group">
      <co-breadcrumb :datas="pathData"></co-breadcrumb>
    </div>

    <h1 style="margin-top: 40px;">Tabs标签页</h1>
    <div class="tabs-group">
      <co-tabs indexTab="yellow">
            <co-tab label="黄色" name="yellow" fontsize="32" tabheight="100" color="red">
                <div class="first"><h1>First</h1></div>
            </co-tab>
            <co-tab label="红色" name="red" fontsize="32" tabheight="100" color="red">
                <div class="second"><h1>Second</h1></div>
            </co-tab>
            <co-tab label="绿色" name="green" fontsize="32" tabheight="100" color="red">
                <div class="third"><h1>Third</h1></div>
            </co-tab>
        </co-tabs>
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
      page: 1,
      val2: [],
      val3: 1,
      val4: false,
      textv: '',
      RadioData: [{
        text: '选项1',
        value: '1'
      }, {
        text: '选项2',
        value: '2'
      }, {
        text: '选项3',
        value: '3'
      }],
      table_data: [{
          id:1,
          kind:"图集",
          title: "图集· 日光倾城",
          author: "Amanda",
          likes: 190
      },{
          id:2,
          kind:"图集",
          title: "图集·军训，再见",
          author: "Rose",
          likes: 18
      },{
          id:3,
          kind:"水墨",
          title: "乐在桂花节",
          author: "Elegenthus",
          likes: 189
      },{
          id:4,
          kind:"新闻",
          title: "关于实施校园网运营服务模式改革相关情况的说明",
          author: "Cruyun",
          likes: 1001
      }],
      options: [{
        value: 1,
        label: '广州'
      }, {
        value: 2,
        label: '深圳'
      }, {
        value: 3,
        label: '上海'
      }, {
        value: 4,
        label: '北京'
      }],
      pathData: [{
        path: 'home',
        title: 'Home'
      }, {
        path: 'index',
        title: 'Index',
        icon: 'vm-message-icon--close'
      }, {
        path: 'button',
        title: 'Button',
        icon: 'vm-message-icon--close'
      }, {
        path: 'radio',
        title: 'Radio',
        icon: 'vm-message-icon--close'
      }, {
        path: 'checkbox',
        title: 'CheckBox',
        icon: 'vm-message-icon--close'
      }, {
        path: 'input',
        title: 'Input',
        icon: 'vm-message-icon--close'
      }, {
        path: 'loading',
        title: 'Loading'
      }]
    }
  },
  methods: {
    LogSomething (val) {
      console.log(val)
    },
    showMessage () {
      this.$message('这是一条消息提示')
    },
    showMessage2 () {
      this.$message({
        type: 'success',
        message: '这是一条成功的消息提示'
      })
    },
    showMessage3 () {
      this.$message({
        type: 'error',
        message: '这是一条带关闭符号的消息提示',
        showClose: true
      })
    },
    showRow (row) {
      console.log(row)
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
  margin-top: 50px;
}
.icon_btn {
  display: flex;
  justify-content: space-around;
  margin-left: 50px;
  margin-top: 30px;
}
.plain_btn {
  display: flex;
  justify-content: space-around;
  margin-left: 50px;
  margin-top: 30px;
}
.text_btn {
  display: flex;
  justify-content: space-around;
  margin-left: 50px;
  margin-top: 30px;
}
.loading_btn {
  display: flex;
  justify-content: space-around;
  margin-left: 50px;
  margin-top: 30px;
}
.btn__group {
  width: 100px;
  margin-left: 100px;
  margin-top: 30px;
}
.radio-group {
  margin-left: 100px;
  margin-top: 30px;
}
.checkbox-group {
  margin-left: 100px;
  margin-top: 50px;
}
.text-input {
  margin-left: 150px;
  margin-top: 20px;
}
.text-input-number {
  margin-left: 150px;
  margin-top: 20px;
}
.switch-button {
  margin-left: 150px;
  margin-top: 40px;
}
.message {
  margin-left: 250px;
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
}
.badge-group {
  margin-left: 250px;
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
}
.table-group {
  margin-left: 250px;
  margin-top: 50px;
}
.select-group {
  margin-left: 150px;
  margin-top: 30px;
  margin-bottom: 20px;
  display: flex;
}
.pagination {
  margin-left: 150px;
  margin-top: 70px;
}
.tooltip-group {
  margin-left: 150px;
  margin-top: 70px;
  display: flex;
  justify-content: space-around;
  width: 400px;
}
.breadcrumb-group {
  margin-left: 150px;
  margin-top: 30px;
}
.tabs-group {
  margin-left: 150px;
  margin-top: 80px;
  height: 200px;

  .first {
    height: 200px;
    background: yellow;
  }
  .second {
    height: 200px;
    background: red;
  }
  .third {
    height: 200px;
    background: greenyellow;
  }
}
</style>
