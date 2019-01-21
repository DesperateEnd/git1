<template>
    <div>
        <my-head></my-head>
        <div class="leimu_body">
            <div class="leimu_head">
               <div class="leimu_head_search">
                  <img src="../assets/imgs/search.png" alt="">
                  <input type="text" placeholder="搜索专业人才为你服务，如包装设计">
               </div>
               <i class="icon iconfont icon-more"></i>
            </div>
            <div class="leimu_nav">
                <ul>
                  <li>为你推荐</li>
                  <li>品牌设计</li>
                  <li>营销推广</li>
                  <li>IT/软件</li>
                  <li>知识产权</li>
                  <li>工商财务</li>
                  <li>科技服务</li>
                  <li>人事法律</li>
                </ul>
            </div>
            <div class="leimu_list">
              <div>
                <img class="leimu_list_firimg" src="../assets/imgs/list_img.png" alt="">
                <ul>
                    <li>
                          <div class="list_head">热门服务</div>
                          <ul class="leimu_first_list">
                              <li>
                                  <img class="leimu_list_" src="../assets/imgs/logosj.png" alt="">
                                  <p>LOGO设计</p>
                              </li>
                               <li>
                                  <img src="../assets/imgs/xcx.png" alt="">
                                  <p>小程序</p>
                              </li>
                               <li>
                                  <img src="../assets/imgs/appkf.png" alt="">
                                  <p>APP开发</p>
                              </li>
                              <li>
                                  <img src="../assets/imgs/wach.png" alt="">
                                  <p>文案策划</p>
                              </li>
                              <li>
                                    <img src="../assets/imgs/yufy.png" alt="">
                                    <p>英语翻译</p>
                              </li>
                              <li>
                                    <img src="../assets/imgs/qygj.png" alt="">
                                    <p>企业管家</p>
                              </li>
                              <li>
                                      <img src="../assets/imgs/wzjs.png" alt="">
                                      <p>网站建设</p>
                              </li>
                               <li>
                                      <img src="../assets/imgs/wzjs.png" alt="">
                                      <p>网站建设</p>
                              </li>
                               <li>
                                      <img src="../assets/imgs/wzjs.png" alt="">
                                      <p>网站建设</p>
                              </li>
                          </ul>
                    </li>
                    <li>
                          <div class="list_head">设计热搜</div>
                          <ul class="leimu_ather_list">
                              <li>包装设计</li>
                              <li>VI设计</li>
                              <li>宣传设计</li>
                              <li>网页设计</li>
                              <li>工业设计</li>
                              <li>装修设计</li>
                              <li>PPT设计</li>
                              <li>名片设计</li>
                              <li>详情页设计</li>
                          </ul>
                    </li>
                    <li>
                        <div class="list_head">热门服务</div>
                         <ul class="leimu_last_list">
                            <li>
                                <img src="../assets/imgs/d10.jpg" alt="">
                                <div>
                                    <div class="leimu_last_title"> 公司企业卡通logo设计图文标志字体图标商标设计ico设计</div>
                                    <div class="leimu_last_sj"> <span>￥1267/个</span> <span>重庆</span></div>
                                </div>
                            </li>
                            <li>
                                <img src="../assets/imgs/d11.jpg" alt="">
                                <div>
                                    <div class="leimu_last_title"> 公司企业卡通logo设计图文标志字体图标商标设计ico设计</div>
                                    <div class="leimu_last_sj"> <span>￥1267/个</span> <span>重庆</span></div>
                                </div>
                            </li>
                            <li>
                                <img src="../assets/imgs/d12.png" alt="">
                                <div>
                                    <div class="leimu_last_title"> 公司企业卡通logo设计图文标志字体图标商标设计ico设计</div>
                                    <div class="leimu_last_sj"> <span>￥1267/个</span> <span>重庆</span></div>
                                </div>
                            </li>
                         </ul>
                    </li>
                </ul>
                </div>
            </div>


        </div>
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
