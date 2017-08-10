<template>

    <error v-if="isError"></error>
    <div v-else>
        <h1>change</h1>
    </div>

</template>

<script>
import Base from 'assets/js/base';

import error from 'components/error';

export default {
    components: {
        error
    },
    data(){
        return {
            'isError': true
        }
    },
    mounted(){
        this.init()
    },
    methods: {
        init(){
            let q = Base.C.getUrlQuery('tableid')
            if (q) {
                this.isError = false;
            }else{
                this.isError = true;
            }
        }
    }

}
</script>

