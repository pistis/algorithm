/**
 * sort 알고리즘 성능 비교
 * - 참고로 C/C++, Java와는 컴퓨팅 파워가 떨어질 수 밖에 없는 스크립트 언어란 점을 감안...
 * 결과
 * quick(재귀버전) : 크기가 조금만 커져도 stack over flow로 인해 사용 불가
 * quickNR(array stack) : 크기가 조금만 커져도 성능이 급격히 느려진다.
 * quickNRRandom, quickNRMedianOfThree, quickSubfile : 크기가 커져도 성능이 급격히 느려지지 않으며 쓸만하다.
 * underscore sortBy of Collections : 크기가 커져도 성능이 급격히 느려지지 않으며 쓸만하다.
 * 결론
 * - 의외로 quickSubfile보다 quickNRMedianOfThree이 결과가 좋다...
 */

var _ = require('underscore');
var Sort = require('../../src/js/util/sort');
var Table = require('cli-table');

//var arrDescend = arrAscend.slice().reverse();
//var arrRandom = _.shuffle(arrAscend);
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

function testQuickSort(sortArr, n) {
    var testResult = [n];

    try {
        SimpleTimer.start();
        Sort.quick(sortArr[0]);
        SimpleTimer.end();
        testResult.push(SimpleTimer.getExecutionTime());
    } catch(e) {
        testResult.push('stack over flow');
    }

    SimpleTimer.start();
    Sort.quickNR(sortArr[1]);
    SimpleTimer.end();
    testResult.push(SimpleTimer.getExecutionTime());

    SimpleTimer.start();
    Sort.quickNRRandom(sortArr[2]);
    SimpleTimer.end();
    testResult.push(SimpleTimer.getExecutionTime());

    SimpleTimer.start();
    Sort.quickNRMedianOfThree(sortArr[3]);
    SimpleTimer.end();
    testResult.push(SimpleTimer.getExecutionTime());

    SimpleTimer.start();
    Sort.quickSubfile(sortArr[4]);
    SimpleTimer.end();
    testResult.push(SimpleTimer.getExecutionTime());

    SimpleTimer.start();
    _.sortBy(sortArr[5]);
    SimpleTimer.end();
    testResult.push(SimpleTimer.getExecutionTime());

    return testResult;
}

/**
 * 순차 배열 성능 테스트(quick sort)
 */
function benchmark_quicksort_sorted() {
    console.log('========================================================================================');
    var resultTable = new Table({
        head: ['sorted array(length)', 'quick(ms)', 'quickNR(ms)', 'quickNRRandom(ms)', 'quickNRMedianOfThree(ms)', 'quickSubfile(ms)', 'underscore(sortBy)'],
        colWidths: [22, 12, 14, 20, 27, 20, 20]
    });

    var arr = _.range(1, 1001);
    var sortArr = [arr, arr.slice(), arr.slice(), arr.slice(), arr.slice(), arr.slice()];
    resultTable.push(testQuickSort(sortArr, 1000));

    var arr = _.range(1, 10001);
    var sortArr = [arr, arr.slice(), arr.slice(), arr.slice(), arr.slice(), arr.slice()];
    resultTable.push(testQuickSort(sortArr, 10000));

    var arr = _.range(1, 20001);
    var sortArr = [arr, arr.slice(), arr.slice(), arr.slice(), arr.slice(), arr.slice()];
    resultTable.push(testQuickSort(sortArr, 20000));

    var arr = _.range(1, 30001);
    var sortArr = [arr, arr.slice(), arr.slice(), arr.slice(), arr.slice(), arr.slice()];
    resultTable.push(testQuickSort(sortArr, 30000));

    console.log(resultTable.toString());
    console.log('========================================================================================');
}

/**
 * 랜덤 배열 성능 테스트(quick sort)
 */
function benchmark_quicksort_random() {
    console.log('========================================================================================');
    var resultTable = new Table({
        head: ['random array(length)', 'quick(ms)', 'quickNR(ms)', 'quickNRRandom(ms)', 'quickNRMedianOfThree(ms)', 'quickSubfile(ms)', 'underscore(sortBy)'],
        colWidths: [22, 12, 14, 20, 27, 20, 20]
    });

    var arr = _.shuffle(_.range(1, 1001));
    var sortArr = [arr, arr.slice(), arr.slice(), arr.slice(), arr.slice(), arr.slice()];
    resultTable.push(testQuickSort(sortArr, 1000));

    var arr = _.shuffle(_.range(1, 10001));
    var sortArr = [arr, arr.slice(), arr.slice(), arr.slice(), arr.slice(), arr.slice()];
    resultTable.push(testQuickSort(sortArr, 10000));

    var arr = _.shuffle(_.range(1, 20001));
    var sortArr = [arr, arr.slice(), arr.slice(), arr.slice(), arr.slice(), arr.slice()];
    resultTable.push(testQuickSort(sortArr, 20000));

    var arr = _.shuffle(_.range(1, 30001));
    var sortArr = [arr, arr.slice(), arr.slice(), arr.slice(), arr.slice(), arr.slice()];
    resultTable.push(testQuickSort(sortArr, 30000));

    console.log(resultTable.toString());
    console.log('========================================================================================');
}

/**
 * 역순 배열 성능 테스트(quick sort)
 */
function benchmark_quicksort_reverse() {
    console.log('========================================================================================');
    var resultTable = new Table({
        head: ['reverse array(length)', 'quick(ms)', 'quickNR(ms)', 'quickNRRandom(ms)', 'quickNRMedianOfThree(ms)', 'quickSubfile(ms)', 'underscore(sortBy)'],
        colWidths: [22, 12, 14, 20, 27, 20, 20]
    });

    var arr = _.range(1, 1001).slice().reverse();
    var sortArr = [arr, arr.slice(), arr.slice(), arr.slice(), arr.slice(), arr.slice()];
    resultTable.push(testQuickSort(sortArr, 1000));

    var arr = _.range(1, 10001).slice().reverse();
    var sortArr = [arr, arr.slice(), arr.slice(), arr.slice(), arr.slice(), arr.slice()];
    resultTable.push(testQuickSort(sortArr, 10000));

    var arr = _.range(1, 20001).slice().reverse();
    var sortArr = [arr, arr.slice(), arr.slice(), arr.slice(), arr.slice(), arr.slice()];
    resultTable.push(testQuickSort(sortArr, 20000));

    var arr = _.range(1, 30001).slice().reverse();
    var sortArr = [arr, arr.slice(), arr.slice(), arr.slice(), arr.slice(), arr.slice()];
    resultTable.push(testQuickSort(sortArr, 30000));

    console.log(resultTable.toString());
    console.log('========================================================================================');
}

benchmark_quicksort_sorted();
benchmark_quicksort_reverse();
benchmark_quicksort_random();