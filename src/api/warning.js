import apiHttp from './apiHttp'

function getCinemaWarn() {
  return apiHttp.get('/Weixin/getCinemaWarn')
}
function getCinemaWarnDetail(cinemaId,type) {
  return apiHttp.post('/Weixin/getCinemaWarnDetail',{
    cinemaId:cinemaId,
    type:type
  })
}
function getWarningMsg(setId,page,pageSize) {
  return apiHttp.post('/Weixin/getWarningMsg',{
    setId:setId,
    page:page,
    pageSize:pageSize?pageSize:5
  })
}
function readMsg(id,remark,status) {
  return apiHttp.post('/Weixin/readMsg',{
    id:id,
    remark:remark,
    status:status
  })
}
function getMsgInfo(id) {
  return apiHttp.post('/Weixin/getMsgInfo',{
    id:id
  })
}




export default {
  getCinemaWarn: getCinemaWarn,
  getCinemaWarnDetail:getCinemaWarnDetail,
  getWarningMsg:getWarningMsg,
  readMsg:readMsg,
  getMsgInfo:getMsgInfo
}