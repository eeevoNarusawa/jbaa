jQuery(function(){
  jQuery('a[href^=#]').click(function(){
    var speed = 700;
    var href= jQuery(this).attr("href");
    var target = jQuery(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    jQuery("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });

  jQuery('.menu-trigger').on('click',function(){
    if(jQuery(this).hasClass('active')){
      jQuery(this).removeClass('active');
      jQuery('main').removeClass('open');
      jQuery('nav').removeClass('open');
      jQuery('.overlay').removeClass('open');
    } else {
      jQuery(this).addClass('active');
      jQuery('main').addClass('open');
      jQuery('nav').addClass('open');
      jQuery('.overlay').addClass('open');
    }
  });
  jQuery('.overlay').on('click',function(){
    if(jQuery(this).hasClass('open')){
      jQuery(this).removeClass('open');
      jQuery('.menu-trigger').removeClass('active');
      jQuery('main').removeClass('open');
      jQuery('nav').removeClass('open');
    }
  });


  jQuery(window).scroll(function() {
   　　// .animation 配下の　.anm_modを対象に見る
   jQuery(".animation .anm_mod").each(function() {
    // スクロール中、各UIパーツ　.anm_modがブラウザ画面内に入ったら activeクラスが付与される
    const position = jQuery(this).offset().top;
    const scroll = jQuery(window).scrollTop();
    const windowHeight = jQuery(window).height();
    if (scroll > position - windowHeight) {
     jQuery(this).addClass("active");
    }
    // スクロール中、トップ画面付近まで戻ったら activeクラスを解除 ＝ 何度でもスクロールアニメが表現可能。一度しかアニメーションしたく無ければここを削除してください。
    if (scroll < 100) {
       jQuery(this).removeClass("active");
    }
   });
  });


  jQuery('#q1').click(function(){
    if(jQuery('#a1').css('display')=='none'){
      jQuery('#a1').slideDown(600);
    } else {
      jQuery('#a1').slideUp(600);
    }
  });
  jQuery('#q2').click(function(){
    if(jQuery('#a2').css('display')=='none'){
      jQuery('#a2').slideDown(600);
    } else {
      jQuery('#a2').slideUp(600);
    }
  });
  jQuery('#q3').click(function(){
    if(jQuery('#a3').css('display')=='none'){
      jQuery('#a3').slideDown(600);
    } else {
      jQuery('#a3').slideUp(600);
    }
  });
  jQuery('#q4').click(function(){
    if(jQuery('#a4').css('display')=='none'){
      jQuery('#a4').slideDown(600);
    } else {
      jQuery('#a4').slideUp(600);
    }
  });
  jQuery('#q5').click(function(){
    if(jQuery('#a5').css('display')=='none'){
      jQuery('#a5').slideDown(600);
    } else {
      jQuery('#a5').slideUp(600);
    }
  });
  jQuery('#q6').click(function(){
    if(jQuery('#a6').css('display')=='none'){
      jQuery('#a6').slideDown(600);
    } else {
      jQuery('#a6').slideUp(600);
    }
  });
  jQuery('#q7').click(function(){
    if(jQuery('#a7').css('display')=='none'){
      jQuery('#a7').slideDown(600);
    } else {
      jQuery('#a7').slideUp(600);
    }
  });
  jQuery('#q8').click(function(){
    if(jQuery('#a8').css('display')=='none'){
      jQuery('#a8').slideDown(600);
    } else {
      jQuery('#a8').slideUp(600);
    }
  });
  jQuery('#q9').click(function(){
    if(jQuery('#a9').css('display')=='none'){
      jQuery('#a9').slideDown(600);
    } else {
      jQuery('#a9').slideUp(600);
    }
  });
  jQuery('#q10').click(function(){
    if(jQuery('#a10').css('display')=='none'){
      jQuery('#a10').slideDown(600);
    } else {
      jQuery('#a10').slideUp(600);
    }
  });
  jQuery('#q11').click(function(){
    if(jQuery('#a11').css('display')=='none'){
      jQuery('#a11').slideDown(600);
    } else {
      jQuery('#a11').slideUp(600);
    }
  });
  jQuery('#q12').click(function(){
    if(jQuery('#a12').css('display')=='none'){
      jQuery('#a12').slideDown(600);
    } else {
      jQuery('#a12').slideUp(600);
    }
  });
  jQuery('#q13').click(function(){
    if(jQuery('#a13').css('display')=='none'){
      jQuery('#a13').slideDown(600);
    } else {
      jQuery('#a13').slideUp(600);
    }
  });

});
