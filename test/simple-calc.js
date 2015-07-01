var should = require('should');
var SimpleCalc = require('../src/js/simple-calc');

describe('simple-calc', function(){
    var calc = null;

    beforeEach(function() {
        calc = new SimpleCalc();
    });

    afterEach(function() {
        calc = null;
    });

    it('should have a working test environment', function() {
        true.should.equal(true);
    });

    it('test...', function() {

    });
});