
mui('.mui-scroll-wrapper').scroll({
  deceleration: 0.0005,  //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
  indicators: false //是否显示滚动条
});

// 获取地址栏数据
function getSearch(k){

  //?key=匡威&age=18&desc=帅
  var str = location.search;//"?key=%E5%8C%A1%E5%A8%81&age=18&desc=%E5%B8%85"
  str = decodeURI(str);//?key=匡威&age=18&desc=帅
  // 截取问号后面的
  str = str.slice(1);//"key=匡威&age=18&desc=帅"
  //通过&截取成数组
  var arr = str.split("&")//["key=匡威", "age=18", "desc=帅"]
  // 遍历存入空对象中
  var obj = {};
  arr.forEach(function(v,i){
    var key = v.split("=")[0];
    var value = v.split("=")[1];
    obj[key] = value;
     
  })
  return obj[k];



}