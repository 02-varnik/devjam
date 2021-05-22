burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.nav-list')
search = document.querySelector('.search')
btnlog = document.querySelector('.btnlog')
// fa= document.querySelector('.fa')


burger.addEventListener('click', ()=>{
   navbar.classList.toggle('h-nav-resp');
   navList.classList.toggle('v-class-resp');
   search.classList.toggle('v-class-resp');
   btnlog.classList.toggle('v-class-resp');
//    fa.classList.toggle('v-class-resp');

   
})
