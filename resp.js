let burger=document.querySelector('.burger');
let navbar=document.querySelector('.navbar');
let rightNav=document.querySelector('.rightNav');
let navList=document.querySelector('.navList');

burger.addEventListener('click',()=>{
navList.classList.toggle('v-class-resp');
rightNav.classList.toggle('v-class-resp');
navbar.classList.toggle('h-nav-resp');
})