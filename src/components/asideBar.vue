<template>
    <div>
        <div class="nav_1_1">
            <div class="nav_1_1_div">
                <h5>仪表盘</h5>
                <a class="xingjian">
                    <i></i>
                    <div class="treeDropMenu">
                        <p @click="addFolder()">新建文件夹</p>
                        <p @click="addDashboard()">新建仪表盘</p>
                    </div>
                </a>
                <a class="zhankaisq">
                    <i></i>
                    <div class="treeDropMenu">
                        <p @click="collapseAll()">收起全部</p>
                        <p @click="expandAll()">展开全部</p>
                    </div>
                </a>
            </div>
        </div>
        <div class="search">
            <input class="search-text" type="text" autocomplete="off"  v-model="keyword"  @keyup='search($event)' @focus="show()" @blur='hide()' placeholder="输入关键字搜索" />
            <input class="search-submit" type="submit" value="" />
            <div class="search-result-box MScroll" v-show="keyword.length>0 && isHide">
                <div id="content" v-if="result.length == 0"><p class="emptyResult">没有找到相关结果</p></div>
                <div id="content" v-else>
                    <li v-for="(item, index) in result">{{item}}</li>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { searchListData } from 'src/api/getDate.js'

    export default{
        data(){
            return {
                result : [],
                keyword:'',
                isHide: false
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
            },
            search(ev) {
                let self = this;
                self.isHide = true;
                $.ajax({
                    type : 'get',
                    url: 'https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su',
                    data: {
                        wd: this.keyword
                    },
                    dataType: 'jsonp',
                    jsonp: 'cb',
                    success: function(res){
                        self.result = res.s;
                    }
                })
            },
            show(){
                this.isHide = true
            },
            hide(){
                this.isHide = false
            }
        }
    }
</script>

<style lang="less">
  @import '~assets/less/asideBar.less';
</style>
