
document.getElementById('btn-deposit').addEventListener('click', function(){
    const depositField = document.getElementById('deposit-field');
    const depositFieldValue = depositField.value;
    const depositFieldFloat = parseFloat(depositFieldValue);

    const depositTotal = document.getElementById('deposit-total');
    const depositTotalValue = depositTotal.innerText;
    const depositTotalFloat = parseFloat(depositTotalValue);

    const depositCurrent = depositFieldFloat + depositTotalFloat; 

    depositTotal.innerText = depositCurrent; 

    const balanceTotal = document.getElementById('balance-total')
    const balanceText = balanceTotal.innerText;
    const balanceTotalFloat = parseFloat(balanceText);

    const balanceCurrent = balanceTotalFloat + depositFieldFloat;

    balanceTotal.innerText = balanceCurrent;

    depositField.value = '';

})



document.getElementById('btn-withdraw').addEventListener('click', function () {
    // step-2:
    const withdrawField = document.getElementById('withdraw-field');
    const newWithDrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithDrawAmountString);

    // step-7
    withdrawField.value = '';

    if (isNaN(newWithdrawAmount)) {
        alert('Please provide a valid number');
        return;
    }

    // step-3
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);


    // step-5
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);


    if (newWithdrawAmount > previousBalanceTotal) {
        alert('Baap er bank e eto taka nai');
        return;
    }

    // step-4
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;


    // step-6
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;


})