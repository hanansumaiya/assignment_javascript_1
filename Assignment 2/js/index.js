// =================  MEMORY  ===============================
function getMemory(product, price) {
  let memoryCost = document.getElementById(product + "-cost");
  //   let memoryCostText = memoryCost.innerText;
  memoryCost.innerText = price;
}
calculate();
/////////////////////
document.getElementById("memory-8").addEventListener("click", function () {
  getMemory("memory", 0);
  calculate();
});
document.getElementById("memory-16").addEventListener("click", function () {
  getMemory("memory", 180);
  calculate();
});
// =================  MEMORY  ===============================
// =================  STORAGE  ===============================
document.getElementById("storage-256").addEventListener("click", function () {
  getMemory("storage", 0);
  calculate();
});
document.getElementById("storage-512").addEventListener("click", function () {
  getMemory("storage", 100);
  calculate();
});
document.getElementById("storage-1t").addEventListener("click", function () {
  getMemory("storage", 180);
  calculate();
});
// =================  STORAGE  ===============================
// =================  delivery  ===============================
document.getElementById("delivery-free").addEventListener("click", function () {
  getMemory("delivery", 0);
  calculate();
});
document.getElementById("delivery-20").addEventListener("click", function () {
  getMemory("delivery", 20);
  calculate();
});
// =================  delivery  ===============================
function calculate() {
  let memoryCost = document.getElementById("memory-cost").innerText;
  let storageCost = document.getElementById("storage-cost").innerText;
  let deliveryCost = document.getElementById("delivery-cost").innerText;
  let subTotalcost =
    1299 +
    parseInt(memoryCost) +
    parseInt(storageCost) +
    parseInt(deliveryCost);
  document.getElementById("sub-total").innerText = subTotalcost;
  //   =========
  document.getElementById("discount-total").innerText = subTotalcost;
  //   =========
  document.getElementById("btn-promo").addEventListener("click", () => {
    const inputPromo = document.getElementById("input-promo");
    const inputPromoValue = inputPromo.value;
    if (inputPromoValue == "stevekaku") {
      let promoCode = subTotalcost * 0.2;
      let totalCost = subTotalcost - promoCode;
      document.getElementById("discount-total").innerText = totalCost;
    }
    inputPromo.value = "";
  });
}
