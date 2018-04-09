

const h1=document.documentElement.scrollHeight
const h2 = document.documentElement.clientHeight
const scroolUnit= ((h1-h2)/100)

const rootStyle=document.documentElement.style


addEventListener('scroll',()=>{
    let unitScroll=Math.round(scrollY/scroolUnit)
    rootStyle.setProperty('--bar-color',`${getRgb()}`)
    rootStyle.setProperty('--width',`${unitScroll}`)   
})

  function getRgb(){
      r=getRandomArbitrary(0,255);
      g=getRandomArbitrary(0,255);
      b=getRandomArbitrary(0,255);
      return `rgb(${r},${g},${b})`
  }
  function getRandomArbitrary(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }