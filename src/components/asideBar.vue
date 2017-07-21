<template>
    <div>
        <div class="nav_1_1">
            <div class="nav_1_1_div">
                <h5>仪表盘</h5>
                <a class="xingjian">
                    <i></i>
                    <div class="treeDropMenu">
                        <div class="xingjian_xq">
                            <p @click="addFolder()">新建文件夹</p>
                            <p @click="addDashboard()">新建仪表盘</p>
                        </div>
                    </div>
                </a>
                <a class="zhankaisq">
                    <i></i>
                    <div class="treeDropMenu">
                        <div class="zhankaisq_xq">
                            <p @click="collapseAll()">收起全部</p>
                            <p @click="expandAll()">展开全部</p>
                        </div>
                    </div>
                </a>
            </div>
        </div>
        <div class="search">
            <input class="search-text" type="text" autocomplete="off" placeholder="输入关键字搜索" />
            <input class="search-submit" type="submit" value="" />
            <div class="nav_1_form_ss_xq MScroll" id="tipContent">
                <div id="content"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        data(){
            return {

            }
        },
        methods: {
            addFolder(){
                alert('addFolder')
            },
            addDashboard(){
                alert('addDashboard')
            },
            collapseAll(){
                alert('collapseAll')
            },
            expandAll(){
                alert('expandAll')
            }
        }
    }
</script>

<style lang="less">
  @import '~assets/less/asideBar.less';
</style>
