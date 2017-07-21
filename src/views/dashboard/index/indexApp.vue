<template>
    <div class="warp">
        <leftBar></leftBar>
        <ZHeader HeaderIndex="2"></ZHeader>
        <div class="nav_1">
            <asideBar></asideBar>
            <div id="fold_has" class="daohang MScroll">
                <ul id="treeDom" class="ztree treeDom ztree_mbk">
                </ul>
                <div class="Mlayer_2" id="tree_xiangqing" style="display: none; top: 248px;">
                    <i></i>
                    <div style=" min-height: auto;">
                        <p>名称：<span >{{treeName}}</span></p>
                        <p>标签：<span id="tree_xiangqing_bq"></span></p>
                        <p>备注：<span id="tree_xiangqing_bz"></span></p>
                    </div>
                </div>
                <!-- <div class="Mlayer_3" id="shujugengxin">
                    <i></i>
                    <div style="padding: 8px 12px;">
                        <p>
                            <span>数据更新</span>
                            <span id="date"></span>
                            <span id="time"></span>
                        </p>
                    </div>
                </div> -->

                <div class="Mlayer_3" id="tree_tukuai_bianji" style="display: block;">
                    <i></i>
                    <div class="zhankaisq_xq">
                        <p onclick="dashboard.exportChart()">导出图片</p>
                        <p onclick="chartCopy.init()">复制图表</p>
                        <p onclick="chartMove.init()">移动图表</p>
                        <p onclick="chartDelete.init()">删除</p>
                    </div>
                    <input type="hidden" id="chart_id" />
                </div>

                <div class="Mlayer_3" id="tree_xiangqing_bianji">
                    <i></i>
                    <div class="zhankaisq_xq">
                        <p onclick="dashboardEdit.init()">编辑</p>
                        <p onclick="dashboardCopy.init()">复制</p>
                        <p onclick="dashboardMove.init()">移动</p>
                        <p onclick="dashboardDelete.init()">删除</p>
                        <input id="thiszTreeId" type="hidden" value="" />
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import Base from 'assets/js/base';

import leftBar from 'components/leftBar';
import ZHeader from 'components/Header';
import asideBar from 'components/asideBar';

