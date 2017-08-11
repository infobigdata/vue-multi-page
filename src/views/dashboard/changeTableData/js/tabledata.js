import layerUtils from 'assets/js/layerUtils'
import * as template from 'src/api/getDate.js'

var tableData = {
    initPage: function(){
      tableData.getTableData();
    },
    getTableData: function(){
      var tableId = $("#table_id").val();
      template.getTpl().then(data => {
            var json = data.getTable;
      // $.ajax({
      //   type: "post",
      //   url: "/dashboard/getTableData",
      //   data: {
      //     tableId: tableId
      //   },
      //   success: function(json){
      //     if(json.status == "success"){
            var html = json.data;
            $("#mCSB_1_container").html(function(i,origText){
              return html;
            });
        //     fixedTableHeader();
        //   }
        //   if(json.status == "error"){
        //     //layer.msg(json.message);
        //   }
        // }
      });
    },
    back: function(tableName){
      var tableName = tableName? tableName: 'a';
      var content = "<div class='reapt-mb-tx'>模板数据表" + tableName + "没有被替换过，确定返回吗？</div>"
      layerUtils.layer_content("提示", "['400px','200px']", content, function(){}, function(){
        window.location.href="/dashboard/index";
      });
    }
}
export default tableData;
