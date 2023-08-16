function canPay(changeArray, totalDue) {

    if (changeArray.length == 0) {
        return 'Invalid input';
    }

    var sum = 0;
    for (var i = 0; i < changeArray.length; i++) {
        sum += changeArray[i];
    }
    if (sum > totalDue) {
        return true;
    }
    else {
        return false;
    }

}
