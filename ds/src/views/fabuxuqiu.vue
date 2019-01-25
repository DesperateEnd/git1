<template>
    <div class="fabuxuqiu">
        <div class="fabuxuqiu_head">
            <i class="icon iconfont icon-back" @click="out()"></i>
            <span>免费发布需求</span>
            <span>帮助</span>
        </div>
          <div class="fabuxuqiu_tit">让全球千万专业人士快速响应您的需求</div>
          <div class="fabuxuqiu_tit2">
              <p>如：我需要logo设计/包装设计/宣传品设计</p>
              <p>网站建设/小程序/APP开发</p>
              <p>广告创意文案/申请政府补贴...</p>
          </div>
          <div class="fabuxuqiu_xx">
              <div class="fbxq_phone">
                  <span>手机号</span>
                  <input type="text" placeholder="信息保护中，仅官方可见">
            </div>
            <div class="fbxq_yzm">
                <span>验证码</span>
                <input type="text" placeholder="输入验证码">
                <span>获取验证码</span>
            </div>
            <button class="fbxq_btn">马上为我服务</button>
            <div class="fbxq_foot">
                <span><img src="../assets/imgs/fbxq1.png" alt="">专业服务</span>
                <span><img src="../assets/imgs/fbxq2.png" alt="">全程监理</span>
                <span><img src="../assets/imgs/fbxq3.png" alt="">资金托管</span>
                <span><img src="../assets/imgs/fbxq4.png" alt="">无效退款</span>
            </div>
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
