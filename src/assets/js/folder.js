import layerUtils from './layerUtils'

var folder = {
    add: function(){
        $.ajax({
            type: "post",
            url: "/folder/addTemplate",
            data: {},
            success : function(json){
                if(json.status == "success"){
                    var html = json.data;
                    layerUtils.layer_content("新建文件夹", layerUtils.common_size, html, function(){
                        folderZtree.initZtree(false, 1);
                        $('#add_dashboard').mCustomScrollbar({
                            scrollButtons: {
                                enable: false,
                                scrollType: "continuous",
                                scrollSpeed: 20,
                                scrollAmount: 40
                            },
                            horizontalScroll: false,
                        });
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
                }
                if(json.status == "error"){
                    layer.msg(json.message);
                }
            }
        });
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
    }
}

export default folder;
