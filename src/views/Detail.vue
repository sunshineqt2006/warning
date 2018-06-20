<template>
  <div class="detail">
      <div class="con">
        <span class="f15">{{msgInfo.cinemaName}}</span>
        <div class="frbm title"> 
           <p class="black f24">{{msgInfo.typeName}}</p>
           <em class="red f18">解决中</em>
        </div>
        <div class="detail">
          <p>{{msgInfo.ctime}}</p>
          <p style="display:flex"> 
            <em style="white-space: nowrap">预警内容：</em> 
            <em>{{msgInfo.message}}</em>
          </p>
          <p>预警说明：请联系张三，联系方式：13568955555</p>
          <p>备注：</p>
          <textarea  class="textarea" v-model="remark" ></textarea>
          <p class="frbm" >
            <flexbox>
              <flexbox-item>
                <x-button type="primary" class="custom-primary-blue" @click.native="submit(1)" >解决中</x-button>
              </flexbox-item>
              <flexbox-item>
                <x-button type="primary" @click.native="submit(2)" >解决完成</x-button>
              </flexbox-item>
            </flexbox>
          </p>
        </div>
        
      </div>

      <div class="custom-btn" @click="$router.push('/SelectCinema')">查看全部预警</div>
  </div>
</template>
<script>
import {Flexbox, FlexboxItem } from 'vux'
import Api from 'api/warning.js'
export default {
  components:{Flexbox, FlexboxItem},
  data(){
    return{
      msgInfo:{},
      remark:'',
      msgId:''
    }
  },
  methods:{
    submit(status){
      Api.readMsg(this.msgId,this.remark,status).then(res=>{
        this.$vux.toast.text('预警处理完毕')
        this.$router.go(-1);
      },error=>{
        this.$vux.toast.text(error.content)
      })
    },
    getMsgInfo(){
      Api.getMsgInfo(this.msgId).then(res=>{
        this.msgInfo=res
      })
    }
  },
  created(){
    this.msgId=this.$route.query.id
    this.getMsgInfo()
  }
}
</script>
<style lang="less" scoped>
@import '~styles/var.less';
  .detail{display: flex;flex-direction: column;justify-content: space-between;
    .con{padding: 15px;}
    .title{padding: 10px 0; border-bottom: 1px dotted @border-color; }
    .detail{padding: 15px 0;line-height: 26px;
      .textarea{width: 100%;border: 1px solid @border-color2;height: 100px;margin-bottom: 30PX;}
    }
    .custom-btn{background: #ffffff;text-align: center;padding: 15px 0;border-top: 1px solid @border-color2;font-size: 18px;color: @primary-color;}
  }
  .custom-primary-blue {
    background-color: #409EFF;
      &:active {
        background-color: #3391f2!important;
      }
    }
</style>
