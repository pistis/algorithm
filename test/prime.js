var prime = require('../src/js/prime');
var assert = require('assert');

/**
 * 테스트 세트 참고
 * 위키 : https://ko.wikipedia.org/wiki/%EC%86%8C%EC%88%98_(%EC%88%98%EB%A1%A0)
 */
describe('prime', function() {
    describe('#isPrime()', function() {
       it('should return boolean value', function() {
           assert.equal(true, prime.isPrime(5));
           assert.equal(true, prime.isPrime(7));
           assert.equal(true, prime.isPrime(163));
           assert.equal(true, prime.isPrime(173));
           assert.equal(true, prime.isPrime(191));
           assert.equal(true, prime.isPrime(199));

           assert.equal(false, prime.isPrime(50));
           assert.equal(false, prime.isPrime(158));
           assert.equal(false, prime.isPrime(155));
           assert.equal(false, prime.isPrime(1235));
           assert.equal(false, prime.isPrime(1533));
           assert.equal(false, prime.isPrime(213));
           assert.equal(false, prime.isPrime(512));
       });
    });
    describe('#getPrimeNumberCount()', function() {
        it('should return integer value', function() {
            assert.equal(172, prime.getPrimeNumberCount(1024));
            assert.equal(46, prime.getPrimeNumberCount(199));
        });
    });
});