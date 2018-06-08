<template>
  <div class="a-cell" @click="isClick=!isClick">
    <h5 class="sub-title" v-if="!!subTitle">{{subTitle}}</h5>
    <div class="content">
      <span class="title">{{title}} <slot name="title"></slot> </span>
      <div class="extra" v-if="!!extra&&extra==0"> 正常 <i class="cell-icon normal" ></i></div>
      <div class="extra" v-if="!!extra&&extra==1"> 异常 <i class="cell-icon danger" ></i></div>
      <slot name="extra"></slot>
    </div>
    <div class="brief">{{brief}}<slot name="brief"></slot> </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      isClick:false
    }
  },
  props:{
    title:String,
    subTitle:String,
    brief:String,
    extra:[Number,String]
  }
}
</script>
<style lang="less">
@import '~styles/var';
.a-cell{background: #ffffff;padding:10px 0 0;
  .sub-title{font-size:15px;color: @font-color;padding:0 15px;     font-weight: normal;}
  .content{border-bottom: 1px solid @border-color2;padding:0 15px 10px;display: flex;align-items: center; justify-content: space-between;
    .title{padding: 5px 0px;color: @black-color;font-size: 18px;font-weight: bolder;}
    .extra{display: flex;align-items: center;color: @black-color;}
    
  }
  .brief{background: @bg-color}
}

</style>

