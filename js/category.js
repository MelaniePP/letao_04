

// 一级分类动态渲染
$(function(){
  $.ajax({
    type:"get",
    url:"/category/queryTopCategory",
    dataType:"json",
    success:function(info){
      // console.log(info);
      $(".lt_main_left ul").html(template("firstTmp",info));
      renderById(info.rows[0].id);
      
    }
  })

  // 二级分类动态渲染
  $(".lt_main_left ul").on("click","a",function(){
    var id = $(this).data("id");
    $(this).addClass("current").parent().siblings().find("a").removeClass("current");
    renderById(id);
  })

  function renderById(id){
    $.ajax({
      type:"get",
      url:"/category/querySecondCategory",
      data:{id:id},
      dataType:"json",
      success:function(info){
        // console.log(info);
        $(".lt_main_right ul").html(template("secondTmp",info))
      }
    })
  }
})