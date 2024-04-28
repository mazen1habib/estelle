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
let dis = document.getElementById("dis");
dis.addEventListener("click", function () {
  let display = document.body.getAttribute("display");
  if (display === "light") {
    document.body.setAttribute("display", "dark");
  } else {
    document.body.setAttribute("display", "light");
  }
});
let nav = document.getElementsByTagName("nav")[0];
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    nav.classList.add("nav2");
    nav.classList.remove("nav1");
  } else {
    nav.classList.add("nav1");
    nav.classList.remove("nav2");
  }
});

let scrollup = document.getElementsByClassName("scrollup")[0];
scrollup.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
window.addEventListener("scroll", function () {
  if (window.scrollY > 200) {
    scrollup.setAttribute("style", "display:block;");
  } else {
    scrollup.setAttribute("style", "display:none;");
  }
});
let product =new XMLHttpRequest()
product.open('GET','https://api.escuelajs.co/api/v1/products')
product.send();
let allproducts=[]
product.addEventListener('readystatechange' ,()=>{
  if(product.readyState===4){
    allproducts = JSON.parse(product.response);

  }
  loopData()
})
const loopData = () => {
  let productCard = ``;
  allproducts.map((el ,idx) => {
    if(el.id>=1&&el.id<=9){
      let images =el.images;
        productCard +=`  <div class="product">
        <img src="${images[0]}" alt="" >
        <h4>${el.title}</h4>
        <h2>${el.price} $</h2>
        <a class="bn3637 bn38" onclick="readMore(${idx})" style="cursor: pointer;"  > add</a>
        </div>  `
    }
   else if(el.id>10 && el.id<18){
      let images =el.images;
        productCard +=`  <div class="product">
        <img src="${images[0]}" alt="" >
        <h5>${el.title}</h5>
        <h3>${el.price} $</h3>
        <a class="bn3637 bn38" onclick="readMore(${idx})" style="cursor: pointer;"  > add</a>
        </div>  `
       
      
    }
    else if(el.id>34 && el.id<45){
let images =el.images;

productCard +=`  <div class="product">
<img src="${images[0]}" alt="" >
<h5>${el.title}</h5>
<h3>${el.price} $</h3>
<a class="bn3637 bn38" onclick="readMore(${idx})"  style="cursor: pointer;"  >add</a>
</div>  `
    }
    else if(el.id>47 && el.id<51){
      let images =el.images;
      
      productCard +=`  <div class="product">
      <img src="${images[0]}" alt="" >
      <h5>${el.title}</h5>
      <h3>${el.price} $</h3>
      <a class="bn3637 bn38" onclick="readMore(${idx})" style="cursor: pointer;"  >add</a>
      </div>  `
          }
  })
  document.getElementsByClassName('con')[0].innerHTML=productCard
}
 const readMore = (x) => {
   let productData = {
      ptitle: allproducts[x].title,
      pprice: allproducts[x].price,
      pimgs: allproducts[x].images,
      pd:allproducts[x].description
    };
    console.log(productData);
    window.localStorage.setItem("products", JSON.stringify(productData));
    window.location.href = "singleproduct.html";
  };