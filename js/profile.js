let data = JSON.parse(window.localStorage.getItem("usersall"));
let conm= document.getElementById('conm')
console.log(conm);
if (data !== null) {
    conm.innerHTML=`  <div class="user">
    <div class="imge"><img src="images/user.png" alt="">
    </div>
    <div class="username"> <h1>${data.pfname} ${data.plname}</h1></div>
    <h2> Email | ${data.pemail}</h2>
    <h2> Address | ${data.padd}</h2>
    <div class="btno">
        <a href="index.html"> <button class="btn" >
                BACK
        </button>
    </a>
    </div>`
}






