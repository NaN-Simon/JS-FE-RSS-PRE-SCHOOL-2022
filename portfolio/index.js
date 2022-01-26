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
/*BUTTONS*/
//const buttonsPortfolio = document.querySelectorAll('.portfolio-btns')
const buttonWinter = document.querySelector('.winter')
buttonWinter.addEventListener('click',function(){
  const porfolioImg = document.querySelectorAll('.portfolio-image')
  porfolioImg.forEach((img,index)=>img.src = `./assets/img/portfolio/winter/${index + 1}.jpg`)
})
const buttonSpring = document.querySelector('.spring')
buttonSpring.addEventListener('click',function(){
  const porfolioImg = document.querySelectorAll('.portfolio-image')
  porfolioImg.forEach((img,index)=>img.src = `./assets/img/portfolio/spring/${index + 1}.jpg`)
})
const buttonSummer = document.querySelector('.summer')
buttonSummer.addEventListener('click',function(){
  const porfolioImg = document.querySelectorAll('.portfolio-image')
  porfolioImg.forEach((img,index)=>img.src = `./assets/img/portfolio/summer/${index + 1}.jpg`)
})
const buttonAutumn = document.querySelector('.autumn')
buttonAutumn.addEventListener('click',function(){
  const porfolioImg = document.querySelectorAll('.portfolio-image')
  porfolioImg.forEach((img,index)=>img.src = `./assets/img/portfolio/autumn/${index + 1}.jpg`)
})