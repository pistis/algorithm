/**
 * selectin sort
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
 * insertion sort 2
 *  - 알고리즘은 insertion sort와 동일
 *  - 특징 : 시작 index와 길이를 받아서 배열의 특정 구간을 정렬하도록 한다.
 * @param arr
 * @param compare
 * @returns {*}
 */
function insertion2(arr, start, len, compare) {
    var i,
        j,
        tmp;
    compare = compare || function(a, b) {
            return a - b;
        };

    for(i = start; i < len; i++) {
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
exports.insertion2 = insertion2;

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


var BinaryHeap = require('./binary-heap');
/**
 * heap sort
 * insert, extract, down heap, up heap은 O(logN)의 성능을 가진다.
 *  - Full Binary Tree :  노드가 N개이면 트리의 높이는 logN+1
 * heap sort는 O(NlogN)의 성능을 가진다.
 *  - 힙생성 : N개의 자료를 insert하므로 O(NlogN)
 *  - 힙붕괴 : N개의 자료를 extract하므로  O(NlogN)
 * heap sort는 부가 메모리를 전혀 사용하지 않는다.
 * @param arr
 * @param compare
 * @returns {*}
 */
exports.heap = function selection(arr, compare) {
    var heap = new BinaryHeap(arr, compare);
    var len = arr.length;
    for (var i = 1; i <= len; i++) {
        heap.insert(heap.get(i));
    }

    while (len > 1) {
        heap.set(len--, heap.extract());
    }

    return arr; // or heap.getData();
};

/**
 * Quick sort (recursive version)
 * Quick sort with O(NlogN) time complexity
 * 알고리즘
 * 1. 분할 알고리즘
 * - 왼쪽은 pivot 값보다 작은 값으로 오른쪽은 pivot 값보다 큰 값으로 배열한다.
 * 2. Quick Sort 알고리즘
 * - 크기가 1보다 클동안 partition을 재귀적으로 반복한다.
 * - pivot 값은 배열의 제일 끝 값으로 한다.
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
 * Quick sort (none recursive version - use array stack)
 * 알고리즘
 * 1. 분할 알고리즘
 * - 왼쪽은 pivot 값보다 작은 값으로 오른쪽은 pivot 값보다 큰 값으로 배열한다.
 * 2. Quick Sort 알고리즘
 * - 크기가 1보다 클동안 partition을 반복한다.
 * - pivot 값은 배열의 제일 끝 값으로 한다.
 * * 최적화
 * - 별도의 메모리없이 내부 분할로 구현한다.
 * - none recursive를 stack을 이용하여 구현한다.
 * @param arr
 * @param compare
 * @returns {*}
 */
exports.quickNR = function quickNR(arr, compare) {
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

/**
 * Quick sort (none recursive version - use array stack, random pivot)
 * 알고리즘
 * 1. 분할 알고리즘
 * - 왼쪽은 pivot 값보다 작은 값으로 오른쪽은 pivot 값보다 큰 값으로 배열한다.
 * 2. Quick Sort 알고리즘
 * - 크기가 1보다 클동안 partition을 반복한다.
 * * 최적화
 * - 별도의 메모리없이 내부 분할로 구현한다.
 * - none recursive를 stack을 이용하여 구현한다.
 * - pivot값은 난수를 이용하여 랜덤으로 구해 성능을 개선한다.
 * @param arr
 * @param compare
 * @returns {*}
 */
exports.quickNRRandom = function quickNRRandom(arr, compare) {
    compare = compare || function(a, b) {
            return a - b;
        };
    return qsortNRRandom(arr, 0, arr.length - 1, compare);
};

function qsortNRRandom(arr, left, right, compare) {
    var Stack = require('./array-stack');
    var stack = new Stack();
    var i, j, t, p, pIdx;
    stack.push(right);
    stack.push(left);

    while(!stack.isEmpty()) {
        left = stack.pop();
        right = stack.pop();
        if((right - left) + 1 > 1) {

            pIdx = Math.floor((Math.random() * (right - left + 1)) + left);
            p = arr[pIdx];
            arr[pIdx] = arr[right];
            arr[right] = p;
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

/**
 * Quick sort (none recursive version - use array stack, median of three pivot)
 * 알고리즘
 * 1. 분할 알고리즘
 * - 왼쪽은 pivot 값보다 작은 값으로 오른쪽은 pivot 값보다 큰 값으로 배열한다.
 * 2. Quick Sort 알고리즘
 * - 크기가 1보다 클동안 partition을 반복한다.
 * * 최적화
 * - 별도의 메모리없이 내부 분할로 구현한다.
 * - none recursive를 stack을 이용하여 구현한다.
 * - pivot값은 첫번째, 중앙, 끝 값 중 중간 값으로 구한다.
 * - 크기가 3이하인 배열은 bubble sort한다.
 * @param arr
 * @param compare
 * @returns {*}
 */
exports.quickNRMedianOfThree = function quickNRMedianOfThree(arr, compare) {
    compare = compare || function(a, b) {
            return a - b;
        };
    return qsortNRMedianOfThree(arr, 0, arr.length - 1, compare);
};

function qsortNRMedianOfThree(arr, left, right, compare) {
    var Stack = require('./array-stack');
    var stack = new Stack();
    var i, j, t, p, pIdx;
    // 3개의 값 정렬
    var fnSort = function(arr, left, pivot, right, compare) {
        var v;
        if (compare(arr[left], arr[pivot]) > 0) {
            v = arr[left];
            arr[left] = arr[pivot];
            arr[pivot] = v;
        }
        if (compare(arr[pivot], arr[right]) > 0) {
            v = arr[pivot];
            arr[pivot] = arr[right];
            arr[right] = v;
        }
        if (compare(arr[left], arr[pivot]) > 0) {
            v = arr[left];
            arr[left] = arr[pivot];
            arr[pivot] = v;
        }
    }
    stack.push(right);
    stack.push(left);

    while(!stack.isEmpty()) {
        left = stack.pop();
        right = stack.pop();
        if((right - left) + 1 > 3) {
            pIdx = Math.floor((right + left) / 2);
            fnSort(arr, left, pIdx, right, compare);
            p = arr[pIdx];
            arr[pIdx] = arr[right - 1];
            arr[right - 1] = p;

            i = left;
            j = right - 1;

            while(true) {
                while(compare(p, arr[++i]) > 0);
                while(compare(arr[--j], p) > 0);
                if (i >= j) break;
                t = arr[j];
                arr[j] = arr[i];
                arr[i] = t;
            }
            t = arr[right - 1];
            arr[right - 1] = arr[i];
            arr[i] = t;

            stack.push(right);
            stack.push(i + 1);
            stack.push(i - 1);
            stack.push(left);
        } else {
            pIdx = Math.floor((right + left) / 2);
            fnSort(arr, left, pIdx, right, compare);
        }
    }

    return arr;
};

/**
 * Quick sort (최종 개선)
 * 알고리즘
 * - 크기가 일정 크기 이하(200 개체 이)는 insertion sort, 이상(200 개체 초과)은 median of three sort한다.
 * @param arr
 * @param compare
 * @returns {*}
 */
exports.quickSubfile = function quickSubfile(arr, compare) {
    compare = compare || function(a, b) {
            return a - b;
        };
    return qsortSubfile(arr, 0, arr.length - 1, compare);
};

function qsortSubfile(arr, left, right, compare) {
    var Stack = require('./array-stack');
    var stack = new Stack();
    var i, j, t, p, pIdx;
    // 3개의 값 정렬
    var fnSort = function(arr, left, pivot, right, compare) {
        var v;
        if (compare(arr[left], arr[pivot]) > 0) {
            v = arr[left];
            arr[left] = arr[pivot];
            arr[pivot] = v;
        }
        if (compare(arr[pivot], arr[right]) > 0) {
            v = arr[pivot];
            arr[pivot] = arr[right];
            arr[right] = v;
        }
        if (compare(arr[left], arr[pivot]) > 0) {
            v = arr[left];
            arr[left] = arr[pivot];
            arr[pivot] = v;
        }
    }
    stack.push(right);
    stack.push(left);

    while(!stack.isEmpty()) {
        left = stack.pop();
        right = stack.pop();
        if((right - left) + 1 > 50) {
            pIdx = Math.floor((right + left) / 2);
            fnSort(arr, left, pIdx, right, compare);
            p = arr[pIdx];
            arr[pIdx] = arr[right - 1];
            arr[right - 1] = p;

            i = left;
            j = right - 1;

            while(true) {
                while(compare(p, arr[++i]) > 0);
                while(compare(arr[--j], p) > 0);
                if (i >= j) break;
                t = arr[j];
                arr[j] = arr[i];
                arr[i] = t;
            }
            t = arr[right - 1];
            arr[right - 1] = arr[i];
            arr[i] = t;

            stack.push(right);
            stack.push(i + 1);
            stack.push(i - 1);
            stack.push(left);
        } else {
            insertion2(arr, left, right + 1, compare);
        }
    }

    return arr;
};

