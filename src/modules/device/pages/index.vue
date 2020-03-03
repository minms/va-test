<template>
  <div>
    <div class="app-toolbar">
      <el-button type="primary">添加设备</el-button>
    </div>
    
    <el-table :data="items">
      <el-table-column type="index" label="#"></el-table-column>
      <el-table-column label="设备序列号"></el-table-column>
    </el-table>
  </div>
</template>

<script>
  import {getDeviceItems} from "../api";

  export default {
    name: "index",
    data() {
      return {
        pager: {},
        items: [],
      }
    },
    created() {
      this.reload();
    },
    methods: {
      reload() {
        delete this.pager['page'];
        this.load();
      },
      load() {
        getDeviceItems(Object.assign({}, this.pager)).then(({items, pager}) => {
          console.log(items, pager)
        })
      }
    }
  }
</script>