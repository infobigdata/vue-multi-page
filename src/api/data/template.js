export const template = {

    a: {
        "statusCode":"200",
        "status":"success",
        "message":null,
        "data":{
            "chartsids":["5199"],
            "html": "<ul id=\"gridter_ul\">\n\t\t\t<li id=\"5199\" date=\"2017-07-28\" time=\"09:11:52\" data-row=\"1\" data-col=\"1\" data-sizex=\"8\" data-sizey=\"9\" class=\"gs-w\">\r\n\t\t\t\t<i class=\"handleBox\"></i>\r\n\t\t\t\t<div class=\"contentBox\">\r\n\t\t\t\t\t<!-- <span class=\"close\">删除节点</span> -->\n\t\t\t\t\t<div class=\"overflow\">\n\t\t\t\t\t\t<h3 class=\"ss-headline\">投诉分析</h3>\r\n\t\t\t\t\t\t<p class=\"xgicon\">\n\t\t\t\t\t\t\t\t<a class=\"xg_suaxing\" onclick=\"dashboard.flushChart('5199')\" title=\"刷新\"></a>\r\n\t\t\t\t\t\t\t\t<a class=\"xg_biaji\" href=\"/chart/edit/825/5199\" title=\"编辑\"></a>\n\t\t\t\t\t\t\t\t<a class=\"xg_quanping\" onclick=\"chartFullScreen.scan('5199')\" title=\"全屏\"></a>\n\t\t\t\t\t\t\t\t<a class=\"xg_shujugx\" ></a>\r\n\t\t\t\t\t\t\t\t<a class=\"xg_gengduo\" title=\"更多\"></a>\r\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div id=\"chart_5199\" style=\"display:block;width: 100%; height: calc(100% - 20px);\" />\r\n\t\t\t\t</div>\r\n\t\t\t\t<span class=\"gs-resize-handle gs-resize-handle-both\"></span>\n\t\t\t\t<input id=\"table_5199\" type=\"hidden\" value=\"986\"/>\r\n\t\t\t</li>\r\n</ul>",
            "semantic_table_id":null,
            "baseinfohtml":"<h3 class=\"tybp_h2\">投诉分析</h3>\r\n<div class=\"nav_2_div float_clear\">\r\n\t<a class=\"nav_2_div_a fxybp\" onclick=\"dashboard.sharedDashboard()\"><i></i><span>分享</span></a>\r\n\t<a class=\"nav_2_div_a dcybp\" onclick=\"dashboard.exportDashbaord('239')\"><i></i><span>导出仪表盘</span></a>\r\n\t<a class=\"nav_2_div_a tjtb\" onclick=\"chartAdd.init()\"><i></i><span>添加图表</span></a>\r\n\t\t<a class=\"nav_2_div_a thmb\" href=\"/dashboard/changTableData?tableid=874\"><i></i><span>替换模板数据</span></a>\r\n</div>\r\n"
        },
        "map":null,
        "page":null,
        "queryBean":null,
        "total":0,
        "rows":null,
        "listBean":null
    },
    edit: {
        "statusCode": "200",
        "status": "success",
        "message": null,
        "data": "<div class=\"Mlayer_4_box text_c\">\r\n\t<input type=\"hidden\" id=\"dashboard_id\" value=\"825\" />\r\n\t<p class=\"Mlayer_p\">\r\n\t\t<span class=\"Mlayer_span\">仪表盘名称：</span>\r\n\t\t<input class=\"Mlayer_input\" id=\"edit_dashboard_name\" type=\"text\" value=\"5\" placeholder=\"请输入文件夹名称\" />\r\n\t</p>\r\n\t<p class=\"Mlayer_p\">\r\n\t\t<span class=\"Mlayer_span\">分类标签：</span>\r\n\t\t<input class=\"Mlayer_input\" id=\"tag_name\" type=\"text\" value=\"\" placeholder=\"请输入分类标签\" />\r\n\t\t<input type=\"hidden\" id=\"tag_id\" value=\"\"/>\r\n\t</p>\r\n\t<p class=\"Mlayer_p\">\r\n\t\t<span class=\"Mlayer_span\">仪表盘备注：</span>\r\n\t\t<textarea class=\"Mlayer_input\" id=\"description\" type=\"text\" placeholder=\"请输入图块备注\" style=\"height: 90px;\"></textarea>\r\n\t</p>\r\n</div>\r\n",
        "map": null,
        "page": null,
        "queryBean": null,
        "total": 0,
        "rows": null,
        "listBean": null
    },
    addFolder:{
        "statusCode":"200",
        "status":"success",
        "message":null,
        "data":"<div class=\"Mlayer_4_box text_c\">\r\n\t<p class=\"Mlayer_p\" style=\"padding-bottom: 10px;\">\r\n\t\t<span class=\"Mlayer_span\">文件夹名称：</span>\r\n\t\t<input class=\"Mlayer_input\" id=\"folder_name\" type=\"text\" placeholder=\"请输入文件夹名称\" />\r\n\t</p>\r\n\t<div class=\"Mlayer_4_div\" style=\"width: 326px; padding-bottom: 10px;\">\r\n\t\t<span class=\"Mlayer_4_span left text_r\" style=\"width: 86px;\">选择目录：</span>\r\n\t\t<div class=\"xialaBox Mlayer_4_input left\">\r\n\t\t\t<p class=\"xiala_p\" placeholder=\"选择文件夹\" id=\"viewFolder\"><i>选择文件夹</i></p>\r\n\t\t\t<div class=\"xiala_d MScroll\" id=\"add_dashboard\">\r\n\t\t\t\t<ul id=\"folderTreeDom\" class=\"ztree\"></ul>\r\n\t\t\t</div>\r\n\t\t\t<input type=\"hidden\" id=\"folder_id\" />\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n",
        "map":null,
        "page":null,
        "queryBean":null,
        "total":0,
        "rows":null,
        "listBean":null
    },
    listFolder:{
        "statusCode":"200",
        "status":"success",
        "message":null,
        "data":[
            {
                "id":"3b8b6c2eb4",
                "pId":"104a2e3521",
                "name":"投诉分析Gov",
                "open":false,
                "xiangqing":null,
                "xinzeng":false,
                "oper":null,
                "flag":null,
                "folderName":null,
                "parent":true
            },{
                "id":"104a2e3521",
                "pId":"0",
                "name":"文明办",
                "open":false,
                "xiangqing":null,
                "xinzeng":false,
                "oper":null,
                "flag":null,
                "folderName":null,
                "parent":true
            },{
                "id":"239",
                "pId":"3b8b6c2eb4",
                "name":"投诉分析",
                "open":false,
                "xiangqing":null,
                "xinzeng":false,
                "oper":null,
                "flag":null,
                "folderName":null,
                "parent":false
            }
        ],
        "map":null,
        "page":null,
        "queryBean":null,
        "total":0,
        "rows":null,
        "listBean":null
    },
    addDashboard:{
        "statusCode":"200",
        "status":"success",
        "message":null,
        "data":"<div class=\"Mlayer_4_box text_c\">\r\n\t<div class=\"Mlayer_4_div\" style=\"width: 326px; padding-bottom: 10px;\">\r\n\t\t<span class=\"Mlayer_4_span left text_r\" style=\"width: 86px;\">文件夹名称：</span>\r\n\t\t<div class=\"xialaBox Mlayer_4_input left\">\r\n\t\t\t<p class=\"xiala_p\" placeholder=\"选择文件夹\" id=\"viewFolder\"><i>选择文件夹</i></p>\r\n\t\t\t<div class=\"xiala_d MScroll\" id=\"add_dashboard\">\r\n\t\t\t\t<ul id=\"folderTreeDom\" class=\"ztree\"></ul>\r\n\t\t\t</div>\r\n\t\t\t<input type=\"hidden\" id=\"folder_id\" />\r\n\t\t</div>\r\n\t</div>\r\n\t<p class=\"Mlayer_p\">\r\n\t\t<span class=\"Mlayer_span\">仪表盘名称：</span>\r\n\t\t<input class=\"Mlayer_input\" id=\"add_boardname\" type=\"text\" placeholder=\"请输入仪表盘名称\" />\r\n\t</p>\r\n\t<p class=\"Mlayer_p\">\r\n\t\t<span class=\"Mlayer_span\">分类标签：</span>\r\n\t\t<input id=\"tag_name\" class=\"Mlayer_input\" type=\"text\" placeholder=\"请输入分类标签\" />\r\n\t\t<input id=\"tag_id\" type=\"hidden\"/>\r\n\t</p>\r\n\t<p class=\"Mlayer_p\">\r\n\t\t<span class=\"Mlayer_span\">仪表盘备注：</span>\r\n\t\t<input id=\"description\" class=\"Mlayer_input\" type=\"text\" placeholder=\"请输入仪表盘备注\" />\r\n\t</p>\r\n</div>\r\n",
        "map":null,
        "page":null,
        "queryBean":null,
        "total":0,
        "rows":null,
        "listBean":null
    }

}
