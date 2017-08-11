export const template = {

    a: {
        "statusCode":"200",
        "status":"success",
        "message":null,
        "data":{
            "chartsids":["5199"],
            "html": "<ul id=\"gridter_ul\">\n\t\t\t<li id=\"5199\" date=\"2017-07-28\" time=\"09:11:52\" data-row=\"1\" data-col=\"1\" data-sizex=\"8\" data-sizey=\"9\" class=\"gs-w\">\r\n\t\t\t\t<i class=\"handleBox\"></i>\r\n\t\t\t\t<div class=\"contentBox\">\r\n\t\t\t\t\t<!-- <span class=\"close\">删除节点</span> -->\n\t\t\t\t\t<div class=\"overflow\">\n\t\t\t\t\t\t<h3 class=\"ss-headline\">投诉分析</h3>\r\n\t\t\t\t\t\t<p class=\"xgicon\">\n\t\t\t\t\t\t\t\t<a class=\"xg_suaxing\" onclick=\"dashboard.flushChart('5199')\" title=\"刷新\"></a>\r\n\t\t\t\t\t\t\t\t<a class=\"xg_biaji\" href=\"/chart/edit/825/5199\" title=\"编辑\"></a>\n\t\t\t\t\t\t\t\t<a class=\"xg_quanping\" onclick=\"chartFullScreen.scan('5199')\" title=\"全屏\"></a>\n\t\t\t\t\t\t\t\t<a class=\"xg_shujugx\" ></a>\r\n\t\t\t\t\t\t\t\t<a class=\"xg_gengduo\" title=\"更多\"></a>\r\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div id=\"chart_5199\" style=\"display:block;width: 100%; height: calc(100% - 20px);\" />\r\n\t\t\t\t</div>\r\n\t\t\t\t<span class=\"gs-resize-handle gs-resize-handle-both\"></span>\n\t\t\t\t<input id=\"table_5199\" type=\"hidden\" value=\"986\"/>\r\n\t\t\t</li>\r\n</ul>",
            "semantic_table_id":null,
            "baseinfohtml":"<h3 class=\"tybp_h2\">投诉分析</h3>\r\n<div class=\"nav_2_div float_clear\">\r\n\t<a class=\"nav_2_div_a fxybp\" onclick=\"dashboard.sharedDashboard()\"><i></i><span>分享</span></a>\r\n\t<a class=\"nav_2_div_a dcybp\" onclick=\"dashboard.exportDashbaord('239')\"><i></i><span>导出仪表盘</span></a>\r\n\t<a class=\"nav_2_div_a tjtb\" onclick=\"chartAdd.init()\"><i></i><span>添加图表</span></a>\r\n\t\t<a class=\"nav_2_div_a thmb\" href=\"./changeTableData.html?tableid=874\"><i></i><span>替换模板数据</span></a>\r\n</div>\r\n"
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
    deleteFolder:{
        "statusCode":"200",
        "status":"success",
        "message":null,
        "data":"<div class=\"Mlayer_4_box text_c\">\r\n\t<span class=\"M4xunwen\"></span>\r\n\t<span class=\"qdscxm\">你确定要删除文件夹：<br /><i id=\"xiangmuName_folder\">投诉分析Gov</i></span> \r\n\t<input type=\"hidden\" id=\"folderId\" value=\"{folderId}\"/>\r\n</div>\r\n",
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
    },
    getTable:{
        "statusCode":"200",
        "status":"success",
        "message":null,
        "data":"<table class=\"excel-table\">\r\n\t\t\t\t<tr class=\"thead\">\r\n\t\t\t\t\t    <td>\r\n\t\t\t\t\t    \t<i class=\"gzb_tb gzb_sz\"></i>\r\n\t\t\t\t\t\t\tID\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t    <td>\r\n\t\t\t\t\t    \t<i class=\"gzb_tb gzb_wb\"></i>\r\n\t\t\t\t\t\t\t案件类型\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t    <td>\r\n\t\t\t\t\t    \t<i class=\"gzb_tb gzb_rq\"></i>\r\n\t\t\t\t\t\t\t录入时间\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t    <td>\r\n\t\t\t\t\t    \t<i class=\"gzb_tb gzb_wb\"></i>\r\n\t\t\t\t\t\t\t语义分析\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t    <td>\r\n\t\t\t\t\t    \t<i class=\"gzb_tb gzb_wb\"></i>\r\n\t\t\t\t\t\t\t投诉人性别\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t    <td>\r\n\t\t\t\t\t    \t<i class=\"gzb_tb gzb_wb\"></i>\r\n\t\t\t\t\t\t\t投诉人年龄\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t    <td>\r\n\t\t\t\t\t    \t<i class=\"gzb_tb gzb_wb\"></i>\r\n\t\t\t\t\t\t\t地域\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t    <td>\r\n\t\t\t\t\t    \t<i class=\"gzb_tb gzb_wb\"></i>\r\n\t\t\t\t\t\t\t部门名称\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t    <td>\r\n\t\t\t\t\t    \t<i class=\"gzb_tb gzb_wb\"></i>\r\n\t\t\t\t\t\t\t督办状态\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t    <td>\r\n\t\t\t\t\t    \t<i class=\"gzb_tb gzb_wb\"></i>\r\n\t\t\t\t\t\t\t满意程度\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td>非常满意</td>\r\n\t\t\t\t\t\t<td>湖北省</td>\r\n\t\t\t\t\t\t<td>2017-05-01 00:00:00</td>\r\n\t\t\t\t\t\t<td>18以下</td>\r\n\t\t\t\t\t\t<td>市容环境管理类</td>\r\n\t\t\t\t\t\t<td>男</td>\r\n\t\t\t\t\t\t<td>市民曾于2017-05-01 18:11:25用13995564407来电反映：我是硚口区韩家墩的居民，我投诉硚口区的行政办事大厅，办事大厅窗口低矮，不高不低的，居民只能蹲着，年纪大的半蹲时间久了，身体受不了，而且窗口服务人员态度恶劣，衙门意识严重，群众都感到十分的不满，“蹲式”窗口不仅损害了政府的形象，而且造成居民对政府的不满，影响十分恶劣，希望相关政府部门能尽快进行相关的处理。【已告知市民硚</td>\r\n\t\t\t\t\t\t<td>正常在办</td>\r\n\t\t\t\t\t\t<td>1</td>\r\n\t\t\t\t\t\t<td>政府辖区</td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td>非常满意</td>\r\n\t\t\t\t\t\t<td>湖北省</td>\r\n\t\t\t\t\t\t<td>2017-05-01 00:00:00</td>\r\n\t\t\t\t\t\t<td>18以下</td>\r\n\t\t\t\t\t\t<td>市容环境管理类</td>\r\n\t\t\t\t\t\t<td>男</td>\r\n\t\t\t\t\t\t<td>市民于2017-05-01 14:37:46用15387121336来电反映：我是武昌区杨园街热汉里的居民，有人在的门口上违章搭建，这不合理，请政府协调处理。（已告知市民武昌区政府于2017/1/25 8:13:31处理结果：武昌区政府：杨园街:公共管理办公室回复：问题已处理，12月30日15:28分队员吴勇电话回告投诉人，投诉人表示基本满意。2017/1/25 8:13:31市民不满意，称问题</td>\r\n\t\t\t\t\t\t<td>正常结案</td>\r\n\t\t\t\t\t\t<td>2</td>\r\n\t\t\t\t\t\t<td>市城建委</td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td>非常满意</td>\r\n\t\t\t\t\t\t<td>湖南省</td>\r\n\t\t\t\t\t\t<td>2017-05-01 00:00:00</td>\r\n\t\t\t\t\t\t<td>18-30</td>\r\n\t\t\t\t\t\t<td>交通管理类</td>\r\n\t\t\t\t\t\t<td>女</td>\r\n\t\t\t\t\t\t<td>我于2017-05-01 12:02:35用电话18971046518反映：洪山区铁机西路融海杰座楼下有很多的洗车店长期出店经营，却没有人管，请政府协调处理。（已告知市民洪山区政府于2017/2/27 16:32:44的回复结果：“洪山区政府：和平中队:区应急办：您处转来的洪网管[2017]008245号案件，经调查核实，现将有关情况回告如下：一、反映的主要问题：洪山区铁机西路融海杰座楼下有很多</td>\r\n\t\t\t\t\t\t<td>正常结案</td>\r\n\t\t\t\t\t\t<td>3</td>\r\n\t\t\t\t\t\t<td>市旅游局</td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td>基本满意</td>\r\n\t\t\t\t\t\t<td>四川省</td>\r\n\t\t\t\t\t\t<td>2017-05-02 00:00:00</td>\r\n\t\t\t\t\t\t<td>18-30</td>\r\n\t\t\t\t\t\t<td>市容环境管理类</td>\r\n\t\t\t\t\t\t<td>男</td>\r\n\t\t\t\t\t\t<td>市民曾于2017-05-01 18:11:25用13995564407来电反映：我是硚口区韩家墩的居民，我投诉硚口区的行政办事大厅，办事大厅窗口低矮，居民只能蹲着，年纪大的半蹲时间久了，身体受不了，而且窗口服务人员态度恶劣，衙门意识严重，群众都感到十分的不满，“蹲式”窗口不仅损害了政府的形象，而且造成居民对政府的不满，影响十分恶劣，希望相关政府部门能尽快进行相关的处理。【已告知市民硚口区政府20</td>\r\n\t\t\t\t\t\t<td>正常结案</td>\r\n\t\t\t\t\t\t<td>4</td>\r\n\t\t\t\t\t\t<td>市交通运输委</td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td>基本满意</td>\r\n\t\t\t\t\t\t<td>河南省</td>\r\n\t\t\t\t\t\t<td>2017-05-02 00:00:00</td>\r\n\t\t\t\t\t\t<td>18-30</td>\r\n\t\t\t\t\t\t<td>市场管理类</td>\r\n\t\t\t\t\t\t<td>男</td>\r\n\t\t\t\t\t\t<td>市民于2017-05-01 14:37:46用15387121336来电反映：我是武昌区杨园街热汉里的居民，有人在的门口上违章搭建，这不合理，请政府协调处理。（已告知市民武昌区政府于2017/1/25 8:13:31处理结果：武昌区政府：杨园街:公共管理办公室回复：问题已处理，12月30日15:28分队员吴勇电话回告投诉人，投诉人表示基本满意。2017/1/25 8:13:31市民不满意，称问题</td>\r\n\t\t\t\t\t\t<td>正常结案</td>\r\n\t\t\t\t\t\t<td>5</td>\r\n\t\t\t\t\t\t<td>政府辖区</td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td>非常满意</td>\r\n\t\t\t\t\t\t<td>河南省</td>\r\n\t\t\t\t\t\t<td>2017-05-02 00:00:00</td>\r\n\t\t\t\t\t\t<td>18-30</td>\r\n\t\t\t\t\t\t<td>交通管理类</td>\r\n\t\t\t\t\t\t<td>女</td>\r\n\t\t\t\t\t\t<td>我于2017-05-01 12:02:35用电话18971046518反映：洪山区铁机西路融海杰座楼下有很多的洗车店长期出店经营，却没有人管，请政府协调处理。（已告知市民洪山区政府于2017/2/27 16:32:44的回复结果：“洪山区政府：和平中队:区应急办：您处转来的洪网管[2017]008245号案件，经调查核实，现将有关情况回告如下：一、反映的主要问题：洪山区铁机西路融海杰座楼下有很多</td>\r\n\t\t\t\t\t\t<td>正常结案</td>\r\n\t\t\t\t\t\t<td>6</td>\r\n\t\t\t\t\t\t<td>政府辖区</td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td>基本满意</td>\r\n\t\t\t\t\t\t<td>河南省</td>\r\n\t\t\t\t\t\t<td>2017-05-03 00:00:00</td>\r\n\t\t\t\t\t\t<td>18-30</td>\r\n\t\t\t\t\t\t<td>市容环境管理类</td>\r\n\t\t\t\t\t\t<td>女</td>\r\n\t\t\t\t\t\t<td>市民曾于2017-05-01 18:11:25用13995564407来电反映：我是硚口区韩家墩的居民，我投诉硚口区的行政办事大厅，办事大厅窗口太矮，居民只能半蹲着，年纪大的半蹲时间久了，身体受不了，而且窗口服务人员态度恶劣，衙门意识严重，群众都感到十分的不满，“蹲式”窗口不仅损害了政府的形象，而且造成居民对政府的不满，影响十分恶劣，希望相关政府部门能尽快进行相关的处理。【已告知市民硚口区政府2</td>\r\n\t\t\t\t\t\t<td>正常结案</td>\r\n\t\t\t\t\t\t<td>7</td>\r\n\t\t\t\t\t\t<td>市城建委</td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td>满意</td>\r\n\t\t\t\t\t\t<td>贵州省</td>\r\n\t\t\t\t\t\t<td>2017-05-03 00:00:00</td>\r\n\t\t\t\t\t\t<td>30-50</td>\r\n\t\t\t\t\t\t<td>施工管理类</td>\r\n\t\t\t\t\t\t<td>女</td>\r\n\t\t\t\t\t\t<td>市民于2017-05-01 14:37:46用15387121336来电反映：我是武昌区杨园街热汉里的居民，有人在的门口上违章搭建，这不合理，请政府协调处理。（已告知市民武昌区政府于2017/1/25 8:13:31处理结果：武昌区政府：杨园街:公共管理办公室回复：问题已处理，12月30日15:28分队员吴勇电话回告投诉人，投诉人表示基本满意。2017/1/25 8:13:31市民不满意，称问题</td>\r\n\t\t\t\t\t\t<td>正常结案</td>\r\n\t\t\t\t\t\t<td>8</td>\r\n\t\t\t\t\t\t<td>政府辖区</td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td>基本满意</td>\r\n\t\t\t\t\t\t<td>湖北省</td>\r\n\t\t\t\t\t\t<td>2017-05-03 00:00:00</td>\r\n\t\t\t\t\t\t<td>30-50</td>\r\n\t\t\t\t\t\t<td>市场管理类</td>\r\n\t\t\t\t\t\t<td>男</td>\r\n\t\t\t\t\t\t<td>我于2017-05-01 12:02:35用电话18971046518反映：洪山区铁机西路融海杰座楼下有很多的洗车店长期出店经营，却没有人管，请政府协调处理。（已告知市民洪山区政府于2017/2/27 16:32:44的回复结果：“洪山区政府：和平中队:区应急办：您处转来的洪网管[2017]008245号案件，经调查核实，现将有关情况回告如下：一、反映的主要问题：洪山区铁机西路融海杰座楼下有很多</td>\r\n\t\t\t\t\t\t<td>正常结案</td>\r\n\t\t\t\t\t\t<td>9</td>\r\n\t\t\t\t\t\t<td>市交通运输委</td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td>不满意</td>\r\n\t\t\t\t\t\t<td>河南省</td>\r\n\t\t\t\t\t\t<td>2017-05-03 00:00:00</td>\r\n\t\t\t\t\t\t<td>30-50</td>\r\n\t\t\t\t\t\t<td>交通管理类</td>\r\n\t\t\t\t\t\t<td>女</td>\r\n\t\t\t\t\t\t<td>市民曾于2017-05-01 18:11:25用13995564407来电反映：我是硚口区韩家墩的居民，我投诉硚口区的行政办事大厅，办事大厅窗口太矮，居民只能半蹲着，年纪大的半蹲时间久了，身体受不了，而且窗口服务人员态度恶劣，衙门意识严重，群众都感到十分的不满，“蹲式”窗口不仅损害了政府的形象，而且造成居民对政府的不满，影响十分恶劣，希望相关政府部门能尽快进行相关的处理。【已告知市民硚口区政府2</td>\r\n\t\t\t\t\t\t<td>正常结案</td>\r\n\t\t\t\t\t\t<td>10</td>\r\n\t\t\t\t\t\t<td>政府辖区</td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td>基本满意</td>\r\n\t\t\t\t\t\t<td>河南省</td>\r\n\t\t\t\t\t\t<td>2017-05-04 00:00:00</td>\r\n\t\t\t\t\t\t<td>30-50</td>\r\n\t\t\t\t\t\t<td>市容环境管理类</td>\r\n\t\t\t\t\t\t<td>女</td>\r\n\t\t\t\t\t\t<td>市民于2017-05-01 14:37:46用15387121336来电反映：我是武昌区杨园街热汉里的居民，有人在的门口上违章搭建，这不合理，请政府协调处理。（已告知市民武昌区政府于2017/1/25 8:13:31处理结果：武昌区政府：杨园街:公共管理办公室回复：问题已处理，12月30日15:28分队员吴勇电话回告投诉人，投诉人表示基本满意。2017/1/25 8:13:31市民不满意，称问题</td>\r\n\t\t\t\t\t\t<td>正常结案</td>\r\n\t\t\t\t\t\t<td>11</td>\r\n\t\t\t\t\t\t<td>市交通运输委</td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td>基本满意</td>\r\n\t\t\t\t\t\t<td>湖北省</td>\r\n\t\t\t\t\t\t<td>2017-05-04 00:00:00</td>\r\n\t\t\t\t\t\t<td>30-50</td>\r\n\t\t\t\t\t\t<td>施工管理类</td>\r\n\t\t\t\t\t\t<td>男</td>\r\n\t\t\t\t\t\t<td>我于2017-05-01 12:02:35用电话18971046518反映：洪山区铁机西路融海杰座楼下有很多的洗车店长期出店经营，却没有人管，请政府协调处理。（已告知市民洪山区政府于2017/2/27 16:32:44的回复结果：“洪山区政府：和平中队:区应急办：您处转来的洪网管[2017]008245号案件，经调查核实，现将有关情况回告如下：一、反映的主要问题：洪山区铁机西路融海杰座楼下有很多</td>\r\n\t\t\t\t\t\t<td>正常结案</td>\r\n\t\t\t\t\t\t<td>12</td>\r\n\t\t\t\t\t\t<td>政府辖区</td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td>基本满意</td>\r\n\t\t\t\t\t\t<td>湖北省</td>\r\n\t\t\t\t\t\t<td>2017-05-04 00:00:00</td>\r\n\t\t\t\t\t\t<td>30-50</td>\r\n\t\t\t\t\t\t<td>市场管理类</td>\r\n\t\t\t\t\t\t<td>女</td>\r\n\t\t\t\t\t\t<td>市民曾于2017-05-01 18:11:25用13995564407来电反映：我是硚口区韩家墩的居民，我投诉硚口区的行政办事大厅，办事大厅窗口太矮，居民只能半蹲着，年纪大的半蹲时间久了，身体受不了，而且窗口服务人员态度恶劣，衙门意识严重，群众都感到十分的不满，“蹲式”窗口不仅损害了政府的形象，而且造成居民对政府的不满，影响十分恶劣，希望相关政府部门能尽快进行相关的处理。【已告知市民硚口区政府2</td>\r\n\t\t\t\t\t\t<td>正常在办</td>\r\n\t\t\t\t\t\t<td>13</td>\r\n\t\t\t\t\t\t<td>政府辖区</td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td>基本满意</td>\r\n\t\t\t\t\t\t<td>河南省</td>\r\n\t\t\t\t\t\t<td>2017-05-04 00:00:00</td>\r\n\t\t\t\t\t\t<td>30-50</td>\r\n\t\t\t\t\t\t<td>社会治安管理类</td>\r\n\t\t\t\t\t\t<td>女</td>\r\n\t\t\t\t\t\t<td>市民于2017-05-01 14:37:46用15387121336来电反映：我是武昌区杨园街热汉里的居民，有人在的门口上违章搭建，这不合理，请政府协调处理。（已告知市民武昌区政府于2017/1/25 8:13:31处理结果：武昌区政府：杨园街:公共管理办公室回复：问题已处理，12月30日15:28分队员吴勇电话回告投诉人，投诉人表示基本满意。2017/1/25 8:13:31市民不满意，称问题</td>\r\n\t\t\t\t\t\t<td>正常结案</td>\r\n\t\t\t\t\t\t<td>14</td>\r\n\t\t\t\t\t\t<td>市城建委</td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td>非常满意</td>\r\n\t\t\t\t\t\t<td>湖北省</td>\r\n\t\t\t\t\t\t<td>2017-05-03 00:00:00</td>\r\n\t\t\t\t\t\t<td>30-50</td>\r\n\t\t\t\t\t\t<td>市容环境管理类</td>\r\n\t\t\t\t\t\t<td>女</td>\r\n\t\t\t\t\t\t<td>我于2017-05-01 12:02:35用电话18971046518反映：洪山区铁机西路融海杰座楼下有很多的洗车店长期出店经营，却没有人管，请政府协调处理。（已告知市民洪山区政府于2017/2/27 16:32:44的回复结果：“洪山区政府：和平中队:区应急办：您处转来的洪网管[2017]008245号案件，经调查核实，现将有关情况回告如下：一、反映的主要问题：洪山区铁机西路融海杰座楼下有很多</td>\r\n\t\t\t\t\t\t<td>正常结案</td>\r\n\t\t\t\t\t\t<td>15</td>\r\n\t\t\t\t\t\t<td>市旅游局</td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td>基本满意</td>\r\n\t\t\t\t\t\t<td>湖北省</td>\r\n\t\t\t\t\t\t<td>2017-05-03 00:00:00</td>\r\n\t\t\t\t\t\t<td>30-50</td>\r\n\t\t\t\t\t\t<td>市场管理类</td>\r\n\t\t\t\t\t\t<td>男</td>\r\n\t\t\t\t\t\t<td>市民曾于2017-05-01 18:11:25用13995564407来电反映：我是硚口区韩家墩的居民，我投诉硚口区的行政办事大厅，办事大厅窗口太矮，居民只能半蹲着，年纪大的半蹲时间久了，身体受不了，而且窗口服务人员态度恶劣，衙门意识严重，群众都感到十分的不满，“蹲式”窗口不仅损害了政府的形象，而且造成居民对政府的不满，影响十分恶劣，希望相关政府部门能尽快进行相关的处理。【已告知市民硚口区政府2</td>\r\n\t\t\t\t\t\t<td>超期结案</td>\r\n\t\t\t\t\t\t<td>16</td>\r\n\t\t\t\t\t\t<td>市交通运输委</td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td>基本满意</td>\r\n\t\t\t\t\t\t<td>湖南省</td>\r\n\t\t\t\t\t\t<td>2017-05-01 00:00:00</td>\r\n\t\t\t\t\t\t<td>30-50</td>\r\n\t\t\t\t\t\t<td>社会服务类</td>\r\n\t\t\t\t\t\t<td>男</td>\r\n\t\t\t\t\t\t<td>市民于2017-05-01 14:37:46用15387121336来电反映：我是武昌区杨园街热汉里的居民，有人在的门口上违章搭建，这不合理，请政府协调处理。（已告知市民武昌区政府于2017/1/25 8:13:31处理结果：武昌区政府：杨园街:公共管理办公室回复：问题已处理，12月30日15:28分队员吴勇电话回告投诉人，投诉人表示基本满意。2017/1/25 8:13:31市民不满意，称问题</td>\r\n\t\t\t\t\t\t<td>超期结案</td>\r\n\t\t\t\t\t\t<td>17</td>\r\n\t\t\t\t\t\t<td>政府辖区</td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td>不满意</td>\r\n\t\t\t\t\t\t<td>湖南省</td>\r\n\t\t\t\t\t\t<td>2017-05-05 00:00:00</td>\r\n\t\t\t\t\t\t<td>30-50</td>\r\n\t\t\t\t\t\t<td>社会治安管理类</td>\r\n\t\t\t\t\t\t<td>女</td>\r\n\t\t\t\t\t\t<td>我于2017-05-01 12:02:35用电话18971046518反映：洪山区铁机西路融海杰座楼下有很多的洗车店长期出店经营，却没有人管，请政府协调处理。（已告知市民洪山区政府于2017/2/27 16:32:44的回复结果：“洪山区政府：和平中队:区应急办：您处转来的洪网管[2017]008245号案件，经调查核实，现将有关情况回告如下：一、反映的主要问题：洪山区铁机西路融海杰座楼下有很多</td>\r\n\t\t\t\t\t\t<td>超期在办</td>\r\n\t\t\t\t\t\t<td>18</td>\r\n\t\t\t\t\t\t<td>市城建委</td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td>基本满意</td>\r\n\t\t\t\t\t\t<td>湖南省</td>\r\n\t\t\t\t\t\t<td>2017-05-05 00:00:00</td>\r\n\t\t\t\t\t\t<td>30-50</td>\r\n\t\t\t\t\t\t<td>宣传广告指示牌类</td>\r\n\t\t\t\t\t\t<td>女</td>\r\n\t\t\t\t\t\t<td>市民曾于2017-05-01 18:11:25用13995564407来电反映：我是硚口区韩家墩的居民，我投诉硚口区的行政办事大厅，办事大厅窗口低矮，居民只能蹲着，年纪大的半蹲时间久了，身体受不了，而且窗口服务人员态度恶劣，衙门意识严重，群众都感到十分的不满，“蹲式”窗口不仅损害了政府的形象，而且造成居民对政府的不满，影响十分恶劣，希望相关政府部门能尽快进行相关的处理。【已告知市民硚口区政府20</td>\r\n\t\t\t\t\t\t<td>催办案件</td>\r\n\t\t\t\t\t\t<td>19</td>\r\n\t\t\t\t\t\t<td>市烟草专卖局</td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td>满意</td>\r\n\t\t\t\t\t\t<td>湖北省</td>\r\n\t\t\t\t\t\t<td>2017-05-06 00:00:00</td>\r\n\t\t\t\t\t\t<td>50以上</td>\r\n\t\t\t\t\t\t<td>市容环境管理类</td>\r\n\t\t\t\t\t\t<td>女</td>\r\n\t\t\t\t\t\t<td>市民于2017-05-01 14:37:46用15387121336来电反映：我是武昌区杨园街热汉里的居民，有人在的门口上违章搭建，这不合理，请政府协调处理。（已告知市民武昌区政府于2017/1/25 8:13:31处理结果：武昌区政府：杨园街:公共管理办公室回复：问题已处理，12月30日15:28分队员吴勇电话回告投诉人，投诉人表示基本满意。2017/1/25 8:13:31市民不满意，称问题</td>\r\n\t\t\t\t\t\t<td>正常在办</td>\r\n\t\t\t\t\t\t<td>20</td>\r\n\t\t\t\t\t\t<td>市交通运输委</td>\r\n\t\t\t\t</tr>\r\n</table>",
        "map":null,
        "page":null,
        "queryBean":null,
        "total":0,
        "rows":null,
        "listBean":null
    }

}
