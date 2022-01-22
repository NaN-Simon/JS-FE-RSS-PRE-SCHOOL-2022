const headerBurger = document.querySelector('.header-burger')
const navList = document.querySelector('.nav-list')
const body = document.querySelector('body')
headerBurger.addEventListener('click',function(){
  headerBurger.classList.toggle('active')
  navList.classList.toggle('active')
  body.classList.toggle('lock')
})