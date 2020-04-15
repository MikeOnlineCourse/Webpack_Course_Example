<script>
import { mapActions } from 'vuex';
export default {
    data () {
        return {
            title: 'Home'
        }
    },
    computed: {
        count () {
            return this.$store.state.count;
        }
    },
    methods: {
        ...mapActions([
            'incrementAdd',
            'incrementRemove'
        ])
    }
}
</script>

<template>
    <div class="home">
        <div class="mid">
            <button @click="incrementRemove">-</button>
            <p>{{ count }}</p>
            <button @click="incrementAdd">+</button>
        </div>
        <img src="~mike.jpg" alt="">
    </div>
</template>

<style lang='scss' scoped>
    .mid{
        width: 300px;
        margin: 50px auto 0 auto;
        display: flex;
        justify-content: space-around;
        align-items: center;
        p{
            margin: 0 20px;
        }
        button{
            width: 50px;
            height: 30px;
        }
    }
    img{
        width: 20%;
        margin: 100px auto 0 auto;
    }
</style>