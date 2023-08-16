
document.getElementById('btn-deposit').addEventListener('click', function() {
    const depositField = document.getElementById('deposit-field');
    const depositFieldValue = parseFloat(depositField.value);

    if (isNaN(depositFieldValue)) {
        alert('Please enter a valid deposit amount.');
        return; // Exit the function if the input is not a valid number.
    }

    const depositTotal = document.getElementById('deposit-total');
    const depositTotalFloat = parseFloat(depositTotal.innerText);

    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalFloat = parseFloat(balanceTotal.innerText);

    const depositCurrent = depositTotalFloat + depositFieldValue;
    const balanceCurrent = balanceTotalFloat + depositFieldValue;

    depositTotal.innerText = depositCurrent.toFixed(2); // Display with 2 decimal places.
    balanceTotal.innerText = balanceCurrent.toFixed(2);

    depositField.value = ''; // Clear the input field.
});




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