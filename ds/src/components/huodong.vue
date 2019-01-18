<template>
    <div>
        <my-head></my-head>
        活动页面
        <my-foot></my-foot>
    </div>
</template>
<script>
import head from './head.vue';
import foot from '@/components/foot.vue';
export default {
  name: 'HelloWorld',
  components: {"my-head":head,"my-foot":foot}, // 直接初始化就可以啦，不需要Vue.use();
  data () {
    return {
     
    }
  }
}
</script>
<style scoped>

</style>
