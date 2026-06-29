// =========================
// AYUSHIVA WEBSITE
// script.js
// =========================

// Smooth Scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

anchor.addEventListener('click', function(e){

e.preventDefault();

document.querySelector(this.getAttribute('href')).scrollIntoView({

behavior:'smooth'

});

});

});


// Navbar Shadow

window.addEventListener("scroll",()=>{

const header=document.querySelector("header");

if(window.scrollY>50){

header.style.boxShadow="0 10px 30px rgba(0,0,0,.35)";

}

else{

header.style.boxShadow="none";

}

});


// Hero Animation

window.addEventListener("load",()=>{

const hero=document.querySelector(".hero-content");

hero.style.opacity="1";

hero.style.transform="translateY(0)";

});
