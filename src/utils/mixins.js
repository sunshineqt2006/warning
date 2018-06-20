export const loadingPageMixin = {
    mounted () {
        //window.scrollTo(0, 0)
        let promises = []
        let fetchData = this.$options.fetchData
        let fetchDataOnce = this.$options.fetchDataOnce
        if (fetchData) {
            this.fetchData = fetchData
            promises.push(fetchData.call(this))
        }
        if (fetchDataOnce && !this.inited) {
            this.fetchDataOnce = fetchDataOnce
            promises.push(fetchDataOnce.call(this))
        }
        if (promises.length > 0) {
            //this.$loadingPage && this.$loadingPage.show('请求数据中')
            Promise.all(promises).then(() => {
                //window.scrollTo(0, 0)
                //this.inited = true
                //this.$loadingPage && this.$loadingPage.hide()
            }).catch((e) => {
                //this.$loadingPage.show('数据请求异常')
                this.$vux.toast.text('数据请求异常', e)
                // this.$simpleToast.show('数据请求异常'+(e.desc? e.desc:''))
                console.log('数据请求异常', e)
            })
        }
    }
}