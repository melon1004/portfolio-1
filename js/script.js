$(document).ready(function(){
  function SliderBox1__init() {
    const swiper = new Swiper(".slider-box-1 .swiper", {
      loop: true,
      effect: 'fade',
  
      // 자동 재생 원할 경우 설정, 지우면 멈춰 있음
      autoplay: {
        delay: 5000, // 5초마다 슬라이드 넘김
        disableOnInteraction : false, // 자동 재생 중 건드려도 비활성화되지 않음
      },
      
      pagination: {
        el: ".slider-box-1 .swiper-pagination"
      },
  
      navigation: {
        nextEl: ".slider-box-1 .swiper-button-next",
        prevEl: ".slider-box-1 .swiper-button-prev"
      }
    });
  }
  
  SliderBox1__init();

  

});