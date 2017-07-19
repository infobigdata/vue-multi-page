<template>
    <div class="left-nav">
      <div class="logs">
        <img :src="imgLogo">
      </div>
      <div class="nav-content">
        <ul class="nav_01">
          <li act="true">认识</br>分析</li>
          <li>数据</br>中心</li>
          <li>报告</br>中心</li>
        </ul>
        <ul class="nav-02">
          <li class="center"></li>
          <li class="set"></li>
          <li class="email"></li>
          <li class="hep"></li>
          <li class="back"></li>
        </ul>
      </div>

    </div>
</template>
<style scoped>
  .left-nav{
    position:absolute;
    width:70px;
    top:0;
    bottom:0;
    background:#222633;
    color:#fff;
  }

  .logs{
    text-align: center;
    display:flex;
    align-items: center;
    justify-content: center;
    height:73px;
    border-bottom:1px solid rgba(67, 72, 83,1);
  }
  .logs img {
    width:36px;
    height:48px;
  }

    ul.nav_01,ul.nav_01{
      display:flex;
      flex-direction: column;
      justify-content: center;
    }
  ul.nav_01 li{
    height:118px;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size:14px;
    color:#bcc3cc;
  }

  ul.nav_01 li:nth-child(1):before{
    content:"";
    display:block;
    width:34px;
    height:40px;
    background:url(/static/common/images/nav_0-1_off.png)no-repeat 0 -40px;
  }

  ul.nav_01 li:nth-child(2):before{
    content:"";
    display:block;
    width:34px;
    height:40px;
    background:url(/static/common/images/nav_0-1_off.png)no-repeat 0 0px;
  }

  ul.nav_01 li:nth-child(3):before{
    content:"";
    display:block;
    width:34px;
    height:40px;
    background:url(/static/common/images/nav_0-1_off.png)no-repeat 0 -80px;
  }

  ul.nav_01 li[act='true']:nth-child(1):before{
    content:"";
    display:block;
    width:34px;
    height:40px;
    background:url(/static/common/images/nav_0-1_on.png)no-repeat 0 -40px !important;
  }

  ul.nav_01 li[act='true']:nth-child(2):before{
    content:"";
    display:block;
    width:34px;
    height:40px;
    background:url(/static/common/images/nav_0-1_on.png)no-repeat 0 0px !important;
  }

  ul.nav_01 li[act='true']:nth-child(3):before{
    content:"";
    display:block;
    width:34px;
    height:40px;
    background:url(/static/common/images/nav_0-1_on.png)no-repeat 0 -80px !important;
  }

  ul.nav_01 li[act='true']{
    background:#000;
    color:#75e9cd;
  }
   ul.nav-02{

     position:absolute;
     bottom:0;
     left:0;
     width:100%;

   }

  ul.nav-02 li.center:before{
    content:"";
    display:block;
    width:36px;
    height:36px;
    background:url(/static/common/images/yonghuimg.png)no-repeat center;
  }
  ul.nav-02 li.set:before{
    content:"";
    display:block;
    width:24px;
    height:24px;
    background:url(/static/common/images/nav_1.png)no-repeat 0 0;
  }
  ul.nav-02 li.email:before{
    content:"";
    display:block;
    width:24px;
    height:24px;
    background:url(/static/common/images/nav_1.png)no-repeat 0 -24px;
  }
  ul.nav-02 li.hep:before{
    content:"";
    display:block;
    width:24px;
    height:24px;
    background:url(/static/common/images/nav_1.png)no-repeat 0 -48px;
  }
  ul.nav-02 li.back:before{
    content:"";
    display:block;
    width:24px;
    height:24px;
    background:url(/static/common/images/nav_1.png)no-repeat 0 -72px;

  }
  ul.nav-02 li{
    margin-bottom: 26px;
    display: flex;
    justify-content: center;
  }
  ul.nav-02 li:last-child{
    margin-bottom: 15px !important;
  }
</style>
<script>

    export default{
        data(){
            return {
                imgLogo:'/static/common/images/logo.png'

            }
        },

        components: {}

    }

</script>
