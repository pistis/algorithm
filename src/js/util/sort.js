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

/**
 * Quick sort (recursive version)
 * 알고리즘
 * 1. 분할 알고리즘
 * - 왼쪽은 pivot 값보다 작은 값으로 오른쪽은 pivot 값보다 큰 값으로 배열한다.
 * 2. Quick Sort 알고리즘
 * - 크기가 1보다 클동안 partition을 재귀적으로 반복한다.
 * * 최적화
 * - 별도의 메모리없이 내부 분할로 구현한다.
 * @param arr
 * @param compare
 * @returns {*}
 */
exports.quick = function quick(arr, compare) {
    compare = compare || function(a, b) {
            return a - b;
        };
    return qsort(arr, 0, arr.length - 1, compare);
};

function qsort(arr, left, right, compare) {
    var i, j, t, p;

    if((right - left) + 1 > 1) {
        p = arr[right];
        i = left - 1;
        j = right;

        while(true) {
            while(compare(p, arr[++i]) > 0);
            while(compare(arr[--j], p) > 0);
            if (i >= j) break;
            t = arr[j];
            arr[j] = arr[i];
            arr[i] = t;
        }

        arr[right] = arr[i];
        arr[i] = p;
        qsort(arr, left, i - 1, compare);
        qsort(arr, i + 1, right, compare);
    }

    return arr;
};

/**
 * Quick sort (none recursive version)
 * 알고리즘
 * 1. 분할 알고리즘
 * - 왼쪽은 pivot 값보다 작은 값으로 오른쪽은 pivot 값보다 큰 값으로 배열한다.
 * 2. Quick Sort 알고리즘
 * - 크기가 1보다 클동안 partition을 반복한다.
 * * 최적화
 * - 별도의 메모리없이 내부 분할로 구현한다.
 * - none recursive를 stack을 이용하여 구현한다.
 * @param arr
 * @param compare
 * @returns {*}
 */
exports.quickNR = function quick(arr, compare) {
    compare = compare || function(a, b) {
            return a - b;
        };
    return qsortNR(arr, 0, arr.length - 1, compare);
};

function qsortNR(arr, left, right, compare) {
    var Stack = require('./array-stack');
    var stack = new Stack();
    var i, j, t, p;
    stack.push(right);
    stack.push(left);

    while(!stack.isEmpty()) {
        left = stack.pop();
        right = stack.pop();
        if((right - left) + 1 > 1) {
            p = arr[right];
            i = left - 1;
            j = right;

            while(true) {
                while(compare(p, arr[++i]) > 0);
                while(compare(arr[--j], p) > 0);
                //while(arr[++i] < p);
                //while(arr[--j] > p);
                if (i >= j) break;
                t = arr[j];
                arr[j] = arr[i];
                arr[i] = t;
            }
            t = arr[right];
            arr[right] = arr[i];
            arr[i] = t;

            stack.push(right);
            stack.push(i + 1);
            stack.push(i - 1);
            stack.push(left);
        }
    }

    return arr;
};