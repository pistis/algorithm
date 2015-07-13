/**
 * selection sort
 *  - Selection sort with O(n^2) time complexity
 *  - worst case
 *  -- 비교 : N * (N - 1) / 2, 교환 : N - 1
 *  - best case
 *  -- 비교 : N * (N - 1) / 2, 교환 : O
 *  - complexity : O(N^2)
 *  - 특징 : 입력자료에 둔감하다 (교환 횟수가 적어 큰 레코드에 적합하다.)
 * @param arr
 * @param compare
 * @returns {*}
 */
exports.selection = function selection(arr, compare) {
    'use strict';
    var i,
        j,
        minIdx = 0,
        tmp = 0,
        len = arr.length;
    compare = compare || function(a, b) {
        return a - b;
    };

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

/**
 * insertion sort
 *  - Insertion sort with O(n^2) time complexity
 *  - worst case : Reverse
 *  -- 비교 : N * (N - 1) / 2, 교환 : N * (N - 1) / 2
 *  - best case : Sorted
 *  -- 비교 : N - 1, 교환 : O
 *  - complexity : O(N^2)
 *  - 특징 : 입력자료에 민감하다. (거의 정렬된 문제엔 빠르다.)
 * @param arr
 * @param compare
 * @returns {*}
 */
exports.insertion = function insertion(arr, compare) {
    var i,
        j,
        tmp,
        len = arr.length;
    compare = compare || function(a, b) {
        return a - b;
    };

    for(i = 1; i < len; i++) {
        tmp = arr[i];
        j = i;
        while(j > 0 && compare(arr[j - 1], tmp) > 0) {
            arr[j] = arr[j - 1];
            j--;
        }
        arr[j] = tmp;
    }
    return arr;
};

/**
 * bubble sort
 * - Bubble sort with O(n^2) time complexity
 * - worst case : Reverse
 * -- 비교 : N * (N - 1) / 2, 교환 : N * (N - 1) / 2
 * - best case : Sorted
 *  -- 비교 : N * (N - 1) / 2, 교환 : O
 * @param arr
 * @param compare
 * @returns {*}
 */
exports.bubble = function bubble(arr, compare) {
    var i,
        j,
        tmp,
        len = arr.length;
    compare = compare || function(a, b) {
        return a - b;
    };

    for (i = 0; i < len - 1; i++) {
        for (j = 0; j < len - 1 - i; j++) {
            if (compare(arr[j], arr[j + 1]) > 0) {
                tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }
        }
    }

    return arr;
};

/**
 * bubble sort (개선 버전)
 * - Bubble sort with O(n^2) time complexity
 * - worst case : Reverse
 * -- 비교 : N * (N - 1) / 2, 교환 : N * (N - 1) / 2
 * - best case : Sorted
 *  -- 비교 : N * (N - 1) / 2, 교환 : O
 * * bSorted flag를 이용하여 중간에라도 정렬이 되었다면 비교를 하지 않고 정렬을 종료하여 속도를 개선한다.
 * @param arr
 * @param compare
 * @returns {*}
 */
exports.bubble2 = function bubble(arr, compare) {
    var i,
        j,
        tmp,
        len = arr.length,
        bSorted = false;
    compare = compare || function(a, b) {
            return a - b;
        };

    for (i = 0; i < len - 1; i++) {
        bSorted = true;
        for (j = 0; j < len - 1 - i; j++) {
            if (compare(arr[j], arr[j + 1]) > 0) {
                tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
                bSorted = false;
            }
        }
        if (bSorted) {
            break;
        }
    }

    return arr;
};