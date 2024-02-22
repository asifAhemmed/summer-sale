function getAmount(productId) {
  const product = document.getElementById(productId);
  const productAmountString = product.innerText;
  const amount = parseFloat(productAmountString);

  return amount;
}

function setTotalPrice(amount) {
  const totalPriceValue = document.getElementById("total-price");
  const totalPriceValueString = totalPriceValue.innerText;
  const totalPrice = parseFloat(totalPriceValueString);

  totalPriceValue.innerText = totalPrice + amount;
}

function addToCart(productId, product) {
  const amount = getAmount(productId);
  setTotalPrice(amount);
  setProductNameToCart(product);
  getTotalPrice();
}

function getProductName(product) {
  const productNameField = document.getElementById(product);
  const productName = productNameField.innerText;

  return productName;
}

function setProductNameToCart(product) {
  const productNameContainer = document.getElementById("productName-container");
  const paragraph = document.createElement("p");
  const productName = getProductName(product);
  paragraph.classList.add("font-medium");
  paragraph.innerText = productName;

  productNameContainer.appendChild(paragraph);
}
function getDiscount() {
  const totalPrice = getAmount("total-price");
  const discountField = document.getElementById("discount");
  const discount = totalPrice * 0.2;
  discountField.innerText = discount;
}

function getTotalPrice() {
    const totalAmountArea = document.getElementById("total-amount");
    const totalPrice = getAmount("total-price");
    const totalDiscount = getAmount("discount");
    const totalAmount = totalPrice - totalDiscount ;
    totalAmountArea.innerText = totalAmount;

}

document.getElementById("coupon-field").addEventListener("keyup", function () {
  const couponField = document.getElementById("coupon-field");
  const buttonApply = document.getElementById("btn-apply");
  if (couponField.value === "SELL200") {
    buttonApply.removeAttribute("disabled", false);
  }
});

document.getElementById("btn-apply").addEventListener("click", function () {
    getDiscount();
    getTotalPrice();
});
