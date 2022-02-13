function increaseDecrease (inputId,priceId, price, isAdd){
    const inputIphone = document.getElementById(inputId);
    let inputValue = inputIphone.value;
    if(isAdd == true){
        inputValue = parseInt(inputValue) + 1;
        
    }
    else if (inputValue> 0){
        inputValue = parseInt(inputValue) - 1;   
    }
 // update total amount
 inputIphone.value = inputValue;
 const totalAmountId = document.getElementById(priceId);
totalAmountId.innerText = inputValue * price;
 
calculateTotal();
}
// get input value
function getInputValue(inputId){
    const inputIphone = document.getElementById(inputId);
    let inputValue = parseInt(inputIphone.value) ;
    return inputValue;
}
// calculate total subtotal tax
function calculateTotal(){
    const phoneTotal =  getInputValue('iphone-input') * 1219
    const caseTotal = getInputValue('case-input') * 59;
    const subtotal = phoneTotal + caseTotal;
    const tax = subtotal / 10;
    const totalPrice = subtotal + tax;
    document.getElementById('sub-total').innerText = subtotal;
    document.getElementById('tax').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;

}

// phone section
document.getElementById('plus-iphone').addEventListener('click', function(){
    increaseDecrease('iphone-input','total-amount-iphone',1219 ,true);
})
document.getElementById('mynus-iphone-btn').addEventListener('click', function(){   
increaseDecrease('iphone-input','total-amount-iphone',1219  ,false);
})
// case section
document.getElementById('plus-case-btn').addEventListener('click', function(){
    increaseDecrease('case-input','total-amount-case',59, true);
})
document.getElementById('mynus-case-btn').addEventListener('click', function(){
    increaseDecrease('case-input','total-amount-case',59, false);
})

// total section
