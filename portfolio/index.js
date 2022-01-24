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
	headerBurger.classList.toggle('active')
  }
}

const info = '\n-Вёрстка соответствует макету. Ширина экрана 768px +48\n-Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется +15\n-На ширине экрана 768рх и меньше реализовано адаптивное меню +22'
console.log(info)