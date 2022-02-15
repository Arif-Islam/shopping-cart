// increase-decrease input value when plus/minus is clicked
function increaseInputValue(product, price, isAdd) {
    const input = document.getElementById(product + '-input');
    let inputValue = input.value;
    if (isAdd == true) {
        inputValue++;
        const productPrice = totalIndividualPrice(product, inputValue, price);
        calculateTotalPrice();
    }
    else if (isAdd == false && inputValue > 0) {
        inputValue--;
        const productPrice = totalIndividualPrice(product, inputValue, price);
        calculateTotalPrice();
    }
    input.value = inputValue;
}
function totalIndividualPrice(product, quantity, price) {
    const priceField = document.getElementById(product + '-price');
    const productPrice = quantity * price;
    priceField.innerText = productPrice;
    return productPrice;
}
function calculateTotalPrice() {
    const subTotalField = document.getElementById('sub-total');
    const taxField = document.getElementById('tax-amount');
    const totalPriceField = document.getElementById('total-price');
    const phonePrice = document.getElementById('phone-price').innerText;
    const casePrice = document.getElementById('case-price').innerText;
    const subTotal = parseInt(phonePrice) + parseInt(casePrice);
    subTotalField.innerText = subTotal;
    const tax = subTotal / 10;
    taxField.innerText = tax;
    const total = subTotal + tax;
    totalPriceField.innerText = total;
}
document.getElementById('phone-plus').addEventListener('click', function () {
    increaseInputValue('phone', 1219, true);
});

document.getElementById('phone-minus').addEventListener('click', function () {
    increaseInputValue('phone', 1219, false);
});

document.getElementById('case-plus').addEventListener('click', function () {
    increaseInputValue('case', 59, true);
});

document.getElementById('case-minus').addEventListener('click', function () {
    increaseInputValue('case', 59, false);
});