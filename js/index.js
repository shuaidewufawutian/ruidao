/*
* @Author: name
* @Date:   2018-09-04 11:35:59
* @Last Modified by:   name
* @Last Modified time: 2018-09-04 20:40:02
*/

'use strict';
$(function(){
  var i=0;
  $(".change_logo_5").click(function(){
    $(".navbar_box_5_change_u").toggle();
  })
  var iCount = setInterval(GetBack,1);
  function GetBack(){
    i++;
    if(i==3){
      i=0;
    }
    if ($(document).width()>760){
      $(".navbar_box_5_change_u").css({"display":"none"});
    }
  }
  $(".nav_r_box_5 a:nth-child(1)").hover(function(){
    $(".phone_number_5").toggle();
  })
  $(".nav_r_box_5 a:nth-child(2)").hover(function(){
    $(".phone_number_5_1").toggle();
  })
  $(".top_box_5_1 a:nth-child(1)").hover(function(){
    $(".Two-dimensional_code_5").toggle();
  })
  var n_hot = new Swiper('.carousel_5', {
    spaceBetween: 0,
    pagination: '.dian_5-pagination',
    paginationClickable: true,
    autoplay:2000,
    loop:true,
    autoplayDisableOnInteraction:false
  });
})