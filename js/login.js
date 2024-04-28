let input1 = document.getElementById('input1')
let input2 =document.getElementById('input2')
let con =document.getElementsByClassName('con')[0]
let btn =document.getElementById('btn')
let addregiter=[]
if(window.localStorage.getItem('register') !== null)
{
    addregiter = JSON.parse(window.localStorage.getItem('register'))
}

let vdate=0
btn.addEventListener('click' ,()=>{
    addregiter.map((el,idx)=>{
        if(input1.value !=null && input2.value!==null){
            if(input1.value==el.email && input2.value==el.password ){
                readMore(idx)
                btn.setAttribute('href','profile.html');
            }
        }else{
            btn.setAttribute('href','#')
        }
    })
})
const readMore = (x) => {
    let users = {
      pfname: addregiter[x].fname,
      plname: addregiter[x].lname,
      pemail: addregiter[x].email,
      padd: addregiter[x].address,
    };
    window.localStorage.setItem("usersall", JSON.stringify(users));
    window.location.href = "../profile.html";
  };
  