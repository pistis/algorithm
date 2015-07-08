var _ = require('underscore');
var should = require('should');
var Sort = require('../../src/js/util/sort');

describe('sort', function() {
    var arrAscend = null;
    var arrDescend = null;
    beforeEach(function() {
        arrAscend = _.range(1, 16);
        arrDescend =  _.range(16, 1);
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
});