<template>
    <div class="layer">
        <div class="laye_box">
          <nav class="laye_title">
              <span class="left_text">使用模板方式</span>
              <span class="right_bnt"></span>
          </nav>
          <section>
            <form>
             <ul>
              <li v-for="(item,index) in radiosArr">
                <label>
                  <input type="radio" name="tpsvalue" :id="item.id" :checked="item.cheked" />
                  <em for="rads" :class="[item.cheked ? 'actradio' : 'eleveradio']"
                      @mouseover="mouseHover(index,true)"
                      @click="checkoption($event,index)"
                      @mouseout="mouseHover(index,false)"
                  ></em>
                </label>
                <span>{{item.text}}</span>
              </li>
              <!--<li>-->
                <!--<label>-->
                  <!--<input type="radio" name="tpsvalue"  id="radse" />-->
                   <!--<em for="radse" class="eleveradio"></em>-->
                <!--</label>-->
                <!--<span> 仅将模板复制到仪表盘中-->
                <!--复制模板仪表盘 > 使用已有数据替换模板数</span>-->

              <!--</li>-->
            </ul>
            </form>
          </section>
          <footer>
                <button class="confirm bntact" :class="{mouseact:bntacts}" @mouseover="addcls('on')" @mouseout="addcls('off')">
                  确定
                </button>
                <button class="cancel" >
                  取消
                </button>
          </footer>
        </div>
    </div>
</template>
<style scoped>
   .layer{
     position:fixed;
     top:0;
     left:0;
     bottom:0;
     right:0;
     background:rgba(0,0,0,0.5);
   }
   .laye_box{
     width:600px;
     position:absolute;
     top:50%;
     left:50%;
     transform: translate(-50% ,-50%);
     background:#fff;
   }
   .right_bnt{
     width:10px;
     height:10px;
     background:url(/static/common/images/Mlayer_4_gb.png)no-repeat 0 0;
   }
  .laye_title{
    font-size:16px;
    padding:10px 20px;
    background:url(/static/common/images/h5_bg.png)repeat-x;
    display:flex;
    flex-direction: row;
    justify-content:space-between;
    align-items: center;
    font-weight: bold;
  }
   section{
     padding:40px;
   }
   section ul{
     width:100%;

   }
   section ul li{
     margin-bottom:15px;
     font-size: 14px;
     display:flex;
     flex-direction: row;
     justify-content:flex-start;
     align-items:flex-start;

   }
   section ul li label{
     margin-top:4px;

   }
   section ul li label input[type="radio"]{
     display:none;
   }
   section ul li label{
     margin-right:10px;
   }
   section ul li label em{
     width:16px;
     height:16px;
     /*border:1px solid #eee;*/
     display:inline-block;
     border-radius: 50%;
   }
   .actradio{

     background:url(/static/common/images/danxuan_bg.png)no-repeat 0 -20px;
   }
   .eleveradio{
     background:url(/static/common/images/danxuan_bg.png)no-repeat 0 0px;
   }
   footer {
     display:flex;
     flex-direction: row;
     justify-content: center;
     align-items: center;
     padding-bottom: 40px;
   }
   footer button{
     padding:5px 20px;
     border:1px solid rgb(0, 102, 255);
     color:#0066ff;
     box-sizing: border-box;
     border-radius: 3px;
     margin-right:20px;
     background:#fff;
     font-size:14px;
   }
   footer button:last-child{
     margin-right:0px;
   }
  .bntact{
    background:#0066ff;
    color:#fff !important;
    border:1px solid #4898d5;
  }
  .mouseact{
    background:#2e8ded;
  }
</style>
<script>

    export default{
        data(){
            return {
              bntacts:false,
              radiosArr:[
                {cheked:true,text:"将模板复制到仪表盘中，并下载所有模板数据下载模板数据 >填充模板数据 >替换模板", id:'rads'},

                {cheked:false,text:"将模板复制到仪表盘中，并下载所有模板数据下载模板数据 >填充模板数据 >替换模板", id:'radse'}
              ]

            }
        },
        methods:{
           addcls(ev){
             if(ev==='on')
             this.bntacts = true;
             else
               this.bntacts = false;
           },
          checkoption(event,index){
            const ev = event.srcElement || event.target
            for(var t = 0; t<this.radiosArr.length; t++){
              if(t==index){
                this.radiosArr[t].cheked = true;
              }else{
                this.radiosArr[t].cheked = false;
              }
            }

          },
          mouseHover(index,stateType){
            var actcls = this.radiosArr[index].cheked;
            if(stateType){
              if(!actcls){
                this.radiosArr[index].cheked= !actcls

              }
            }else{
              this.radiosArr[index].cheked= !actcls
            }

            console.log(actcls)

          }
        },

        components: {}

    }

</script>
