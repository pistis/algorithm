var should = require('should');
var Stack = require('../../src/js/util/stack');

describe('stack', function() {
    var stack = null;

    beforeEach(function() {
        stack = new Stack();
    });

    afterEach(function() {
        stack = null;
    });

    it('should have a working test environment', function() {
        true.should.equal(true);
    });

    it('test clear and isEmpty', function() {
        stack.isEmpty().should.equal(true);
        stack.push(true);
        stack.length().should.equal(1);
        stack.isEmpty().should.equal(false);
        stack.clear();
        stack.length().should.equal(0);
        stack.isEmpty().should.equal(true);
    });

    it('test pop and push and peek and length', function() {
        stack.isEmpty().should.equal(true);
        stack.push(1);
        stack.push(2);
        stack.push(3);
        stack.push(4);
        stack.peek().should.equal(4);
        stack.pop().should.equal(4);
        stack.pop().should.equal(3);
        stack.pop().should.equal(2);
        stack.push(10);
        stack.push(20);
        stack.push(30);
        stack.length().should.equal(4);
        stack.peek().should.equal(30);
        stack.pop().should.equal(30);
        stack.pop().should.equal(20);
        stack.pop().should.equal(10);
        stack.length().should.equal(1);
        stack.pop().should.equal(1);
        should.not.exist(stack.peek());
        should.not.exist(stack.pop());
        stack.isEmpty().should.equal(true);
    });
});