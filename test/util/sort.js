var _ = require('underscore');
var should = require('should');
var Sort = require('../../src/js/util/sort');

describe('sort', function() {
    var arrAscend = null;
    var arrDescend = null;
    beforeEach(function() {
        arrAscend = _.range(1, 16);
        arrDescend =  _.range(15, 0, -1);
    });

    afterEach(function() {
        arrAscend = null;
        arrDescend = null;
    });

    it('should have a working test environment', function() {
        true.should.equal(true);
    });

    it('should selectionsort with ascending.', function () {
        var testArr = [];

        testArr = _.shuffle(arrAscend);
        testArr = Sort.selection(testArr);
        testArr.should.eql(arrAscend);
    });

    it('should selectionsort with comparator', function () {
        var testArr = [];
        var compare = function(a, b) {
            return b - a;
        }

        testArr = _.shuffle(arrDescend);
        testArr = Sort.selection(testArr, compare);
        testArr.should.eql(arrDescend);
    });

    it('should insertionsort with ascending.', function () {
        var testArr = [];

        testArr = _.shuffle(arrAscend);
        testArr = Sort.insertion(testArr);
        testArr.should.eql(arrAscend);
    });

    it('should insertionsort with comparator', function () {
        var testArr = [];
        var compare = function(a, b) {
            return b - a;
        }

        testArr = _.shuffle(arrDescend);
        testArr = Sort.insertion(testArr, compare);
        testArr.should.eql(arrDescend);
    });

    it('should insertionsort 2 with ascending.', function () {
        var testArr = [];

        testArr = _.shuffle(arrAscend);
        testArr = Sort.insertion2(testArr, 0, testArr.length);
        testArr.should.eql(arrAscend);
    });

    it('should insertionsort 2 with comparator', function () {
        var testArr = [];
        var compare = function(a, b) {
            return b - a;
        }

        testArr = _.shuffle(arrDescend);
        testArr = Sort.insertion2(testArr, 0, testArr.length, compare);
        testArr.should.eql(arrDescend);
    });

    it('should bubblesort with ascending.', function () {
        var testArr = [];
        testArr = _.shuffle(arrAscend);
        testArr = Sort.bubble(testArr);
        testArr.should.eql(arrAscend);
    });

    it('should bubblesort with comparator.', function () {
        var testArr = [];
        var compare = function(a, b) {
            return b - a;
        }

        testArr = _.shuffle(arrDescend);
        testArr = Sort.bubble(testArr, compare);
        testArr.should.eql(arrDescend);
    });

    it('should bubblesort2 with ascending.', function () {
        var testArr = [];
        testArr = _.shuffle(arrAscend);
        testArr = Sort.bubble2(testArr);
        testArr.should.eql(arrAscend);
    });

    it('should bubblesort2 with comparator.', function () {
        var testArr = [];
        var compare = function(a, b) {
            return b - a;
        };

        testArr = _.shuffle(arrDescend);
        testArr = Sort.bubble2(testArr, compare);
        testArr.should.eql(arrDescend);
    });

    it('should quicksort with ascending.', function () {
        var testArr = [];
        testArr = _.shuffle(arrAscend);
        testArr = Sort.quick(testArr);
        testArr.should.eql(arrAscend);
    });

    it('should quicksort(none recursive version) with ascending.', function () {
        var testArr = [];
        testArr = _.shuffle(arrAscend);
        testArr = Sort.quickNR(testArr);
        testArr.should.eql(arrAscend);
    });

    it('should quicksort(none recursive version, use random pivot) with ascending.', function () {
        var testArr = [];
        testArr = _.shuffle(arrAscend);
        testArr = Sort.quickNRRandom(testArr);
        testArr.should.eql(arrAscend);
    });

    it('should quicksort(none recursive version, use median of three pivot) with ascending.', function () {
        var testArr = [];
        testArr = _.shuffle(arrAscend);
        testArr = Sort.quickNRMedianOfThree(testArr);
        testArr.should.eql(arrAscend);
    });

    it('should quicksort(none recursive version, use subfile(median of three && insertion sort) with ascending.', function () {
        var testArr = [];
        testArr = _.shuffle(arrAscend);
        testArr = Sort.quickSubfile(testArr);
        testArr.should.eql(arrAscend);
    });

    it('should quicksort with comparator.', function () {
        var testArr = [];
        var compare = function(a, b) {
            return b - a;
        };
        testArr = _.shuffle(arrDescend);
        testArr = Sort.quick(testArr, compare);
        testArr.should.eql(arrDescend);
    });

    it('should quicksort(none recursive version) with comparator.', function () {
        var testArr = [];
        var compare = function(a, b) {
            return b - a;
        };
        testArr = _.shuffle(arrDescend);
        testArr = Sort.quickNR(testArr, compare);
        testArr.should.eql(arrDescend);
    });

    it('should quicksort(none recursive version, use random pivot) with comparator.', function () {
        var testArr = [];
        var compare = function(a, b) {
            return b - a;
        };
        testArr = _.shuffle(arrDescend);
        testArr = Sort.quickNRRandom(testArr, compare);
        testArr.should.eql(arrDescend);
    });

    it('should quicksort(none recursive version, use median of three pivot) with comparator.', function () {
        var testArr = [];
        var compare = function(a, b) {
            return b - a;
        };
        testArr = _.shuffle(arrDescend);
        testArr = Sort.quickNRMedianOfThree(testArr, compare);
        testArr.should.eql(arrDescend);
    });

    it('should heapsort with ascending.', function () {
        var testArr = [];

        testArr = _.shuffle(arrAscend);
        testArr = Sort.heap(testArr);
        testArr.should.eql(arrAscend);
    });

    it('should heapsort with comparator', function () {
        var testArr = [];
        var compare = function(a, b) {
            return b - a;
        }

        testArr = _.shuffle(arrDescend);
        testArr = Sort.heap(testArr, compare);
        testArr.should.eql(arrDescend);
    });

    it('should improve heapsort with ascending.', function () {
        var testArr = [];

        testArr = _.shuffle(arrAscend);
        testArr = Sort.heap2(testArr);
        testArr.should.eql(arrAscend);
    });

    it('should improve heapsort with comparator', function () {
        var testArr = [];
        var compare = function(a, b) {
            return b - a;
        }

        testArr = _.shuffle(arrDescend);
        testArr = Sort.heap2(testArr, compare);
        testArr.should.eql(arrDescend);
    });

    it('should mergesort with ascending.', function () {
        var testArr = [];

        testArr = _.shuffle(arrAscend);
        testArr = Sort.merge(testArr);
        testArr.should.eql(arrAscend);
    });

    it('should mergesort with comparator', function () {
        var testArr = [];
        var compare = function(a, b) {
            return b - a;
        }
        testArr = _.shuffle(arrDescend);
        testArr = Sort.merge(testArr, compare);
        testArr.should.eql(arrDescend);
    });
});