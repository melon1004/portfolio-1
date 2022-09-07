$(document).ready(function(){
    $("#fullpage").fullpage({
      
      // 네비게이션 관련 옵션
      
      // 페이지 표시 네비게이션 여부
      navigation:true,
      // 페이지 표시 네비게이션 위치
      navigationPosition: 'left',
      // 네비게이션 설명 표시
        navigationTooltips: ['main', 'Monotech', 'Cube', 'Dashboards', 'Smart City Challenge', 'Porridge details', 'Seaweed Detail'],
      // 네비게이션 설명 현재 페이지 표시 여부
      showActiveTooltip : true,
    });
    

});