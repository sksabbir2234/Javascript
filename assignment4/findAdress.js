function findAddress(obj) {
    if (obj.street === undefined) {
        obj.street = '__';
    }
    if (obj.house === undefined) {
        obj.house = '__';
    }
    if (obj.society === undefined) {
        obj.society = '__';
    }
    return obj.street + ', ' + obj.house + ', ' + obj.society;
}




