document.getElementById('deposit-btn').addEventListener('click', function(){
    // get element by id and from the element 
    const newDepositAmount = inputFieldValueById('deposit-field');

    // get previous deposit total by id 
    const previousTotalDeposit = getElementValueById('total-deposit');

    // calculate new deposit total 
    const currentTotalDeposit = previousTotalDeposit + newDepositAmount;

    // set deposit total value 
    setTextElementValueById('total-deposit', currentTotalDeposit);

    // get previous balance by using the function 
    const previousTotalBalance = getElementValueById('total-balance');

    // calculate new total balance 
    const currentTotalBalance = previousTotalBalance + newDepositAmount;

    // set total balance value 
    setTextElementValueById('total-balance', currentTotalBalance);

})