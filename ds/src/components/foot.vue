<template>
    <div class="myfoot">
        <router-link  tag="div" to="/" :class="{foot_activ:foot1}"><i class="icon iconfont icon-homefill"></i><p>首页</p></router-link>
        <router-link tag="div" to="/huodong" :class="{foot_activ:foot2}"><i class="icon iconfont icon-list"></i><p>类目</p></router-link>
        <router-link tag="div" to="/dongtai" :class="{foot_activ:foot3}"><i class="icon iconfont icon-roundadd"></i><p>更多</p></router-link>
        <router-link tag="div" to="/dongtai" :class="{foot_activ:foot3}"><i class="icon iconfont icon-evaluate"></i><p>发现</p></router-link>
        <router-link tag="div" to="/home" :class="{foot_activ:foot4}"><i class="icon iconfont icon-peoplefill"></i><p>用户</p></router-link>
    </div>
</template>
<script>
export default {
    data(){
        return{
            foot1:false,
            foot2:false,
            foot3:false,
            foot4:false
        }
    
    },
    methods:{
        
    }
}
</script>
<style scoped>

</style>
