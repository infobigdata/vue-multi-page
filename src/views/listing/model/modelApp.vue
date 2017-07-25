<template>
    <div class="listing_content">

        <div class="left_tree">

            <div class="title_tree"
                 >{{msg}}
                <span
                :class="[!folding ? 'title_tree_act': 'title_tree_defult']"
                 @mouseover='flod(true)'
                 @mouseout='flod(false)'
            >
                    <div v-show="folding" class="layerpromt">
                        <span class="jian"></span>
                        <ul  @mouseover="setbgcolor($event,true)"
                             @mouseout="setbgcolor($event,false)"
                             @click="switchState($event,'on')"
                        >
                            <li>收起全部</li>
                            <li>展开全部</li>
                        </ul>
                    </div>
                </span>

            </div>
            <div class="search">
                <input
                    type="text"
                    name="filename"
                    placeholder="请输入关键字"
                    @keydown="showBox($event)"
                    @blur="hideAll"
                    autocomplete="off"
                    v-model="type"
                />
                <input type="submit" value="">
                <div class="search_scroller" v-show="searchscroller">
                    <!--<v-bar-->
                    <!--wrapper="wrappers"-->
                    <!--vBar=""-->
                    <!--vBarInternal=""-->
                    <!--hBar="auto"-->
                    <!--hBarInternal=""-->
                    <!--ref="scroll"-->
                    <!--&gt;-->
                    <div class="scroller_warp" ref="wrap">


                        <ul>
                            <li v-if="shoValue">{{shoValue}}</li>
                            <li v-else>
                                ！没有找到数据
                            </li>

                        </ul>
                        <!--<ul>-->
                        <!--<li>文明办</li>-->
                        <!--<li>投诉与分析</li>-->
                        <!--</ul>-->
                        <!--<ul>-->
                        <!--<li>工商</li>-->
                        <!--<li>投诉与分析</li>-->
                        <!--</ul>-->
                        <!--<ul>-->
                        <!--<li>文明办</li>-->
                        <!--<li>投诉与分析</li>-->
                        <!--</ul>-->
                        <!--<ul>-->
                        <!--<li>工商</li>-->
                        <!--<li>投诉与分析</li>-->
                        <!--</ul>-->
                        <!--<ul>-->
                        <!--<li>文明办</li>-->
                        <!--<li>投诉与分析</li>-->
                        <!--</ul>-->
                        <!--<ul>-->
                        <!--<li>工商</li>-->
                        <!--<li>投诉与分析</li>-->
                        <!--</ul>-->
                        <!--<ul>-->
                        <!--<li>文明办</li>-->
                        <!--<li>投诉与分析</li>-->
                        <!--</ul>-->
                        <!--<ul>-->
                        <!--<li>工商</li>-->
                        <!--<li>投诉与分析</li>-->
                        <!--</ul>-->
                        <!--<ul>-->
                        <!--<li>文明办</li>-->
                        <!--<li>投诉与分析</li>-->
                        <!--</ul>-->
                        <!--<ul>-->
                        <!--<li>工商</li>-->
                        <!--<li>投诉与分析</li>-->
                        <!--</ul>-->
                        <!--<ul>-->
                        <!--<li>文明办</li>-->
                        <!--<li>投诉与分析</li>-->
                        <!--</ul>-->
                        <!--<ul>-->
                        <!--<li>工商</li>-->
                        <!--<li>投诉与分析</li>-->
                        <!--</ul>-->
                        <!--<ul>-->
                        <!--<li>文明办</li>-->
                        <!--<li>投诉与分析</li>-->
                        <!--</ul>-->
                        <!--<ul>-->
                        <!--<li>工商</li>-->
                        <!--<li>投诉与分析</li>-->
                        <!--</ul>-->
                        <!--<ul>-->
                        <!--<li>文明办</li>-->
                        <!--<li>投诉与分析</li>-->
                        <!--</ul>-->
                    </div>
                    <!--</v-bar>-->
                </div>
            </div>
            <div class="file_lsit">

                <ul class="list_template" ref="Ztree">

                    <li class="files "
                        v-for="(item,index) in modeData"
                        :key="index"
                    >
                       <div class="text_box"
                            :class="swichstate"
                            @click.stop.prevent="toggles($event,index)"
                            @mouseover="handleMouseAll($event,true,index)"
                            @mouseout="handleMouseAll($event,false,index)"
                       > {{item.designame}} </div>
                        <ul v-if="item.childName.length !==0" ref="animate">
                            <li class="files"
                                v-for="(it,index) in item.childName"
                                :key="index"

                            >
                                <div class="text_box"
                                     :class="swichstate"
                                     @click.stop.prevent="toggles($event,index)"
                                     @mouseover="handleMouseAll($event,true,index)"
                                     @mouseout="handleMouseAll($event,false,index)"
                                > {{it.DesigChildname}} </div>
                                <ul v-if="it.fileText.length !==0" ref="animate">
                                    <li v-for="(te,index) in it.fileText"
                                        :key="index"

                                      >
                                        <div class="text_box"
                                             :ecId="te.id"
                                             @click.stop.prevent="toggles($event,index)"
                                             @mouseover="handleMouseAll($event,true,index)"
                                             @mouseout="handleMouseAll($event,false,index)"
                                        > {{te.text}} </div>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <!--<li class="files files_disble">-->
                    <!--工商-->
                    <!--<ul>-->
                    <!--<li class="files files_disble">-->
                    <!--投诉分析AIC-->
                    <!--<ul>-->
                    <!--<li>-->
                    <!--投诉分析AIC-->
                    <!--</li>-->
                    <!--</ul>-->
                    <!--</li>-->
                    <!--<li class="files files_disble">-->
                    <!--工商场景分析GOV-->
                    <!--<ul>-->
                    <!--<li>工商场景分析</li>-->
                    <!--</ul>-->
                    <!--</li>-->
                    <!--</ul>-->
                    <!--</li>-->
                    <!--<li class="files files_disble">-->
                    <!--工商-->
                    <!--<ul>-->
                    <!--<li class="files files_disble">-->
                    <!--投诉分析AIC-->
                    <!--<ul>-->
                    <!--<li>-->
                    <!--投诉分析AIC-->
                    <!--</li>-->
                    <!--</ul>-->
                    <!--</li>-->
                    <!--<li class="files files_disble">-->
                    <!--工商场景分析GOV-->
                    <!--<ul>-->
                    <!--<li>工商场景分析</li>-->
                    <!--</ul>-->
                    <!--</li>-->
                    <!--</ul>-->
                    <!--</li>-->
                    <!--<li class="files files_disble">-->
                    <!--工商-->
                    <!--<ul>-->
                    <!--<li class="files files_disble">-->
                    <!--投诉分析AIC-->
                    <!--<ul>-->
                    <!--<li>-->
                    <!--投诉分析AIC-->
                    <!--</li>-->
                    <!--</ul>-->
                    <!--</li>-->
                    <!--<li class="files files_disble">-->
                    <!--工商场景分析GOV-->
                    <!--<ul>-->
                    <!--<li>工商场景分析</li>-->
                    <!--</ul>-->
                    <!--</li>-->
                    <!--</ul>-->
                    <!--</li>-->
                </ul>
            </div>
        </div>
        <div class="nav_crosswise">
            <div class="box-float">
            <span class="text-box">
           投诉分析
         </span>
         <span class="use_tps"
               :class="[labestate ? 'dis_template' : 'enble_template']"
               @mouseover="mouseTextstate('on')"
               @mouseout="mouseTextstate('off')"
               @click="alertbox">
           使用模板
         </span>
            </div>

        </div>
        <div class="container">
            <Canvase v-show="echartsing" :optionData="echartData"></Canvase>
        </div>
        <Layer @hiden="cenle" v-show="layehide"></Layer>
    </div>
