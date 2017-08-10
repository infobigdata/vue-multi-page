import layerUtils from './layerUtils'
import * as template from 'src/api/getDate.js'

var folder = {
    add: function(){
        template.getTpl().then(data => {
            var json = data.addFolder;
        /*$.ajax({
            type: "post",
            url: "/folder/addTemplate",
            data: {},
            success : function(json){
                if(json.status == "success"){*/
                    var html = json.data;
                    layerUtils.layer_content("新建文件夹", layerUtils.layer_common_size, html, function(){
                        folder.folderZtree(false, 1);
                    }, function(){
                        if(json.status == "success"){
                            var folderName = $("#folder_name").val();
                            var folderPid = $("#folder_id").val();
                            var flag = checkLen(folderName, 1, 100, "文件夹名称不可为空", "文件夹名称不可超过100个字");
                            if(flag){
                                folder.addConfirm(folderName, folderPid);
                            }else{
                                return false;
                            }
                        }
                        if(json.status == "error"){
                            layer.msg(json.message);
                        }
                    });
        //         }
        //         if(json.status == "error"){
        //             layer.msg(json.message);
        //         }
        //     }
        // });
        })
    },
    addConfirm: function(folderName, folderPid){
        $.ajax({
            type : "post",
            url : "/folder/add",
            data : {
                folderName: folderName,
                folderPid: folderPid,
                folderType: 1
            },
            success : function(json){
                if(json.status == "success"){
                    dashboardMenuZtree.initZtree();
                    layer.closeAll();
                }
                if(json.status == "error"){
                    layer.msg(json.message);
                }
            }
        });
    },
    delete: function(folderId, folderName){
        $.ajax({
            type : "post",
            url : "/folder/deleteTemplate",
            data : {
                folderId: folderId,
                folderName: folderName
            },
            //url: 'http://localhost:8002/static/api/deleteTemplate.js',
            success : function(json){
                if(json.status == "success"){
                    var html = json.data;
                    layerUtils.layer_content("删除文件夹", layerUtils.common_size, html, function(){

                    }, function(){
                        layer.closeAll();
                        folder.deleteConfirm(folderId);
                    });
                }
                if(json.status == "error"){
                    layer.msg(json.message);
                }
            },
            error(json){
                var res = json.responseText;
                layerUtils.layer_content("删除文件夹",layerUtils.common_size,'<h1>Hello World</h1>')
            }
        });
    },
    deleteConfirm: function(folderId){
        $.ajax({
            type: "post",
            url: "/folder/delete",
            data: {
                id : folderId
            },
            success: function(json){
                if(json.status == "success"){
                    dashboardMenuZtree.initZtree();
                }
                if(json.status == "error"){
                    layer.msg(json.message);
                }
            }
        });
    },
    folderZtree: function(flag, type){
        var setting = {
            view: {
                dblClickExpand: false,
                showLine: false
            },
            data: {
                simpleData: {
                    enable: true
                }
            },
            callback: {
                onClick: folder.onClick,
            }
        };
        template.getTpl().then(data => {
            var json = data.listFolder;
        // $.ajax({
        //     type: "post",
        //     url: "/folder/list",
        //     data: {
        //         type : type
        //     },
        //     success: function(json){
        //         if(json.status == "success"){
                    var data = json.data;
                    var zNodes = [];
                    var count = 0;
                    if(data != null && data.length > 0){
                        for(var i = 0; i < data.length; i++){
                            var isParnet = data[i].parent;
                            if(isParnet){
                                if(flag){
                                    zNodes[count] = {
                                            id: data[i].id,
                                            pId: data[i].pId,
                                            name: data[i].name,
                                            sourceName: data[i].name,
                                            iconOpen: 'http://dev-web.runupdata.com/js/zTree_v3/img/wenjianjia_2.png',
                                            iconClose: 'http://dev-web.runupdata.com/js/zTree_v3/img/wenjianjia_1.png',
                                            icon: 'http://dev-web.runupdata.com/js/zTree_v3/img/wenjianjia_2.png'
                                    }
                                    count++;
                                }else{
                                    var pid = data[i].pId
                                    if(pid == "0"){
                                        zNodes[count] = {
                                                id: data[i].id,
                                                pId: data[i].pId,
                                                name: data[i].name,
                                                sourceName: data[i].name,
                                                iconOpen: 'http://dev-web.runupdata.com/js/zTree_v3/img/wenjianjia_2.png',
                                                iconClose: 'http://dev-web.runupdata.com/js/zTree_v3/img/wenjianjia_1.png',
                                                icon: 'http://dev-web.runupdata.com/js/zTree_v3/img/wenjianjia_2.png'
                                        }
                                        count++;
                                    }
                                }
                            }
                        }
                    }
                    $.fn.zTree.init($("#folderTreeDom"), setting, zNodes);
        //         }
        //         if(json.status == "error"){
        //             layer.msg(json.message);
        //         }
        //     }
        });
    },
    onClick : function(e, treeId, treeNode){
        $("#viewFolder").html(treeNode['name']);
        $("#folder_id").val(treeNode['id']);
    }
}

export default folder;
