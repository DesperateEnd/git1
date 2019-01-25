<template>
    <div class="details">
            详情页面
    </div>
</template>
<script>
// import head from './head.vue';
// import foot from '@/components/foot.vue';
export default {
  name: 'HelloWorld',
 // components: {"my-head":head,"my-foot":foot}, // 直接初始化就可以啦，不需要Vue.use();
  data () {
    return {
                  
    }
  },
  methods:{
      out(){
          this.$router.go(-1);
      }
  }
}
</script>
<style scoped>

</style>
