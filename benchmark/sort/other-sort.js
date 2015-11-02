/**
 * insertion, selection, bubble, heap sort 알고리즘 성능 비교
 * - 참고로 C/C++, Java와는 컴퓨팅 파워가 떨어질 수 밖에 없는 스크립트 언어란 점을 감안...
 * 결과
 sorted array
 ┌──────────────────────┬──────────────────┬──────────────────┬──────────────────┬─────┐
 │ sorted array(length) │ selection(ms)    │ insertion(ms)    │ insertion 2(ms)  │ bubble(ms)   │ bubble 2(ms) │ heap     │ underscore(sortBy) │
 ├──────────────────────┼──────────────────┼──────────────────┼──────────────────┼─────┤
 │ 1000                 │ 1                │ 0                │ 0                │ 1            │ 0            │ 4        │ 1                  │
 ├──────────────────────┼──────────────────┼──────────────────┼──────────────────┼─────┤
 │ 10000                │ 300              │ 1                │ 0                │ 285          │ 0            │ 14       │ 5                  │
 ├──────────────────────┼──────────────────┼──────────────────┼──────────────────┼─────┤
 │ 20000                │ 1234             │ 0                │ 0                │ 1184         │ 1            │ 26       │ 5                  │
 ├──────────────────────┼──────────────────┼──────────────────┼──────────────────┼─────┤
 │ 30000                │ 2725             │ 0                │ 0                │ 2578         │ 0            │ 43       │ 9                  │
 └──────────────────────┴──────────────────┴──────────────────┴──────────────────┴─────┘
 random array
 ┌──────────────────────┬──────────────────┬──────────────────┬──────────────────┬─────┐
 │ reverse array(lengt… │ selection(ms)    │ insertion(ms)    │ insertion 2(ms)  │ bubble(ms)   │ bubble 2(ms) │ heap     │ underscore(sortBy) │
 ├──────────────────────┼──────────────────┼──────────────────┼──────────────────┼─────┤
 │ 1000                 │ 4                │ 4                │ 4                │ 5            │ 5            │ 0        │ 1                  │
 ├──────────────────────┼──────────────────┼──────────────────┼──────────────────┼─────┤
 │ 10000                │ 301              │ 355              │ 380              │ 361          │ 382          │ 11       │ 2                  │
 ├──────────────────────┼──────────────────┼──────────────────┼──────────────────┼─────┤
 │ 20000                │ 1216             │ 1440             │ 1532             │ 1433         │ 1530         │ 24       │ 5                  │
 ├──────────────────────┼──────────────────┼──────────────────┼──────────────────┼─────┤
 │ 30000                │ 2706             │ 3212             │ 3439             │ 3247         │ 3449         │ 39       │ 8                  │
 └──────────────────────┴──────────────────┴──────────────────┴──────────────────┴─────┘
 reverse array
 ┌──────────────────────┬──────────────────┬──────────────────┬──────────────────┬─────┐
 │ random array(length) │ selection(ms)    │ insertion(ms)    │ insertion 2(ms)  │ bubble(ms)   │ bubble 2(ms) │ heap     │ underscore(sortBy) │
 ├──────────────────────┼──────────────────┼──────────────────┼──────────────────┼─────┤
 │ 1000                 │ 4                │ 2                │ 1                │ 5            │ 4            │ 1        │ 1                  │
 ├──────────────────────┼──────────────────┼──────────────────┼──────────────────┼─────┤
 │ 10000                │ 317              │ 174              │ 189              │ 435          │ 448          │ 13       │ 2                  │
 ├──────────────────────┼──────────────────┼──────────────────┼──────────────────┼─────┤
 │ 20000                │ 1256             │ 713              │ 774              │ 1754         │ 1823         │ 25       │ 5                  │
 ├──────────────────────┼──────────────────┼──────────────────┼──────────────────┼─────┤
 │ 30000                │ 2846             │ 1825             │ 1770             │ 3915         │ 4070         │ 36       │ 12                 │
 └──────────────────────┴──────────────────┴──────────────────┴──────────────────┴─────┘
 * 결론
 * selection : O(n^2)으로 느리다.
 * insertion or 2 : 정렬된 data에 대해선 빠르다. 일반적으로는 O(n^2)으로 느리다.
 * bubble : O(n^2)으로 느리다.
 * bubble 2 : 정렫된 data에 대해선 빠르다. O(n^2)으로 느리다.
 * heap : 입력자료와 상관없이 일관된 성능을 보여준다. underscore보다는 느리지만 O(NlogN)의 성능으로 selection, insertion  bubble보다는 빠르다.(쓸만하다.)
 * underscore : 빠르다.
 */

var _ = require('underscore');
var Sort = require('../../src/js/util/sort');
var Table = require('cli-table');

var SimpleTimer = {
    start : function() {
        this.startTime = new Date().getTime();
    },

    end : function() {
        this.endTime = new Date().getTime();
    },

    getExecutionTime : function() {
        return this.endTime - this.startTime;
    }
}

