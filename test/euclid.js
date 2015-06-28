var euclid = require('../src/js/euclid');
var assert = require('assert');

describe('euclid', function() {
    describe('#getGCD()', function() {
       it('should return integer value when the value is integer', function() {
           assert.equal(10, euclid.getGCD(280, 30));
           assert.equal(10, euclid.getGCD(280, 30));
       });
    });
    describe('#getGCDOptimization()', function() {
        it('should return integer value when the value is integer', function() {
            assert.equal(10, euclid.getGCDOptimization(280, 30));
            assert.equal(10, euclid.getGCDOptimization(280, 30));
        });
    });
    describe('#getGCDRecursion()', function() {
        it('should return integer value when the value is integer', function() {
            assert.equal(10, euclid.getGCDRecursion(280, 30));
            assert.equal(10, euclid.getGCDRecursion(280, 30));
        });
    })
});