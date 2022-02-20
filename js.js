(function (){
    let header = document.querySelector('header');
    window.onscroll = function(){
        if (window.pageYOffset > 50){
            header.classList.add('header__active');
        }else{
            header.classList.remove('header__active');
        }
    }
}());

//burger handler//

(function(){
    let burgerItem = document.querySelector('.burger');

    let menu = document.querySelector('.header__nav');

    let menuCloseItem = document.querySelector('.header__nav-close');

    burgerItem.addEventListener('click', function(){
        menu.classList.add('header__nav-active');
    });
    
    menuCloseItem.addEventListener('click', () => {
    menu.classList.remove('header__nav-active');
    });
}());