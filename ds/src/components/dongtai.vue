<template>
    <div>
        <my-head></my-head>
        <div class="dongtai_body">
            <div class="dongtai_head">
                <ul>
                  <li>案例</li>
                  <li>交易</li>
                  <li>真经</li>
                  <li>百科</li>
                </ul>
            </div>
            <div class="dongtai_blean">
                <Swiper>
                  <Slide>
                    <img class="dt_blean_img" src="../assets/imgs/dt_blean1.png" alt="">
                  </Slide>
                  <Slide>
                    <img class="dt_blean_img" src="../assets/imgs/dt_blean2.png" alt="">
                  </Slide>
                  <Slide>
                    <img class="dt_blean_img" src="../assets/imgs/dt_blean3.png" alt="">
                  </Slide>
                  <Slide>
                    <img class="dt_blean_img" src="../assets/imgs/dt_blean4.png" alt="">
                  </Slide>
                </Swiper>
            </div>
            <div class="dongtai_list1">
               <ul>
                 <li>
                    <img src="../assets/imgs/dt_logosj.png" alt="">
                   
                 </li>
                 <li>
                    <img src="../assets/imgs/dt_xcpsj.png" alt="">
                   
                 </li>
                 <li>
                    <img src="../assets/imgs/dt_visj.png" alt="">
                    
                 </li>
                 <li>
                    <img src="../assets/imgs/dt_bzsj.png" alt="">
                    
                 </li>
                 <li>
                    <img src="../assets/imgs/dt_wzdz.png" alt="">
                    
                 </li>
                 <li>
                    <img src="../assets/imgs/dt_dssj.png" alt="">
                    
                 </li>
               </ul>
            </div>
            <div>
               <div class="dongtai_cnxh_head">
                 <span>猜你喜欢</span>
                 <select name="" id="">
                   <option value="">本地优先</option>
                 </select>
               </div>
               <div class="dongtai_cnxh_list">
                  <ul>
                    <li>
                      <img src="../assets/imgs/dt_list1.png" alt="">
                      <span class="dongtai_cnxh_city">重庆</span>
                      <div class="dongtai_cnxh_tit">麦小弟连锁餐饮打造麦小弟连锁餐饮打造</div>
                      <div class="dongtai_cnxh_name">干树品牌设计公司</div>
                    </li>
                    <li>
                      <img src="../assets/imgs/dt_list2.png" alt="">
                      <span class="dongtai_cnxh_city">重庆</span>
                      <div class="dongtai_cnxh_tit">【教育画册设计】马赫兰奇公立学校</div>
                      <div class="dongtai_cnxh_name">匠意品牌设计</div>
                    </li>
                    <li>
                      <img src="../assets/imgs/dt_list3.png" alt="">
                      <span class="dongtai_cnxh_city">重庆</span>
                      <div class="dongtai_cnxh_tit">尚德机构-教育培训-logo设计</div>
                      <div class="dongtai_cnxh_name">智牌品牌企业</div>
                    </li>
                    <li>
                      <img src="../assets/imgs/dt_list4.png" alt="">
                      <span class="dongtai_cnxh_city">重庆</span>
                      <div class="dongtai_cnxh_tit">麦小弟连锁餐饮打造</div>
                      <div class="dongtai_cnxh_name">干树品牌设计公司</div>
                    </li>
            
                  </ul>
                  <ul>
                    <li>
                      <img src="../assets/imgs/dt_list1.png" alt="">
                      <span class="dongtai_cnxh_city">重庆</span>
                      <div class="dongtai_cnxh_tit">麦小弟连锁餐饮打造</div>
                      <div class="dongtai_cnxh_name">干树品牌设计公司</div>
                    </li>
                    <li>
                      <img src="../assets/imgs/dt_list2.png" alt="">
                      <span class="dongtai_cnxh_city">重庆</span>
                      <div class="dongtai_cnxh_tit">麦小弟连锁餐饮打造</div>
                      <div class="dongtai_cnxh_name">干树品牌设计公司</div>
                    </li>
                    <li>
                      <img src="../assets/imgs/dt_list3.png" alt="">
                      <span class="dongtai_cnxh_city">重庆</span>
                      <div class="dongtai_cnxh_tit">麦小弟连锁餐饮打造</div>
                      <div class="dongtai_cnxh_name">干树品牌设计公司</div>
                    </li>
                    <li>
                      <img src="../assets/imgs/dt_list4.png" alt="">
                      <span class="dongtai_cnxh_city">重庆</span>
                      <div class="dongtai_cnxh_tit">麦小弟连锁餐饮打造</div>
                      <div class="dongtai_cnxh_name">干树品牌设计公司</div>
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
import { Swiper, Slide } from 'vue-swiper-component';
export default {
  name: 'HelloWorld',
  components: {"my-head":head,"my-foot":foot,Swiper,Slide}, // 直接初始化就可以啦，不需要Vue.use();
  data () {
    return {
     
    }
  }
}
</script>
<style scoped>

</style>

