---
pageClass: table-page-class
---

# Table
## Table表格

<template>
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
                    <co-button icon="icon-guanbi" type="error" cycle @click="showRow(row)"></co-button>
                </template>
            </co-table-col>
        </co-table>
    </div>
</template>

<script>
export default {
  data () {
    return {
        table_data: [{
          id:1,
          kind:"图片",
          title: "图片",
          author: "Amanda",
          likes: 190
      },{
          id:2,
          kind:"URL",
          title: "URL",
          author: "Rose",
          likes: 18
      },{
          id:3,
          kind:"城市",
          title: "广州",
          author: "Elegenthus",
          likes: 189
      },{
          id:4,
          kind:"APP",
          title: "支付宝",
          author: "Cruyun",
          likes: 1001
      }]
    }
  },
  methods: {
    showRow (row) {
        console.log(row)
    }
  }
}
</script>


```html
<template>
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
                    <co-button icon="icon-guanbi" type="error" cycle @click="showRow(row)"></co-button>
                </template>
            </co-table-col>
        </co-table>
    </div>
</template>

<script>
export default {
  data () {
    return {
        table_data: [{
          id:1,
          kind:"图片",
          title: "图片",
          author: "Amanda",
          likes: 190
      },{
          id:2,
          kind:"URL",
          title: "URL",
          author: "Rose",
          likes: 18
      },{
          id:3,
          kind:"城市",
          title: "广州",
          author: "Elegenthus",
          likes: 189
      },{
          id:4,
          kind:"APP",
          title: "支付宝",
          author: "Cruyun",
          likes: 1001
      }]
    }
  },
  methods: {
    showRow (row) {
        console.log(row)
    }
  }
}
</script>
```