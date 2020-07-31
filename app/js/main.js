$(document).ready(function(){
    $('.img_wrapper').css({'left': '0', 'transition':'0.5s linear 0s' });
    $('.main_typo').css({'transition' : 'all 0.3s linear 0s', 'opacity' : '1'})

    $('.header_burger').click((e) =>{
        $('.header_burger, .header, .header_content, ul, .header_list, .header_menu').toggleClass('active');
    });

    $('.header_list li:nth-child(2)').click((e) => {
            window.scrollBy({top: 529,behavior: 'smooth'});
    });
    
});


