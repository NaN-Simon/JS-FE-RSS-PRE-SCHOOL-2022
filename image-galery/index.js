
const urlImg = 'https://api.unsplash.com/search/photos?query=spring&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo'
async function getData(){
  const res = await fetch(urlImg)
  const data = await res.json()
  //console.log(data)
  Object.keys(data.results).forEach((element,index) => {
    //console.log(data.results[index].urls.regular )
  })
}
getData()

/* TEST */
const span = document.querySelector('.arr-img span')
console.log(span.textContent)

/*pic*/
const img = document.querySelectorAll('.arr-img img')
img.forEach(element => {
  element.src = " "
});