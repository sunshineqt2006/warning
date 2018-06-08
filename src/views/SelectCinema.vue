<template>
  <div class="select-cinema">
    <cell v-for="(a,index) in cinemaList"  :key="index" :subTitle="a.cinemaName">
      <div slot="title" @click="$router.push({path:'/Index',query:{title:a.cinemaName,type:'2',cinemaId:a.cinemaId}})">
        <span class="box-item"><em>系统预警</em>   
        <span>{{a.systemWarning}}<i class="cell-icon" :class="a.systemWarning>0?'danger':'normal'"></i> </span>   </span>
      </div>
      <div slot="extra" @click="$router.push({path:'/Index',query:{title:a.cinemaName,type:'1',cinemaId:a.cinemaId}})">
        <span class="box-item"><em>运营预警</em>   
        <span>{{a.businessWarning}}<i class="cell-icon" :class="a.businessWarning>0?'danger':'normal'"></i> </span>   </span>
      </div>
    </cell>

  </div>
</template>
<script>
import Cell from "./components/cell";
import Api from 'api/warning.js'

export default {
  components: { Cell },
  data() {
    return {
      value: "false",
      cinemaList: []
    };
  },
  methods: {
    getCinemaListData(){
      Api.getCinemaWarn().then(res=>{
      this.cinemaList=res
    })
    }
  },
  created() {
    this.getCinemaListData()
    
  }
};
</script>
<style lang="less">
@import '~styles/var.less';
.select-cinema .a-cell{
  .content{
    >span.title,div{flex: 1;font-size: 15px;color: @font-color2;font-weight: normal; }
    span.title{margin-right: 15px;}
    .box-item{background:@bg-color;display: flex;justify-content: space-between;padding: 10px;border-radius: 20px; 
      span{display: flex;align-items: center;
        &::after{margin-left: 5px;content: "";width: 6px; height: 6px;border: 2px solid #ccc;
        border-top: 0 none;position: relative;bottom: 0px;
        border-left: 0 none;-webkit-transform: rotate(315deg)
      }
      }
    }
    } 

  
}

</style>

