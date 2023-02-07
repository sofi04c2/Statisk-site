// const filNavn = "https://kea-alt-del.dk/t7/api/products";

// function hentData(navn) {
//   fetch(navn)
//     .then((respons) => respons.json())
//     .then(visData);
// }

// function visData(json) {
//   const temp = document.querySelector("template").content;
//   const beholder = document.querySelector("main");
//   json.forEach((tøj) => {
//     const klon = temp.cloneNode(true);
//     klon.querySelector("").textContent = produkt.price;
//     klon.querySelector("h2").textContent = produkt.str;
//     klon.querySelector("h3").textContent = tøj.farve;
//     klon.querySelector("h4").textContent = tøj.model;
//     beholder.appendChild(klon);
//   });
// }

// hentData(filNavn);

async function getData() {
  const response = await fetch("https://kea-alt-del.dk/t7/api/products?limit=15");
  const data = await response.json();
  //   console.log(data);
  //2. loppe //3. for hver
  data.forEach(showProduct);
}

getData();

function showProduct(product) {
  console.log(product);
  //4. fange vores template
  const template = document.querySelector("#smallProductTemplate").content;
  //6. så cloner vi
  const copy = template.cloneNode(true);
  //7. skifter vi data
  copy.querySelector("h3").textContent = product.productdisplayname;
  if (product.soldout) {
    copy.querySelector("article").classList.add("soldOut");
  }
  if (product.discount) {
    copy.querySelector("article").classList.add("onSale");
  }
  //8. appende
  document.querySelector("main").appendChild(copy);
}