export default{
    components: {
      ZHeader,
      leftBar,
      asideBar
    },
    data() {
      return {
        treeName: '',
        treeData:{
            "statusCode":"200",
            "status":"success",
            "message":null,
            "data":[
                {"id":"ba7d48efce","pId":"95fb4a9302","name":"投诉分析TU","open":false,"xiangqing":null,"xinzeng":false,"oper":null,"flag":null,"folderName":null,"isParent":true,iconOpen:'http://dev-web.runupdata.com/js/zTree_v3/img/wenjianjia_1.png'},
                {"id":"95fb4a9302","pId":"0","name":"工会","open":false,"xiangqing":null,"xinzeng":false,"oper":null,"flag":null,"folderName":null,"isParent":true,iconOpen:'http://dev-web.runupdata.com/js/zTree_v3/img/wenjianjia_1.png'},
                {"id":"96c3eeda1c","pId":"e63d20c681","name":"投诉分析Gov","open":false,"xiangqing":null,"xinzeng":false,"oper":null,"flag":null,"folderName":null,"isParent":true,iconOpen:'http://dev-web.runupdata.com/js/zTree_v3/img/wenjianjia_1.png'},
                {"id":"e63d20c681","pId":"0","name":"文明办","open":false,"xiangqing":null,"xinzeng":false,"oper":null,"flag":null,"folderName":null,"isParent":true,iconOpen:'http://dev-web.runupdata.com/js/zTree_v3/img/wenjianjia_1.png'},
                {"id":"233","pId":"ba7d48efce","name":"中文","open":false,"xiangqing":null,"xinzeng":false,"oper":null,"flag":null,"folderName":null,"isParent":false,iconOpen:'http://dev-web.runupdata.com/js/zTree_v3/img/wenjianjia_1.png'},
                {"id":"234","pId":"ba7d48efce","name":"test2017-07-13 14:02:38","open":false,"xiangqing":null,"xinzeng":false,"oper":null,"flag":null,"folderName":null,"isParent":false,iconOpen:'http://dev-web.runupdata.com/js/zTree_v3/img/wenjianjia_1.png'},
                {"id":"249","pId":"ba7d48efce","name":"aaaa","open":false,"xiangqing":null,"xinzeng":false,"oper":null,"flag":null,"folderName":null,"isParent":false,iconOpen:'http://dev-web.runupdata.com/js/zTree_v3/img/wenjianjia_1.png'},
                {"id":"251","pId":"ba7d48efce","name":"test2017-07-18 10:47:15","open":false,"xiangqing":null,"xinzeng":false,"oper":null,"flag":null,"folderName":null,"isParent":false,iconOpen:'http://dev-web.runupdata.com/js/zTree_v3/img/wenjianjia_1.png'},
                {"id":"252","pId":"96c3eeda1c","name":"投诉分析","open":false,"xiangqing":null,"xinzeng":false,"oper":null,"flag":null,"folderName":null,"isParent":false,iconOpen:'http://dev-web.runupdata.com/js/zTree_v3/img/wenjianjia_1.png'}
            ],
            "map":null,"page":null,"queryBean":null,"total":0,"rows":null,"listBean":null
        }
      }
    },
    mounted(){
        this.initTree()
    },
    methods: {
        initTree(){
            var self = this;
            var setting = {
                edit: {
                  enable: true,
                  renameTitle: "",
                  removeTitle: ""
                },
                view: {
                  dblClickExpand: false,
                  showLine: false,
                  showTitle: false,
                  addHoverDom: function(treeId, treeNode){
                    if(!treeNode.isParent) {
                            var thisLi = $("#"+treeNode['tId']);
                            // var thisLi = $('#'+a);
                            var name = treeNode['name'];
                            //$("#tree_xiangqing_nc").html(name);
                            self.treeName = name;
                            $('#tree_xiangqing').css({
                              'display': 'block',
                              'top': thisLi.offset().top
                            });
                            //alert(thisLi.offset().top)
                            console.log(treeNode)
                      }
                  },
                  removeHoverDom: function(){
                    $('#tree_xiangqing').css('display', 'none');
                  }
                },
                data: {
                  simpleData: {
                    enable: true
                  }
                },
                callback: {
                  onClick: self.onClick,
                  // beforeDrag: dashboardMenuZtree.beforeDrag,
                  // beforeRemove: dashboardMenuZtree.beforeRemove,
                  // onRename: dashboardMenuZtree.onRename,
                  // beforeRename: dashboardMenuZtree.beforeRename,
                  // beforeClick: dashboardMenuZtree.beforeClick,
                  // beforeEditName: dashboardMenuZtree.beforeEditName,
                }
            }
            Base.C.ajax({
                url:'tree.php',
                success:function(res){
                    // if(res.status == "success"){
                    //     var data = res.data;
                    //     var zNodes = [];
                    //     if(data && data.length > 0){
                    //       /*$("#fold_has").show();
                    //       $("#fold_has_no").hide();
                    //       $("#baseinfo").show();
                    //       $("#gridster_Box").show();
                    //       $("#gridster_Box_no").hide();*/
                    //       var hasDashboard = false;
                    //       for(var i = 0; i < data.length; i++){
                    //         var isParent = data[i].parent;
                    //         if(isParent){
                    //           zNodes[i] = {
                    //             id: data[i].id,
                    //             pId: data[i].pId,
                    //             name: cutStr(data[i].name, 10),
                    //             sourceName: data[i].name,
                    //             isParent: isParent,
                    //             icon: zTI.I_1_C,
                    //             iconOpen: zTI.I_1_O,
                    //             iconClose: zTI.I_1_C,
                    //           }
                    //         }else{
                    //           hasDashboard = true;
                    //           zNodes[i] = {
                    //             id: data[i].id,
                    //             pId: data[i].pId,
                    //             name: cutStr(data[i].name, 10),
                    //             sourceName: data[i].name,
                    //             isParent: isParent,
                    //             iconOpen: zTI.I_2_O,
                    //             iconClose: zTI.I_2_C,
                    //             icon: zTI.I_2_O,
                    //           }
                    //         }
                    //       }
                    //     }
                    //     $.fn.zTree.init($("#treeDom"), setting, zNodes);
                    // }
                    if (res.status == 'success') {
                        var data = res.data;
                        var zNodes = [];

                        if(data && data.length > 0){
                            var hasDashboard = false;
                            for(var i = 0; i < data.length; i++){
                                var isParent = data[i].parent;
                                if(isParent){
                                  zNodes[i] = {
                                    id: data[i].id,
                                    pId: data[i].pId,
                                    name: data[i].name,
                                    sourceName: data[i].name,
                                    isParent: isParent,
                                    icon: 'http://dev-web.runupdata.com/js/zTree_v3/img/wenjianjia_1.png',
                                    iconOpen: 'http://dev-web.runupdata.com/js/zTree_v3/img/wenjianjia_2.png',
                                    iconClose: 'http://dev-web.runupdata.com/js/zTree_v3/img/wenjianjia_1.png',
                                  }
                                }else{
                                    hasDashboard = true;
                                      zNodes[i] = {
                                        id: data[i].id,
                                        pId: data[i].pId,
                                        name: cutStr(data[i].name, 10),
                                        sourceName: data[i].name,
                                        isParent: isParent,
                                        iconOpen: 'http://dev-web.runupdata.com/js/zTree_v3/img/wenjianjia_2.png',
                                        iconClose: 'http://dev-web.runupdata.com/js/zTree_v3/img/wenjianjia_1.png',
                                        icon: 'http://dev-web.runupdata.com/js/zTree_v3/img/wenjianjia_2.png',
                                      }
                                }
                            }
                        }
                        $.fn.zTree.init($("#treeDom"), setting, zNodes);
                    }
                }
            })

        },
        onClick(e, treeId, treeNode){
            alert('a: '+treeNode.isParent)
        }


    }
}
</script>

<style>

    .nav_1 {
    position: relative;
    width: 260px;
    height: 100%;
    background-color: #fff;
    float: left;
}
</style>
