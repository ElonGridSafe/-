// 隐藏和显示侧栏
$(window).on("scroll",()=>{
    if ($("body").scrollTop()>screen.availHeight){
        $(".side_bar").css({
            "right":"2.5rem"
        });
    }else{
        $(".side_bar").css({
            "right":"-300px"
        });
    }
});

//回到顶部
$("#scroll").on("click",()=>{
    $("html,body").animate({
        scrollTop:0
    },1000,"linear") ;
});