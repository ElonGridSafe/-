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

//功能介绍 更换图片
$(".f.advantage [data-advantage]").mouseenter(function(){

    switch($(this).data("feature")){
        case "index_1":
            $(this).children("img").attr("src","./images/icon/仓储图标_19.png");
            break;
        case "index_2":
            $(this).children("img").attr("src","./images/icon/仓储图标_20.png");
            break;
        case "index_3":
            $(this).children("img").attr("src","./images/icon/仓储图标_21.png");
            break;
        case "index_4":
            $(this).children("img").attr("src","./images/icon/仓储图标_22.png");
            break;
    }
});

$(".advantage [data-advantage]").mouseleave(function(){

    switch($(this).data("feature")){
        case "index_1":
            $(this).children("img").attr("src","./images/icon/仓储图标_03.png");
            break;
        case "index_2":
            $(this).children("img").attr("src","./images/icon/仓储图标_05.png");
            break;
        case "index_3":
            $(this).children("img").attr("src","./images/icon/仓储图标_07.png");
            break;
        case "index_4":
            $(this).children("img").attr("src","./images/icon/仓储图标_09.png");
            break;
    }
});
//功能介绍 更换图片
$(".function_detail ul li").mouseenter(function(){
    if(!$(this).hasClass("current")){
        switch($(this).data("function")){
            case "index_1":
                $(this).children(".topic").children("img").attr("src","./images/icon/仓储图标_70.png");
                $(".function_intro img").attr("src","./images/img/图片_54.gif");
                $(".function_intro .describe h2").html("进销存管理");
                $(".function_intro .describe p").html("告别丢单，让您的生意井井有条。不论采购入库，销售开单还是仓储情况，每一笔数据都储存在服务器中，轻松实现锱铢可查。");
                break;
            case "index_2":
                $(this).children(".topic").children("img").attr("src","./images/icon/仓储图标_71.png");
                $(".function_intro img").attr("src","./images/img/图片_24.gif");
                $(".function_intro .describe h2").html("建立客户档案");
                $(".function_intro .describe p").html("做赚钱、体贴的老板从客户档案信息化开始。开单自动生成客户档案并记录交易信息，并能根据交易记录智能推荐商品，发现潜在销售机会，深度利用客户资源。");
                break;
            case "index_3":
                $(this).children(".topic").children("img").attr("src","./images/icon/仓储图标_72.png");
                $(".function_intro img").attr("src","./images/img/图片_61.gif");
                $(".function_intro .describe h2").html("可视化报表");
                $(".function_intro .describe p").html("原理计算器，你的时间应该花在更重要的事上。实时查看销售总额、销售排行、客户交易总量、应收应付等图表数据，清晰展示短板和优势，一份直观的营收数据图表才是您想要的。");
                break;
            case "index_4":
                $(this).children(".topic").children("img").attr("src","./images/icon/仓储图标_73.png");
                $(".function_intro img").attr("src","./images/img/图片_59.gif");
                $(".function_intro .describe h2").html("大数据支持");
                $(".function_intro .describe p").html("不是你一个人在做生意。全网销售大数据支持，告诉你赚钱的档口在卖什么，卖多少，怎么卖。热度排行，季度参考，爆款分析，你不是一个人在做生意，我们在意你在意的。");
                break;
        }


        $(this).addClass("current").siblings(".current").removeClass("current");
    }
});

$(".function_detail ul li").mouseleave(function(){
    switch($(this).data("function")){
        case "index_1":
            $(this).children(".topic").children("img").attr("src","./images/icon/仓储图标_48.png");
            break;
        case "index_2":
            $(this).children(".topic").children("img").attr("src","./images/icon/仓储图标_54.png");
            break;
        case "index_3":
            $(this).children(".topic").children("img").attr("src","./images/icon/仓储图标_51.png");
            break;
        case "index_4":
            $(this).children(".topic").children("img").attr("src","./images/icon/仓储图标_57.png");
            break;
    }
});

//特定介绍 图片更换
$(".feature [data-feature]").mouseenter(function(){
    console.log(1);
    switch($(this).data("feature")){
        case "index_1":
            $(this).children("img").attr("src","./images/icon/仓储图标_78.png");
            break;
        case "index_2":
            $(this).children("img").attr("src","./images/icon/仓储图标_81.png");
            break;
        case "index_3":
            $(this).children("img").attr("src","./images/icon/仓储图标_75.png");
            break;
    }
});

$(".feature [data-feature]").mouseleave(function(){
    console.log(1);

    switch($(this).data("feature")){
        case "index_1":
            $(this).children("img").attr("src","./images/icon/仓储图标_40.png");
            break;
        case "index_2":
            $(this).children("img").attr("src","./images/icon/仓储图标_35.png");
            break;
        case "index_3":
            $(this).children("img").attr("src","./images/icon/仓储图标_37.png");
            break;
    }
});

//客户案例

$(".customer_pic img").mouseenter(function(){
   $(this).siblings().css({"width":0});
   $(".customer_describe").css({"width":"75%"});
});

$(".customer_detail").mouseleave(function(){
   $(".customer_pic img").css({"width":"25%"});
   $(".customer_describe").css({"width":0});
});