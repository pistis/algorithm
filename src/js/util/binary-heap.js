/**
 * Heap
 * - array로 구현(Full binary tree)
 * -- Tree를 배열로 표현하는 방법
 * 1. level order traversal을 이용한다.
 * 2. 노드의 번호가 배열의 인덱스이다.(1부터 시작)
 * 3. Full binary tree를 표현하는데에 매우 효율적이다.
 * 4. Child/Parent의 관계
 *  가. j노드의 부모노드는 j/2이다.
 *  나. j노드의 왼쪽 자식은 j*2이고, 오른쪽 자식은 j*2 + 1이다.
 *  다. 자료수 N의 절반까지가 (N/2) 내부노드이다.
 */
(function() {
    'use strict';

    function BinaryHeap(data, compare) {
        this.data = data || [];
        this.heapLen = 0;
        this.compare = compare || function(a, b) {
                return a - b;
            };
    }

    BinaryHeap.prototype.get = function(idx) {
        return this.data[idx - 1];
    };

    BinaryHeap.prototype.set = function(idx, value) {
        this.data[idx - 1] = value;
    };

    BinaryHeap.prototype.insert = function(value) {
        this.set(++this.heapLen, value);
        this.upHeap(this.heapLen);
    };

    BinaryHeap.prototype.upHeap = function(idx) {
        var value = this.get(idx);
        //if(compare(arr[minIdx], arr[j]) > 0) {
        while (this.compare(value, this.get(parseInt(idx/2))) >= 0 && idx > 1) {
            this.set(idx, this.get(parseInt(idx/2)));
            idx = parseInt(idx/2);
        }
        this.set(idx, value);
    };

    BinaryHeap.prototype.extract = function() {
        var value = this.get(1);
        this.set(1, this.get(this.heapLen--));
        this.downHeap(1);
        return value;
    };

    BinaryHeap.prototype.downHeap = function(idx) {
        var value = this.get(idx);
        var i;
        while (idx <= this.heapLen / 2) {    // 내부노드일때에만
            i = idx * 2;
            if (i < this.heapLen && this.compare(this.get(i+1), this.get(i)) > 0) i++;
            if (this.compare(value, this.get(i)) >= 0 || value == this.get(i)) break;
            this.set(idx, this.get(i));
            idx = i;
        }
        this.set(idx, value);
    };

    BinaryHeap.prototype.peek = function() {
        return this.get(1);
    };

    BinaryHeap.prototype.getLength = function() {
        return this.heapLen;
    };

    BinaryHeap.prototype.getData = function() {
        return this.data;
    };

    module.exports = BinaryHeap;
}());