const headerBurger = document.querySelector('.header-burger')
const navList = document.querySelector('.nav-list')
const navLink = document.querySelectorAll('.nav-link')
const body = document.querySelector('body')
headerBurger.addEventListener('click',function(){
  headerBurger.classList.toggle('active')
  navList.classList.toggle('active')
  body.classList.toggle('lock')
})

navLink.forEach((el) => el.addEventListener('click',closeMenu))

function closeMenu(){
  if(event.target.classList.contains('nav-link')){
    navList.classList.remove('active')
  }
}
