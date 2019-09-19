<template>
  <div class="cata-item">
    <h3>{{options.Subject}}{{pIndex}}</h3>
    <ul>
      <li
        @click="selectFn(index,item)"
        v-for="(item,index) in options.Content"
        :key="index"
        :class="{border:options.Layout==='border',active:currentIndex==index}"
      >
        <img :src="item.Icon" alt />
        <span>{{item.Label}}</span>
      </li>
    </ul>
    <!-- <ul v-else>
            <li v-for='(item,index) in options.Content' :key='index' style="    border: 1px solid red;">
                <img :src="item.Icon" alt="" style="width: 30%;">
                <span>{{item.Label}}</span>
            </li>
    </ul>-->
  </div>
</template>

<script>
export default {
  props: ["options","pIndex"],
  data() {
    return {
      currentIndex: null
    };
  },
  methods: {
    /**
     * 点谁选中谁
     * 1、加样式
     * 2、存数据--本地存储 list
     */
    selectFn(index,item) {
      this.currentIndex = index;
      // 本地存储 重点  从本地取出来--->操作--->重新存回本地
      let list =  localStorage.list?JSON.parse(localStorage.list):[]
      // list.push(this.options.Content[index])
      list[this.pIndex]=item  //根据下标存数据
      localStorage.list=JSON.stringify(list)
    }
  }
};
</script>

<style scoped lang='scss'>
h3 {
  margin: 10px;
}
ul {
  display: flex;
  flex-wrap: wrap;
  // justify-content: space-around;
  li {
    width: 25%;
    text-align: center;
    img {
      width: 100%;
    }
  }
  li.border {
    border: 1px solid red;
    img {
      width: 30%;
    }
  }
}
ul li.active {
  border: 2px solid green;
}
</style>
