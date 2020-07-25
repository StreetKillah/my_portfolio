$(document).ready(function(){
    $('.header__burger').click((e) =>{
        $('.header__burger, nav, ul, li, .header__logo, .navbar').toggleClass('active');
        $('body').toggleClass('lock');
    })


  
});