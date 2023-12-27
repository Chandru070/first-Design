// logo 

var logo = document.querySelector('.logo,#logo')
logo.addEventListener("click",()=>{
    document.documentElement.scrollTop = 0;
    location.reload()
})

//scroll section active link 

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
}


// sticky navbar 

let header = document.querySelector('.header');

header.classList.toggle('sticky', window.scrollY > 100);

// slider 

const list = document.querySelector('.slider .list')
const items = document.querySelectorAll('.slider .list .item')
const dots = document.querySelectorAll('.slider .dots li')
const prev = document.getElementById('prev');
const next = document.getElementById('next');
let active = 0;
let lengthItems = items.length - 1;

next.addEventListener("click",()=>{
    if(active + 1 > lengthItems) {
    active = 0;
    }else{
    active = active + 1;
    }
    reloadSlider();
    }) 

prev.addEventListener("click",()=>{
    if (active -1 < 0) {
    active = lengthItems;
}else{
    active = active - 1;
}
reloadSlider();
})
    
let refreshSlider = setInterval(()=> {next.click()}, 3000);
function reloadSlider(){
    let checkLeft = items [active].offsetLeft;
    list.style.left = -checkLeft + 'px';

    let lastActiveDot = document.querySelector('.slider .dots li.active')
    lastActiveDot.classList.remove('active');
    dots [active].classList.add('active');
    clearInterval (refreshSlider);
    refreshSlider = setInterval(()=> {next.click()}, 3000);
}

dots.forEach((Li, key) => {
    Li.addEventListener('click', function() {
    active = key;
    reloadSlider();
    })
})    


// page 

const link1 = document.querySelector('.newsp1')
const link2 = document.querySelector('.newsp2')
const link3 = document.querySelector('.newsp3')
const link4 = document.querySelector('.newsp4')
const head = document.getElementById("logo")


link1.addEventListener("click",(event)=>{
    event.preventDefault();
    window.location.href = "news1.html";
})

link2.addEventListener("click",(event)=>{
    event.preventDefault();
    window.location.href = "news2.html";
})

link3.addEventListener("click",(event)=>{
    event.preventDefault();
    window.location.href = "news3.html";
})

link4.addEventListener("click",(event)=>{
    event.preventDefault();
    window.location.href = "news4.html";
})




// swiper //

const swiper = new Swiper('.swiper', {
    speed: 400,
    spaceBetween: 100,
  });



// scroll reveal //

ScrollReveal({
    reset:false,
    delay:200,
    distance:'80px',
    duration:2000
})
ScrollReveal().reveal('.c-head,.announce h2,.brand ,.latest,.icons',{origin:'top'})
ScrollReveal().reveal('.flex-title,.news,.icons li,.li-categories',{origin:'bottom'})
ScrollReveal().reveal('.li-categories li',{interval:20})
ScrollReveal().reveal('.fb,#label,.form',{origin:'left'})
ScrollReveal().reveal('.tb,.news p,.c-heading',{origin:'right'})


