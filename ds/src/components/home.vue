<template>
    <div>
        <my-head></my-head>
          <div class="home">
              <div class="home_user">
                <div>
                    <img src="../assets/imgs/user.png" alt="" class="homg_userimg">
                    <span>登录/注册账号</span>
                    <i class="icon iconfont icon-right"></i>
                </div>
              </div>
              <div class="home_user_list1">
                 <ul>
                   <li>
                     <img src="../assets/imgs/home1.png" alt="">
                      <p>我的订单</p>  
                   </li>
                   <li>
                     <img src="../assets/imgs/home2.png" alt="">
                    <p>服务收藏</p>
                   </li>
                   <li>
                     <img src="../assets/imgs/home3.png" alt="">
                      <p>店铺关注</p>
                   </li>
                   <li>
                     <img src="../assets/imgs/home4.png" alt="">
                      <p>我的足迹</p>
                   </li>
                 </ul>
              </div>
              <div class="home_list">
                  <ul>
                    <li>
                      <img src="../assets/imgs/home5.png" alt="">
                      <span>领大圣管家</span>
                      <i class="icon iconfont icon-right"></i>
                    </li>
                    <li>
                      <img src="../assets/imgs/home6.png" alt="">
                      <span>我的账户</span>
                      <span>余额、优惠卷</span>
                      <i class="icon iconfont icon-right"></i>
                    </li>
                    <li>
                      <img src="../assets/imgs/home7.png" alt="">
                      <span>我的优惠卷</span>
                      <i class="icon iconfont icon-right"></i>
                    </li>
                    <li>
                      <img src="../assets/imgs/home8.png" alt="">
                      <span>雇主俱乐部</span>
                      <span>签到、积分抽奖</span>
                      <i class="icon iconfont icon-right"></i>
                    </li>
                    <li>
                      <img src="../assets/imgs/home9.png" alt="">
                      <span>帮助</span>
                      <i class="icon iconfont icon-right"></i>
                    </li>
                    <li>
                      <img src="../assets/imgs/home10.png" alt="">
                      <span>设置</span>
                      
                      <i class="icon iconfont icon-right"></i>
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
