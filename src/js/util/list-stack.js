/**
 * Stack
 * - doubly linked list 구현
 */
(function() {
    'use strict';

    var LinkedList = require('./doubly-linked-list');

    function ListStack() {
        this._list = new LinkedList();
    }

    ListStack.prototype.clear = function() {
        this._list.clear();
        return this;
    };

    ListStack.prototype.isEmpty = function() {
      return this._list.isEmpty();
    };

    ListStack.prototype.length = function() {
        return this._list.getSize();
    };

    ListStack.prototype.peek = function() {
        return !this.isEmpty() ? this._list.getHeadNode().getData() : null;
    };

    ListStack.prototype.pop = function() {
        return !this.isEmpty() ? this._list.removeFirst().getData() : null;
    };

    ListStack.prototype.push = function(data) {
        return this._list.insertFirst(data);
    };

    module.exports = ListStack;
}());