<template>
  <div id="app">
    <!-- {{dataJson}}  -->
    <!-- 上中下布局 -->
    <headerVue />
    <div class="content">
      <BoxItem
        v-for="(item,index) in dataJson"
        :key="index"
        :options="item"
        msg="hello"
        :index='index'
        @checkOneEvent="checkOneFn"
        @delEvent="delFn"
      />
    </div>总价黑条
    <div class="total">
      <span class="iconfont icon-duigou" :class="{active:isCheckAll}" @click="checkAllFn"></span>
      全选 总价：{{totalPrice}} 总个数：
    </div>
    <footerVue />
    <MyDialog
      :closable="closable"
      title="窗口标题"
      :show="basicDialog.open"
      :btns="basicDialog.btns"
    >人生的刺，就在这里，留恋着不肯快走的，偏是你所不留恋的东西。</MyDialog>
  </div>
</template>

<script>
import headerVue from "./components/header";
import footerVue from "./components/footer";
import BoxItem from "./components/BoxItem";
import MyDialog from "./components/MyDialog";
export default {
  data() {
    return {
      dataJson: [],
      isCheckAll: false,
      str: "",
      delIndex: -1,
      closable: false,
      basicDialog: {
        open: false, //控制显隐
        title: "窗口标题",
        btns: [
          {
            text: "取消",
            handler: this.onBasicCancel
          },
          {
            text: "确认操作",
            handler: this.onBasicConfirm
          }
        ]
      }
    };
  },
  components: { headerVue, footerVue, BoxItem, MyDialog },
  created() {
    this.$axios.get("/list").then(({ data }) => {
      console.log(data);
      this.dataJson = data;
    });
  },
  computed: {
    /**
     * 总价
     * 数组求和   reduce
     */
    totalPrice() {
      // return 100
      return this.dataJson.reduce((total, current) => {
        if (current.flag) {
          total += current.price * current.count;
        }
        return total;
      }, 0);
    }
  },
  methods: {
    delFn(i) {
      this.basicDialog.open = true;
      this.delIndex = i;
    },
    onBasicConfirm() {
      alert("点击了确定");
      //删除该条数据
      let index = this.delIndex
      this.dataJson.splice(index,1)
      this.basicDialog.open = false;
    },
    onBasicCancel() {
      alert("点击了取消");
      this.basicDialog.open = false;
    },
    /**
     * 全选按钮
     * 1、变样式
     */
    checkAllFn() {
      this.isCheckAll = !this.isCheckAll;
      this.dataJson.forEach(item => (item.flag = this.isCheckAll)); //同步
    },
    /**
     * 获得子组件数据
     */
    checkOneFn() {
      this.isCheckAll = this.dataJson.every(item => item.flag);
    }
  }
};
</script>

<style>
.active {
  color: red;
}
#app {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.content {
  flex: 1;
  overflow-y: auto;
}
.total {
  width: 100%;
  position: fixed;
  bottom: 85px;
  height: 60px;
  background: rgba(0, 0, 0, 0.8);
  color: #fff;
  font-size: 28px;
}
</style>
