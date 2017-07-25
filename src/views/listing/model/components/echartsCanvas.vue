<template>
    <div class="canvas_box" :class="{mouseactive:showbnts}" @mouseover="handleMouse(true)" @mouseout="handleMouse(false)">
        <div class="contents_box">
            <div class="echart_title">
               <h3>投诉分析</h3>
                <span class="" v-show="showbnts"
                      :class="[screensstate ? 'act_cls' : 'screens' ]"
                      @mouseover="handleEls('top',true)"
                      @mouseout="handleEls('top',false)"
                      @click="handleScreen"
                >
                </span>
           </div>
            <div class="content_box">
                <div class="bnt_city"  ref="bnts"></div>
            <div class="Colors_box" ref="echartCavans">
                {{echart}}
            </div>
            </div>
        </div>
        <span class="stretch" v-show="showbnts"
              @mouseover="handleEls('bottom',true)"
              @mouseout="handleEls('bottom',false)"
        >
            <img :src="stretch" />
        </span>
    </div>
</template>
<style scoped>
   .canvas_box{
       width:690px;
       background:#fff;
       position:absolute;
       left:11%;
       top:6%;
       border-radius: 5px;
   }
   .mouseactive{
       box-shadow:0px 0px 20px 0.5px rgba(0,0,0,0.5)
   }
    .contents_box{
        padding:20px;
    }
   .bnt_city{
       display:flex;
       display:-webkit-flex;
       justify-content: flex-start;
       margin-bottom:0.3rem;
      }
   .bnt_city span{
       padding:0.08rem 0.3rem;
       border:1px solid #eee;
       margin-right:0.2rem;
       font-size:0.24rem;
     }

   .active_bnt_color{
       border:1px solid #f1b0bd !important;
   }

    .echart_title{
        padding:5px 0;
        display:flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .act_cls{
        display:inline-block;
        width:24px;
        height:20px;
        background:url('/static/common/images/xgicon_on.png')no-repeat 0 -40px;
        cursor: pointer;
    }
    .Colors_box{
        min-height:370px;
    }
    .screens{
        display:inline-block;
        width:24px;
        height:20px;
        background:url('/static/common/images/xgicon.png')no-repeat 0 -40px;
        cursor: pointer;
    }
    .stretch{
        position:absolute;
        right:5px;
        bottom:-5px;
        cursor: nwse-resize;
    }
</style>
<script>
    import echarts from 'echarts'
    import $ from 'jquery'
    import {mapGetters} from 'vuex'
    export default{
        props:['optionData'],
        data(){
            return {
                stretch:'/static/common/images/suofang.png',
                showbnts:false,
                screensstate:false,
                sofang:false,

                mapVitalityOpiton : {
                    tooltip: {
                        trigger: 'axis',
                        backgroundColor: '#fff',
                        textStyle: {
                            color: '#333',
                        },
                        borderWidth: 1,
                        borderColor: '#ccc',
                        extraCssText: 'box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.4);',
                        //position: postion(pos, params, dom, rect, size),
                    },
                    legend: {
                        data: [
//                {name: '武汉', icon: 'roundRect'},
//                {name: '长沙', icon: 'roundRect'},
//                {
//                name: '合肥',
//                icon: 'roundRect'
//                },
//                {name: '南昌', icon: 'roundRect'}
                        ],
                        left: 'center',
                        bottom: '5%',
                        //width: 500,
                        itemWidth: 20,
                        itemHeight: 2,
                        //backgroundColor:'rgba(255,255,255)'

                        //itemBorderRadius: 8,
                    },
                    grid: {
                        top: '3%',
                        left: '3%',
                        right: '4%',
                        bottom: '20%',
                        containLabel: true
                    },
                    toolbox: {
                        //show : true,
//             feature : {
//                 mark : {show: true},
//                 dataView : {show: true, readOnly: false},
//                 magicType : {show: true, type: ['line', 'bar']},
//                 restore : {show: true},
//                 saveAsImage : {show: true}
//             }
                    },

                    xAxis: [
                        {
                            type: 'category',
                            boundaryGap: false,
                            data: ['2010', 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018],
                            //minInterval: 0,
                            min: 'min',
//                 axisLine:{
//                 show:true,
////               onZero:false,
//                 lineStyle:{
//                 //color:'#333',
//                 type:'solid',
//                 }
//                 },
                            //显示刻度线的设置
                            axisTick: {
                                show: false,
                            },
                            //显示刻度标标的设置
                            axisLabel: {
                                show: true,
                                interval: 1,
                                textStyle: {
                                    //这里设置标签样式
                                    color: '#a0a0a0'
                                }
                            },
                            splitLine: {
                                show: true,
                                interval: 0,
                                //分隔线样式设置；
                                //lineStyle:{

                                //}
                            },
//                 splitArea:{
//                     //show:true,
//                     interval:0,
//                     areaStyle:{
//                         //设置分隔区域样式
//                         //color:'#eee'
//                     }
//
//                 },

                        }
                    ],
                    yAxis: [
                        {
                            type: 'value',
                            boundaryGap: [0, '100%'],
                            axisTick: {
                                show: false,
                            },
                            splitLine: {
                                show: true,
                                interval: 0,
                            },
                            axisLabel: {
                                show: true,
                                textStyle: {
                                    color: '#a0a0a0'
                                }
                            }

                        },

                    ],
                    // 区域缩放；
                    series: [
//            {
//                name: '武汉',
//                type: 'line',
//                itemStyle: {
//                    normal: {
//                        color: '#eb869a'
//                    }
//                },
//                symbol: 'circle',
//                symbolSize: 2,
//                stack: '总量',
//                data: [20, 30, 100, 150, 200, 78, 50, 20, 30, 100, 150, 200, 78, 50, 20, 30, 100]
//            },
//            {
//                name: '长沙',
//                type: 'line',
//                stack: '总量',
//                symbol: 'circle',
//                symbolSize: 2,
//                itemStyle: {
//                    normal: {
//                        color: '#f4ba8d'
//                    }
//                },
//                data: [5, 30, 80, 40, 15, 5, 30, 80, 40, 15, 5, 30, 80, 40, 15, 5, 30, 80, 40, 15]
//            },
//            {
//                name: '合肥',
//                type: 'line',
//                symbol: 'circle',
//                symbolSize: 2,
//                stack: '总量',
//                itemStyle: {
//                    normal: {
//                        color: '#8be399'
//                    }
//                },
//                data: [5, 30, 80, 40, 15, 5, 30, 80, 40, 15, 5, 30, 80, 40, 15, 5]
//            },
//            {
//                name: '南昌',
//                type: 'line',
//                stack: '总量',
//                symbol: 'circle',
//                symbolSize: 2,
//                itemStyle: {
//                    normal: {
//                        color: '#87b7ef'
//                    }
//                },
//                data: [5, 30, 80, 40, 15, 5, 15, 5, 30, 80, 40, 15, 5, 30, 80, 40, 15, 5, 30, 80, 40, 15, 5, 30, 80, 40, 15, 5, 30, 80, 40,]
//            }
                    ]
                },
                mapTendencyOpiton :  {
                    //          title: {
                    //              text: 'Punch Card of Github',
                    //              link: 'https://github.com/pissang/echarts-next/graphs/punch-card'
                    //          },
                    //          legend: {
                    //              data: ['Punch Card'],
                    //              left: 'right'
                    //          },
                    color: ["#eb869a"],
                    tooltip: {
                        position: 'top',
                        formatter: ''
                    },
                    grid: {
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                        containLabel: true
                    },
                    xAxis: {
                        type: 'category',
                        data: [],
                        boundaryGap: ['2%', '2%'],
                        splitNumber: 20,
                        //	            axisLine:{
                        //	                lineStyle:{
                        //	                    color:'#999',
                        //	                },
                        //	            },
                        axisTick: {
                            show: false
                        },
                        splitLine: {
                            show: true,
                            lineStyle: {
                                color: '#e9e9e9',
                                type: 'dashed'
                            }
                        },
                        //              splitLine: {
                        //                  show: true,
                        //                  lineStyle: {
                        //                      color: '#999',
                        //                      type: 'dashed'
                        //                  }
                        //              },
                        axisLine: {
                            show: false
                        }
                    },
                    yAxis: {
                        type: 'category',
                        data: [],
                        splitLine: {
                            show: true,
                            lineStyle: {
                                color: '#e9e9e9',
                                type: 'dashed'
                            }
                        },
                        axisLine: {
                            show: false
                        },
                        axisTick: {
                            show: false
                        }
                    },
                    series: [{
                        name: 'Punch Card',
                        type: 'scatter',
                        symbolSize: function (val) {
                            return val[2] * 0.01;
                        },
                        data: [],
                        animationDelay: function (idx) {
                            return idx * 5;
                        }
                    }]
                },
                mapEmiOpiton : {
                    tooltip: {
                        trigger: 'axis',
                        backgroundColor: '#fff',
                        textStyle: {
                            color: '#333',
                        },
                        borderWidth: 1,
                        borderColor: '#ccc',
                        extraCssText: 'box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.4);',
                        //position: postion(pos, params, dom, rect, size),
                    },
                    legend: {
                        data: [],
                        left: 'center',
                        bottom: '5%',
                        //width: 500,
                        itemWidth: 20,
                        itemHeight: 2,
                        //backgroundColor:'rgba(255,255,255)'

                        //itemBorderRadius: 8,
                    },
                    grid: {
                        top: '5%',
                        left: '0%',
                        right: '6%',
                        bottom: '20%',
                        containLabel: true
                    },
                    toolbox: {
                        //show : true,
                        //             feature : {
                        //                 mark : {show: true},
                        //                 dataView : {show: true, readOnly: false},
                        //                 magicType : {show: true, type: ['line', 'bar']},
                        //                 restore : {show: true},
                        //                 saveAsImage : {show: true}
                        //             }
                    },
                    xAxis: [
                        {
                            type: 'category',
                            boundaryGap: [0, '100%'],
                            data: [],
                            //minInterval: 0,
                            min: 'min',
                            //boundaryGap:[0,'100%'],
                            //max:'max',
                            //                 axisLine:{
                            //                 show:true,
                            ////               onZero:false,
                            //                 lineStyle:{
                            //                 //color:'#333',
                            //                 type:'solid',
                            //                 }
                            //                 },
                            //显示刻度线的设置
                            axisTick: {
                                show: false,
                            },
                            //显示刻度标标的设置
                            axisLabel: {
                                show: true,
                                interval: 3,
                                textStyle: {
                                    //这里设置标签样式
                                    color: '#a0a0a0'
                                }
                            },
                            splitLine: {
                                //show: true,
                                //interval:1,
                                //分隔线样式设置；
                                //lineStyle:{

                                //}
                            },
                            //                 splitArea:{
                            //                     //show:true,
                            //                     interval:0,
                            //                     areaStyle:{
                            //                         //设置分隔区域样式
                            //                         //color:'#eee'
                            //                     }
                            //
                            //                 },

                        }
                    ],
                    yAxis: [
                        {
                            type: 'value',
                            boundaryGap: [0, '100%'],
                            axisTick: {
                                show: false
                            },
                            splitLine: {
                                show: true,
                                interval: 0
                            },
                            axisLabel: {
                                show: true,
                                textStyle: {
                                    color: '#a0a0a0'
                                }
                            }

                        },

                    ],
                    // 区域缩放；
                    series: [
                        {
                            name: '武汉',
                            type: 'line',
                            itemStyle: {
                                normal: {
                                    color: '#eb869a'
                                }
                            },
                            symbol: 'circle',
                            symbolSize: 2,
                            //stack: '总量',
                            data: [20, 30, 100, 150, 200, 78, 50, 20, 30, 100, 150, 200, 78, 50, 20, 30, 100]
                        }

                    ]
                },
                mapAgeOpiton : {
                    tooltip: {
                        trigger: 'axis',
                        backgroundColor: '#fff',
                        textStyle: {
                            color: '#333',
                        },
                        borderWidth: 1,
                        borderColor: '#ccc',
                        extraCssText: 'box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.4);',
                        //position: postion(pos, params, dom, rect, size),
                    },
                    legend: {
                        data: [
                            //                {name: '武汉', icon: 'roundRect'},
                            //                {name: '长沙', icon: 'roundRect'},
                            //                {
                            //                name: '合肥',
                            //                icon: 'roundRect'
                            //                },
                            //                {name: '南昌', icon: 'roundRect'}
                        ],
                        left: 'center',
                        bottom: '5%',
                        //width: 500,
                        itemWidth: 20,
                        itemHeight: 2,
                        //backgroundColor:'rgba(255,255,255)'

                        //itemBorderRadius: 8,
                    },
                    grid: {
                        top: '2%',
                        left: '0%',
                        right: '6%',
                        bottom: '20%',
                        containLabel: true
                    },
                    toolbox: {
                        //show : true,
                        //             feature : {
                        //                 mark : {show: true},
                        //                 dataView : {show: true, readOnly: false},
                        //                 magicType : {show: true, type: ['line', 'bar']},
                        //                 restore : {show: true},
                        //                 saveAsImage : {show: true}
                        //             }
                    },

                    xAxis: [
                        {
                            type: 'category',
                            boundaryGap: false,
                            data: ['2010', 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018],
                            //minInterval: 0,
                            min: 'min',
                            //                 axisLine:{
                            //                 show:true,
                            ////               onZero:false,
                            //                 lineStyle:{
                            //                 //color:'#333',
                            //                 type:'solid',
                            //                 }
                            //                 },
                            //显示刻度线的设置
                            axisTick: {
                                show: false,
                            },
                            //显示刻度标标的设置
                            axisLabel: {
                                show: true,
                                interval: 0,
                                textStyle: {
                                    //这里设置标签样式
                                    color: '#a0a0a0'
                                }
                            },
                            splitLine: {
                                //show: true,
                                interval: 0,
                                //分隔线样式设置；
                                //lineStyle:{

                                //}
                            },
                            //                 splitArea:{
                            //                     //show:true,
                            //                     interval:0,
                            //                     areaStyle:{
                            //                         //设置分隔区域样式
                            //                         //color:'#eee'
                            //                     }
                            //
                            //                 },

                        }
                    ],
                    yAxis: [
                        {
                            type: 'value',
                            boundaryGap: [0, '100%'],
                            axisTick: {
                                show: false,
                            },
                            splitLine: {
                                show: true,
                                interval: 0,
                            },
                            axisLabel: {
                                show: true,
                                textStyle: {
                                    color: '#a0a0a0'
                                }
                            }

                        },

                    ],
                    // 区域缩放；
                    series: [

                    ]
                },
                option : {
                    tooltip : {
                        trigger: 'item',
                        confine:true,
                        formatter: function (b,c) {
                            var html='<div>'+b.name+':</div><div>'+b.value+'</div>';
                            return html;
                        }
                    },
                    grid: {
                        width:'auto',
                        height:'auto',
                        top: 0,
                        left:0,
                        right:0,
                        bottom:0,
                        containLabel: true,
                        calculable : false
                    },


                    series : [
                        {
                            name:'产业图',
                            type:'treemap',

                            itemStyle: {
                                normal: {
                                    label: {
                                        show: true,
                                        formatter: "{b}"
                                    },
                                    borderWidth: 1
                                }

                            },
                            data:[]
                        }
                    ]
                },
                bntCharts2:[],
                dataEharts3:{},
                threeBnt:[],
                threeData:[]
            }
        },
        computed:{
           echart(){
               const ecid=this.optionData.id
               switch(ecid){
                   case 1:
                       this.BrokenLine(this.optionData.data)
                       break;
                   case 2:
                       this.creatscatterCharts(this.optionData.data)
                       break;
                   case 3:
                       break;
                   case 4:
                       break;
                   case 5:
                       break;
               }

           },
            ...mapGetters({chartsData:'getEchartsData'})
        },
      watch:{
          chartsData:function(){
              console.log('a')
          }
        },
        components: {},
        methods:{
            handleMouse(ev){
                this.showbnts = ev ? true :false
            },
            handleScreen(){
              this.$store.dispatch('onscreen',{typeState:true,title:'投拆与分析',echarts:{}})
            },
            handleEls(el,ev){
                if(el=="top"){
                    this.screensstate = ev ? true : false;
                }else{
                    //this.sofang = ev ? true : false;
                    this.stretch = ev ? '/static/common/images/suofang_on.png':'/static/common/images/suofang.png'
                }
            },
            BrokenLine(chartData){
                this.mapVitalityOpiton.xAxis[0].data = chartData.xAxis;
                var index = -1;
                if(this.mapVitalityOpiton.series.length == 0) {for (var its in chartData.series) {
                    index++;
                    var legend;
                    var lineColor;
                    switch (its) {
                        case "武汉":

                            legend = {name: '武汉', icon: 'roundRect'};
                            lineColor = '#eb869a';
                            break;
                        case "长沙":
                            legend = {name: '长沙', icon: 'roundRect'};
                            lineColor = '#f4ba8d';
                            break;
                        case "合肥":
                            legend = {name: '合肥', icon: 'roundRect'};
                            lineColor = '#8be399';
                            break;
                        case "南昌":
                            legend = {name: '南昌', icon: 'roundRect'};
                            lineColor = '#87b7ef';
                            break;
                    }
                    ;
                    this.mapVitalityOpiton.legend.data.push(legend);
                    this.mapVitalityOpiton.series.push({
                        name: its,
                        type: 'line',
                        itemStyle: {
                            normal: {
                                color: lineColor
                            }
                        },
                        symbol: 'circle',
                        symbolSize: 2,
                        stack: '总量',
                        data: chartData.series[its]
                    });

                }}

                this.initEcharts(this.$refs.echartCavans, this.mapVitalityOpiton);
            },
            creatscatterCharts(datas) {
                var Data = this.creatScatterData(datas);
                this.mapTendencyOpiton.xAxis.data = datas.xAxis;
                this.mapTendencyOpiton.yAxis.data = datas.yAxis;
                this.mapTendencyOpiton.tooltip.formatter = function (params) {
                    return params.value[2] + '- ' + datas.yAxis[params.value[1]] + ' of ' + datas.xAxis[params.value[0]];
                };
                var yearsDataArr = [];
                for (var j in Data.dataIn) {
                    yearsDataArr.push(Data.dataIn[j]);
                }
                this.mapTendencyOpiton.series[0].data = yearsDataArr[0];
                this.initEcharts(this.$refs.echartCavans, this.mapTendencyOpiton);
//                for(let k = 0;k< Data.botton.length; k++){
//                    if(k==0){
//                        this.bntCharts2.push({text:Data.botton[k],active:true})
//                    }else{
//                        this.bntCharts2.push({text:Data.botton[k],active:false})
//                    }
//
//                }
                var _this = this;
                for (var k = 0; k < Data.botton.length; k++) {
                  var element = document.createElement("span");
                  var textNode = document.createTextNode(Data.botton[k]);
                      element.appendChild(textNode);
                   if (k == 0) {
                         element.className = 'active_bnt_color';
                    }
                   (function (k) {
                element.addEventListener("click", function () {
                   var allChildelems = this.parentNode.children;
                    _this.mapTendencyOpiton.series[0].data = yearsDataArr[k];
                    $(this).addClass('active_bnt_color').siblings().removeClass('active_bnt_color');

//                     for (var a = 0; a < allChildelems.length; a++) {
//                    if (allChildelems[a] !== this) {
//                      allChildelems[a].className = '';
//                         }
//                       }
                    _this.initEcharts(_this.$refs.echartCavans, _this.mapTendencyOpiton);


                     }, false);
                   })(k);
                    $(this.$refs.bnts).append(element)
               }

            },
            switchbnt(index){
                //console.log(index);
                const Data = this.creatScatterData(this.dataEharts3);
                const yearsDataArr = [];
                for (var j in Data.dataIn) {
                    yearsDataArr.push(Data.dataIn[j]);
                }
                for(let i=0; i<this.bntCharts2.length;i++){
                    if(index == i){
                        this.bntCharts2[i].active=true;
                        this.mapTendencyOpiton.series[0].data = yearsDataArr[i];
                    }else{
                        this.bntCharts2[i].active=false;
                    }
                }

                this.initEcharts(this.$refs.echartCavans, this.mapTendencyOpiton);
            },
            creatScatterData(data) {
                var datas = {}, bnts = [];
                for (var year in data) {
                    if (year !== 'yAxis' && year !== 'xAxis') {
                        bnts.push(year)
                        datas[year] = [];
                        var yearData = data[year];
                        for (var cityitmeData in yearData) {
                            var keyIn = this.keys(cityitmeData, data);
                            var cityData = yearData[cityitmeData];
                            for (var i = 0; i < cityData.length; i++) {
                                var xAxisIn = this.keyx(cityData[i].QUARTER, data);
                                datas[year].push([keyIn, xAxisIn, cityData[i].COUNT]);
                                //alert(year+"--"+keyIn+":"+i+"--"+JSON.stringify(cityData[i].COUNT));
                            }
                        }

                    }
                }
                return {dataIn: datas, botton: bnts};
            },
            keys(key, data) {
                //console.log(data.xAxis)
                var indexKey;
                for (var t = 0; t < data.xAxis.length; t++) {
                    if (key == data.xAxis[t]) {
                        //alert(t);
                        indexKey = t;
                        break;
                    }
                }

                return indexKey;
            },
            keyx(key, data) {
                var indexKey;
                for (var t = 0; t < data.yAxis.length; t++) {
                    if (key == data.yAxis[t]) {
                        //alert(t);
                        indexKey = t;
                        break;
                    }
                }

                return indexKey;
            },
            creatThreeData(datas){
                var threebox =this.$refs.echartCavans;
                var citythreeData = [];
                var index = -1;
                var lockIndex = false;
                for (var item in datas ){
                    index++;
                    var textcontent;
                    switch(item){
                        case 'wuhan':
                            textcontent = '武汉';
                            break;
                        case 'changsha':
                            textcontent = '长沙';
                            break;
                        case 'nanchang':
                            textcontent = '南昌';
                            break;
                        case 'hefei':
                            textcontent = '河肥';
                            break;
                    }
                    citythreeData.push(datas[item])
                    if(citythreeData[index].length > 0 && !lockIndex) {
                        lockIndex = true;
                        this.threeBnt.push({text: textcontent,threeact:true})
                    }else{
                        this.threeBnt.push({text: textcontent,threeact:false})
                    }
//              var ele = document.createElement('span');
//              var textNode = document.createTextNode(textcontent);
//              if(index == 3){
//                ele.className = 'active_bnt_color';
//              }
//              ele.appendChild(textNode);
//              var _this = this;
//              (function(index){
//                ele.addEventListener("click",function(){
//                  var allChildelems = this.parentNode.children;
//                  this.className = 'active_bnt_color';
//                  //console.log(citythreeData[index])
//                  if(citythreeData[index].length !== 0 ){
//                    threebox.innerHTML = '';
//                    _this.option.series[0].data = citythreeData[index];
//
//                    _this.initEcharts(_this.$refs.industry, _this.option);
//
//                  }else{
//                    threebox.innerHTML = '<span style="color:#999;position:absolute;left:50%; top:50%;transform: translate(-50%,-50%)">暂无数据<span>';
//                  }
//                  for (var a = 0; a < allChildelems.length; a++) {
//                    if (allChildelems[a] !== this) {
//                      allChildelems[a].className = '';
//                    }
//                  }
//                },false);
//              })(index);
//              this.$refs.three_City.appendChild(ele);


                }
                this.threeData = citythreeData
                this.option.series[0].data = citythreeData[3];
                this.initEcharts(threebox, this.option);
            },
            threBnt(index){
                const threebox = this.$refs.echartCavans;
                for(let i = 0; i< this.threeBnt.length;i++){
                    if(index == i){
                        this.threeBnt[i].threeact = true;
                    }else{
                        this.threeBnt[i].threeact = false;
                    }
                }
                if(this.threeData[index].length !==0){
                    //threebox.innerHTML='';
                    $(threebox).find('span').css('display','none');
                    this.option.series[0].data = this.threeData[index];
                    this.initEcharts(this.$refs.echartCavans, this.option)
                    //console.log(this.threeData[index])
                }else{
                    this.option.series[0].data = this.threeData[index];
                    this.initEcharts(this.$refs.echartCavans, this.option)
                    //console.log('没有数据')
                    $(threebox).append('<span style="color:#999;position:absolute;left:50%; top:50%;transform: translate(-50%,-50%)">暂无数据<span>')
                }
            },
            customAge(data){
                var index = -1;
                var datacitys = {wuhan:[],hefei:[],nachang:[],changsha:[]};
                for(var i in data){
                    index++;
                    var itemDataArr = data[i];
                    for(var k = 0;k < itemDataArr.length;k++){

                        var phase;
                        switch(itemDataArr[k].AGE){
                            case '1-2年':
                                phase = 1;
                                break;
                            case '2-5年':
                                phase = 2;

                                break;
                            case '1年以内':
                                phase = 0;

                                break;
                            case '10年以上':
                                phase = 4;

                                break;
                            case '5-10年':
                                phase = 3;

                                break;
                            default:
                                break;
                        }
                        this.pushCount(i,phase,itemDataArr[k].COUNT,datacitys);

                    }
                    var _this = this
                    var eles = document.createElement('span');
                    var childNode = document.createTextNode(i);
                    if(index == 1){
                        eles.className = "active_bnt_color";
                    }
                    eles.appendChild(childNode);
                    (function(index){
                        eles.addEventListener('click',function(){
                            var allCild = this.parentNode.children;
                            _this.$refs.ageBox.innerHTML = "";
                            this.className = "active_bnt_color";
                            //alert(index+":"+this.textContent);
                            if(this.textContent == '武汉'){
                                _this.ageTemplate(datacitys.wuhan)
                            }else if(this.textContent == '长沙'){
                                _this.ageTemplate(datacitys.changsha)
                            }else if(this.textContent == '合肥'){
                                _this.ageTemplate(datacitys.hefei)
                            }else if(this.textContent == '南昌'){
                                _this.ageTemplate(datacitys.nachang)
                            }
                            for(var t = 0;t< allCild.length;t++){
                                if(this !== allCild[t]){
                                    allCild[t].className = '';
                                }
                            }
                        },false);
                    })(index);

                    document.getElementById('age_City').appendChild(eles)
                }
                this.ageTemplate(datacitys.wuhan)

            },
            pushCount(cityid,pe,count,pushObj){
                if(cityid == '武汉'){
                    pushObj.wuhan[pe]=count;
                }
                else if(cityid == '合肥'){
                    pushObj.hefei[pe]=count;

                }else if(cityid == '南昌'){
                    pushObj.nachang[pe]=count;;

                }else if(cityid == '长沙'){

                    pushObj.changsha[pe]=count;

                }

            },
            ageTemplate(cityArr){
                if(cityArr.length>0){
                    for(var c = 0;c<cityArr.length; c++){

                        $(this.$refs.ageBox).append(this.copye(c,cityArr[c]));
                    }
                }else{
                    var html = ''
                    for(var j = 0;j<100;j++){
                        html += '<span class="wu gray"></span>'
                    }
                    $(this.$refs.ageBox).append(html);
                }

            },
            copye(c,itemNum){
                var htmls="";
                for(var i = 0;i<itemNum;i++){
                    if(c==0){
                        htmls+='<span class="wu red"></span>'
                    }else if(c==1){
                        htmls+='<span class="wu green"></span>'
                    }else if(c==2){
                        htmls+='<span class="wu light"></span>'
                    }else if(c==3){
                        //alert(c+":"+itemNum);
                        htmls+='<span class="wu blue"></span>'
                    }else if(c==4){

                        htmls+='<span class="wu purple"></span>'
                    }else{
                        htmls+'<span class="wu gray"></span>'
                    }
                }
                return htmls;
            },
            colorbg(){
                for(var i= 0;i< 5;i++){
                    var colorEles = document.createElement('span');
                    var colorBox = document.createElement('em');
                    colorEles.appendChild(colorBox);
                    var text = ''
                    var itemcolor;
                    switch (i){
                        case 0:
                            itemcolor = '#ed93a5';
                            text = '1年以内'
                            break;
                        case 1:
                            itemcolor = '#a7eab2';
                            text = '1-2年'
                            break;
                        case 2:
                            itemcolor = '#f7c8a3';
                            text = '2-5年';
                            break;
                        case 3:
                            itemcolor = '#9ac2f2';
                            text = '5-10年';
                            break;
                        case 4:
                            itemcolor = '#a793c1';
                            text = '10年以上';
                            break;

                    }
                    var textnode = document.createTextNode(text);
                    colorEles.appendChild(textnode);
                    colorBox.style.backgroundColor = itemcolor;
                    document.getElementById('cityColor').appendChild(colorEles);

                }
            },
            ajaxCharts(ouput, bnts) {
                $.ajax({
                        url: '/static/data/echarts2.json',
                        type:"GET",
                        //timeout: 100,
                        dataType: 'JSON',
                        data:{
                            secretCode: "zwy-811421-marketEchart2",
                            cityType: 3,
                            year: 2015,
                            type: ouput
                        },
                        success: (ret)=>{
                        if (ret) {
                            var data = ret.echarts5
                            // alert(JSON.stringify(bntCharts(cityBnts,ret.data)))
                            var cityParams = {cityName: [], cityConut: [], cityTitle: ''};
                            cityParams.cityTitle = data[0].cityType;
                            for (var j = 0; j < data[0].portCity.length; j++) {
                                var it = data[0].portCity[j];
                                cityParams.cityName.push(it.areaName);
                                cityParams.cityConut.push(it['count'])
                            }

                            var typeValue = ouput !== 1 ? '迁出' : '迁入'
                            if (i == 0) {
                                this.mapEmiOpiton.legend[0] = '武汉' + typeValue;
                            } else if (i == 1) {
                                this.mapEmiOpiton.legend[0] = '合肥' + typeValue;

                            } else if (i == 2) {
                                this.mapEmiOpiton.legend[0] = '南昌' + typeValue;
                            } else if (i == 3) {
                                this.mapEmiOpiton.legend[0] = '长沙' + typeValue;
                            }
                            this.mapEmiOpiton.xAxis[0].data = cityParams.cityName;
                            this.mapEmiOpiton.series[0] = {
                                name: typeValue,
                                type: 'bar',
                                itemStyle: {
                                    normal: {
                                        color: '#eb869a'
                                    }
                                },
                                //stack: '总量',
                                data: cityParams.cityConut
                            };
                            this.initEcharts(this.$refs.city_emigration, this.mapEmiOpiton);
                            var _this = this
                            for (var i = 0; i < bnts.length; i++) {
                                (function (i) {
                                    bnts[i].addEventListener('click', function () {
                                        for (var k = 0; k < bnts.length; k++) {
                                            if (i == k) {
                                                this.className = "bnt_color";
                                            } else {
                                                bnts[k].className = "";
                                            }
                                        }
                                        //alert(this.className)
                                        cityParams.cityName.length = 0
                                        cityParams.cityConut.length = 0
                                        cityParams.cityTitle = data[i].cityType;
                                        for (var t = 0; t < data[i].portCity.length; t++) {
                                            var item = data[i].portCity[t];
                                            cityParams.cityName.push(item.areaName);
                                            cityParams.cityConut.push(item['count'])

                                        }
                                        //alert(JSON.stringify(cityParams));
                                        _this.mapEmiOpiton.xAxis[0].data = cityParams.cityName;
                                        _this.mapEmiOpiton.series[0] = {
                                            name: typeValue,
                                            type: 'bar',
                                            itemStyle: {
                                                normal: {
                                                    color: '#eb869a'
                                                }
                                            },
                                            //stack: '总量',
                                            data: cityParams.cityConut
                                        }
                                        console.log(_this.$refs.city_emigration)
                                        _this.initEcharts(_this.$refs.city_emigration, _this.mapEmiOpiton)
                                    }, false)
                                })(i)
                            }


                        }else{

                        }
                    },
                    error:(err)=>{
                    console.log(err)
                }

            })
            },
            initEcharts(elem, options) {
                var Charts = echarts.init(elem);
                Charts.setOption(options, true);

            },

        },

    }

</script>
