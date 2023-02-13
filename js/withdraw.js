document.getElementById('withdraw-btn').addEventListener('click', function(){
    const newWithdrawAmount = inputFieldValueById('withdraw-field');
    
    const previousTotalWithdraw = getElementValueById('total-withdraw');

    const currentTotalWithdraw = previousTotalWithdraw + newWithdrawAmount;

    setTextElementValueById('total-withdraw', currentTotalWithdraw);

    const previousTotalBalance = getElementValueById('total-balance');
    const currentTotalBalance = previousTotalBalance - newWithdrawAmount;

    setTextElementValueById('total-balance', currentTotalBalance);
})