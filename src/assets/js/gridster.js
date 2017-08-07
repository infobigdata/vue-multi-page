import storageService from 'assets/js/storage'
import dashboard from 'assets/js/dashboard'
import * as template from 'src/api/getDate.js'

var gridsterTool = {
    initGridster: function() {
        var dashboard_id = storageService.getParameter("dashboard_id");
        // 清空拖拽控件
        $("#charts").html('');
        $("#baseinfo").html('');
        var myindex = null;
        if (dashboard_id != null) {
            //$.ajax({
                //type: "post",
                //url: "/dashboard/gridsterTemplate",
                // data: {
                //     dashboardId: dashboard_id,
                //     isDashboard: 1
                // },
            template.getTpl().then(data => {
                // url: "src/api/data/template.js",
                // beforeSend: function(){
                //     myindex = layer.load(0, {shade: false});
                // },
                // success: function(json) {
                    if(myindex != null){
                        layer.close(myindex);
                    }
                    var json = data.a;
                    //if (json.status == "success") {
                        var html = json.data['html'];
                        var baseinfohtml = json.data['baseinfohtml'];
                        var charts = json.data['chartsids'];
                        var date = json.data['date'];
                        var time = json.data['time'];
                        var description = json.data['description'];
                        $("#date").html(date);
                        $("#time").html(time);
                        if(description != null && description != ""){
                            $("#description").html(description);
                        }
                        $("#charts").html(html);
                        $("#baseinfo").html(baseinfohtml);
                        gridsterTool.resizeStyleFn();

                        if(charts){
                            gridsterTool.createGridster(dashboard_id, charts);
                        }else{
                            $("#gridster_Box").hide();
                            $("#gridster_Box_no").show();
                        }
                    //}
                    if(json.status == "error"){
                        layer.msg(json.message);
                    }
                // }
            });
        }
    },
    gridster: null,
    createGridster: function(dashboard_id, charts) {
        var gridsterW = $('.gridster').width();
        var newStyle = "";
        var column_num = 1528 / (50 + 5);
        var newsize_x = Math.floor(gridsterW / column_num) - 5;
        var newsize_y = newsize_x;

        gridsterTool.gridster = $(".gridster ul").gridster({
            widget_base_dimensions : [ newsize_x, newsize_y ], // 模块的宽高 [宽,高]
            widget_margins : [ 5, 5 ], // 模块的间距 [上下,左右]
            autogenerate_stylesheet : false,
            resize : {
                min_size: [ 6, 4 ],
                enabled : true,
                stop : function(e, ui, $widget) {
                    var chart_id = $widget.attr("id");
                    dashboard.flushChart(chart_id);
                    gridsterTool.updatePosition(dashboard_id);
                }
            }, // 模块右下角拖动大小默认为false
            draggable : {
                handle : '.handleBox', // 模块内定义拖动的元素
                start : function(event, ui) {
                },
                stop : function(event, ui) {
                    gridsterTool.updatePosition(dashboard_id);
                }
            }
        }).data('gridster');
        if(charts != undefined){
            $("#gridster_Box").show();
            $("#gridster_Box_no").hide();
            var chart_str = "";
            for(var i = 0; i < charts.length; i++){
                var id = charts[i];
                chart_str = chart_str + id + ",";
            }
            chart_str = chart_str.substring(0, chart_str.length - 1);
            dashboard.flushCharts(chart_str);
        }else{
            $("#gridster_Box").hide();
            $("#gridster_Box_no").show();
        }
    },
    resizeStyleFn: function() {
        var newsize_x, newsize_y;
        var gridsterW = $('.gridster').width();
        var newStyle = "";
        var lieshu = 1528 / (50 + 5);
        newsize_x = Math.floor(gridsterW / lieshu) - 5;
        newsize_y = newsize_x;

        for (var i = 0, len = lieshu * 100; i < len; i++) {
            newStyle += "[data-sizex='" + (i + 1) + "']{ width:"
                    + (newsize_x + (newsize_x + 10) * i) + "px; }   "
            newStyle += "[data-sizey='" + (i + 1) + "']{ height:"
                    + (newsize_y + (newsize_y + 10) * i) + "px; }  "
            newStyle += "[data-col='" + (i + 1) + "']{ left:"
                    + (5 + (newsize_x + 10) * i) + "px; }  "
            newStyle += "[data-row='" + (i + 1) + "']{ top:"
                    + (5 + (newsize_y + 10) * i) + "px; }  "
        }
        if (!document.getElementById('newStyle')) {
            var d = document;
            var tag = d.createElement('style');
            d.getElementsByTagName('head')[0].appendChild(tag);
            tag.id = 'newStyle';
            tag.setAttribute('type', 'text/css');
        }
        var tag = document.getElementById('newStyle');
        if (tag.styleSheet) {
            tag.styleSheet.cssText = newStyle;
        } else {
            tag.innerHtml='';
            tag.appendChild(document.createTextNode(newStyle));
        }
    },
    resizeChart: function() {
        var dashboard_id = storageService.getParameter("dashboard_id");
        $(window).resize(
                function() {
                    gridsterTool.resizeStyleFn();
                    var ArrJson = gridsterTool
                            .gdADomjson(gridsterTool.gridster);
                    var newgd_Boxhtml = '';
                    for (var i = 0, len = ArrJson.length; i < len; i++) {
                        newgd_Boxhtml += "<li id='" + ArrJson[i]['id']
                                + "' data-row='" + ArrJson[i]['row']
                                + "' data-col='" + ArrJson[i]['col']
                                + "' data-sizex='" + ArrJson[i]['sizex']
                                + "' data-sizey='" + ArrJson[i]['sizey']
                                + "'><i class='handleBox'></i></li>"
                    }
                    newgd_Boxhtml = "<ul>" + newgd_Boxhtml + "</ul>"
                    var gd_li_c = $('.contentBox');
                    $('#charts').after('<div id=gridster2></div>')
                    $('#gridster2').html(newgd_Boxhtml);
                    var gd_li = $('#gridster2 ul li');
                    gd_li.each(function(i) {
                        gd_li.eq(i).append(gd_li_c.eq(i));
                    });
                    $('#charts').remove();
                    $('#gridster2').addClass('gridster').attr('id', 'charts');
                    $('#charts').after('<div id=gridster2></div>');
                    var newsize_x, newsize_y;
                    var gridsterW = $('.gridster').width();
                    var newStyle = "";
                    var lieshu = 1528 / (50 + 5);
                    newsize_x = Math.floor(gridsterW / lieshu) - 5;
                    newsize_y = newsize_x;
                    gridster = $(".gridster ul").gridster({ // 通过jquery选择DOM实现gridster
                        widget_base_dimensions: [ newsize_x, newsize_y ], // 模块的宽高
                                                                            // [宽,高]
                        widget_margins: [ 5, 5 ], // 模块的间距 [上下,左右]
                        autogenerate_stylesheet: false,
                        resize: {
                            min_size: [ 6, 4 ],
                            enabled: true,
                            stop : function(e, ui, $widget) {
                                var chart_id = $widget.attr("id");
                                dashboard.flushChart(chart_id);
                                gridsterTool.updatePosition(dashboard_id);
                            }
                        }, // 模块右下角拖动大小默认为false
                        draggable: {
                            handle: '.handleBox', // 模块内定义拖动的元素
                            // 开始拖
                            start: function(event, ui) {
                            },
                            // 结束拖动，结束相关点
                            stop: function(event, ui) {
                                gridsterTool.updatePosition(dashboard_id);
                            }
                        }
                    }).data('gridster');
                });
    },
    gdADomjson: function(gridster) {
        var gridster_WHTLAll = [];
        if(gridster){
            for (var ii = 0, len = gridster.$widgets.length; ii < len; ii++) {
                var gridster_WHTL = gridster.$widgets[ii].dataset;
                gridster_WHTL['id'] = gridster.$widgets[ii].id;
                gridster_WHTLAll.push(gridster_WHTL);
            }
        }

        return gridster_WHTLAll;
    },
    updatePosition: function(dashboard_id) {
        var lis = $("#charts ul").find("li");
        var positions = "";
        for (var i = 0; i < lis.length; i++) {
            var li = lis[i];
            var id = $(li).attr("id");
            var data_col = $(li).attr("data-col");
            var data_row = $(li).attr("data-row");
            var data_sizex = $(li).attr("data-sizex");
            var data_sizey = $(li).attr("data-sizey");
            if (id != null && id != undefined) {
                positions = positions + "{\"chart_id\": " + id
                        + ", \"data_col\": " + data_col + ", \"data_row\": "
                        + data_row + ", \"data_sizex\": " + data_sizex
                        + ", \"data_sizey\": " + data_sizey + " },";
            }
        }
        if (positions != "") {
            positions = positions.substring(0, positions.length - 1);
        }
        var widget = "[ " + positions + " ]";
        $.ajax({
            type: "post",
            url: "/dashboard/update/position",
            data: {
                position : widget,
                id : dashboard_id
            },
            success: function(json) {
            }
        });
    }
}

export default gridsterTool;
