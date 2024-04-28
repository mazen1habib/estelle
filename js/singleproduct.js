let data = JSON.parse(window.localStorage.getItem("products"));
if (data !== null) {
  document.getElementsByClassName("con")[0].innerHTML = `
        <div class="singleProduct">
        <div class="imgeo">
          ${data.pimgs.map((el) => `<img src="${el}" alt="" />`)}
          </div>
          <div class="data">
            <h2>${data.ptitle}</h2>
            <h1>${data.pprice} $</h1>
            <h3>${data.pd}</h3>
            <a class="bn39" href="product.html"><span class="bn39span">Back</span></a>
            </div>
        </div>`;
}
