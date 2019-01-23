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

