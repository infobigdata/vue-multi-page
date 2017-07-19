<template>
    <header>
      <ul class="nav_li">
        <li class="tps" active="true">模板库</li>
        <li class="lang">智能语义</li>
        <li class="tables">仪表盘</li>
        <li class="screen">炫丽大屏</li>
      </ul>
    </header>
</template>
<style scoped>
  header{
     height:73px;
     position:absolute;
     left:70px;
     right:0px;
     border-bottom:1px solid #eee;
  }
  .nav_li{
    padding-left:40px;
    height:100%;
  }
  .nav_li:after{
    content:"";
    display:block;
    clear: both;
  }
  .nav_li li{
    float:left;
    margin-right:20px;
    padding:0 18px;
    height:100%;
    line-height: 72px;
    font-size:16px;
    box-sizing: border-box;
  }
  .nav_li li.tps:before{
    content:'';
    width:32px;
    display:inline-block;
    height:32px;
    background:url('/static/common/images/nav_0-2-off.png')no-repeat 0 0;
    vertical-align: middle;
    margin-right:10px;
  }
  .nav_li li.lang:before{
    content:'';
    width:32px;
    display:inline-block;
    height:32px;
    background:url('/static/common/images/nav_0-2-off.png')no-repeat 0 -40px;
    vertical-align: middle;
    margin-right:10px;
  }
  .nav_li li.tables:before{
    content:'';
    width:32px;
    display:inline-block;
    height:32px;
    background:url('/static/common/images/nav_0-2-off.png')no-repeat 0 -82px;
    vertical-align: middle;
    margin-right:10px;
  }
  .nav_li li.screen:before{
    content:'';
    width:32px;
    display:inline-block;
    height:32px;
    margin-right:10px;
    background:url('/static/common/images/nav_0-2-off.png')no-repeat 0 -120px;
    vertical-align: middle;
  }

  .nav_li li.tps[active="true"]:before{
    content:'';
    width:32px;
    display:inline-block;
    height:32px;
    background:url('/static/common/images/nav_0-2-on.png')no-repeat 0 0 !important;
    vertical-align: middle;
    margin-right:10px;
  }

  .nav_li li[active="true"].lang:before{
    content:'';
    width:32px;
    display:inline-block;
    height:32px;
    background:url('/static/common/images/nav_0-2-on.png')no-repeat 0 -40px !important;
    vertical-align: middle;
    margin-right:10px;
  }
  .nav_li li[active="true"].tables:before{
    content:'';
    width:32px;
    display:inline-block;
    height:32px;
    background:url('/static/common/images/nav_0-2-on.png')no-repeat 0 -82px !important;
    vertical-align: middle;
    margin-right:10px;
  }
  .nav_li li[active="true"].screen:before{
    content:'';
    width:32px;
    display:inline-block;
    height:32px;
    margin-right:10px;
    background:url('/static/common/images/nav_0-2-on.png')no-repeat 0 -120px !important;
    vertical-align: middle;
  }

  .nav_li li[active="true"]{
    border-bottom:3px solid #0066ff;
    color:#0066ff;
  }
</style>
<script>

    export default{
        data(){
            return {

                msg: 'hello vue'
            }
        },

        components: {}

    }

</script>
