/*
	author: Muhammad Umar Farooq
	Version: 1.0
	URL: https://github.com/qualitybits/common.js
 */

Array.prototype.max = function() {
    return Math.max.apply(null, this);
};
Array.prototype.min = function() {
    return Math.min.apply(null, this);
};
Object.size = function(obj) {
    var size = 0,
        key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};
function keyPareValue(data, keysArray) {
    var result = [];
    $.each(data, function(i, d) {
        var row = [];
        $.each(keysArray, function(kI, k) {
            obj = {};
            obj[k] = d[kI];
            row.push(obj);
        });
        result.push(row);
    });
    return result;
}