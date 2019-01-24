<template>
  <div class="hello">
    <my-head></my-head>
        <div class="index_body">
            <div class="index_head">
              <div @click="dingwei()"> <i class="iconfont icon-location index_location"></i> 成都</div>
              <!-- <div>影视</div>
              <div>短视频</div>
              <div>3D</div>
              <div>品牌设计</div> -->
              <div><i class="iconfont icon-roundaddfill index_headfb"></i>发布需求</div>
            </div>
            <div class="index_search"><i class="iconfont icon-search index_search"></i> <input type="text" name="" id="" placeholder="搜索专业人才为你服务" class="index_search_input"> <i>i</i> </div>
             <Swiper class="index_list_blean" autoPlay="false" interval="5000">
                <Slide>
                       <ul class="index_list_fl">
                        <li v-for="(list1,i) in list1" :key="i">
                            <div>
                                <div> <i class="iconfont icon-roundaddfill index_list_icon"></i></div>
                                <div>{{list1.name}}</div>
                            </div>
                        </li>
                      </ul>
                </Slide>
                <Slide>
                     <ul class="index_list_fl">
                      <li v-for="(list1,i) in list2" :key="i">
                          <div>
                              <div> <i class="iconfont icon-roundaddfill index_list_icon"></i></div>
                              <div>{{list1.name}}</div>
                          </div>
                      </li>
                    </ul>
                </Slide>
                <Slide>
                     <ul class="index_list_fl index_list_bg" >
                       <p>还没找到您想要的服务？您可以：</p>
                         <div>
                           <span class="index_list_btnl">免费咨询</span>
                           <span class="index_list_btnr">发布需求</span>
                         </div>
                     </ul>
                </Slide>
               
            </Swiper>
            <!-- <div class="index_list_all">
              <div>
              
              
              
              </div>
            </div>
            <div class="index_list_btn"><button>按钮1</button><button>按钮2</button><button>按钮3</button> </div> -->
            <div class="index_blean_imgs">
                <Swiper class="index_blean_imgss">
                  <Slide>
                    <img class="index_blean_img" src="../assets/imgs/blean1.png" alt="">
                  </Slide>
                  <Slide>
                    <img class="index_blean_img" src="../assets/imgs/blean2.png" alt="">
                  </Slide>
                  <Slide>
                    <img class="index_blean_img" src="../assets/imgs/blean3.png" alt="">
                  </Slide>
                  <Slide>
                    <img class="index_blean_img" src="../assets/imgs/blean4.png" alt="">
                  </Slide>
                </Swiper>
            </div>
            <div class="index_gonggao_kuang">
              <div class="index_gonggao_head">
               <img src="../assets/imgs/gonggao_head.png" alt="">
              </div>
              <ul>
                <li class="index_gonggao_li" v-for="(gg,i) in items" :key=i>{{gg}}</li>
              </ul>  
            </div>
            <div class="index_xzfw">
              <p class="index_xzfw_head">选择你需要的服务类型</p>
              <div class="index_xzfw_list1">
                     <ul>
                      <li>
                          <div>
                              <img class="index_ppsj" src="../assets/imgs/index_ppsj_act.png" alt="">
                          </div>
                      </li>
                      <li>
                          <div>
                              <img class="index_wlzx" src="../assets/imgs/index_wlzx.png" alt="">
                          </div>
                      </li>
                      <li>
                          <div>
                              <img class="index_itrj" src="../assets/imgs/index_itrj.png" alt="">
                          </div>
                      </li>
                      <li>
                          <div>
                              <img class="index_qtfw2" src="../assets/imgs/index_qtfw.png" alt="">
                          </div>
                      </li>
                      
                </ul>
                <div class="index_phone">
                        <span>手机号</span>
                        <input type="text" placeholder="请输入你的手机号">
                </div>
                <div class="index_yzm">
                        <span>验证码</span>
                        <input type="text" placeholder="请输入验证码">
                        <span>获取验证码</span>
                      </div>
              </div>
              <button class="index_wyfxq">我要发需求</button>
              <p class="index_xzfw_foot">轻松发布需求&nbsp;急速匹配人才&nbsp;顾问免费跟进</p>
            </div>
            <div class="index_jdal">
                <div class="index_jdal_head">经典案例 <i class="icon iconfont icon-right"></i></div>
                <div class="index_jdal_list">
                  <ul>
                    <li>
                      <div><img src="../assets/imgs/jdal1.png" alt=""></div>
                      <div class="index_jdal_title"><span class="index_jdal_title_head">【品牌设计】</span>商业计划/品牌全案策划/产品、新媒体文案等服务供您选择！</div>
                      <p >￥100.00起</p>
                    </li>
                    <li>
                      <div><img src="../assets/imgs/jdal2.png" alt=""></div>
                      <div class="index_jdal_title"><span class="index_jdal_title_head">【营销传播】</span>商业计划/品牌全案策划/产品、新媒体文案等服务供您选择！</div>
                      <p>￥100.00起</p>
                    </li>
                    <li>
                      <div><img src="../assets/imgs/jdal3.png" alt=""></div>
                      <div class="index_jdal_title"><span class="index_jdal_title_head">【IT软件】</span>商业计划/品牌全案策划/产品、新媒体文案等服务供您选择！</div>
                      <p>￥100.00起</p>
                    </li>
                    <li>
                      <div><img src="../assets/imgs/jdal4.png" alt=""></div>
                      <div class="index_jdal_title"><span class="index_jdal_title_head">【IT软件】</span>商业计划/品牌全案策划/产品、新媒体文案等服务供您选择！</div>
                      <p>￥100.00起</p>
                    </li>
                  </ul>
                </div>
            </div>
            <div class="index_fwxz">
                  <div class="index_fwxz_li" v-for="(li,i) in xzfwlist" :key="i">
                      <div class="index_fwxz_li_head">设计服务   <span class="index_fwxz_li_more">更多 <i class="icon iconfont icon-right"></i><i class="icon iconfont icon-right"></i></span></div>
                      <ul>
                        <li>LOGO</li>
                        <li>包装设计</li>
                        <li>宣传手册</li>
                        <li>VI设计</li>
                        <li>海报设计</li>
                        <li>PPT设计</li>
                        <li>名片设计</li>
                        <li>电商设计</li>
                        <li>卡通形象</li>
                        <li>餐饮空间</li>
                        <li>购物空间</li>
                        <li>家装设计</li>
                      </ul>
                  </div>
                   
            </div>
            <div class="index_qtfw">
                <div class="index_qtfw_head">快捷工具</div>
                <Swiper class="index_qtfw_list">
                  <Slide >
                      <ul class="index_qtfw_li">
                          <li v-for="(li,i) in list4" :key="i">
                              <div><img class="index_qtfw_img" :src="li.img" alt=""></div>
                              {{li.name}}
                            </li>
                      </ul>
                  </Slide>
                 <Slide>
                      <ul class="index_qtfw_li">
                          <li v-for="(li,i) in list4" :key="i">
                              <div><img class="index_qtfw_img" :src="li.img" alt=""></div>
                              {{li.name}}
                            </li>
                      </ul>
                  </Slide>
                  <Slide>
                      <ul class="index_qtfw_li">
                          <li v-for="(li,i) in list4" :key="i">
                              <div><img class="index_qtfw_img" :src="li.img" alt=""></div>
                              {{li.name}}
                            </li>
                      </ul>
                  </Slide> 
                </Swiper>
            </div>
            <div class="index_flzx">
              <div class="index_flzx_head">福利中心</div>
              <div class="index_flzx_list">
                  <ul>
                      <li><img src="../assets/imgs/zcflb.png" alt=""></li>
                      <li><img src="../assets/imgs/mflgj.png" alt=""></li>
                      <li><img src="../assets/imgs/mfzx.png" alt=""></li>
                      <li><img src="../assets/imgs/fjrc.png" alt=""></li>
                  </ul>
              </div>
            </div>
            <div class="index_fblean">
                <Swiper>
                    <Slide><img  class="index_fblean_li" src="../assets/imgs/Fblean1.png" alt=""></Slide>
                    <Slide><img   class="index_fblean_li" src="../assets/imgs/Fblean2.png" alt=""></Slide>
                    <Slide><img  class="index_fblean_li" src="../assets/imgs/Fblean3.png" alt=""></Slide>
                    <Slide><img  class="index_fblean_li" src="../assets/imgs/Fblean4.png" alt=""></Slide>
                </Swiper>
            </div>
            <div class="index_last">
                <div class="index_last_head">
                    <ul>
                        <li class="index_last_head_active">猜你喜欢</li>
                        <li>品牌设计</li>
                        <li>营销直播</li>
                        <li>文案策划</li>
                        <li>网站建设</li>
                        <li>电商设计</li>
                    </ul>
                </div>
                <div class="index_last_list">
                    <ul>
                      <li v-for="(li,i) in xzfwlist" :key="i">
                          <div>
                              <div class="index_last_headimg">
                                  <img  src="../assets/imgs/last_head1.jpg" alt="">
                                  <span>琳琅品牌设计</span>
                                  <span>南昌</span>
                              </div>
                              <div class="index_last_title">
                                雇主回头率>24% 同行|收入95.91万|诚信分95
                              </div>
                          </div>
                          <div>
                             <div class="index_last_spimg"><img src="../assets/imgs/last_list1.png" alt=""></div>
                             <div class="index_last_spxx">
                                <div>【元旦巨惠】企业公司品牌产品平面标志图标商标品牌log设计</div>
                                <div>成交量 2087 | 评分4.97</div>
                                <div>￥1314/套</div>
                             </div>
                          </div>
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
      list1:[
        {img:'',name:'企业宣传片'},{img:'',name:'产品宣传片'},
        {img:'',name:'广告片'},{img:'',name:'短视频'},
        {img:'',name:'三维动画'},{img:'',name:'手绘动画'},
        {img:'',name:'视频定制'},{img:'',name:'剪辑服务'},
        {img:'',name:'配音'},{img:'',name:'摄像服务'},
      ],
       list2:[
        {img:'',name:'品牌设计2'},{img:'',name:'营销推广'},
        {img:'',name:'IT/软件'},{img:'',name:'知识产权'},
        {img:'',name:'工商财税'},{img:'',name:'科技服务'},
        {img:'',name:'影视动漫'},{img:'',name:'电商服务'},
        {img:'',name:'装修服务'},{img:'',name:'全部分类'},
      ],
       list3:[
        {img:'',name:'品牌设计3'},{img:'',name:'营销推广'},
        {img:'',name:'IT/软件'},{img:'',name:'知识产权'},
        {img:'',name:'工商财税'},{img:'',name:'科技服务'},
        {img:'',name:'影视动漫'},{img:'',name:'电商服务'},
        {img:'',name:'装修服务'},{img:'',name:'全部分类'},
      ],
       list4:[
        {img:require('../assets/imgs/mfhm.png'),name:'免费核名'},{img:require('../assets/imgs/sbcgl.png'),name:'商标成功率'},
        {img:require('../assets/imgs/zlcx.png'),name:'专利查询'},{img:require('../assets/imgs/xmpg.png'),name:'项目评估'},
        {img:require('../assets/imgs/mfzb.png'),name:'免费招标'},{img:require('../assets/imgs/fwgj.png'),name:'服务估价'},
        {img:require('../assets/imgs/mflht.png'),name:'免费领合同'},{img:require('../assets/imgs/jsjsq.png'),name:'节税计算器'},
        {img:require('../assets/imgs/gqpc.png'),name:'高企评测'},{img:require('../assets/imgs/ksjk.png'),name:'快速借款'},
      ],
      items:["  恭喜xxxxxxx签订外包场地的订单，获得xxxxx积分"," 恭喜xxxxxxx签订外包场地的订单，获得xxxxx积分2"," 恭喜xxxxxxx签订外包场地的订单，获得xxxxx积分3"],
      xzfwlist:['1','2','3']

    }
  },
  created(){
    setInterval(this.scroll,2000)//定时器执行滚动
},
methods:{
    scroll(){//公告滚动的方法
       this.animate=true;    // 因为在消息向上滚动的时候需要添加css3过渡动画，所以这里需要设置true
       setTimeout(()=>{      //  这里直接使用了es6的箭头函数，省去了处理this指向偏移问题，代码也比之前简化了很多
               this.items.push(this.items[0]);  // 将数组的第一个元素添加到数组的
               this.items.shift();               //删除数组的第一个元素
               this.animate=false;  // margin-top 为0 的时候取消过渡动画，实现无缝滚动
       },500)
    },
    //定位跳转
        dingwei(){
            this.$router.push('/dingwei')
        }
},

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
