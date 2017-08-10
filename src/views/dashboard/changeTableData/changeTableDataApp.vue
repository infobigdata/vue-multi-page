<template>

    <error v-if="isError"></error>
    <div v-else>
        <h1>change</h1>
    </div>

</template>

<script>
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
            let urlString = window.location.search;
            if (urlString === '') {
                this.isError = true;
            }else{
                this.isError = false;
            }
        }
    }

}
</script>

