var should = require('should');
var fibonacci = require('../src/js/fibonacci');
var assert = require('assert');

/**
 * example result
 * 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946...
 */
describe('fibonacci', function() {
    it('should have a working test environment', function() {
        true.should.equal(true);
    });

    it('should return fibonacci integer value by recursive function', function() {
        fibonacci.fibonacci(0).should.equal(0);
        fibonacci.fibonacci(1).should.equal(1);
        fibonacci.fibonacci(2).should.equal(1);
        fibonacci.fibonacci(3).should.equal(2);
        fibonacci.fibonacci(4).should.equal(3);
        fibonacci.fibonacci(5).should.equal(5);
        fibonacci.fibonacci(6).should.equal(8);
        fibonacci.fibonacci(7).should.equal(13);
        fibonacci.fibonacci(8).should.equal(21);
        fibonacci.fibonacci(9).should.equal(34);
        fibonacci.fibonacci(10).should.equal(55);
        fibonacci.fibonacci(11).should.equal(89);
        fibonacci.fibonacci(12).should.equal(144);
        fibonacci.fibonacci(13).should.equal(233);
        fibonacci.fibonacci(14).should.equal(377);
        fibonacci.fibonacci(15).should.equal(610);
        fibonacci.fibonacci(16).should.equal(987);
        fibonacci.fibonacci(17).should.equal(1597);
        fibonacci.fibonacci(18).should.equal(2584);
        fibonacci.fibonacci(19).should.equal(4181);
        fibonacci.fibonacci(20).should.equal(6765);
        fibonacci.fibonacci(21).should.equal(10946);
    });

    it('should return fibonacci integer value by non recursive function', function() {
        fibonacci.fibonacciNonRecursive(0).should.equal(0);
        fibonacci.fibonacciNonRecursive(1).should.equal(1);
        fibonacci.fibonacciNonRecursive(2).should.equal(1);
        fibonacci.fibonacciNonRecursive(3).should.equal(2);
        fibonacci.fibonacciNonRecursive(4).should.equal(3);
        fibonacci.fibonacciNonRecursive(5).should.equal(5);
        fibonacci.fibonacciNonRecursive(6).should.equal(8);
        fibonacci.fibonacciNonRecursive(7).should.equal(13);
        fibonacci.fibonacciNonRecursive(8).should.equal(21);
        fibonacci.fibonacciNonRecursive(9).should.equal(34);
        fibonacci.fibonacciNonRecursive(10).should.equal(55);
        fibonacci.fibonacciNonRecursive(11).should.equal(89);
        fibonacci.fibonacciNonRecursive(12).should.equal(144);
        fibonacci.fibonacciNonRecursive(13).should.equal(233);
        fibonacci.fibonacciNonRecursive(14).should.equal(377);
        fibonacci.fibonacciNonRecursive(15).should.equal(610);
        fibonacci.fibonacciNonRecursive(16).should.equal(987);
        fibonacci.fibonacciNonRecursive(17).should.equal(1597);
        fibonacci.fibonacciNonRecursive(18).should.equal(2584);
        fibonacci.fibonacciNonRecursive(19).should.equal(4181);
        fibonacci.fibonacciNonRecursive(20).should.equal(6765);
        fibonacci.fibonacciNonRecursive(21).should.equal(10946);
    });

    it('should return fibonacci integer value by recursive function(memoization)', function() {
        fibonacci.fibonacciMem(0).should.equal(0);
        fibonacci.fibonacciMem(1).should.equal(1);
        fibonacci.fibonacciMem(2).should.equal(1);
        fibonacci.fibonacciMem(3).should.equal(2);
        fibonacci.fibonacciMem(4).should.equal(3);
        fibonacci.fibonacciMem(5).should.equal(5);
        fibonacci.fibonacciMem(6).should.equal(8);
        fibonacci.fibonacciMem(7).should.equal(13);
        fibonacci.fibonacciMem(8).should.equal(21);
        fibonacci.fibonacciMem(9).should.equal(34);
        fibonacci.fibonacciMem(10).should.equal(55);
        fibonacci.fibonacciMem(11).should.equal(89);
        fibonacci.fibonacciMem(12).should.equal(144);
        fibonacci.fibonacciMem(13).should.equal(233);
        fibonacci.fibonacciMem(14).should.equal(377);
        fibonacci.fibonacciMem(15).should.equal(610);
        fibonacci.fibonacciMem(16).should.equal(987);
        fibonacci.fibonacciMem(17).should.equal(1597);
        fibonacci.fibonacciMem(18).should.equal(2584);
        fibonacci.fibonacciMem(19).should.equal(4181);
        fibonacci.fibonacciMem(20).should.equal(6765);
        fibonacci.fibonacciMem(21).should.equal(10946);
    });
});