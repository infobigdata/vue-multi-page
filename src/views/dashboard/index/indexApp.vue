<template>
    <div class="warp">
        <leftBar></leftBar>
        <ZHeader HeaderIndex="2"></ZHeader>
        <div class="nav_1">
            <asideBar></asideBar>
            <vueZtree :list.sync='ztreeDataSource' :is-open='false'></vueZtree>
        </div>

    </div>
</template>

<script>
import leftBar from 'components/leftBar';
import ZHeader from 'components/Header';
import asideBar from 'components/asideBar';
import vueZtree from 'components/zTree/Ztree'

export default{
    components: {
      ZHeader,
      leftBar,
      asideBar,
      vueZtree
    },
    data() {
      return {
        ztreeDataSource:[
            {
                id:220,
                name:"游戏1",
                children:[{
                    id:4,
                    name:"国产电影",
                    path:"",
                    children:[{
                        id:4,
                        name:"国产电影",
                        path:""
                    },{
                        id:5,
                        name:"好莱坞电影",
                        path:""
                    },{
                        id:6,
                        name:"小语种电影",
                        path:""
                    }]
                },{
                    id:5,
                    name:"好莱坞电影",
                    path:""
                },{
                    id:6,
                    name:"小语种电影",
                    path:""
                }],
                path:"http://www.baidu.com"
            },{
                id:1,
                name:"音乐",
                children:[],
                path:"http://www.baidu.com"
            }
        ]
      }
    },
    methods: {

    }
}
</script>

<style>
    .nav_1 {
    position: relative;
    width: 260px;
    height: 100%;
    background-color: #fff;
    float: left;
}
</style>
