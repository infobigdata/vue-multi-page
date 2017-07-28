<template>
    <div class="warp">
        <leftBar></leftBar>
        <ZHeader HeaderIndex="2"></ZHeader>
        <div class="nav_1">
            <asideBar></asideBar>
            <div id="fold_has" class="daohang MScroll">
                <ul id="treeDom" class="zTreeList"></ul>

                <div class="treeDropMenu treeDropLeft" :style="tips.styleObject">
                    <p>名称：<span >{{treeName}}</span></p>
                </div>

                <div class="treeDropMenu treeDropTools" :style="tips.toolStyleObject">
                    <p @click="folderEdit()">编辑</p>
                    <p @click="folderCopy()">复制</p>
                    <p @click="folderMove()">移动</p>
                    <p @click="folderDelete()">删除</p>
                </div>
            </div>
        </div>
        <section class="section_0">
            <div class="nav_2" id="baseinfo">
            </div>
            <div id="fullscreen"></div>
            <div class="section_0_box MScroll" id="gridster_Box">
                <div class="gridster" id="charts">
                </div>
            </div>
            <div class="section_0_box" style="display:none" id="gridster_Box_no">
                <div class="content_nothing">
                    <i class="ybp-img_nothing"></i>
                    <span class="ybp-add-filebox" onclick="chartAdd.init()">添加图表</span>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import Base from 'assets/js/base';

require('assets/less/ztree.less')
require('./less/content.less')

import leftBar from 'components/leftBar';
import ZHeader from 'components/Header';
import asideBar from 'components/asideBar';

import { treeListData } from 'src/api/getDate.js'

import storageService from 'assets/js/storage'
import gridsterTool from 'assets/js/gridster'
import folder from 'assets/js/folder'

