function getAmount(productId){
    const product = document.getElementById(productId);
    const productAmountString = product.innerText;
    const amount = parseFloat(productAmountString);

    return amount;
}

function setTotalPrice(amount){
    const totalPriceValue = document.getElementById("total-price");
    const totalPriceValueString = totalPriceValue.innerText;
    const totalPrice = parseFloat(totalPriceValueString);

    totalPriceValue.innerText = totalPrice + amount ;
}

function addToCart(productId,product){
    const amount = getAmount(productId);
    setTotalPrice(amount);
    setProductNameToCart(product);
}

function getProductName(product){
    const productNameField = document.getElementById(product);
    const productName = productNameField.innerText;

    return productName;
}

function setProductNameToCart(product){
    const productNameContainer = document.getElementById('productName-container');
    const paragraph = document.createElement('p');
    const productName = getProductName(product);
    paragraph.classList.add('font-medium');
    paragraph.innerText = productName;

    productNameContainer.appendChild(paragraph);
}