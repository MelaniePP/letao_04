$(function(){


// 获取本地数据封装方法
function getHistory(){
  // 获取本地数据，渲染搜索历史
  var searchStr = localStorage.getItem("search_list")||"[]";
  // 转成数组
  var arr = JSON.parse(searchStr);
  return arr;
}
// 渲染封装
function render(){
  var arr = getHistory();
  $(".search_content").html(template("searchTmp",{list:arr}));
}
render();

// 功能一：添加数据
$(".search_btn").on("click",function(){
  var key = $(".search_ipt").val().trim();
  var arr = getHistory();
  if(key==""){
    mui.toast('请输入关键字')
  }
  if(arr.length>=10){
    // 从后面删除一个
    arr.pop();
  }
  if(arr.indexOf(key) != -1){
    arr.splice(arr.indexOf(txt),1);
  }
  arr.unshift(key);
  $(".search_ipt").val("");
  localStorage.setItem("search_list",JSON.stringify(arr));
  render();
  location.href="searchList.html?key="+key;
})
})