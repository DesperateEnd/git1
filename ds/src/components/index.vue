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
             <Swiper>
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
                  <ul class="index_list_fl">
                <li v-for="(list1,i) in list3" :key="i">
                    <div>
                        <div> <i class="iconfont icon-roundaddfill index_list_icon"></i></div>
                        <div>{{list1.name}}</div>
                    </div>
                </li>
              </ul>
                </Slide>
            </Swiper>
            <!-- <div class="index_list_all">
              <div>
              
              
              
              </div>
            </div>
            <div class="index_list_btn"><button>按钮1</button><button>按钮2</button><button>按钮3</button> </div> -->
            <div>轮播图</div>
            <div>公告</div>
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
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
