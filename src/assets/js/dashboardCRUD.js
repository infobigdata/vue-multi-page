import layerUtils from './layerUtils'
import * as template from 'src/api/getDate.js'
import common from './common.js'
import folder from './folder.js'

function lenStat (target){
        var strlen=0; //初始定义长度为0
        var txtval = $.trim(target);
        for(var i=0;i<txtval.length;i++){
         if(common.isChinese(txtval.charAt(i))==true){
          strlen=strlen+2;//中文为2个字符
         }else{
          strlen=strlen+1;//英文一个字符
         }
        }
        strlen=Math.ceil(strlen/2);//中英文相加除2取整数
        return strlen;
    }


function checkLen(str, min, max, lessMsg, moreMsg){
    var length = lenStat(str);
    if(length < min){
        layer.msg(lessMsg);
        return false;
    }
    if(length > max){
        layer.msg(moreMsg);
        return false;
    }
    return true;
}

var dashboard = {
    add: function(){
        template.getTpl().then(data => {
            var json = data.addDashboard;
      // $.ajax({
      //   type: "post",
      //   url: "/dashboard/addTemplate",
      //   data: {},
      //   success: function(json){
      //     if(json.status == "success"){
            var html = json.data;
            layerUtils.layer_content("新建仪表盘", layerUtils.layer_common_size, html, function(){
              folder.folderZtree(true, 1);

              /*$('#add_dashboard').mCustomScrollbar({
                scrollButtons: {
                  enable: false,
                  scrollType: "continuous",
                  scrollSpeed: 20,
                  scrollAmount: 40
                },
                horizontalScroll: false,
              });*/
              //tag();
            }, function(){
              var folderId = $("#folder_id").val();
              var dashboardName = $("#add_boardname").val();
              var tagId = $("#tag_id").val();
              var description = $("#description").val();
              if(checkNull(folderId)){
                layer.msg("请选择文件夹");
                return false;
              }
              var nameFlag = checkLen(dashboardName, 1, 100, "仪表盘名称不可为空", "仪表盘名称不可超过100个字");
              var descriptionFlag = checkLen(description, 0, 100, "", "仪表盘备注不可超过100个字");
              if(!nameFlag || !descriptionFlag){
                return false;
              }

              var data = {
                folderId: folderId,
                dashboardName: dashboardName,
                tagId: tagId,
                description: description
              }
              dashboard.addConfirm(data);
            });
        // }
        //   if(json.status == "error"){
        //     layer.msg(json.message);
        //   }
        // }
      });
    },
    addConfirm: function(data){
      $.ajax({
        type: "post",
        url: "/dashboard/add",
        data: data,
        success: function(json){
          if(json.status == "success"){
            layer.closeAll();
            storageService.setParameter("dashboard_id", json.data['dashboardId']);
            storageService.setParameter("folder_id", json.data['folderId']);
            dashboardMenuZtree.initZtree();
          }
          if(json.status == "error"){
            layer.msg(json.message);
          }
        }
      });
    },
    delete: function(){
      var dashboard_id = $("#thiszTreeId").val();
      $.ajax({
        type : "post",
        url : "/dashboard/deleteTemplate",
        data : {
          dashboardId : dashboard_id,
        },
        success : function(json){
          if(json.status == "success"){
            var html = json.data;
            layerUtils.layer_content("删除仪表盘", layerUtils.layer_common_size, html, function(){

            }, function(){
              layer.closeAll();
              dashboard.deleteConfirm(dashboard_id);
            });
          }
          if(json.status == "error"){
            layer.msg(json.message);
          }
        }
      });
    },
    deleteConfirm: function(dashboard_id){
      $.ajax({
        type: "post",
        url: "/dashboard/delete",
        data: {
          id: dashboard_id
        },
        success: function(json){
          if(json.status == "success"){
            /*暂时先这样处理*/
            dashboardMenuZtree.initZtree();
          }
          if(json.status == "error"){
            layer.msg(json.message);
          }
        }
      });
    },
    move: function(){
      var dashboard_id = $("#thiszTreeId").val();
      $.ajax({
        type: "post",
        url: "/dashboard/moveTemplate",
        data: {
          dashboardId: dashboard_id
        },
        success: function(json){
          if (json.status == "success") {
            var html = json.data;
            layerUtils.layer_content("移动仪表盘", layer_small_size, html, function() {
              folderZtree.initZtree(true, 1);
              $('#scroll').mCustomScrollbar({
                scrollButtons: {
                  enable: false,
                  scrollType: "continuous",
                  scrollSpeed: 20,
                  scrollAmount: 40
                },
                horizontalScroll: false,
              });
            }, function() {
              var folder_id = $("#folder_id").val();
              var dashboard_name = $("#new_dashboard_name").val();
              if(checkNull(folder_id)){
                layer.msg("请选择文件夹");
                return false;
              }
              var flag = checkLen(dashboard_name, 1, 100, "仪表盘名称不可为空", "仪表盘名称不可超过100个字");
              if(!flag){
                return false;
              }
              var data = {
                  dashboardId: dashboard_id,
                  dashboardName: dashboard_name,
                  folderId: folder_id
              }
              dashboard.moveConfirm(data);
            });
          }
        }
      });
    },
    moveConfirm: function(data){
      $.ajax({
        type: "post",
        url: "/dashboard/move",
        data: data,
        success : function(json){
          if(json.status == "success"){
            layer.closeAll();
            storageService.setParameter("dashboard_id", json.data['dashboardId']);
            storageService.setParameter("folder_id", json.data['folderId']);
            dashboardMenuZtree.initZtree();
          }
          if(json.status == "error"){
            layer.msg(json.message);
          }
        }
      });
    },
    copy: function(){
      var dashboard_id = $("#thiszTreeId").val();
      $.ajax({
        type: "post",
        url: "/dashboard/copyTemplate",
        data: {
          dashboardId : dashboard_id
        },
        success: function(json){
          if (json.status == "success") {
            var html = json.data;
            layerUtils.layer_content("复制仪表盘", layer_small_size, html, function() {
              folderZtree.initZtree(true);
              $('#scroll').mCustomScrollbar({
                scrollButtons: {
                  enable: false,
                  scrollType: "continuous",
                  scrollSpeed: 20,
                  scrollAmount: 40
                },
                horizontalScroll: false,
              });
            }, function() {
              var folder_id = $("#folder_id").val();
              var dashboard_name = $("#new_dashboard_name").val();
              if(checkNull(folder_id)){
                layer.msg("请选择文件夹");
                return false;
              }
              var flag = checkLen(dashboard_name, 1, 100, "仪表盘名称不可为空", "仪表盘名称不可超过100个字");
              if(!flag){
                return false;
              }
              var data = {
                  dashboardId : dashboard_id,
                  dashboardName : dashboard_name,
                  folderId : folder_id
              }
              dashboard.copyConfirm(data);
            });
          }
          if(json.status == "error"){
            layer.msg(json.message);
          }
        }
      });
    },
    copyConfirm: function(data){
      $.ajax({
        type : "post",
        url : "/dashboard/copy",
        data : data,
        success : function(json){
          if(json.status == "success"){
            layer.closeAll();
            storageService.setParameter("dashboard_id", json.data['dashboardId']);
            storageService.setParameter("folder_id", json.data['folderId']);
            dashboardMenuZtree.initZtree();
          }
          if(json.status == "error"){
            layer.msg(json.message);
          }
        }
      });
    },
    edit: function(){
      var dashboardId = $("#thiszTreeId").val();
      /*$.ajax({
        type : "post",
        url : "/dashboard/editTemplate",
        data : {
          dashboardId : dashboardId,
        },
        success : function(json) {
          if (json.status == "success") {*/
        template.getTpl().then(data => {
            var json = data.edit;
            var html = json.data;
            layerUtils.layer_content("编辑仪表盘", layerUtils.layer_common_size, html, function() {
              //tag();
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
              dashboard.editConfirm(data, dashboard_id);
            });
          // }
          // if(json.status == "error"){
          //   layer.msg(json.message);
          // }
        // }
      });
    },
    editConfirm : function(data, dashboard_id) {
      $.ajax({
        type: "post",
        url: "/dashboard/update",
        data: data,
        success: function(json) {
          if (json.status == "success") {
            storageService.setParameter("dashboard_id", dashboard_id);
            storageService.setParameter("folder_id", json.data);
            dashboardMenuZtree.initZtree();
          }
          if (json.status == "error") {
            layer.msg(json.message);
          }
        }
      });
    }
};

export default dashboard;
