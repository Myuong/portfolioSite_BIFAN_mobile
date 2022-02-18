//메일 비주얼 스와이퍼
var swiper = new Swiper(".visualSwiper", {
    pagination: {
    el: ".swiper-pagination",
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
});

//섹션1 .tapSwiper 스와이퍼
var swiper = new Swiper(".tabSwiper", {
    slidesPerView: "auto",
    spaceBetween: 20,
});
//섹션1 .tapSwiper 스와이퍼 탭
$(".section_content .listSwiper:gt(0)").hide();

$(".tabSwiper .tabList").click(function(){
    var nn = $(this).index();              
    console.log(nn+"번째 li를 클릭했습니다");

    $(".tabSwiper .tabList").removeClass("select");
    $(this).addClass("select");

    $(".section_content .listSwiper").hide();
    $(".section_content .listSwiper").eq(nn).show();

});

//섹션1 .listSwiper 스와이퍼
var swiper = new Swiper(".listSwiper", {
    slidesPerView: "auto",
    spaceBetween: 10,
    
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    
});

// 섹션2 .webSwiper 스와이퍼
var swiper = new Swiper(".webSwiper", {
    slidesPerView: "auto",
    spaceBetween: 20,
});

//섹션5 스와이퍼
var swiper = new Swiper(".link", {
    slidesPerView: "auto",
    spaceBetween: 20,
});


//햄버거버튼 누르면 사이드바 등장
$('.trigger').click(function(){
    $('.trigger').toggleClass('open');
    if($(this).hasClass('open')){
        $('.side_menu').animate({right:0},300)
    }else {
        $('.side_menu').animate({right:-390},300)
    }
});

// 사이드바의 서브메뉴 등장
var $subBtn = $('.navbar > li > a');

$subBtn.click(function(){
    if( !$(this).parents('li').is('.act') ){
        $('.navbar > li').removeClass('act');
        $(this).parents('li').addClass('act');
        $('.icon').removeClass('on');
        $(this).siblings('.icon').addClass('on')
        } 
        else {                               
            $('.navbar > li').removeClass('act');
            $('.icon').removeClass('on');
        }
}); 

document.getElementById("subsEmail").setAttribute("action", ""); 
