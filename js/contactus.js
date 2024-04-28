let yourname =document.getElementById('name')
let lastname=document.getElementById('lastname')
let message =document.getElementById('message')
let phone=document.getElementById('phone')
let email =document.getElementById('email')
let btn =document.getElementById('btn')
let addfeedbackall=[]
if(window.localStorage.getItem('feedback')!==null){
    addfeedbackall=JSON.parse(window.localStorage.getItem('feedback'))
    loopdata()
}
btn.addEventListener('click',function(){
    let addfeedback={
        pname:yourname.value,
       lname :lastname.value,
        lmessage:message.value,
        emailp:email.value,
        telephone:phone.value
    }
    addfeedbackall.push(addfeedback)
    loopdata()
    window.localStorage.setItem('feedback',JSON.stringify(addfeedbackall))
    cleardata()
})
function loopdata(){
    let tabledata=` `
    for(let i=0;i<addfeedbackall.length;i++){
        tabledata +=`<div class="data">
        <div class="user"> <img src="images/avatar-1968236_1280.png" alt="">
        <h2>${ addfeedbackall[i].pname}  ${addfeedbackall[i].lname}</h2></div>
        <div class="message"><h5>${addfeedbackall[i].lmessage}</h5></div>
      </div>`
    }
    document.getElementById('conall').innerHTML=tabledata
}
function cleardata(){
   yourname.value=``
    lastname.value=``
    email.value=``
   phone.value=``
    message.value=``
   
}

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