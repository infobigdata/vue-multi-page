<template>
    <div class="layer">
        <div v-if="showElesOne" class="laye_box_1">
          <nav class="laye_title">
              <span class="left_text">使用模板方式</span>
              <span class="right_bnt" @click="hide(0)"></span>
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
                <button
                    @click="selectOk(true)"
                    class="confirm bntact"
                    :class="{mouseact:bntacts}"
                    @mouseover="addcls('on')"
                    @mouseout="addcls('off')"
                   >
                  确定
                </button>
                <button class="cancel"
                        @click="selectOk(false)"
                >
                  取消
                </button>
          </footer>
        </div>
        <div v-if="showElesTwo" class="laye_box_2">
            <nav class="laye_title">
                <span class="left_text">上传填充数据</span>
                <span class="right_bnt" @click="hide(1)"></span>
            </nav>
            <section>
                <form>
                    <ul>
                        <li class="layer-2">
                            <img src="/static/common/images/sctcsj.png">
                            <div class="layout">
                                <div class="flexlayeout">
                                <span>复制模板,并下载模板数据</span>
                                <span>填充下载的模板数据表，并上传至Runup替换原有的模板数据</span>
                                </div>
                            </div>
                        </li>

                    </ul>
                </form>
            </section>
            <footer>
                <button
                    class="confirm bntact uploder"
                    @click="uploadDatas(true)"
                    :class="{mouseact:bntacts}"
                    @mouseover="addcls('on')"
                    @mouseout="addcls('off')">
                    立即上传替换
                </button>
                <button class="cancel hot_uploder"
                        @click="uploadDatas(false)">
                    稍后上传替换
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
   .laye_box_1{
     width:600px;
     position:absolute;
     top:50%;
     left:50%;
     transform: translate(-50% ,-50%);
     background:#fff;
   }
   .laye_box_2{
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
   .layer-2{
       display:flex;
       flex-direction: row;
       justify-content:flex-start;
   }
   .layer-2 img{
       margin-right:10px;
   }
   .layer-2 .layout{
      align-self: stretch;

   }

   .flexlayeout{
       height:100%;
       display:flex;
       flex-direction: column;
       justify-content: space-between;
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
                {cheked:true,text:"将模板复制到仪表盘中，并下载所有模板数据下载模板数据 >填充模板数据 >替换模板",  id:'rads'},

                {cheked:false,text:"将模板复制到仪表盘中，并下载所有模板数据下载模板数据 >填充模板数据 >替换模板", id:'radse'}
              ],
              showElesOne:true,
                showElesTwo:false

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


          },
            hide(index){

                if(index == 0){
                    this.$emit('hiden','ture')
                }else{
                    this.showElesOne = true
                    this.showElesTwo = false
                    this.$emit('hiden','ture')
                }

            },
            selectOk(confirm){
                if(confirm){
                    var index = 0
                    for(let t = 0; t<this.radiosArr.length; t++){
                        if(this.radiosArr[t].cheked){
                            index = t;
                            console.log(index)
                            break;
                        }
                    }

                    if(index == 0){
                        this.showElesOne = false;
                        setTimeout(()=>{
                            this.showElesTwo = true;
                        },500)
                    }else{
                      //跳转到仪表盘
                        this.$emit('hiden','ture')
                    }

                }else{

                    this.$emit('hiden','ture')
                }

            },
            uploadDatas(at){
               if(at){
                   // 跳转到替换数据的页面
                   this.showElesOne = true
                   this.showElesTwo = false
                   this.$emit('hiden','ture')
               }else{
                   //跳转到仪表盘页面；
                   this.showElesOne = true
                   this.showElesTwo = false
                   this.$emit('hiden','ture')
               }
            }
        },

        components: {}

    }

</script>
