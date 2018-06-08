import axios from 'axios'
let BASE_API_URL = _BASE_URL ? _BASE_URL : ''


const instance = axios.create({
    baseURL: BASE_API_URL,
    timeout: 10000,
    headers: {
      'Accept':"application/json"
    },
    transformRequest: [function (data, headers) {
      return changeData(data);
    }],
})

function changeData(data) {
  if (!data)
    return data
  let str = ''
  let keys = Object.keys(data)
  if (!keys || keys.length == 0)
    return data
  keys.forEach(function (element) {
    str += '&' + element + "=" + data[element]
  }, this);
  return str.substring(1, str.length)
}

instance.interceptors.request.use(config => {
  config.params={}
    config.params.openId = localStorage.getItem('openId')
    return config;
});


instance.interceptors.response.use(response => {
    let data = response.data
    if (data.status == 0) {
      if(data.list){
        return data
      }else{
        return data.data
      }
    } else {
        return Promise.reject(data);
    }
}, error => {
    if (error.response != null && error.response.status != null) {
      _vue.$vux.toast.show({
        text: "网络异常:" + error.response.status,
        type:'cancel'
       })
    } else {
      _vue.$vux.toast.show({
        text: "网络请求超时",
        type:'cancel'
       })
    }
    return Promise.reject(error);
});


function get(url, params) {
  return instance.get(url, {params: params})
}

function post(url, params) {
  return instance.post(url, params)
}


export default {
  get,
  post
}