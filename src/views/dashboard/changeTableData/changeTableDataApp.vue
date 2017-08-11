<template>

    <error v-if="isError"></error>
    <div v-else>
        <header class="data-header">
            <div class="logo">
                <a href="/"><img src="~assets/images/logo.png"></a>
            </div>
            <div class="title">
                <h3>
                    <span>替换模板数据</span>
                </h3>
            </div>
            <a href="/datasources/replacestep1/874" class="replace">替换工作表</a>
            <a @click="tableBack()"><div class="back"></div></a>
        </header>
        <div class="file-content-box">
        <div class="show-data-box">
            <div class="show-file ">
                <div class="scroll-box MScroll MScrollyx horizontalScroll table_box" id="tabledata" v-html="tpl">

                </div>
            </div>
        </div>
    </div>

    </div>

</template>

<script>
import Base from 'assets/js/base';

import error from 'components/error';

import layerUtils from 'assets/js/layerUtils'
import * as template from 'src/api/getDate.js'

require('assets/less/layer.less')
require('./less/changeTableData.less')

export default {
    components: {
        error
    },
    data(){
        return {
            isError: true,
            tpl:''
        }
    },
    mounted(){
        this.init()
    },
    methods: {
        init(){
            let q = Base.C.getUrlQuery('tableid')
            if (q) {
                this.isError = false;
                this.getTable()
            }else{
                this.isError = true;
            }
        },
        getTable(){
            template.getTpl().then(data => {
                var json = data.getTable.data;
                this.tpl = json;
            })
        },
        tableBack(tableName){
          var tableName = tableName? tableName: 'a';
          var content = "<div class='reapt-mb-tx'>模板数据表" + tableName + "没有被替换过，确定返回吗？</div>"
          layerUtils.layer_content("提示", "['400px','200px']", content, function(){}, function(){
            window.location.href="/dashboard/index";
          });
        }
    }

}
</script>

<style>
table{border:0;}
    #tabledata .excel-table {
    width: 100%;
    margin-bottom: 30px;
}
.excel-table .thead {
    font-size: 16px;
    background-color: rgb(221, 221, 221);
    color: rgb(51, 51, 51);
}

.excel-table .thead .bt-icon {
    width: 62px;
    height: 30px;
    /*background: url(/img/light/data/bt.png) no-repeat center;*/
    color: #fff;
    display: inline-block;
    text-align: center;
    line-height: 28px;
    font-size: 14px;
}

.excel-table .thead {
    height: 45px;
    white-space: nowrap;
}

.excel-table .thead td,
.excel-table tr td {
    text-align: left;
    padding: 0 30px;
    font-weight: normal;
}

.excel-table .thead td {
    border: 1px solid rgb(221, 226, 236);
    height: 45px;
}

.excel-table .thead td:first-child {
    border-left: 1px solid rgb(221, 226, 236) !important;
}

.excel-table .thead td:last-child {
    border-right: 1px solid rgb(221, 226, 236) !important;
}

.excel-table td {
    height: 34px;
    border: 1px solid rgb(221, 226, 236);
}

.excel-table tr:nth-of-type(odd) {
    background-color: #f6f6f6;
}
</style>
