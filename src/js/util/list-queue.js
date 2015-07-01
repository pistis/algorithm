/**
 * Queue
 * - doubly linked list 구현
 */
(function() {
    'use strict';

    var LinkedList = require('./doubly-linked-list');

    function ListQueue() {
        this._list = new LinkedList();
    }

    ListQueue.prototype.clear = function() {
        this._list.clear();
        return this;
    };

    ListQueue.prototype.isEmpty = function() {
      return this._list.isEmpty();
    };

    ListQueue.prototype.size = function() {
        return this._list.getSize();
    };

    ListQueue.prototype.peek = function() {
        return !this.isEmpty() ? this._list.getHeadNode().getData() : null;
    };

    ListQueue.prototype.dequeue = function() {
        return !this.isEmpty() ? this._list.removeFirst().getData() : null;
    };

    ListQueue.prototype.enqueue = function(data) {
        return this._list.insert(data);
    };

    module.exports = ListQueue;
}());