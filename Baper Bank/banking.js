
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
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmount = parseFloat(withdrawField.value);

    if (isNaN(newWithdrawAmount)) {
        alert('Please provide a valid number');
        return;
    }

    withdrawField.value = '';

    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotal = parseFloat(withdrawTotalElement.innerText);

    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotal = parseFloat(balanceTotalElement.innerText);

    if (newWithdrawAmount > previousBalanceTotal) {
        alert('Baap er bank e eto taka nai');
        return;
    }

    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal.toFixed(2);

    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal.toFixed(2);
});
