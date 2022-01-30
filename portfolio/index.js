/* import i18Obj from './assets/files/translate.js' */

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
const buttonsPortfolio = document.querySelectorAll('.portfolio-btns')
const buttonWinter = document.querySelector('.winter')
const porfolioImg = document.querySelectorAll('.portfolio-image')
buttonWinter.addEventListener('click',function(){
  removeActiveAll()
  addActiveThis()
  porfolioImg.forEach((img,index)=>img.src = `./assets/img/portfolio/winter/${index + 1}.jpg`)
})
const buttonSpring = document.querySelector('.spring')
buttonSpring.addEventListener('click',function(){
  removeActiveAll()
  addActiveThis()
  porfolioImg.forEach((img,index)=>img.src = `./assets/img/portfolio/spring/${index + 1}.jpg`)
})
const buttonSummer = document.querySelector('.summer')
buttonSummer.addEventListener('click',function(){
  removeActiveAll()
  addActiveThis()
  porfolioImg.forEach((img,index)=>img.src = `./assets/img/portfolio/summer/${index + 1}.jpg`)
})
const buttonAutumn = document.querySelector('.autumn')
buttonAutumn.addEventListener('click',function(){
  removeActiveAll()
  addActiveThis()
  porfolioImg.forEach((img,index)=>img.src = `./assets/img/portfolio/autumn/${index + 1}.jpg`)
})
function removeActiveAll(){
  document.querySelectorAll('.portfolio-btns .btn-active').forEach(n => n.classList.remove('btn-active'));
}
function addActiveThis(){
  buttonsPortfolio.forEach(item => event.target.classList.add('btn-active'))
}

/*LANGUAGES */
const datai18 = document.querySelectorAll('*[data-i18]')
function getTranslate(lang){
  datai18.forEach(elem => elem.textContent = i18Obj[lang][elem.dataset.i18])

  //document.getElementById('email').placeholder = i18Obj[lang][['e-mail'].dataset.i18]
}


/*CHECKBOX*/
const formLang = document.querySelector('.form-lang')
formLang.addEventListener('click',function(){
  const name = document.querySelector('[name=box]')
  if(name.checked){
    getTranslate('ru')
    document.getElementById('email').placeholder = "Почта"
    document.getElementById('tel').placeholder = "Телефон"
    document.getElementById('textarea').placeholder = "Сообщение"
    document.querySelectorAll('.nav-link').forEach(e => e.classList.toggle('padding08'))
  } else {getTranslate('en')
  document.getElementById('email').placeholder = "E-mail"
  document.getElementById('tel').placeholder = "Phone"
  document.getElementById('textarea').placeholder = "Message"}
  document.querySelectorAll('.nav-link').forEach(e2 => e2.classList.toggle('padding08'))
})

/*LIGHT-THEME*/
const toLight = ['body','.skill-name','.skill-discription','.section-header-title','.light']
function goLight(){
  
  toLight.forEach(element => {document.querySelectorAll([element]).forEach(elem => elem.classList.toggle('light-theme'))
  });
  document.querySelectorAll(('.section-header-title'),'::before').forEach(el => el.classList.toggle('section-header-title-black'))
  document.querySelectorAll('.footer').forEach(el => el.classList.toggle('dark-theme'))
}
goLight()

