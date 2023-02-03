const id = 1541;
const url = `https://kea-alt-del.dk/t7/api/products/1532`;
const imagePath = `https://kea-alt-del.dk/t7/images/webp/640/1565.webp`;

function hentData() {
  fetch(url)
    .then((klar) => klar.json())
    .then(visProdukt);
}

function visProdukt(produkt) {
  console.log(produkt);
  document.querySelector("#model").textContent = produkt.productdisplayname;
  document.querySelector("img").src = imagePath;
  document.querySelector("img").alt = produkt.productdisplayname;
  document.querySelector(".farve").textContent = produkt.basecolor;
  document.querySelector("brand").textContent = produkt.brandname;
}

hentData();
