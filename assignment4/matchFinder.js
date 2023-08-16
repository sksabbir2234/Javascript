function matchFinder(string1, string2) {

    if (typeof string1 === 'string' && typeof string2 === 'string') {
        return string1.includes(string2);
    } else {
        return 'Please enter a string';

    }  
}

