<template>
    <div class="search">
            <div class="search_head">
                <div>
                    <img src="../assets/imgs/search.png" alt="">
                    <input type="text" placeholder="搜索专业人才为你服务">
                </div>
                <span @click="out()">取消</span>
            </div>
            <div class="search_hot">
                <p>热门搜素</p>
                <ul>
                    <li>公司Logo</li>
                    <li>包装设计</li>
                    <li>店铺代运营</li>
                    <li>海报设计</li>
                    <li>营销策划</li>
                    <li>装修设计</li>
                    <li>企业网站</li>
                    <li>微信开发</li>
                    <li>小程序</li>
                    <li>抖音</li>
                    <li>软件开发</li>
                    <li>取名</li>
                    <li>文案写作</li>
                </ul>
            </div>
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