</template>

<script>
    import $ from 'jquery'
    import VBar from 'v-bar'
    import {mapGetters} from 'vuex'
    import Layer from './components/poplayer.vue'
    import Canvase from './components/echartsCanvas.vue'
    export default{
        components: {
            VBar,
            Layer,
            Canvase
        },
        data(){
            return {
                type: '',
                folding:false,
                wrappers: {
                    width: "100%",
                    height: "300px"
                },

                echartsing:false,
                searchscroller: false,
                msg: '模板列表',
                swichstate: 'files_disble',
                modeData: [
                    {
                        designame: '文明办',
                        childName: [
                            {DesigChildname: '投诉分析Gov', fileText: [{text:'投诉分析',id:1}, {text:'实时分析',id:0}]},
                            {DesigChildname: '投诉分析AIC', fileText: [{text:'投诉分析',id:0}, {text:'实时分析',id:2}]}
                             ]
                    },
                    {
                        designame: '工商',
                        childName: [
                            {DesigChildname: '工商分析Gov', fileText: [{text:'工商投诉分析',id:3}, {text:'实时分析',id:4}]},
                            {DesigChildname: '工商分析AIC', fileText: [{text:'工商投诉分析',id:0}, {text:'实时分析',id:2}]}
                        ]
                    },
                    {
                        designame: '建设',
                        childName: [
                            {DesigChildname: '工商分析Gov', fileText: [{text:'工商投诉分析',id:4}, {text:'实时分析',id:0}]},
                            {DesigChildname: '工商分析AIC', fileText: [{text:'工商投诉分析',id:3}, {text:'实时分析',id:5}]}
                        ]
                    }
                ],
                layehide: false,
                labestate: false,
                echartData:{id:0,data:{}}
            }
        },
        methods: {
            toggles(evnet,index){
                evnet.stopPropagation()
                let ev = evnet.srcElement || evnet.target;
                //console.log($(ev).siblings('ul'))
                if($(ev).siblings('ul').length <= 0 ){
                    $(ev).addClass('activebg').parent('li').siblings().find('.text_box').removeClass('activebg')
                    $(ev).parents('li.files').siblings().find('ul li').children('div').removeClass('activebg')
                     this.echartsing = true;
                     this.ajaxTemplate('/static/data/echarts2.json',{id:$(ev).attr('ecId'),title:$(ev).text()})
                    return
                }
                if ($(ev).siblings('ul').is(":hidden")) {
                    //console.log($(ev))
                    $(ev).siblings('ul').slideDown();

                    $(ev).removeClass('files_disble').addClass('files_enble')

                } else {
                    $(ev).siblings('ul').slideUp();
                    $(ev).removeClass('files_enble').addClass('files_disble')
                }


            },
            ajaxTemplate(urls,params){
                $.ajax({
                    url:urls,
                    type:"GET",
                    dataType:"JSON",
                    data:params,
                    success:(ret)=>{
                        var _param = params;
                            //console.log(_param.id)
                       switch(_param.id){
                           case '1':
                           this.echartData.id=1;
                           this.echartData.data = ret.echart1
                           this.$store.dispatch('echartsData',{tilte:_param.title,id:1,opitions:ret.echart1})
                               //console.log(this.echartData.data)
                          break;
                       case '2':
                       this.echartData.id=2;
                       this.echartData.data = ret.eharts3
                           this.$store.dispatch('echartsData',{tilte:_param.title,id:2,opitions:ret.eharts3})
                           break;
                       case '3':
                       this.echartData.id=3;
                       this.echartData.data = ret.eharts4
                           this.$store.dispatch('echartsData',{tilte:_param.title,id:3,opitions:ret.eharts4})
                           break;
                       case '4':
                           this.echartData.id=4;
                           this.echartData.data = ret.eharts2
                           this.$store.dispatch('echartsData',{tilte:_param.title,id:4,opitions:ret.eharts2})
                           break;
                       case '5':
                        this.echartData.id=5;
                        this.echartData.data = ret.eharts5
                           this.$store.dispatch('echartsData',{tilte:_param.title,id:5,opitions:ret.eharts5})
                           break;
                           default :
                               this.echartData.id=0;
                               this.echartData.data = {}
                             break
                       }
                    //console.log(ret)
                    },
                 error:(err)=>{
                    console.log(err)
                 }

                })
            },
            switchState(event,params){
                const ev =  event.srcElement || event.target;
                if(ev.nodeName == 'LI' && ev.innerHTML == '收起全部'){
                    this.swichstate = "files_disble"
                    $(this.$refs.Ztree).find('ul').slideUp();
                    //console.log($(this.$refs.Ztree).find('ul').length)
                }else if(ev.nodeName == 'LI' && ev.innerHTML == '展开全部'){
                    this.swichstate = "files_enble"
                }

            },
            showBox(event){
                this.searchscroller = true;
                this.$store.dispatch('getShoso', {keyValue: this.type})

            },
            hideAll(){
                //console.log('失去焦点')
                this.searchscroller = false;
            },
            cenle(b){
                if (b) {
                    this.layehide = false;
                }
            },
            alertbox(){
                this.layehide = true;
            },
            mouseTextstate(event){
                if (event === 'on') {
                    this.labestate = true;
                } else {
                    this.labestate = false;
                }
            },
            handleMouseAll(event,stateVlue,index){
                    const ev =  event.srcElement || event.target;
                     //console.log(event)
                    if(stateVlue){
                        if($(ev).siblings('ul').length == 0){
                            var textnode = $(ev).text();
                            var offX = ($(ev).offset().left)+ ev.offsetWidth+15+5;
                            var offY= $(ev).offset().top-15
                            this.$emit('prompt',{disX:offX,disY:offY,show:'block',msgs:textnode})
                            //console.log($(ev).siblings('ul').length)
                        }

                        $(ev).addClass('bgcolors')

                    }else{
                        $(ev).removeClass('bgcolors')
                        this.$emit('prompt',{show:'none'})
                       // this.$refs.textid.style.display = 'none';
                    }

                   // console.log(ev)
            },
            flod(event){
                if(event){
                    this.folding = true
                }else{
                    this.folding = false;
                }
            },
            setbgcolor(event,params){
                const ev =  event.srcElement || event.target;
               // console.log(ev)
                if(params){
                    if(ev.nodeName=='LI'){
                       $(ev).addClass('foldbg')
                    }
                }else{
                    $(ev).removeClass('foldbg')
                }

            }
        },
        watch: {
            swichstate(value){
                if (value == 'files_enble') {
                    $(this.$refs.animate).slideDown()
                } else {
                    $(this.$refs.animate).slideUp()
                }
            },
        },
        computed: {
            ...mapGetters({shoValue: 'getshosoValue'})
    }


    }

