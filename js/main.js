const navScrollBar = document.querySelector('.nav');
const navHeight = navScrollBar.getBoundingClientRect().height;
const lines = document.querySelectorAll('.hamburger-line');

const images = document.querySelectorAll('.info-slider__item img');
const sliderLine = document.querySelector('.info-slider__item');
let next = document.querySelector('.info-btn__right');
let prev = document.querySelector('.info-btn__left');
let count = 0;
let width;

const menuBar = document.querySelector('.menu');
const menuBtn = document.querySelector('.hamburger-menu');

//Scroll navigation example
window.addEventListener('scroll', () => {
    const scrollHeight = window.pageYOffset;
    if (scrollHeight > navHeight) {
        navScrollBar.classList.add('fixed-clr');
    } else {
        navScrollBar.classList.remove('fixed-clr');
    }

    lines.forEach(line => {
        if (scrollHeight > navHeight) {
            line.classList.add('fixed-clr');
        } else {
            line.classList.remove('fixed-clr');
        }
    });
});

//Activation menu
function menu(menuId, btnId) {
    let lines = document.querySelectorAll('.hamburger-line');
    btnId.addEventListener('click', () => {
        menuId.classList.toggle('active__menu');
        lines.forEach(line => {
            line.classList.toggle('close_active');
        });
    });
}

menu(menuBar, menuBtn);

//accordion 
const accBtns = document.querySelectorAll('.accordion-item__title');
const accArrows = document.querySelectorAll('.accordion-icon');
const accTexts = document.querySelectorAll('.accordion-item__text');
let index = 0;

function accordion(btns, arrows, txts) {
    btns.forEach((btn, i) =>{
        btn.addEventListener('click', ()=>{
            arrows[i].classList.toggle('acc_active');
            txts[i].classList.toggle('acc_active');
        });
    });
}

accordion(accBtns, accArrows, accTexts);

//Create adaptive slider
const swiper = new Swiper('.info-slider', {
    loop: true,

    navigation: {
        nextEl: '.info-btn__right',
        prevEl: '.info-btn__left'
    }
});

//Create scroll animation

const sr = new ScrollReveal({
    distance: '30px',
    duration: 1800,
    reset: true
});

sr.reveal(`.info-title, .info-txt, .info-btns,
           .section-title, .feature-btn, .price-item,
           .testimonial-list, .footer-link, .footer-display`, {
    origin: 'top',
    interval: 100
});

sr.reveal(`.feature-list-item, .about-img, .support-img`, {
    origin: 'left',
    interval: 100
});

sr.reveal(`.about-item__text, .blue-btn,
           .accordion-item, .support-title, 
           .support-text, .footer-newsletter`, {
    origin: 'right',
    interval: 100
});