import axios from "axios";

export default {
  // 通过接口获取数据
  apiPost: function (url, method, data, params, callback) {
     var token = sessionStorage.getItem("tokenData");
    //获取域名缓存
    //var baseURL = sessionStorage.getItem("DomainURL");
    //baseURL = baseURL + "/v1";
    axios.request({
      method: method || 'post',
      baseURL: 'http://king2.rong298.cn',
      //韦家园域名
      //baseURL: 'http://192.168.1.13:18080/',
      //泉域名
      //baseURL: 'http://admin.dym51.com/',
      //瑞域名
      //baseURL: 'http://lightfish.utools.club/',
      url: url,
      data: data,
      params: params,
      headers: { 'token': token },
      timeout: 10000,
    }).then(response => {
      //console.log(JSON.stringify(response.data));
      switch (response.data.code) {
        case 200:
          callback(true, response.data.status, response.data)
          break;
        case '':
          callback(false, response.data.status, response.data)
          break;
        default:
          callback(false, response.data.status, response.data)
      }
    })
      .catch((error) => {
        console.log(error)
      })
  },
  // 动态域名接口
  DomainName: function (id,callback) {
    axios.request({
      method: 'get',
      baseURL: 'http://services.kayu5.com/host/find?id='+id,
      timeout: 10000,
    }).then(response => {
      switch (response.data.code) {
        case 200:
          sessionStorage.setItem("DomainURL", response.data.obj.domain);
          callback(true)
          break;
        case '':
          sessionStorage.setItem("DomainURL", "");
          callback(false)
          break;
        default:
          sessionStorage.setItem("DomainURL", "");
          callback(false)
      }
    })
      .catch((error) => {
        callback(true)
        console.log(error)
      })
  }
}