function testSort(sortArr, n) {
    var testResult = [n];

    SimpleTimer.start();
    Sort.selection(sortArr[0]);
    SimpleTimer.end();
    testResult.push(SimpleTimer.getExecutionTime());


    SimpleTimer.start();
    Sort.insertion(sortArr[1]);
    SimpleTimer.end();
    testResult.push(SimpleTimer.getExecutionTime());

    SimpleTimer.start();
    Sort.insertion2(sortArr[2], 0, sortArr[2].length);
    SimpleTimer.end();
    testResult.push(SimpleTimer.getExecutionTime());

    SimpleTimer.start();
    Sort.bubble(sortArr[3]);
    SimpleTimer.end();
    testResult.push(SimpleTimer.getExecutionTime());

    SimpleTimer.start();
    Sort.bubble2(sortArr[4]);
    SimpleTimer.end();
    testResult.push(SimpleTimer.getExecutionTime());

    SimpleTimer.start();
    Sort.heap(sortArr[4]);
    SimpleTimer.end();
    testResult.push(SimpleTimer.getExecutionTime());

    SimpleTimer.start();
    _.sortBy(sortArr[5]);
    SimpleTimer.end();
    testResult.push(SimpleTimer.getExecutionTime());

    return testResult;
}

/**
 * 순차 배열 성능 테스트
 */
function benchmark_sort_sorted() {
    console.log('========================================================================================');
    var resultTable = new Table({
        head: ['sorted array(length)', 'selection(ms)', 'insertion(ms)', 'insertion 2(ms)', 'bubble(ms)', 'bubble 2(ms)', 'heap', 'underscore(sortBy)'],
        colWidths: [22, 18, 18, 18, 14, 14, 10, 20]
    });

    var arr = _.range(1, 1001);
    var sortArr = [arr, arr.slice(), arr.slice(), arr.slice(), arr.slice(), arr.slice(), arr.slice()];
    resultTable.push(testSort(sortArr, 1000));

    var arr = _.range(1, 10001);
    var sortArr = [arr, arr.slice(), arr.slice(), arr.slice(), arr.slice(), arr.slice(), arr.slice()];
    resultTable.push(testSort(sortArr, 10000));

    var arr = _.range(1, 20001);
    var sortArr = [arr, arr.slice(), arr.slice(), arr.slice(), arr.slice(), arr.slice(), arr.slice()];
    resultTable.push(testSort(sortArr, 20000));

    var arr = _.range(1, 30001);
    var sortArr = [arr, arr.slice(), arr.slice(), arr.slice(), arr.slice(), arr.slice(), arr.slice()];
    resultTable.push(testSort(sortArr, 30000));

    console.log(resultTable.toString());
    console.log('========================================================================================');
}

/**
 * 랜덤 배열 성능 테스트
 */
function benchmark_quicksort_random() {
    console.log('========================================================================================');
    var resultTable = new Table({
        head: ['random array(length)', 'selection(ms)', 'insertion(ms)', 'insertion 2(ms)', 'bubble(ms)', 'bubble 2(ms)', 'heap', 'underscore(sortBy)'],
        colWidths: [22, 18, 18, 18, 14, 14, 10, 20]
    });

    var arr = _.shuffle(_.range(1, 1001));
    var sortArr = [arr, arr.slice(), arr.slice(), arr.slice(), arr.slice(), arr.slice(), arr.slice()];
    resultTable.push(testSort(sortArr, 1000));

    var arr = _.shuffle(_.range(1, 10001));
    var sortArr = [arr, arr.slice(), arr.slice(), arr.slice(), arr.slice(), arr.slice(), arr.slice()];
    resultTable.push(testSort(sortArr, 10000));

    var arr = _.shuffle(_.range(1, 20001));
    var sortArr = [arr, arr.slice(), arr.slice(), arr.slice(), arr.slice(), arr.slice(), arr.slice()];
    resultTable.push(testSort(sortArr, 20000));

    var arr = _.shuffle(_.range(1, 30001));
    var sortArr = [arr, arr.slice(), arr.slice(), arr.slice(), arr.slice(), arr.slice(), arr.slice()];
    resultTable.push(testSort(sortArr, 30000));

    console.log(resultTable.toString());
    console.log('========================================================================================');
}

/**
 * 역순 배열 성능 테스트
 */
function benchmark_quicksort_reverse() {
    console.log('========================================================================================');
    var resultTable = new Table({
        head: ['reverse array(length)', 'selection(ms)', 'insertion(ms)', 'insertion 2(ms)', 'bubble(ms)', 'bubble 2(ms)', 'heap', 'underscore(sortBy)'],
        colWidths: [22, 18, 18, 18, 14, 14, 10, 20]
    });

    var arr = _.range(1, 1001).slice().reverse();
    var sortArr = [arr, arr.slice(), arr.slice(), arr.slice(), arr.slice(), arr.slice(), arr.slice()];
    resultTable.push(testSort(sortArr, 1000));

    var arr = _.range(1, 10001).slice().reverse();
    var sortArr = [arr, arr.slice(), arr.slice(), arr.slice(), arr.slice(), arr.slice(), arr.slice()];
    resultTable.push(testSort(sortArr, 10000));

    var arr = _.range(1, 20001).slice().reverse();
    var sortArr = [arr, arr.slice(), arr.slice(), arr.slice(), arr.slice(), arr.slice(), arr.slice()];
    resultTable.push(testSort(sortArr, 20000));

    var arr = _.range(1, 30001).slice().reverse();
    var sortArr = [arr, arr.slice(), arr.slice(), arr.slice(), arr.slice(), arr.slice(), arr.slice()];
    resultTable.push(testSort(sortArr, 30000));

    console.log(resultTable.toString());
    console.log('========================================================================================');
}

benchmark_sort_sorted();
benchmark_quicksort_reverse();
benchmark_quicksort_random();