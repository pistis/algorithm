/**
 * List의 Iterator
 * @see https://github.com/jasonsjones/doubly-linked-list 를 만들어보면서 코딩 연습
 */
(function() {
    'use strict';

    function Iterator(list) {
        this.list = list || null;
        this.currentNode = null;
    }

    Iterator.prototype.next = function() {
        var current = this.currentNode;

        if (this.currentNode !== null) {
            this.currentNode = this.currentNode.next;
        }

        return current;
    };

    Iterator.prototype.hasNext = function() {
        return this.currentNode !== null;
    };

    Iterator.prototype.reset = function() {
        this.currentNode = this.list.getHeadNode();
    };

    Iterator.prototype.first = function() {
        this.reset();
        return this.next();
    };

    Iterator.prototype.setList = function(list) {
        this.list = list;
        this.reset();
    };

    Iterator.prototype.each = function(callback) {
        this.reset();
        var node;
        while(this.hasNext()) {
            node = this.next();
            callback(node);
        }
    };

    module.exports = Iterator;
}());