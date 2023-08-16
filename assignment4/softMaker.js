function sortMaker(arr) {

    if (arr.length !== 2) {
        return 'Invalid Input';
    }
    if (arr[0] < 0 || arr[1] < 0) {
        return 'Invalid Input';
    }
    if (typeof arr[0] !== 'number' || typeof arr[1] !== 'number') {
        return 'Invalid input';
    }
    if (arr[0] > arr[1]) {
        return [arr[0], arr[1]];
    }
    if (arr[0] < arr[1]) {
        return [arr[1], arr[0]];
    }
    if (arr[0] === arr[1]) {
        return 'Equal';
    }
}

