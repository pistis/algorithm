/**
 * List의 Node
 * @see https://github.com/jasonsjones/doubly-linked-list 를 만들어보면서 코딩 연습
 */
(function() {
    'use strict';

    function Node(data) {
        this.data = (data != null && data != undefined) ? data : null;
        this.next = null;
        this.prev = null;
    }

    Node.prototype.hasNext = function() {
        return this.next !== null;
    };

    Node.prototype.hasPrev = function() {
        return this.prev !== null;
    };

    Node.prototype.getData = function() {
        return this.data;
    };

    Node.prototype.toString = function() {
        if (typeof this.data === 'object') {
            return JSON.stringify(this.data);
        } else {
            return String(this.data);
        }
    };

    module.exports = Node;
}());