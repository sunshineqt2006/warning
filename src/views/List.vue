<template>
  <div class=" list-page">
    <page-scroller :api='getWarningMsg' ref='scroller' noRecordText='当前无数据' noRecordImage usePulldown :usePullup="false" height='-110'>
      <cell :subTitle="a.ctime" :title="a.message" v-for="(a,index) in data" @click="$router.push('/Detail')"></cell>
    </page-scroller>
    <!-- <div class="page-loadmore-wrapper" ref="wrapper" :style="{ height: wrapperHeight + 'px' }">
       
    </div> -->
  </div>
</template>
<script>
import PageScroller from "views/components/pageScroller.vue";
import Cell from "views/components/cell";
import Api from "api/warning.js";
export default {
  components: { Cell, PageScroller },
  data() {
    return {
      allLoaded: false,
      bottomStatus: "",
      wrapperHeight: 0,
      setId: "",
      page: {
        cur: 1,
        size: 0,
        total: 0
      },
      data: []
    };
  },
  methods: {
    async  getWarningMsg(page) {
      var that = this;
      let res;
      Api.getWarningMsg(this.setId, page, 5).then(res => {
        if (page == 1) {
          this.data = res.list;
        } else {
          this.data = this.data.concat(res.list);
        }
        res.page = {
          number: page,
          size: res.page.size,
          totalElements: res.page.total,
          allElementss: res.page.size
        };
        if (res.list.length) {
          page += 1;
          that.getWarningMsg(page);
        }
      });
      return res
    }
  },
  created() {
    this.page.cur = 1;
    this.setId = this.$route.query.setId;
    for (let i = 1; i <= 4; i++) {
      this.data.push(i);
    }
    this.getWarningMsg(this.page.cur);
  }
};
</script>
<style lang="less">
@import "~styles/var.less";
.list-page {
  .a-cell .content .title {
    font-weight: normal;
  }
}
.page-loadmore-listitem {
  padding: 20px;
  text-align: center;
}
</style>
