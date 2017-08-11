<template>

    <error v-if="isError"></error>
    <div class="upload body-style" v-else>
        <header class="data-header">
            <div class="logo">
                <a href="/"><img src="~assets/images/logo.png"></a>
            </div>
            <div class="title">
                <h3>替换模板数据</h3>
            </div>

            <a @click="goBack()"><div class="back"></div></a>
            <div class="process">
                 <span>
                    <div>
                        <i class="no no1 active">1</i>
                        <i class="pname pname1">上传文件</i>
                    </div>
                    <div>
                        <i class="no no2 ">2</i>
                        <i class="pname pname2">预览数据</i>
                    </div>
                    <div>
                        <i class="no no3">3</i>
                        <i class="pname pname3">工作表设置</i>
                    </div>
                </span>
            </div>
        </header>

        <div class="upload-box">
            <!-- 追加或替换数据工作表id-->
            <input type="hidden" id="zjid" name="zjid" value="874">
            <!-- 替换部分数据表关联id-->
            <input type="hidden" id="czjid" name="czjid" value="">
            <!-- 处理类型 -->
            <input type="hidden" id="dealtype" name="dealtype" value="replace">
            <!-- 文件类型 -->
            <input type="hidden" id="filetype" name="filetype" value="">
            <div class="add-file" id="mydraguploaddiv">
                <div class="add-box">
                    <div class="add-icon" id="basicupLoad">
                        <img src="./images/upload-excel.png">
                        <div class="upload basicupLoadBox"></div>
                        <img src="./images/upload-csv.png">
                    <input id="uploadfile" name="file" type="file" style="display: none;"></div>
                    <p>点击“+”上传文件，或拖拽文件到本区域上传</p>
                </div>
                <div class="upload-process">
                      <div class="file-name" id="filename">订单.xlsx</div>
                      <div>
                          <div class="process-bar"><span id="myprogressBar"></span></div>
                          <i class="del"></i>
                      </div>
                </div>
            </div>
            <div class="detail">
                <p>1、支持Excel和CSV文件（单个Excel最大100M，CSV最大800M）</p>
                <p>2、请上传有标准行列的二维数据表格。（有合并单元格的数据请处理过后再上传，否则可能出现表头识别有误）</p>
                <p>3、日期字段需包含年月日（如2016/1/1），或年月日时分秒。（如2016/1/1 00:00:00）</p>
            </div>
            <div class="demo"><a href="#">表格示例</a></div>
        </div>

    </div>

</template>

<script>
import Base from 'assets/js/base';
import error from 'components/error';

require('./less/replacestep.less')

export default{
    components: {
        error
    },
    data(){
        return{
            isError: true
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
            }else{
                this.isError = true;
            }
        },
        goBack(){
            history.go(-1);
        }
    }
}
</script>
