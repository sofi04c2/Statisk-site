const urlParams = new URLSearchParams(window.location.seach);
console.log(urlParams);
const id = urlParams.get("id");
const url = `https://kea-alt-del.dk/t7/api/products/${id}`;
const imagePath = `https://kea-alt-del.dk/t7/images/webp/640/${id}.webp`;

function hentData() {
  fetch(url)
    .then((res) => res.json())
    .then(showProdukt);
}

function showProdukt(produkt) {
  document.querySelector(".model").textContent = produkt.productdisplayname;
  document.querySelector(".id").textContent = produkt.id;
  document.querySelector(".price").textContent = produkt.price;
  document.querySelector(".colour").textContent = produkt.basecolour;
  document.querySelector(".category").textContent = produkt.category;
  document.querySelector(".gender").textContent = produkt.gender;
  document.querySelector(".img").src = imagePath;
}

hentData();
