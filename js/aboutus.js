let dis =document.getElementById('dis')
dis.addEventListener('click',function(){
    let display =document.body.getAttribute('display')
    if(display==='light'){
        document.body.setAttribute('display','dark')
    }
    else{
        document.body.setAttribute('display','light')
    }
})
let nav =document.getElementsByTagName('nav')[0]
window.addEventListener('scroll',()=>{
    if(window.scrollY>50){   
        nav.classList.add('nav2')
        nav.classList.remove('nav1')
}
else{
    nav.classList.add('nav1')
    nav.classList.remove('nav2')
}
})

let scrollup =document.getElementsByClassName('scrollup')[0]
scrollup.addEventListener('click',function(){
   window.scrollTo(
   {
    top:0,
    left:0,
    behavior:"smooth"
   }
   )
  })
console.log(scrollup);
window.addEventListener('scroll',function(){
  if(window.scrollY>200){
    scrollup.setAttribute('style','display:block;')
  }
else{
  scrollup.setAttribute('style','display:none;')}
})

let ul = document.querySelector("header ul");
let menuToggle = document.getElementsByClassName("menu-toggle")[0];
let footerdata= document.getElementsByClassName('footer-data')[0]
window.addEventListener("resize", (e) => {
  let windowSize = e.currentTarget.innerWidth;
  if (windowSize <= 650) {
    ul.style.display = "none";
    menuToggle.style.display = "flex";
    footerdata.classList.add('footer-data2')
    footerdata.classList.remove('footer-data')

  } else {
    ul.style.display = "flex";
    menuToggle.style.display = "none";
    ul.classList.remove("menu");
    footerdata.classList.add('footer-data')
    footerdata.classList.remove('footer-data2')
  }
});

menuToggle.addEventListener("click", () => {
  ul.classList.toggle("menu");
});