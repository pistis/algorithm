var should = require('should');
var BinaryHeap = require('../../src/js/util/binary-heap');

describe('binary-heap', function() {

    beforeEach(function() {
    });

    afterEach(function() {
    });

    it('should have a working test environment', function() {
        true.should.equal(true);
    });

    it('test insert.', function() {
        var heap = new BinaryHeap();
        heap.getLength().should.equal(0);
        heap.insert(5);
        heap.insert(2);
        heap.insert(7);
        heap.insert(9);
        heap.getLength().should.equal(4);
        heap.peek().should.equal(9);
        heap.insert(11);
        heap.peek().should.equal(11);
        heap.insert(3);
        heap.insert(20);
        heap.peek().should.equal(20);
        heap.insert(4);
        heap.insert(9);
        heap.getLength().should.equal(9);
    });

    it('test extract.', function() {
        var arr = [5, 2, 7, 9, 11, 3, 20, 4, 9];
        var heap = new BinaryHeap();
        var len = arr.length;
        for (var i = 0; i < len; i++) {
            heap.insert(arr[i]);
        }
        heap.getLength().should.equal(9);
        heap.peek().should.equal(20);

        heap.extract().should.equal(20);
        heap.extract().should.equal(11);
        heap.extract().should.equal(9);
        heap.extract().should.equal(9);
        heap.extract().should.equal(7);
        heap.extract().should.equal(5);
        heap.extract().should.equal(4);
        heap.extract().should.equal(3);
        heap.extract().should.equal(2);
    });
});