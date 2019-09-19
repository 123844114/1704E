<template>
    <footer>
        <p>
            <span class="iconfont icon-shouye"></span>
            <span>首页</span>
        </p>
        <p>
            <span class="iconfont icon-faxian"></span>
            <span>购物车</span>
        </p>
        <p>
            <span class="iconfont icon-dingdan"></span>
            <span>分类</span>
        </p>
        <p>
            <span class="iconfont icon-weidenglu"></span>
            <span>个人</span>
        </p>
    </footer>
</template>

<script>
export default {

}
</script>

<style>
footer{
    width: 100%;
    height: 60px;
    color: #ffffff;
    text-align: center;
    background:#008EEF;
    display: flex;
    align-items: center;
    justify-content:space-between
}
p{
    flex: 1;
    display: flex;
    flex-direction: column
}
.iconfont{font-size: 20px;}

</style>
