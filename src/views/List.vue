<template>
  <div class=" list-page">
    <page-scroller :api='getWarningMsg' ref='scroller' >
      <cell :subTitle="a.ctime" :title="a.message" v-for="(a,index) in dataList" :key="index" @click.native="$router.push({path:'/Detail',query:{id:a.id}})"></cell>
    </page-scroller>
  </div>
</template>
<script>
import PageScroller from "views/components/pageScroller.vue";
import Cell from "views/components/cell";
import Api from "api/warning.js";
import { loadingPageMixin } from "utils/mixins";
export default {
  mixins: [loadingPageMixin],
  components: { Cell, PageScroller },
  data() {
    return {
      setId: "",
      dataList: []
    };
  },
  methods: {
    getWarningMsg(page) {
      return Api.getWarningMsg(this.setId, page,7).then(res => {
        var result = {};
        this.dataList = this.dataList.concat(res.list);
        result = {
          data: res.list,
          page: {
            number: page,
            size: res.page.size,
            totalElements: res.page.total,
            totalPages: Math.ceil(res.page.total / res.page.size)
          }
        };
        return result;
      });
    }
  },
  created() {
    this.setId = this.$route.query.setId;
  },
  fetchDataOnce() {
    return Promise.all([this.$refs.scroller.getDataByPage()]);
  }
};
</script>
<style lang="less">
@import "~styles/var.less";
.list-page {
  overflow-y: auto;
  .a-cell .content .title {
    font-weight: normal;
  }
}
.page-loadmore-listitem {
  padding: 20px;
  text-align: center;
}
</style>
