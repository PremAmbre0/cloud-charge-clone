const closeBtn = document.querySelector('.close-btn');
const menuBtn = document.querySelector('.menu-btn');
const dropBtn = document.querySelector('.drop-btn');
const nav = document.querySelector('.nav-wrapper');
const navWidth = nav.offsetWidth;

// const 

closeBtn.addEventListener('click',function(){
    nav.style.opacity = '0';
    nav.style.right = `-${navWidth}px`
});


menuBtn.addEventListener('click',function(){
    nav.style.opacity = '1';
    nav.style.right = `0`
});
 
dropBtn.addEventListener('click',function(){
    const submenu = document.querySelector('.submenu')
    submenu.classList.toggle('active') 
    dropBtn.classList.toggle('rotate')
});


