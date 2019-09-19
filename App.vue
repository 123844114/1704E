<template>
  <div id="app">
    <h4 class="title">任务计划列表</h4>
    <!-- 添加任务 -->
    <div class="addbox">
      <input class='addinput' type="text" v-model="name" @keydown.enter="addTask" placeholder="例如：吃饭睡觉打豆豆，回车添加任务" />
      <p>总任务：2个，已完成1个 <label><input type="checkbox"/>未完成</label><label><input type="checkbox"/>已完成</label>  </p>
    </div>
    <!-- 任务列表 -->
    <div class="listbox">
      <h4>任务列表：</h4>
      <ul>
        <li v-for="(item,index) in taskList" :key='index'>
          <i>{{index+1}}</i>
          <span>{{item.name}}</span>
          <button :class="{red:item.flag,green:!item.flag}" @click="changeFlag(index)">{{item.flag?'已完成':'未完成'}}</button>
          <button>删除</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      taskList:[
        {name:'跑男',flag:false},
        {name:'极限挑战',flag:true}
      ],
      name:''
    };
  },
  methods:{
    /**
     * 新增任务方法
     */
    addTask(){
      this.taskList.push({name:this.name,flag:false})
      //清空input
      this.name=''
    },
    /**
     * 改变flag
     */
    changeFlag(index){
      this.taskList[index].flag=true
      }
  }
};
</script>

<style scoped lang='scss'>
.title {
  height: 40px;
  background: #ec414d;
  line-height: 40px;
  color: #fff;
  text-align: center;
}
.addbox {
  .addinput {
    padding: 10px;
    width: 80%;
    margin: 10px;
  }
  p {
    padding: 10px;
  }
}
.listbox {
  margin: 10px;
  li {
    padding: 5px 0;
    width: 90%;
    i {
      font-style: normal;
    }
    button {
      border: 0;
      padding: 5px;
      color: #fff;
      float: right;
      cursor: pointer;
      outline: none;
      margin: 0 5px;
      background: #909399;
      &.red {
        background: #F56C6C;
      }
      &.green {
        background: #67C23A;
      }
    }
  }
}
</style>
