<template>
    <nav class="nav_0">
        <a class="logo_0" href="/"></a>
        <div class="nav_0_div">
            <a class="nav_a02  active " href="/templatebase/index">
                <i></i>
                <span>认知<br />分析</span>
            </a>
            <a class="nav_a01   " href="/worktable/index">
                <i></i>
                <span>数据<br />中心</span>
            </a>
            <a class="nav_a03 " href="/reporting">
                <i></i>
                <span>报告<br />中心</span>
            </a>
        </div>
        <div class="shezhi">
            <div class="shezhi_home">
                <a class="shezhi_home_a"><img :src="face"/></a>
                <div class="Mlayer_1">
                    <i></i>
                    <span class="a_title">个人中心</span>
                </div>
                <div class="Mlayer_2">
                    <i></i>
                    <div class="gerenxinxi">
                        <h4><span><img :src="face" /></span>jack</h4>
                        <div class="gerenxinxi_xq">
                            <h5>个人信息</h5>
                            <p>昵称：<span> jack</span><i></i></p>
                            <p>手机：<span>54548854545</span><i></i></p>
                            <p>邮箱：<span>jack@email.com</span><i></i></p>
                        </div>
                        <div class="xiugaimima_xq">
                            <h5>修改密码</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div class="shezhi_c">
                <div class="shezhi_xq">
                    <a class="a_shizhi" href="javascript:void(0);"></a>
                    <div class="Mlayer_1">
                        <i></i>
                        <span class="a_title">设置</span>
                    </div>
                    <div class="Mlayer_2">
                        <i></i>
                        <div class="xiugaizhuti_xq">
                            <h5>主题</h5>
                            <!-- <p class="overflow" id="xiugaizhuti">
                                <span class="on"><img src="/img/zhuti1.png"/></span>
                                <span><img src="/img/zhuti2.png"/></span>
                            </p> -->
                        </div>
                    </div>
                </div>
                <div class="shezhi_xq">
                    <a class="a_youjian" href="javascript:void(0);"></a>
                    <div class="Mlayer_1">
                        <i></i>
                        <span class="a_title">消息中心</span>
                    </div>
                </div>
                <div class="shezhi_xq">
                    <a class="a_bangzhu" href="javascript:void(0);"></a>
                    <div class="Mlayer_1">
                        <i></i>
                        <span class="a_title">帮助中心</span>
                    </div>
                </div>
                <div class="shezhi_xq">
                    <a class="a_quit" href="/logout"></a>
                    <div class="Mlayer_1">
                        <span class="a_title">退出</span>
                    </div>
                </div>
            </div>
        </div>
        </nav>

</template>

<script>
    export default{
        data(){
            return{
                face: ''
            }
        }
    }
</script>
<style lang="less" scoped>
  @import '~assets/less/leftBar.less';
</style>
