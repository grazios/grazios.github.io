//ツールチップ位置調整
(function () {
//  var toolTipWidth = $(".tool_tip").width();
//  $(".tool_tip").css("margin-left", -toolTipWidth/2);
})();

$(function() {

  //科目をさがすボタン
  $('.tab_view_setting').on( {
    'touchend mouseup': function() {
      $("#class_list").css("display", "none");
      $('.tab_class_list').removeClass('actv');
      $(this).addClass('actv');
      $("#view_setting").css("display", "block");
    }
  });

  //表示設定ボタン
  $('.tab_class_list').on( {
    'touchend mouseup': function() {
      $("#view_setting").css("display", "none");
      $('.tab_view_setting').removeClass('actv');
      $(this).addClass('actv');
      $("#class_list").css("display", "block");
    }
  });


});