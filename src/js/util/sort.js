function compareAscending(a, b) {
    return a - b;
}

/**
 * selection sort
 *  - Selection sort with O(n^2) time complexity
 * @param arr
 */
exports.sortBySelection = function sortBySelection(arr, compare) {
    'use strict';
    var i,
        j,
        minIdx = 0,
        tmp = 0,
        len = arr.length;
    compare = compare || compareAscending;

    for(i = 0; i < len - 1; i++) {
        minIdx = i;
        for(j = i + 1; j < len; j++) {
            if(compare(arr[minIdx], arr[j]) > 0) {
                minIdx = j;
            }
        }
        if(minIdx > i) {
            tmp = arr[i];
            arr[i] = arr[minIdx];
            arr[minIdx] = tmp;
        }
    }

    return arr;
};