export default{
    components: {
      ZHeader,
      leftBar,
      asideBar
    },
    data() {
        return {
            treeName: '',
            tips: {
                styleObject: {
                    display: '',
                    top : 0
                },
                toolStyleObject: {
                    display: '',
                    top: 0
                }
            },
            folderId : ''
        }
    },
    mounted(){
        this.initTree()
    },
    methods: {
        initTree(){
            const self = this;
            const setting = {
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
                            let thisLi = $("#"+treeNode['tId']);
                            let name = treeNode['name'];
                            self.treeName = name;
                            self.tips.styleObject = {
                                display: 'block',
                                top: thisLi.offset().top + 'px'
                            }

                      }
                  },
                  removeHoverDom: function(){
                    self.tips.styleObject.display = 'none';
                  }
                },
                data: {
                  simpleData: {
                    enable: true
                  }
                },
                callback: {
                  onClick: self.onClick,
                  beforeDrag: self.beforeDrag,
                  beforeRemove: self.beforeRemove,
                  onRename: self.onRename,
                  beforeRename: self.beforeRename,
                  beforeClick: this.beforeClick,
                  beforeEditName: self.beforeEditName,
                }
            }
            // Base.C.ajax({
            //     url:'tree.php',
            //     success:function(res){
            //         if (res.status == 'success') {
                treeListData().then(res => {

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
                                    name: data[i].name,
                                    sourceName: data[i].name,
                                    isParent: isParent,
                                    iconOpen: 'http://dev-web.runupdata.com/js/zTree_v3/img/wenjianjia_2.png',
                                    iconClose: 'http://dev-web.runupdata.com/js/zTree_v3/img/wenjianjia_1.png',
                                    icon: 'http://dev-web.runupdata.com/js/zTree_v3/img/wenjianjia_2.png',
                                }
                            }
                        }
                        $.fn.zTree.init($("#treeDom"), setting, zNodes);
                    }else{

                    }
                    self.$nextTick(function(){
                        self.addMethod();
                    })

                })
            //         }
            //     }
            // })

        },
        onClick(e, treeId, treeNode){
            var id = treeNode['id'];
            var pId = treeNode['pId'];
            storageService.setParameter("dashboard_id", id);
            storageService.setParameter("folder_id", pId);
            $("#gridster_Box").show();
            gridsterTool.initGridster();
        },
        beforeDrag(treeId, treeNodes){
            return false;
        },
        beforeRemove(treeId, treeNode){
            if(treeNode.isParent){
                folderDelete.init(treeNode['id'], treeNode['name']);
            }
            return false;
        },
        onRename(event, treeId, treeNode, isCancel){
            var id = treeNode.id;
            var folderName = self.treeName;
            $.ajax({
                type : "post",
                url : "/folder/update",
                data : {
                    id: id,
                    folderName: folderName,
                    type: 1
                },
                success : function(){
                    self.initZtree();
                }
            });
        },
        beforeRename(treeId, treeNode, newName, isCancel){
            self.treeName = newName;
            if(newName.length<1){
                layer.msg("名字不能为空");
                return false;
            }
        },
        beforeClick(treeId, treeNode, clickFlag){
            this.completeLi(treeId);
            if(treeNode.isParent){
                var zTree = $.fn.zTree.getZTreeObj("treeDom");
                zTree.expandNode(treeNode);
                this.completeLi(treeId);
                return false;
            }
        },
        beforeEditName(treeId, treeNode){
            treeNode['name'] = treeNode['sourceName'];
        },
        completeLi(treeId){
            if(treeId == null){
                treeId = "treeDom";
            }
            var treeObj = $.fn.zTree.getZTreeObj(treeId);
            var node = treeObj.getNodes();
            var nodes = treeObj.transformToArray(node);
            for(var i = 0; i < nodes.length; i++){
                var tId = nodes[i]["tId"];
                var isParent = nodes[i]["isParent"];
                if(isParent){
                    $("#" + tId).addClass("folder");
                }else{
                    $("#" + tId).addClass("dashboard");
                }
            }
        },
        addMethod(){
            const self = this;
            let thisTime;
            $('#treeDom').on('mouseover', '.dashboard span.button.remove', function() {
                const $this = $(this),
                      toolsTop = $this.offset().top,
                      toolsLeft = $this.offset().left;
                self.tips.toolStyleObject = {
                    display: 'block',
                    top: toolsTop + 16  +'px'
                }

                var treeObj = $.fn.zTree.getZTreeObj('treeDom'),
                node = treeObj.getNodes(),
                nodes = treeObj.transformToArray(node);
                var thisId = this.parentNode.parentNode.id;

                for(var i = 0, len = nodes.length; i < len; i++) {
                    if(nodes[i]['tId'] == thisId) {
                        self.folderId = nodes[i]['id'];
                        break;
                    }
                }
            })
            .on('mouseout', '.dashboard span.button.remove', function() {
                self.tips.toolStyleObject = {
                    display: 'none'
                }
            });
        },
        folderEdit(){
            let self = this;
            $.ajax({
                type : "post",
                url : "/dashboard/editTemplate",
                data : {
                    dashboardId : self.folderId,
                },
                success : function(json) {
                    if (json.status == "success") {
                        var html = json.data;
                        layer_content("编辑仪表盘", layer_common_size, html, function() {
                            tag();
                        }, function() {
                            var dashboard_id = $("#dashboard_id").val();
                            var dashboard_name = $("#edit_dashboard_name").val();
                            var tag_id = $("#tag_id").val();
                            var description = $("#description").val();
                            var nameFlag = checkLen(dashboard_name, 1, 100, "仪表盘名称不可为空", "仪表盘名称不可超过100个字");
                            var descriptionFlag = checkLen(description, 0, 100, "", "仪表盘备注不可超过100个字");
                            if(!nameFlag || !descriptionFlag){
                                return false;
                            }
                            var data = {
                                id: dashboard_id,
                                name: dashboard_name,
                                tagId: tag_id,
                                description: description,
                            }
                            layer.closeAll();
                            dashboardEdit.confirm(data, dashboard_id);
                        });
                    }
                    if(json.status == "error"){
                        layer.msg(json.message);
                    }
                },
                error: function(res){
                    alert('error:'+res.status)
                }
            });
        },
        folderCopy(){
            console.log('Copy')
        },
        folderMove(){
            console.log('Move')
        },
        folderDelete(){
            console.log('Delete')
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
