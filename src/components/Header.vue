<template>
    <nav class="Header nav_0-2">
        <a class="nav_0-2_a1" href="/templatebase/index.html">
            <i></i>
            <span>模板库</span>
        </a>
        <a class="nav_0-2_a2" href="/semantic/index.html">
            <i></i>
            <span>智能语义</span>
        </a>
        <a class="nav_0-2_a3" href="/dashboard/index.html">
            <i></i>
            <span>仪表盘</span>
        </a>
        <a class="nav_0-2_a4" href="">
            <i></i>
            <span>炫丽大屏</span>
        </a>
    </nav>
</template>

<script>
    export default{
        props: ['HeaderIndex'],
        mounted: function(){
            let self = this;
            document.querySelector('.Header').children[self.HeaderIndex].classList.add('active')
        }
    }
</script>

<style lang="less">
  @import '~assets/less/header.less';
</style>
