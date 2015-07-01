var should = require('should');
var ListStack = require('../../src/js/util/list-stack');

describe('list-stack', function() {
    var stack = null;

    beforeEach(function() {
        stack = new ListStack();
    });

    afterEach(function() {
        stack = null;
    });

    it('should have a working test environment', function() {
        true.should.equal(true);
    });

    it('should instantiate a stack instance', function () {
        stack.should.be.ok;
    });

    it('should be empty when first instantiated', function () {
        stack.isEmpty().should.equal(true);
        stack.size().should.equal(0);
    });

    it('should push data onto the stack', function () {
        stack.push('some test data');
        stack.push('some more test data');
        stack.push('and yet some more...');
        stack.push({
            "id": 1,
            "payload": {
                "number": 42,
                "desc": "the answer"
            }
        });
        stack.size().should.equal(4);
    });

    it('should pop data from the top of the stack', function () {
        stack.push('some test data');
        stack.push('some more test data');
        stack.push('and yet some more...');
        stack.push({
            "id": 1,
            "payload": {
                "number": 42,
                "desc": "the answer"
            }
        });
        stack.size().should.equal(4);
        var top = stack.pop();
        JSON.stringify(top).should.equal(
            '{"id":1,"payload":{"number":42,"desc":"the answer"}}');

        stack.size().should.equal(3);

        stack.pop().should.equal('and yet some more...');
        stack.size().should.equal(2);
    });

    it('should peek at the data on top of the stack', function () {
        stack.push('some test data');
        stack.push('some more test data');
        stack.push('and yet some more...');
        stack.size().should.equal(3);
        stack.peek().should.equal('and yet some more...');
        stack.size().should.equal(3);
    });

    it('should clear the stack of all data', function () {
        stack.push('some test data');
        stack.push('some more test data');
        stack.push('and yet some more...');
        stack.push('and how about some more...');
        stack.size().should.equal(4);
        stack.clear();
        stack.size().should.equal(0);
        stack.isEmpty().should.equal(true);
    });
});