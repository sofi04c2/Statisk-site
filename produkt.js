// const id = 1541;
// const url = `https://kea-alt-del.dk/t7/api/products/1532`;
// const imagePath = `https://kea-alt-del.dk/t7/images/webp/640/1565.webp`;

// function hentData() {
//   fetch(url)
//     .then((klar) => klar.json())
//     .then(visProdukt);
// }

// function visProdukt(produkt) {
//   console.log(produkt);
//   document.querySelector("#model").textContent = produkt.productdisplayname;
//   document.querySelector("img").src = imagePath;
//   document.querySelector("img").alt = produkt.productdisplayname;
//   document.querySelector(".farve").textContent = produkt.basecolor;
//   document.querySelector("brand").textContent = produkt.brandname;
// }

// hentData();

async function getProduct() {
  const response = await fetch("https://kea-alt-del.dk/t7/api/products/1529");
  const data = await response.json();
  console.log(data);
  showProduct(data);
}

function showProduct(product) {
  document.querySelector(".info h3").textContent = product.productdisplayname;
  document.querySelector(".info .brand").textContent = product.brand;
  document.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
}

getProduct();
