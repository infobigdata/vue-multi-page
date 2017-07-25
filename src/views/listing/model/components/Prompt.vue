<template>
    <div class="show_text" :style="styles" ref="textid">
        <div class="msg">
            <span class="shajiao"></span>
            <strong>名称：</strong>{{DataMsg.msgs}}
        </div>
    </div>
</template>
<style>
    .msg{
        position:relative;
        line-height: 45px;
    }
    .msg{
     height:100%;
     padding:0 20px;
    }
    .shajiao{
        width: 0;
        height: 0;
        border-top: 5px solid transparent;
        border-right: 10px solid #fff;
        border-bottom: 10px solid transparent;
        position:absolute;
        left:-10px;
        top:50%;
        transform:translateY(-50%);

    }
</style>
<script>

    export default{
        props:['DataMsg'],
        data(){
            return {
             styles:{
                 width:'250px',
                background:'#fff',
                height:'45px',
                position:'absolute',
                display:'none',
                left:'85px',
                top:'175px',
                zIndex:1,
                borderRadius:'5px',
                boxShadow:'0 0 10px 0.5px rgba(0,0,0,0.4)'
             }

            }
        },
        watch:{
            DataMsg(val){
                this.styles.left = val.disX+'px';
                    this.styles.top = val.disY+'px';
                    this.styles.display=val.show

              }
        },
        components: {},
        computed:{

        },
        mounted(){
        console.log(this.DataMsg)
    }

    }

</script>
