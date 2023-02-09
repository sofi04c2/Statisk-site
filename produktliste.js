const urlParams = new URLSearchParams(window.location.search);
const kat = urlParams.get("kat");
const url = `https://kea-alt-del.dk/t7/api/products?limit=10&category=${kat}`;

async function hentData() {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  data.forEach(getData);
}

document.querySelector("h2").textContent = kat;
const temp = document.querySelector("#smallProductTemplate").content;
const beholder = document.querySelector("main");

hentData(url);

function getData(produkt) {
  console.log(produkt);
  const temp = document.querySelector("#smallProductTemplate").content;
  const imagePath = `https://kea-alt-del.dk/t7/images/webp/640/${produkt.id}.webp`;
  const klon = temp.cloneNode(true);
  klon.querySelector(".price").textContent = produkt.price;
  klon.querySelector(".name").textContent = produkt.productdisplayname;
  klon.querySelector(".subtle").textContent = produkt.brandname;
  klon.querySelector(".sale span").textContent = Math.round(produkt.price - produkt.price * (produkt.discount / 100));
  klon.querySelector("a").href = "produkt.html?id=" + produkt.id;
  if (produkt.soldout) {
    klon.querySelector("article").classList.add("soldOut");
  }
  if (produkt.discount) {
    klon.querySelector("article").classList.add("onSale");
  }
  klon.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${produkt.id}.webp`;
  document.querySelector("main").appendChild(klon);
  beholder.appendChild(klon);
}

hentData(url);
