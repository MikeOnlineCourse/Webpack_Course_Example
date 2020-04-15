<script>
export default {
    data(){
        return {
            title: 'About'
        }
    }
};
</script>

<template>
    <div id='About'>
        <div class="mid">
            <img src="~mike.jpg" alt="">
        </div>
    </div>
</template>

<style lang='scss' scoped>
    #About{
        .mid{
            width: 100%;
            margin: 50px auto 50px auto;
            >img{
                width: 20%;
                margin: 0 auto 30px auto;
            }
        }
    }
</style>
