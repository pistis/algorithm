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

    it('should transform to postfix from infix', function() {
        calc.infixToPostfix('1+2').should.equal('1 2 +');
        calc.infixToPostfix('(1+2)').should.equal('1 2 +');
        calc.infixToPostfix('3+(1+2)').should.equal('3 1 2 + +');
        calc.infixToPostfix('(12+(34*56))').should.equal('12 34 56 * +');
        calc.infixToPostfix('(12 + (34 * 56))').should.equal('12 34 56 * +');
        calc.infixToPostfix('( 12 + ( 34 * 56 ) )').should.equal('12 34 56 * +');
        calc.infixToPostfix('(2*(3+6/2)+2)/4+3').should.equal('2 3 6 2 / + * 2 + 4 / 3 +');
        calc.infixToPostfix('(2 * (3 + 6 / 2) + 2) / 4 + 3').should.equal('2 3 6 2 / + * 2 + 4 / 3 +');
        calc.infixToPostfix('( 2 * ( 3 + 6 / 2 ) + 2 ) / 4 + 3').should.equal('2 3 6 2 / + * 2 + 4 / 3 +');
    });

    it('should get priority from operator', function() {
        calc.getPrecedence('(').should.equal(0);
        calc.getPrecedence('+').should.equal(1);
        calc.getPrecedence('-').should.equal(1);
        calc.getPrecedence('*').should.equal(2);
        calc.getPrecedence('/').should.equal(2);
    });

    it('should calculate the transform to postfix from infix.', function() {
        calc.calcInfix('1+2').should.equal(3);
        calc.calcInfix('(1+2)').should.equal(3);
        calc.calcInfix('3+(1+2)').should.equal(6);
        calc.calcInfix('(12+(34*56))').should.equal(1916);
        calc.calcInfix('(12 + (34 * 56))').should.equal(1916);
        calc.calcInfix('( 12 + ( 34 * 56 ) )').should.equal(1916);
        calc.calcInfix('(2*(3+6/2)+2)/4+3').should.equal(6.5);
        calc.calcInfix('(2 * (3 + 6 / 2) + 2) / 4 + 3').should.equal(6.5);
        calc.calcInfix('( 2 * ( 3 + 6 / 2 ) + 2 ) / 4 + 3').should.equal(6.5);
    });
});