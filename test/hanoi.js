var should = require('should');
var Hanoi = require('../src/js/hanoi');
var assert = require('assert');

/**
 * count is 2^n - 1
 */

describe('Tower of Hanoi', function() {
    it('should have a working test environment', function() {
        true.should.equal(true);
    });

    it('should return hanoi move count value', function() {
        var hanoi = new Hanoi();
        hanoi.clearCount();
        hanoi.hanoi(2, 1, 2, 3);
        hanoi.getCount().should.equal(Math.pow(2, 2) - 1);

        hanoi.clearCount();
        hanoi.hanoi(5, 1, 2, 3);
        hanoi.getCount().should.equal(Math.pow(2, 5) - 1);

        hanoi.clearCount();
        hanoi.hanoi(8, 1, 2, 3);
        hanoi.getCount().should.equal(Math.pow(2, 8) - 1);

        hanoi.clearCount();
        hanoi.hanoi(10, 1, 2, 3);
        hanoi.getCount().should.equal(Math.pow(2, 10) - 1);

    });

});