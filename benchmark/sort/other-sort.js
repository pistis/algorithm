/**
 * insertion, selection, bubble, heap sort 알고리즘 성능 비교
 * - 참고로 C/C++, Java와는 컴퓨팅 파워가 떨어질 수 밖에 없는 스크립트 언어란 점을 감안...
 * 결과
 sorted array
 ┌──────────────────────┬──────────────────┬──────────────────┬──────────────────┬──────────────┬──────────────┬──────────┬──────────────┬──────────────────┬──────────────────┬────────────────────┐
 │ sorted array(length) │ selection(ms)    │ insertion(ms)    │ insertion 2(ms)  │ bubble(ms)   │ bubble 2(ms) │ heap     │ heap 2       │ merge            │ merge2           │ underscore(sortBy) │
 ├──────────────────────┼──────────────────┼──────────────────┼──────────────────┼──────────────┼──────────────┼──────────┼──────────────┼──────────────────┼──────────────────┼────────────────────┤
 │ 1000                 │ 4                │ 1                │ 0                │ 3            │ 1            │ 8        │ 5            │ 5                │ 1                │ 3                  │
 ├──────────────────────┼──────────────────┼──────────────────┼──────────────────┼──────────────┼──────────────┼──────────┼──────────────┼──────────────────┼──────────────────┼────────────────────┤
 │ 10000                │ 693              │ 1                │ 1                │ 684          │ 1            │ 33       │ 11           │ 27               │ 3                │ 8                  │
 ├──────────────────────┼──────────────────┼──────────────────┼──────────────────┼──────────────┼──────────────┼──────────┼──────────────┼──────────────────┼──────────────────┼────────────────────┤
 │ 20000                │ 2179             │ 1                │ 0                │ 2170         │ 2            │ 68       │ 28           │ 41               │ 6                │ 9                  │
 ├──────────────────────┼──────────────────┼──────────────────┼──────────────────┼──────────────┼──────────────┼──────────┼──────────────┼──────────────────┼──────────────────┼────────────────────┤
 │ 30000                │ 5313             │ 0                │ 1                │ 5099         │ 1            │ 112      │ 40           │ 73               │ 11               │ 15                 │
 └──────────────────────┴──────────────────┴──────────────────┴──────────────────┴──────────────┴──────────────┴──────────┴──────────────┴──────────────────┴──────────────────┴────────────────────┘

 random array
 ┌──────────────────────┬──────────────────┬──────────────────┬──────────────────┬──────────────┬──────────────┬──────────┬──────────────┬──────────────────┬──────────────────┬────────────────────┐
 │ reverse array(lengt… │ selection(ms)    │ insertion(ms)    │ insertion 2(ms)  │ bubble(ms)   │ bubble 2(ms) │ heap     │ heap 2       │ merge            │ merge2           │ underscore(sortBy) │
 ├──────────────────────┼──────────────────┼──────────────────┼──────────────────┼──────────────┼──────────────┼──────────┼──────────────┼──────────────────┼──────────────────┼────────────────────┤
 │ 1000                 │ 6                │ 6                │ 7                │ 8            │ 8            │ 2        │ 1            │ 4                │ 1                │ 1                  │
 ├──────────────────────┼──────────────────┼──────────────────┼──────────────────┼──────────────┼──────────────┼──────────┼──────────────┼──────────────────┼──────────────────┼────────────────────┤
 │ 10000                │ 656              │ 701              │ 672              │ 780          │ 701          │ 23       │ 8            │ 61               │ 3                │ 2                  │
 ├──────────────────────┼──────────────────┼──────────────────┼──────────────────┼──────────────┼──────────────┼──────────┼──────────────┼──────────────────┼──────────────────┼────────────────────┤
 │ 20000                │ 2355             │ 2580             │ 2813             │ 2866         │ 2807         │ 81       │ 16           │ 115              │ 8                │ 11                 │
 ├──────────────────────┼──────────────────┼──────────────────┼──────────────────┼──────────────┼──────────────┼──────────┼──────────────┼──────────────────┼──────────────────┼────────────────────┤
 │ 30000                │ 5068             │ 5728             │ 5976             │ 6176         │ 6124         │ 74       │ 23           │ 173              │ 6                │ 13                 │
 └──────────────────────┴──────────────────┴──────────────────┴──────────────────┴──────────────┴──────────────┴──────────┴──────────────┴──────────────────┴──────────────────┴────────────────────┘

 reverse array
 ┌──────────────────────┬──────────────────┬──────────────────┬──────────────────┬──────────────┬──────────────┬──────────┬──────────────┬──────────────────┬──────────────────┬────────────────────┐
 │ random array(length) │ selection(ms)    │ insertion(ms)    │ insertion 2(ms)  │ bubble(ms)   │ bubble 2(ms) │ heap     │ heap 2       │ merge            │ merge2           │ underscore(sortBy) │
 ├──────────────────────┼──────────────────┼──────────────────┼──────────────────┼──────────────┼──────────────┼──────────┼──────────────┼──────────────────┼──────────────────┼────────────────────┤
 │ 1000                 │ 6                │ 3                │ 3                │ 8            │ 6            │ 3        │ 1            │ 5                │ 1                │ 1                  │
 ├──────────────────────┼──────────────────┼──────────────────┼──────────────────┼──────────────┼──────────────┼──────────┼──────────────┼──────────────────┼──────────────────┼────────────────────┤
 │ 10000                │ 585              │ 289              │ 326              │ 783          │ 975          │ 197      │ 27           │ 102              │ 5                │ 10                 │
 ├──────────────────────┼──────────────────┼──────────────────┼──────────────────┼──────────────┼──────────────┼──────────┼──────────────┼──────────────────┼──────────────────┼────────────────────┤
 │ 20000                │ 3342             │ 1394             │ 1409             │ 3627         │ 4331         │ 83       │ 24           │ 123              │ 8                │ 12                 │
 ├──────────────────────┼──────────────────┼──────────────────┼──────────────────┼──────────────┼──────────────┼──────────┼──────────────┼──────────────────┼──────────────────┼────────────────────┤
 │ 30000                │ 6326             │ 3428             │ 3332             │ 7164         │ 7327         │ 99       │ 31           │ 177              │ 17               │ 24                 │
 └──────────────────────┴──────────────────┴──────────────────┴──────────────────┴──────────────┴──────────────┴──────────┴──────────────┴──────────────────┴──────────────────┴────────────────────┘


 * 결론
 * selection : O(n^2)으로 느리다.
 * insertion or 2 : 정렬된 data에 대해선 빠르다. 일반적으로는 O(n^2)으로 느리다.
 * bubble : O(n^2)으로 느리다.
 * bubble 2 : 정렫된 data에 대해선 정말 빠르다. 일반적으로는 O(n^2)으로 느리다.
 * heap : 입력자료와 상관없이 일관된 성능을 보여준다. underscore보다는 느리지만 O(NlogN)의 성능으로 selection, insertion  bubble보다는 빠르다.(쓸만하다.)
 * heap 2 : heap과 동일하나, heap 생성시 내부노드 downheap 알고리즘 최적화로 인해 전체적으로 두배이상의 성능 향상이 있다.
 * merge :
 * merge2 :
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
    Sort.heap2(sortArr[5]);
    SimpleTimer.end();
    testResult.push(SimpleTimer.getExecutionTime());

    SimpleTimer.start();
    Sort.merge(sortArr[6]);
    SimpleTimer.end();
    testResult.push(SimpleTimer.getExecutionTime());

    SimpleTimer.start();
    Sort.merge2(sortArr[7]);
    SimpleTimer.end();
    testResult.push(SimpleTimer.getExecutionTime());

    SimpleTimer.start();
    _.sortBy(sortArr[8]);
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
        head: ['sorted array(length)', 'selection(ms)', 'insertion(ms)', 'insertion 2(ms)', 'bubble(ms)', 'bubble 2(ms)', 'heap', 'heap 2', 'merge', 'merge2', 'underscore(sortBy)'],
        colWidths: [22, 18, 18, 18, 14, 14, 10, 14, 18, 18, 20]
    });

    var arr = _.range(1, 1001);
    var sortArr = [arr, arr.slice(), arr.slice(), arr.slice(), arr.slice(), arr.slice(), arr.slice(), arr.slice(), arr.slice(), arr.slice()];
    resultTable.push(testSort(sortArr, 1000));

    var arr = _.range(1, 10001);
    var sortArr = [arr, arr.slice(), arr.slice(), arr.slice(), arr.slice(), arr.slice(), arr.slice(), arr.slice(), arr.slice(), arr.slice()];
    resultTable.push(testSort(sortArr, 10000));

    var arr = _.range(1, 20001);
    var sortArr = [arr, arr.slice(), arr.slice(), arr.slice(), arr.slice(), arr.slice(), arr.slice(), arr.slice(), arr.slice(), arr.slice()];
    resultTable.push(testSort(sortArr, 20000));

    var arr = _.range(1, 30001);
    var sortArr = [arr, arr.slice(), arr.slice(), arr.slice(), arr.slice(), arr.slice(), arr.slice(), arr.slice(), arr.slice(), arr.slice()];
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
        head: ['random array(length)', 'selection(ms)', 'insertion(ms)', 'insertion 2(ms)', 'bubble(ms)', 'bubble 2(ms)', 'heap', 'heap 2', 'merge', 'merge2', 'underscore(sortBy)'],
        colWidths: [22, 18, 18, 18, 14, 14, 10, 14, 18, 18, 20]
    });

    var arr = _.shuffle(_.range(1, 1001));
    var sortArr = [arr, arr.slice(), arr.slice(), arr.slice(), arr.slice(), arr.slice(), arr.slice(), arr.slice(), arr.slice(), arr.slice()];
    resultTable.push(testSort(sortArr, 1000));

    var arr = _.shuffle(_.range(1, 10001));
    var sortArr = [arr, arr.slice(), arr.slice(), arr.slice(), arr.slice(), arr.slice(), arr.slice(), arr.slice(), arr.slice(), arr.slice()];
    resultTable.push(testSort(sortArr, 10000));

    var arr = _.shuffle(_.range(1, 20001));
    var sortArr = [arr, arr.slice(), arr.slice(), arr.slice(), arr.slice(), arr.slice(), arr.slice(), arr.slice(), arr.slice(), arr.slice()];
    resultTable.push(testSort(sortArr, 20000));

    var arr = _.shuffle(_.range(1, 30001));
    var sortArr = [arr, arr.slice(), arr.slice(), arr.slice(), arr.slice(), arr.slice(), arr.slice(), arr.slice(), arr.slice(), arr.slice()];
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
        head: ['reverse array(length)', 'selection(ms)', 'insertion(ms)', 'insertion 2(ms)', 'bubble(ms)', 'bubble 2(ms)', 'heap', 'heap 2', 'merge', 'merge2', 'underscore(sortBy)'],
        colWidths: [22, 18, 18, 18, 14, 14, 10, 14, 18, 18, 20]
    });

    var arr = _.range(1, 1001).slice().reverse();
    var sortArr = [arr, arr.slice(), arr.slice(), arr.slice(), arr.slice(), arr.slice(), arr.slice(), arr.slice(), arr.slice(), arr.slice()];
    resultTable.push(testSort(sortArr, 1000));

    var arr = _.range(1, 10001).slice().reverse();
    var sortArr = [arr, arr.slice(), arr.slice(), arr.slice(), arr.slice(), arr.slice(), arr.slice(), arr.slice(), arr.slice(), arr.slice()];
    resultTable.push(testSort(sortArr, 10000));

    var arr = _.range(1, 20001).slice().reverse();
    var sortArr = [arr, arr.slice(), arr.slice(), arr.slice(), arr.slice(), arr.slice(), arr.slice(), arr.slice(), arr.slice(), arr.slice()];
    resultTable.push(testSort(sortArr, 20000));

    var arr = _.range(1, 30001).slice().reverse();
    var sortArr = [arr, arr.slice(), arr.slice(), arr.slice(), arr.slice(), arr.slice(), arr.slice(), arr.slice(), arr.slice(), arr.slice()];
    resultTable.push(testSort(sortArr, 30000));

    console.log(resultTable.toString());
    console.log('========================================================================================');
}

benchmark_sort_sorted();
benchmark_quicksort_reverse();
benchmark_quicksort_random();