$(document).ready(function (){
    $('.slider').slick({
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: true,
        slidesToShow: 1
    })
});
function smothscroll(element) {
    window.scroll({
        left:0,
        top: element.offsetTop,
        behavior: 'smooth'
    })
}
window.onload=function(){
    var button_1 = document.querySelector('.header__button--btn');
    var button_2 = document.querySelector('.pilot1');
    var button_3 = document.querySelector('.pilot2');
    var button_4 = document.querySelector('.pilot3');
    var button_5 = document.querySelector('.offer1');
    var button_6 = document.querySelector('.offer2');
    var button_7 = document.querySelector('.services1');
    var button_8 = document.querySelector('.services2');
    var page = document.querySelector('#form');
    button_1.addEventListener('click', ()=> {
        smothscroll(page);
    })
    button_2.addEventListener('click', ()=> {
        smothscroll(page);
    })
    button_3.addEventListener('click', ()=> {
        smothscroll(page);
    })
    button_4.addEventListener('click', ()=> {
        smothscroll(page);
    })
     button_5.addEventListener('click', ()=> {
        smothscroll(page);
    })
     button_6.addEventListener('click', ()=> {
        smothscroll(page);
    })
     button_7.addEventListener('click', ()=> {
        smothscroll(page);
    })
     button_8.addEventListener('click', ()=> {
        smothscroll(page);
    })

}