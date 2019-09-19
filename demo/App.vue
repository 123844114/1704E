<template>
  <div id="app">
    <h4 class="title">任务计划列表</h4>
    <!-- 添加任务 -->
    <div class="addbox">
      <input class='addinput' type="text" placeholder="例如：吃饭睡觉打豆豆，回车添加任务" v-model="txt" @keydown.enter="addTask"/>
      <p>总任务：{{copyTaskList.length}}个，已完成{{doneLength}}个 <label><input type="checkbox" v-model="checkWill" @change='checkFn'/>未完成</label><label><input type="checkbox" v-model="checkDone" @change='checkFn'/>已完成</label>  </p>
    </div>
    <!-- 任务列表 -->
    <div class="listbox">
      <h4>任务列表：</h4>
      <ul>
        <li v-for="(item,index) in taskList" :key="index">
          <i>{{index+1}}.</i>
          <span>{{item.name}}</span>
          <button
            :class="{red:item.flag,green:!item.flag}"
            @click="doTask(index)"
          >{{item.flag?'已完成':'未完成'}}</button>
          <button @click="delFn(index)">删除</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      taskList: [
        { name: "向往的生活", flag: false },
        { name: "奔跑吧", flag: false },
        { name: "快乐家族", flag: false },
        { name: "极限挑战", flag: false }
      ],
      copyTaskList:[],//数组深拷贝
      txt: "",
      checkWill:false,
      checkDone:false
    };
  },
  computed: {
    doneLength() {
      return this.taskList.filter(item => item.flag).length;
    }
  },
  created(){
    this.copyTaskList=JSON.parse(JSON.stringify(this.taskList))
  },
  methods: {
    /**
     * 添加任务
     */
    addTask() {
      if(!this.txt){return}
      this.taskList.push({name:this.txt,flag:false})
      this.txt=''
      // 数组深拷贝
      this.deepCopy()
    },
    deepCopy(){
      this.copyTaskList=JSON.parse(JSON.stringify(this.taskList))
    },
    /**
     * 做任务
     */
    doTask(index) {
      this.taskList[index].flag = true;
      this.deepCopy()
    },
    /**
     * 复选框
     */
    checkFn(){
      if(this.checkDone===this.checkWill){
        this.taskList=this.copyTaskList
      }else{
      this.taskList=this.copyTaskList.filter(item=>{
          if(this.checkWill){
            return item.flag===false
          }else if(this.checkDone){
            return item.flag===true
          }
        })
      }
  },
  /**
   * 删除功能
   */
  delFn(index){
    this.taskList.splice(index,1)
    this.deepCopy()
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
