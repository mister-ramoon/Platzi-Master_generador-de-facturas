const productContainer = document.getElementById("productContainer");
const billContainer0 = document.getElementById("billContainer0");
const billContainer1 = document.getElementById("billContainer1");
const billContainer2 = document.getElementById("billContainer2");
const addProduct = document.getElementById("addProduct");
const totalPriceProducts = document.getElementById("totalPriceProducts");
const couponInput = document.getElementById("couponInput");

let priceValue0;
let priceValue1;
let priceValue2;

let totalPrice0 = 0;
let totalPrice1 = 0;
let totalPrice2 = 0;

let totalPriceBill;
let discountProducts;

let products = [
  {
    id: 0,
    name: "Logitech BRIO Webcam Ultra HD",
    price: 150,
    amount: "value0",
    img: "https://firebasestorage.googleapis.com/v0/b/generador-facturas-pm.appspot.com/o/webcam.jpg?alt=media&token=1af85043-590e-4153-ba19-65c7bf64579b",
  },
  {
    id: 1,
    name: "Audio-Technica AT2020USB",
    price: 180,
    amount: "value1",
    img: "https://firebasestorage.googleapis.com/v0/b/generador-facturas-pm.appspot.com/o/microphone.jpg?alt=media&token=397cc158-36c5-4b9c-8540-a95ba33a94d7",
  },
  {
    id: 2,
    name: "Samsung Monitor Gaming 49",
    price: 300,
    amount: "value2",
    img: "https://firebasestorage.googleapis.com/v0/b/generador-facturas-pm.appspot.com/o/monitor.jpg?alt=media&token=89b01440-9475-4b09-a71c-281c18c3f70b",
  },
];

const showProducts = products.forEach((product) => {
  productContainer.innerHTML += `
    <div class="product">
        <img src=${product.img}>
        <h3>${product.name}</h3>
        <p>Precio $${product.price}</p>
        <div class="product__inputs">
          <input type="number" id="${product.amount}">
          <button onclick="addProductToList${product.id}()">Añadir</button>
        </div>
    </div>
  `;
});

function addProductToList0() {
  price0 = products[0].price * value0.value;
  billContainer0.innerHTML = `
        <div class="bill">
          <p>Nombre Del Producto: ${products[0].name}</p>
          <p>Cantidad: ${value0.value}</p>
          <p>Precio Por Unidad: $${products[0].price}</p>
          <p id="priceValue0">${price0}</p>
        </div>
    `;

  priceValue0 = document.getElementById("priceValue0");
  totalPrice0 = parseInt(priceValue0.innerText);

  totalPriceBill = totalPrice0 + totalPrice1 + totalPrice2;

  totalPriceProducts.innerHTML = ` <span>Precio Total: $${totalPriceBill}</span>`;
}

function addProductToList1() {
  price1 = products[1].price * value1.value;

  billContainer1.innerHTML = `
        <div class="bill">
          <p>Nombre Del Producto: ${products[1].name}</p>
          <p>Cantidad: ${value1.value}</p>
          <p>Precio Por Unidad: $${products[1].price}</p>
          <p id="priceValue1">${price1}</p>
        </div>
    `;

  priceValue1 = document.getElementById("priceValue1");
  totalPrice1 = parseInt(priceValue1.innerText);

  totalPriceBill = totalPrice0 + totalPrice1 + totalPrice2;

  totalPriceProducts.innerHTML = `<span>Precio Total: $${totalPriceBill}</span>`;
}

function addProductToList2() {
  price2 = products[2].price * value2.value;

  billContainer2.innerHTML = `
        <div class="bill">
          <p>Nombre Del Producto: ${products[2].name}</p>
          <p>Cantidad: ${value2.value}</p>
          <p>Precio Por Unidad: $${products[2].price}</p>
          <p id="priceValue2">${price2}</p>
        </div>
    `;

  priceValue2 = document.getElementById("priceValue2");
  totalPrice2 = parseInt(priceValue2.innerText);

  totalPriceBill = totalPrice0 + totalPrice1 + totalPrice2;

  totalPriceProducts.innerHTML = `<span>Precio Total: $${totalPriceBill}</span>`;
}

const coupons = {
  name: "RAMONELDRAGON",
  discount: 30,
};

function discount() {
  if (couponInput.value == coupons.name) {
    discountProducts = (totalPriceBill * coupons.discount) / 100;
    discountProductsTotal = totalPriceBill - discountProducts;
    totalPriceProducts.innerHTML = `<span>Precio Total: $${discountProductsTotal}</span>`;
  }
}
