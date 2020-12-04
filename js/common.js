$(function(){
  // $("nav ul li").each(function(){
  //   var num = $(this).find("a");
  //   console.log($(num.hash));
  // });

  $("nav ul li a,.back_to_top a,a.button,.footer_top a").click(function(e){
    // console.log($(this.hash).offset().top)
    var thisElem = $(this.hash);
    $("html,body").stop();
    $("html,body").animate({scrollTop : thisElem.offset().top},1500); //scroll은 body에 붙어있음.??
    // e.preventDefault(); //a태그 return false안먹힐때 쓰는 방법
    return false;
  });

  /*scroll 상단 이동버튼 노출 1*/ //style.css에 .back_to_top{display:none;}해주기
  //fadeIn은 시간차가 있기때문에 가능하면 addClass로 쓰기(실무에서는 addClass가 더 많이 쓰임)
  $(window).scroll(function(){ //window에 scroll이 발생할때마다 실행할 함수
    // console.log($(this).scrollTop()); //scroll bar의 위치
    /*if($(this).scrollTop() == 0){
      $(".back_to_top").css({"opacity":"0","display":"none"});
    }else */if($(this).scrollTop() > 0){
      $(".back_to_top").fadeIn("slow"); //fadeIn:나타나게
    }else{
      $(".back_to_top").fadeOut("slow");
    }
  });
  // /*scroll 상단 이동버튼 노출2*/ // .back_to_top{opacity:0;transition:1s;}, .on{opacity:1}추가해주기
  // $(window).scroll(function(){
  //   if( $(this).scrollTop() == 0 ){
  //     $(".back_to_top").removeClass("on");
  //   }else{
  //     $(".back_to_top").addClass("on");
  //   }
  // });

  /*section offset top값으로 class 추가*/
  var wHeight = $(window).height(); //==100vh
  $(window).scroll(function(){
    var thisScrollTop = $(this).scrollTop();
    $("section").each(function(){
      var thisOffset = $(this).offset();
      // console.log("offset top:"+thisOffset.top+", scroll top:"+thisScrollTop);
      if( thisOffset.top <= thisScrollTop+150 && thisScrollTop <= thisOffset.top+wHeight ){
        $(this).addClass("active");
      }
    });
  });
});
