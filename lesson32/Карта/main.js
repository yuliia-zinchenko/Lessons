let number = document.getElementById('number');
let userName = document.getElementById('name');
let cardDate = document.getElementById('date');
let cardYear = document.getElementById('year');
let cardType = document.getElementById('type');
let cardNumber = document.getElementById('card_number');
let card_Name = document.getElementById('card_name');
let card_Month = document.getElementById('card_month');
let card_Year = document.getElementById('card_year');
number.addEventListener('keyup', setNumber)
userName.addEventListener('keyup', setName)
cardDate.addEventListener('mouseup', setData)
cardYear.addEventListener('mouseup', setYear)
function isNum(num){
    return !/[^.[0-9, " "]]*/.test(num)
}
function isType(type){
    if(type.includes(5868)){
        cardType.innerHTML = "Visa"
    }
    else if(type.includes(4941)){
        cardType.innerHTML = "MasterCard"
    }
    else{
        cardType.innerHTML = "Undefound"
    }
}
function setNumber(e) {
    e.preventDefault
    if (isNum(number.value)) {
        cardNumber.innerHTML = number.value
    }
    else
    {
        alert ('only numbers')
    }
    check_bank(number.value)
}
function setName(e){
    e.preventDefault
    card_Name.innerHTML = userName.value
}
function setData(e){
    e.preventDefault
    card_Month.innerHTML = cardDate.options[cardDate.selectedIndex].value   
}
function setYear(e){
    e.preventDefault
    card_Year.innerHTML = cardYear.options[cardYear.selectedIndex].text
}
