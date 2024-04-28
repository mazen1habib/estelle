let inputfn=document.getElementById('inputfn')
let inputln=document.getElementById('inputln')
let inputemail=document.getElementById('inputemail')
let inputp=document.getElementById('inputp')
let inputcp=document.getElementById('inputcp')
let inputa=document.getElementById('inputa')
let inputdate=document.getElementById('inputdate')
let addbtn=document.getElementById('btn')
let addregiter=[]
if(window.localStorage.getItem('register') !== null)
{
    addregiter = JSON.parse(window.localStorage.getItem('register'))
}
addbtn.addEventListener('click',function(){
    let count=0;
    var adduser={
        fname:inputfn.value,
        lname:inputln.value,
        email:inputemail.value, 
        password:inputp.value,
        confirmPassword:inputcp.value,
        address:inputa.value,
        date:inputdate.value
    }
    addregiter.push(adduser)
    window.localStorage.setItem('register',JSON.stringify(addregiter))
    window.location.href = "login.html";
    cleardata()
})
function cleardata(){
    inputfn.value=``
    inputln.value=``
    inputemail.value=``
    inputp.value=``
    inputcp.value=``
    inputa.value=``
    inputdate.value=``
}