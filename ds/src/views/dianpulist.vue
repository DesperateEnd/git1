<template>
    <div class="dianpulist">
       <div class="details_head">
                <i @click=" out()" class="icon iconfont icon-back"></i>
                <div>
                    <img src="../assets/imgs/search.png" alt="">
                    <input type="text" placeholder="品牌设计">
                </div>
                <i class="icon iconfont icon-list"></i>
            </div>
       <div class="dianpulist_nav">
           <ul>
               <li>本地优先<i class="icon iconfont icon-unfold"></i></li>
               <li>综合</li>
               <li>成交</li>
               <li>好评</li>
               <li>筛选<img src="../assets/imgs/saixuan.png" alt=""></li>
           </ul>
       </div>
       <div class="dianpulist_list">
           <ul>
               <li>
                   <div class="dianpulist_list_tit">
                       <div><img src="../assets/imgs/d12.png" alt=""></div>
                       <div>
                           <h3 class="li_tithead">干树牌设计公司<img src="" alt=""><span>重庆</span></h3>
                           <div class="li_kuang"><span>企业</span><span>猪六十一戒</span></div>
                           <div class="li_tit_smale">LOGO | VI设计 | 包装设计 | 网站定制开发</div>
                            <div class="li_tit_smale">雇主回头率 > 2%同行，收入53.48万，诚信分100</div>
                       </div>
                   </div>
                   <div class="li_jiage">
                       <p>【休闲娱乐】千树logo设计品牌形象设计高端定制吉祥物设计</p>
                       <div><span>￥2500 </span> <span> 成交量 100</span></div>
                       <i class="icon iconfont icon-right"></i>
                   </div>
               </li>
               <li>
                   <div class="dianpulist_list_tit">
                       <div><img src="../assets/imgs/d12.png" alt=""></div>
                       <div>
                           <h3 class="li_tithead">干树牌设计公司<img src="" alt=""><span>重庆</span></h3>
                           <div class="li_kuang"><span>企业</span><span>猪六十一戒</span></div>
                           <div class="li_tit_smale">LOGO | VI设计 | 包装设计 | 网站定制开发</div>
                            <div class="li_tit_smale">雇主回头率 > 2%同行，收入53.48万，诚信分100</div>
                       </div>
                   </div>
                   <div class="li_jiage">
                       <p>【休闲娱乐】千树logo设计品牌形象设计高端定制吉祥物设计</p>
                       <div><span>￥2500 </span> <span> 成交量 100</span></div>
                       <i class="icon iconfont icon-right"></i>
                   </div>
               </li>
               <li>
                   <div class="dianpulist_list_tit">
                       <div><img src="../assets/imgs/d12.png" alt=""></div>
                       <div>
                           <h3 class="li_tithead">干树牌设计公司<img src="" alt=""><span>重庆</span></h3>
                           <div class="li_kuang"><span>企业</span><span>猪六十一戒</span></div>
                           <div class="li_tit_smale">LOGO | VI设计 | 包装设计 | 网站定制开发</div>
                            <div class="li_tit_smale">雇主回头率 > 2%同行，收入53.48万，诚信分100</div>
                       </div>
                   </div>
                   <div class="li_jiage">
                       <p>【休闲娱乐】千树logo设计品牌形象设计高端定制吉祥物设计</p>
                       <div><span>￥2500 </span> <span> 成交量 100</span></div>
                       <i class="icon iconfont icon-right"></i>
                   </div>
               </li>
           </ul>
           
       </div>
       <div class="details_foot">
           <button>发需求 免费询价图标</button>
       </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
           
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
