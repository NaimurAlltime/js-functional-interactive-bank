function inputFieldValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    inputField.value = '';
    return inputFieldValue;
}

function elementValueById(elementId){
    const elementField = document.getElementById(elementId);
    const elementFieldValueString = elementField.innerText;
    const elementFieldValue = parseFloat(elementFieldValueString);
    return elementFieldValue;
}


document.getElementById('deposit-btn').addEventListener('click', function(){
    const elementField = document.getElementById('total-deposit');
    const newDepositAmount = inputFieldValueById('deposit-field');
    console.log(newDepositAmount);

    const previousTotalDeposit = elementValueById('total-deposit');

    const currentTotalDeposit = previousTotalDeposit + newDepositAmount;

    elementField.innerText = currentTotalDeposit;


})