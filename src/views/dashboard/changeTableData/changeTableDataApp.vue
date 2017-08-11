<template>

    <error v-if="isError"></error>
    <div class="body-style" v-else>

        <header class="data-header">
            <div class="logo">
                <a href="/"><img src="~assets/images/logo.png"></a>
            </div>
            <div class="title">
                <h3>
                    <span>替换模板数据</span>
                </h3>
            </div>
            <a :href="url" class="replace">替换工作表</a>
            <a @click="tableBack()"><div class="back"></div></a>
        </header>

        <div class="explain-box">
            <div class="text">
                <p>
                    <a href="javascript:">mysql_45fbc25511</a> 使用了以下 1 张工作表数据，请替换以下工作表，以填充模板数据。
                </p>
                <p>该仪表盘新添加的图表，如需替换数据，请在工作表-替换数据操作。</p>
            </div>
            <div class="filelist">
                <p>模板数据表：</p>
                <ul>
                    <li class="active"><span>mysql_45fbc25511</span></li>
                </ul>
            </div>
        </div>

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
            url:'',
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
                this.url = './replace.html?step=1&tableid='+q
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
