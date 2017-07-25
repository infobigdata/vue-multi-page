<template>
    <div class="screen">

        <div class="scree_canavs"></div>
        <div class="label-box"></div>
        <div class="bottom_box"></div>

    </div>
</template>
<style scoped>
    .screen{
        position:absolute;
        top:73px;
        bottom:0px;
        right:0;
        left:0;
        background:#fff;
    }
    .scree_canavs{
       position:absolute;
        left:70px;
        bottom:50px;
        top:50px;
        width:1300px;
        /*right:400px;*/
        background:pink;
    }
    .label-box{
        width:200px;
        position:absolute;
        right:0px;
        top:0px;
        bottom:0;
        /*background:orange;*/

    }
   .bottom_box{
       position:absolute;
       bottom:0px;
       height:50px;
       left:0;
       right:200px;
       /*background:oldlace;*/
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
