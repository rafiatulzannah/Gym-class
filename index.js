const menu=document.querySelector('#mobile-menu');
const menuLinks=document.querySelector('.navbar__menu');
const navLogo=document.querySelector('#navbar__logo');
const body=document.querySelector('body');

//display mobile menu

const mobileMenu =()=>{
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
    body.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

//animation
gsap.registerPlugin(ScrollTrigger)

gsap.from('.animate-hero',{
    duration:0.6,
    opacity:0,
    y:-150,
    stagger: 0.3
});

gsap.from('.animate-services',{
    scrollTrigger:{
        trigger:'.animate-services',
        toggleActions:"restart none none none"
    },
    duration:0.5,
    opacity:1,
    x:-150,
    stagger: 0.12
});
gsap.from('.animate-img',{
    scrollTrigger:{
        trigger:'.animate-services',
        toggleActions:"restart none none none"
    },
    duration:1.2,
    opacity:0,
    x:-200,
});
gsap.from('.animate-membership',{
    scrollTrigger:{
        trigger:'.animate-membership',
        toggleActions:"restart none none none"
    },
    duration:1,
    opacity:0,
    y:-150,
    stagger:0.3,
    delay:0.5
});
gsap.from('.animate-card',{
    scrollTrigger:{
        trigger:'.animate-card',
        toggleActions:"restart none none none"
    },
    duration:1,
    opacity:0,
    y:-150,
    stagger:0.1,
    delay:0.2
});
gsap.from('.animate-team',{
    scrollTrigger:{
        trigger:'.animate-team',
        toggleActions:"restart none none none"
    },
    duration:1,
    opacity:0,
    y:-150,
    stagger:0.3,
    delay:0.2
});
gsap.from('.animate-email',{
    scrollTrigger:{
        trigger:'.animate-email',
        toggleActions:"restart none none none"
    },
    duration:0.8,
    opacity:0,
    y:-150,
    stagger:0.25,
    delay:0.6
});


