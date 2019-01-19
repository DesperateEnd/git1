<template>
  <div class="hello">
    <my-head></my-head>
        <div class="index_body">
            <div class="index_head">
              <div> <i class="iconfont icon-location index_location"></i> 成都</div>
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
                          <div class="index_xzfw_active">
                            <div></div>
                          </div>
                          <div>
                              <img src="" alt="">
                              <p>品牌设计</p>
                          </div>
                      </li>
                      <li>
                          <div class="index_xzfw_active">
                            <div></div>
                          </div>
                          <div>
                              <img src="" alt="">
                              <p>营销直销</p>
                          </div>
                      </li>
                      <li>
                          <div class="index_xzfw_active">
                            <div></div>
                          </div>
                          <div>
                              <img src="" alt="">
                              <p>IT软件</p>
                          </div>
                      </li>
                      <li>
                          <div class="index_xzfw_active">
                            <div></div>
                          </div>
                          <div>
                              <img src="" alt="">
                              <p>其他服务</p>
                          </div>
                      </li>
                      
                </ul>
                <div>
                        <span>手机号</span>
                        <input type="text" placeholder="请输入你的手机号">
                </div>
                <div>
                        <span>验证码</span>
                        <input type="text" placeholder="请输入验证码">
                        <span>获取验证码</span>
                      </div>
              </div>
              <button>我要发需求</button>
              <p>轻松发布需求&nbsp;急速匹配人才&nbsp;顾问免费跟进</p>
            </div>
            <div>经典案例列表</div>
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
        {img:'',name:'品牌设计1'},{img:'',name:'营销推广'},
        {img:'',name:'IT/软件'},{img:'',name:'知识产权'},
        {img:'',name:'工商财税'},{img:'',name:'科技服务'},
        {img:'',name:'影视动漫'},{img:'',name:'电商服务'},
        {img:'',name:'装修服务'},{img:'',name:'全部分类'},
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
      items:["  恭喜xxxxxxx签订外包场地的订单，获得xxxxx积分"," 恭喜xxxxxxx签订外包场地的订单，获得xxxxx积分2"," 恭喜xxxxxxx签订外包场地的订单，获得xxxxx积分3"]
    }
  },
  created(){
    setInterval(this.scroll,2000)//定时器执行滚动
},
methods: {
    scroll(){//公告滚动的方法
       this.animate=true;    // 因为在消息向上滚动的时候需要添加css3过渡动画，所以这里需要设置true
       setTimeout(()=>{      //  这里直接使用了es6的箭头函数，省去了处理this指向偏移问题，代码也比之前简化了很多
               this.items.push(this.items[0]);  // 将数组的第一个元素添加到数组的
               this.items.shift();               //删除数组的第一个元素
               this.animate=false;  // margin-top 为0 的时候取消过渡动画，实现无缝滚动
       },500)
    }
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