</script>
<style scoped>
    .jian{
        border: 6px solid transparent;
        border-bottom: 8px solid #eeeeee;
        position: absolute;
        top: -14px;
        left: 50%;
        margin-left: -6px;

    }
    .jian:after{
        content: '';
        border: 6px solid transparent;
        border-bottom: 8px solid #FFFFFF;
        position: absolute;
        left: -6px;
        top: -5px;
    }

    .layerpromt ul li{
        font-size:14px;
        text-align: center;
        padding:5px 0;
        margin-bottom:5px;
        color:#666;
        cursor: pointer;
    }
    .layerpromt ul li:last-child{
        margin-bottom:0px;
    }
    .layerpromt ul{
        /*padding:10px;*/
        width:100px;
        padding:10px 0;
    }
    .layerpromt{
        /*position:absolute;*/
        background-color: #FFFFFF;
        box-shadow: 3px 5px 10px rgba(0, 0, 0, 0.5);
        border-radius: 4px;
        border: 1px solid #eeeeee;
        min-width: 50px;
        min-height: 30px;
        position: absolute;
        right: -80px;
        top: 60%;
        -webkit-transform: translateX(-50%);
        transform: translateX(-50%);
        margin-top: 10px;
        z-index: 5;
        display: block;
    }
    .foldbg{
        background:#f6f6f6;
        color:#0066ff !important;
    }
    .listing_content {
        position: absolute;
        left: 70px;
        top: 73px;
        right: 0;
        bottom: 0;
        background: #eee;
    }
    .activebg{
        background:#f6f6f6;
        color:#2968f6;
    }
    .left_tree {
        width: 260px;
        background: #fff;
        position: absolute;
        top: 0;
        bottom: 0;
    }
    .left_tree span {
        cursor: pointer;
    }
    .nav_crosswise {
        height: 70px;
        position: absolute;
        left: 260px;
        right: 0;
        background: #fff;

        /*background: -webkit-linear-gradient( 90deg, rgb(246, 246, 246) 0%, rgb(255, 255, 255) 100%);*/
        /*background: -ms-linear-gradient( 90deg, rgb(246, 246, 246) 0%, rgb(255, 255, 255) 100%);*/
    }

    .box-float {
        padding: 0 30px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        height: 100%;

    }
  .show_text{
      width:200px;
      background:pink;
      height:20px;
      position:absolute;
      /*display:none;*/
      left:85px;
      top:175px;
  }
   .bgcolors{
       background:#f6f6f6;
   }
    span.enble_template:before {
        content: "";
        display: block;
        width: 25px;
        height: 23px;
        background: url(/static/common/images/shiyongmb.png) no-repeat center;
        margin-bottom: 5px;

    }

    span.dis_template:before {
        content: "";
        display: block;
        width: 25px;
        height: 23px;
        background: url(/static/common/images/shiyongmb_on.png) no-repeat center;
        margin-bottom: 5px;
    }

    span.dis_template {
        color: #0066ff;
    }

    span.use_tps {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

    }

    .box-float span.text-box {
        font-size: 24px;
    }

    .container {
        position: absolute;
        top: 70px;
        left: 260px;
        right: 0;
        bottom: 0;
    }

    .title_tree_defult:after {
        content: "";
        display: inline-block;
        width: 21px;
        height: 17px;
        background: url(/static/common/images/zhankaisq_on.png) no-repeat center;
    }

    .title_tree_act:after {
        content: "";
        display: inline-block;
        width: 21px;
        height: 17px;
        background: url(/static/common/images/zhankaisq.png) no-repeat center;
    }

    .title_tree {
        padding: 14px 14px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        font-size: 18px;
        align-items: center;
        position:relative;
    }

    .search {
        padding: 8px 14px 8px 14px;
        position: relative;
    }

    .search input[type="text"] {
        width: 100%;
        padding: 6px 6px;
        border: 1px solid rgb(221, 221, 221);
        border-radius: 3px;
        /*display:flex;*/
        /*justify-content: space-between;*/
        /*align-items: center;*/
    }

    .search input[type="submit"] {
        display: inline-block;
        width: 16px;
        height: 16px;
        background: url(/static/common/images/sousuo.png) no-repeat center;
        position: absolute;
        right: 20px;
        top: 50%;
        transform: translateY(-50%);
    }

    .file_lsit {
        height: 100%;
        padding: 0 15px;

    }

    .files_disble:before {
        content: "";
        width: 16px;
        height: 14px;
        display: inline-block;
        margin-right: 5px;
        background: url(/static/common/images/wenjianjia_1.png) no-repeat center;

    }

    ul.list_template li {
        font-size: 14px;
        cursor: pointer;
    }

    ul.list_template > li {
        padding: 5px 0;

    }

    ul.list_template > li > ul {
        margin-top: 10px;
    }

   .files_enble:before {
        content: "";
        width: 16px;
        height: 14px;
        display: inline-block;
        margin-right: 5px;
        background: url(/static/common/images/wenjianjia_2.png) no-repeat center;

    }

    ul.list_template li ul {
        display: none;
        padding-left: 25px;
    }

    ul.list_template li ul li {
        margin: 7px 0;
    }

    ul.list_template > li > ul > li:last-child {
        padding-bottom: 0;
    }

    .search_scroller {
        position: absolute;
        left: 14px;
        top: 50px;
        right: 14px;
        background: #fff;
        box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.3);
        border: 1px solid #ccc;
        border-radius: 3px;
        /*width:100%;*/
        max-height: 300px;
        height: auto;
        overflow: hidden;

    }

    .scroller_warp {
        padding: 10px;
    }

    .wrappers {
        width: 100%;
        height: 300px;
    }
</style>
