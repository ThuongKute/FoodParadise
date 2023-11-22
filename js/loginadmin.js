$(document).ready(function(){
    var signUp = $('.signup-but');
    var logIn = $('.login-but');
    
    signUp.on('click', function(){
      // khi class signup được click thì các phần tử trong phần login none trong khoảng thời gian slow, đồng thời hiện các phần tử
      // trong phần signup
      $('.login').fadeOut('slow').css('display', 'none');
      $('.sign-up').fadeIn('slow');
      
      $('.form-container').animate({left: '10px'}, 'slow');
    });
    
    logIn.on('click', function(){
      $('.login').fadeIn('slow');
      $('.sign-up').fadeOut('slow').css('display', 'none');
      // animate là hiệu ứng chuyển đổi 2 phần tử
      $('.form-container').animate({left: '460px'}, 'slow');
    });
  });