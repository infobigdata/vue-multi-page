<template>
    <div class="listing_content">
       <div class="left_tree">
         <div class="title_tree title_tree_defult" @click="switchState('on')">{{msg}}</div>
         <div class="search">
           <input type="text" name="filename" placeholder="请输入关键字"/>
           <input type="submit" value="">
           <div class="search_scroller">
             <div class="scroller_warp">
                 <ul>
                    <li></li>
                 </ul>
             </div>
           </div>
         </div>
         <div class="file_lsit">
           <ul class="list_template">
             <li class="files " :class="swichstate" v-for="(item,index) in modeData" :key="index" @click.stop.prevent="toggles($event)">
               {{item.designame}}
               <ul v-if="item.childName.length !==0" ref="animate">
                 <li class="files" :class="swichstate"  v-for="(it,index) in item.childName" :key="index" @click.stop.prevent="toggles($event)">
                   {{it.DesigChildname}}
                   <ul v-if="it.fileText.length !==0" ref="animate">
                     <li v-for="(te,index) in it.fileText" :key="index">
                       {{te}}
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
         <span class="use_tps enble_template">
           使用模板
         </span>
         </div>

       </div>
       <div class="container">

       </div>
    </div>
</template>
<style scoped>
  .listing_content{
    position:absolute;
    left:70px;
    top:73px;
    right:0;
    bottom:0;
    background:#eee;
  }
  .left_tree{
    width:260px;
    background:#fff;
    position:absolute;
    top:0;
    bottom:0;
  }
 .nav_crosswise{
   height:70px;
   position:absolute;
   left:260px;
   right:0;
   background:#fff;

   /*background: -webkit-linear-gradient( 90deg, rgb(246, 246, 246) 0%, rgb(255, 255, 255) 100%);*/
   /*background: -ms-linear-gradient( 90deg, rgb(246, 246, 246) 0%, rgb(255, 255, 255) 100%);*/
 }
 .box-float{
   padding:0 30px;
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
   height:100%;

 }
 span.enble_template:before{
   content:"";
   display:block;
   width:25px;
   height:23px;
   background:url(/static/common/images/shiyongmb.png)no-repeat center;
   margin-bottom:5px;

 }
 span.use_tps{
   display:flex;
   flex-direction: column;
   justify-content: center;
 align-items: center;

 }
  .box-float span.text-box{
    font-size:24px;
  }
  .container{
    position:absolute;
    top:70px;
    left:260px;
    right:0;
    bottom:0;
  }

  .title_tree_defult:after{
    content:"";
    display:inline-block;
    width:21px;
    height:17px;
    background:url(/static/common/images/zhankaisq.png)no-repeat center;
  }
  .title_tree_act:after{
    content:"";
    display:inline-block;
    width:21px;
    height:17px;
  }
.title_tree{
  padding:14px 14px;
  display:flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 18px;
  align-items: center;
}
.search{
  padding:8px 14px 8px 14px;
  position: relative;
}
  .search input[type="text"]{
    width: 100%;
    padding: 6px 6px;
    border:1px solid rgb(221,221,221);
    border-radius: 3px;
    /*display:flex;*/
    /*justify-content: space-between;*/
    /*align-items: center;*/
  }
  .search input[type="submit"]{
    display:inline-block;
    width:16px;
    height:16px;
    background:url(/static/common/images/sousuo.png)no-repeat center;
    position:absolute;
    right:20px;
    top:50%;
    transform: translateY(-50%);
  }
  .file_lsit{
    height:100%;
    padding:0 15px;
  }
  ul.list_template li.files_disble:before{
    content:"";
    width:16px;
    height:14px;
    display:inline-block;
    margin-right:5px;
    background:url(/static/common/images/wenjianjia_1.png)no-repeat center;

  }
  ul.list_template li {
    font-size: 14px;
  }
  ul.list_template>li{
    padding:5px 0;

  }
  ul.list_template>li>ul{
    margin-top:10px;
  }
  ul.list_template li.files_enble:before{
    content:"";
    width:16px;
    height:14px;
    display:inline-block;
    margin-right:5px;
    background:url(/static/common/images/wenjianjia_2.png)no-repeat center;
  }

  ul.list_template li ul{
    display:none;
    padding-left:25px;
  }

  ul.list_template li ul li{
    margin:7px 0;
  }

  ul.list_template>li>ul>li:last-child{
    padding-bottom:0;
  }



</style>
<script>
    import $ from 'jquery'
    export default{
        data(){
            return {

                msg: '模板列表',
                swichstate:'files_disble',
                modeData:[
                          { designame:'文明办',
                             childName:[
                             {DesigChildname:'投诉分析Gov',fileText:['投诉分析','实时分析']},
                             {DesigChildname:'投诉分析AIC',fileText:['投诉分析','实时分析']}
                             ]
                },{
                        designame:'工商',
                        childName:[
                        {DesigChildname:'工商分析Gov',fileText:['工商投诉分析','实时分析']},
                        {DesigChildname:'工商分析AIC',fileText:['工商投诉分析','实时分析']}
                        ]
                   },
                  {
                      designame:'建设',
                      childName:[
                      {DesigChildname:'工商分析Gov',fileText:['工商投诉分析','实时分析']},
                      {DesigChildname:'工商分析AIC',fileText:['工商投诉分析','实时分析']}
                    ]
                  }
                ]

            }
        },
      methods:{
        toggles(evnet){
             evnet.stopPropagation()
             let ev =  evnet.srcElement ||evnet.target;
               //console.log($(ev))
             console.log($(ev).attr('class'))
          if(!$(ev).attr('class')){
             return
          }
           if($(ev.childNodes[1]).is(":hidden")){
             $(ev.childNodes[1]).slideDown();
             $(ev).removeClass('files_disble').addClass('files_enble')
           }else{
             $(ev.childNodes[1]).slideUp();
             $(ev).removeClass('files_enble').addClass('files_disble')
           }
         },
        switchState(params){
          if(params=='on'){
             this.swichstate="files_enble"
          }else{
            this.swichstate="files_disble"
          }
        }
      },
      watch:{
        swichstate(value){
            if(value == 'files_enble'){
               $(this.$refs.animate).slideDown()
            }else{
              $(this.$refs.animate).slideUp()
            }
         }
      }



    }

</script>
