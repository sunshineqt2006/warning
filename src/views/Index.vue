<template>
<div class="page-loadmore-wrapper" >
    <cell :extra="a.isWarning" :title="a.typeName" v-for="a in data" @click.native="$router.push({path:'/List',query:{setId:a.id}})" :key="a.id">
        <div slot="brief" v-if="a.isClick">
          <block>
          <p v-if="a.subDetail.length===0" class="no-data">暂无数据</p>
          <div class="list" v-else>
            <div class="list-item" v-for="b in a.subDetail" @click.stop="goHandle(a,b)" :key="b.id">
              <p>{{b.ctime}}</p>
              <p class="text-ellipsis-line">{{b.message}}</p>
            </div>
          </div>
          </block>
        </div>
      </cell>
</div>
</template>
<script>
import Cell from "./components/cell";
import Api from "api/warning.js";
export default {
  components: { Cell },
  data() {
    return {
      type: "",
      cinemaId: "",
      data: []
    };
  },
  methods: {
    goHandle(item) {
      this.$router.push({path: "/Detail",query: {id: item.id} });
    },
    getCinemaWarnDetail() {
      Api.getCinemaWarnDetail(this.cinemaId, this.type).then(res => {
        res&&res.forEach(a => {
          a.isClick = false;
          a.subDetail = [];
        });
        this.data = res;
      });
    }
  },
  created() {
    this.cinemaId = this.$route.query.cinemaId;
    this.type = this.$route.query.type;
    this.getCinemaWarnDetail();
  }
};
</script>
<style lang="less">
@import "~styles/var.less";
.a-cell .brief .no-data{padding: 10px 20px;}
.list {
  padding: 0px 15px;
  
  .list-item {
    line-height: 20px;
    padding: 10px 0;
    border-bottom: 1px solid @border-color;
    font-size: 12px;
  }
}
</style>
