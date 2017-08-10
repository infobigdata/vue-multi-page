import axios from 'axios';
var qs = require('qs');

var Rxports = {
  /**
    * 封装axios，减少学习成本，参数基本跟jquery.ajax()一致
    * @param {String} type      请求的类型，默认get
    * @param {String} url       请求地址
    * @param {String} time      超时时间
    * @param {Object} params    get参数，如果不想把所有get参数写在url里，可通过该值传递
    * @param {Object} data      post请求时，向服务器发送参数(注意：此外已经通过qs.stringify()把参数处理json格式)
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
      method: opts.type || 'get',
      url: opts.url,
      params: opts.params || {},
      data: qs.stringify(opts.data),
      headers: opts.headers || { 'Content-Type':'application/x-www-form-urlencoded' },
      baseURL:'http://api.dev.com/api/',
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
  },
  isChinese: function(str){  //判断是不是中文
    var reCh=/[u00-uff]/;
    return !reCh.test(str);
  },
  lenStat: function(target){
      var strlen=0; //初始定义长度为0
      var txtval = $.trim(target);
      for(var i=0;i<txtval.length;i++){
       if(isChinese(txtval.charAt(i))==true){
        strlen=strlen+2;//中文为2个字符
       }else{
        strlen=strlen+1;//英文一个字符
       }
      }
      strlen=Math.ceil(strlen/2);//中英文相加除2取整数
      return strlen;
  },
  checkLen: function(str, min, max, lessMsg, moreMsg){
    var length = this.lenStat(str);
    if(length < min){
      layer.msg(lessMsg);
      return false;
    }
    if(length > max){
      layer.msg(moreMsg);
      return false;
    }
    return true;
  },
  cutStr: function(str, len){
    var length = this.lenStat(str);
    if(length > len){
      return str.substring(0, len) + "...";
    }else{
      return str;
    }
  },
  checkNull: function(str){
    if(str == null){
      return true;
    }
    if($.trim(str) == 0){
      return true;
    }
    return false;
  },
  tag: function(){
    $("#tag_name").blur(function() {
      var tag_name = $("#tag_name").val();
      var flag = checkLen(tag_name, 0, 20, "", "标签不可超过20个字");
      if(flag && !checkNull(tag_name)){
        $.ajax({
          type : "post",
          url : "/tag/add",
          data : {
            tag_name : $.trim(tag_name)
          },
          success : function(json) {
            if (json.status == "success") {
              var data = json.data;
              var tag_id = data.id;
              $("#tag_id").val(tag_id);
            }
          }
        });
      }else{
        return false;
      }
    });
  },
  /**
    * 获取url传过来的参数
    * @param name   获取的参数
    * @param Url    自定义获取参数的链接
    * @param return
  */
  getUrlQuery:function (name,Url){
    var reg = new RegExp("(^|\\?|&)"+ name +"=([^&]*)(\\s|&|$)", "i"),
        url = Url || location.href;
　　if (reg.test(url))
　     return unescape(RegExp.$2.replace(/\+/g, " "));
　     return "";
  }
};


export default Rxports;


































