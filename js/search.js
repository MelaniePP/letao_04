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

// 功能二清空记录
$(".empty_btn").on("click",function(){
  mui.confirm("你确定要清空历史记录吗？","温馨提示",["取消","确认"],function(e){
    // console.log(e);
    if(e.index==1){

      localStorage.removeItem("search_list");
      render();
    }
  })
})

// 功能三：删除单个数据
$(".btn_delete").on("click",function(){
  var index = $(this).data("index");

  var arr = getHistory();
  arr.splice(index,1);
  localStorage.setItem("search_list",JSON.stringify(arr));
  render();
})
})