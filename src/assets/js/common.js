import axios from 'axios';

var Rxports = {
  /**
    * 封装axios，减少学习成本，参数基本跟jq ajax一致
    * @param {String} type      请求的类型，默认post
    * @param {String} url       请求地址
    * @param {String} time      超时时间
    * @param {Object} data      请求参数
    * @param {String} dataType    预期服务器返回的数据类型，xml html json ...
    * @param {Object} headers     自定义请求headers
    * @param {Function} success   请求成功后，这里会有两个参数,服务器返回数据，返回状态，[data, res]
    * @param {Function} error   发送请求前
    * @param return
  */
  ajax:function (opt){
    var opts = opt || {};
    if (!opts.url) { alert('请填写接口地址');  return false;  }

    axios({
      method: opts.type || 'post',
      url: opts.url,
      params: opts.data || {},
      headers: opts.headers || { 'Content-Type':'application/x-www-form-urlencoded' },
      baseURL:'http://www.infobigdata.com/api/',
      timeout: opts.time || 10*1000,
      responseType: opts.dataType || 'json'
    }).then(function(res){

      if(res.status == 200 ){
        if(opts.success) opts.success(res.data,res);
      }else{
        if (data.error) { opts.error(error);  }else{  alert('好多人在访问呀，请重新试试[timeout]');  }
      }

    }).catch(function (error){
      if (opts.error) { opts.error(error); }else{ alert('好多人在访问呀，请重新试试[timeout]'); }
    });
  }
};


export default Rxports;

































