/**
 * Doubly Linked List
 * @see https://github.com/jasonsjones/doubly-linked-list 를 만들어보면서 코딩 연습
 */

(function(){
    'use strict';

    var _ = require('underscore');
    var Node = require('./list-node');
    var Iterator = require('./list-iterator');

    function DoublyLinkedList() {
        this.head = null;
        this.tail = null;
        this.size = 0;

        this.iterator = new Iterator(this);
    }

    DoublyLinkedList.prototype.createNewNode = function(data) {
        return new Node(data);
    };

    DoublyLinkedList.prototype.getHeadNode = function() {
        return this.head;
    };

    DoublyLinkedList.prototype.getTailNode = function() {
        return this.tail;
    };

    DoublyLinkedList.prototype.isEmpty = function() {
        return this.size === 0;
    };

    DoublyLinkedList.prototype.getSize = function() {
        return this.size;
    };

    DoublyLinkedList.prototype.clear = function() {
        while(!this.isEmpty()) {
            this.remove();
        }
    };

    DoublyLinkedList.prototype.checkOutOfBounds = function(index) {
        return index < 0 || index > this.getSize() - 1;
    };



    // ####### insert #######
    DoublyLinkedList.prototype.insert = function(data) {
        var newNode = this.createNewNode(data);
        if (this.isEmpty()) {
            this.head = this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.size += 1;

        return true;
    };

    DoublyLinkedList.prototype.insertFirst = function(data) {
        if (this.isEmpty()) {
            this.insert(data);
        } else {
            var newNode = this.createNewNode(data);
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
            this.size += 1;
        }

        return true;
    };

    DoublyLinkedList.prototype.insertAt = function(index, data) {
        var current = this.getHeadNode(),
            newNode = this.createNewNode(data),
            position = 0;

        if (this.checkOutOfBounds(index)) {
            return false;
        }

        if (index === 0) {
            return this.insertFirst(data);
        }

        while(position < index) {
            current = current.next;
            position += 1;
        }

        current.prev.next = newNode;
        newNode.prev = current.prev;
        current.prev = newNode;
        newNode.next = current;

        this.size += 1;

        return true;
    };

    DoublyLinkedList.prototype.insertBefore = function(data, dataToInsert) {
        return this.insertAt(this.indexOf(data), dataToInsert);
    };

    DoublyLinkedList.prototype.insertAfter = function(data, dataToInsert) {
        var index = this.indexOf(data);
        var size = this.getSize();

        if (index + 1 === size) {
            return this.insert(dataToInsert);
        } else {
            return this.insertAt(index + 1, dataToInsert);
        }
    };



    // ####### remove #######
    DoublyLinkedList.prototype.remove = function() {
        if (this.isEmpty()) {
            return null;
        }

        var nodeToRemove = this.getTailNode();

        if (this.getSize() === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.getTailNode().prev;
            this.tail.next = null;
        }

        this.size -= 1;

        return nodeToRemove;
    };

    DoublyLinkedList.prototype.removeFirst = function() {
        if (this.isEmpty()) {
            return null;
        }

        var nodeToRemove;

        if (this.getSize() === 1) {
            nodeToRemove = this.remove();
        } else {
            nodeToRemove = this.getHeadNode();
            this.head = this.head.next;
            this.head.prev = null;
            this.size -= 1;
        }

        return nodeToRemove;
    };

    DoublyLinkedList.prototype.removeAt = function(index) {
        var nodeToRemove = this.findAt(index);

        if (this.checkOutOfBounds(index)) {
            return null;
        }

        if (index === 0) {
            return this.removeFirst();
        }

        if (index === this.getSize - 1) {
            return this.remove();
        }

        nodeToRemove.prev.next = nodeToRemove.next;
        nodeToRemove.next.prev = nodeToRemove.prev;
        nodeToRemove.next = nodeToRemove.prev = null;

        this.size -= 1;

        return nodeToRemove;
    };

    DoublyLinkedList.prototype.removeNode = function(data) {
        return this.removeAt(this.indexOf(data));
    };



    // ####### find #######
    DoublyLinkedList.prototype.indexOf = function(data) {
        this.iterator.reset();

        var current = null,
            index = 0;

        while(this.iterator.hasNext()) {
            current = this.iterator.next();
            if (_.isEqual(current.getData(), data)) {
                return index;
            }
            index += 1;
        }

        return -1;
    };

    DoublyLinkedList.prototype.find = function(data) {
        this.iterator.reset();

        var current;

        while(this.iterator.hasNext()) {
            current = this.iterator.next();
            if (_.isEqual(current.getData(), data)) {
                return current;
            }
        }

        return -1;
    };

    DoublyLinkedList.prototype.findAt = function(index) {
        if (this.isEmpty() || index > this.getSize - 1) {
            return -1;
        }

        var nodeToFind = this.getHeadNode(),
            position = 0;

        while(position < index) {
            nodeToFind = nodeToFind.next;
            position += 1;
        }

        return nodeToFind;
    };

    DoublyLinkedList.prototype.contains = function(data) {
        return this.indexOf(data) > -1;
    };



    // ####### utility #######
    DoublyLinkedList.prototype.forEach = function(fn) {
        this.iterator.reset();
        this.iterator.each(fn);
    };

    DoublyLinkedList.prototype.toArray = function() {
        var arr = [];

        this.forEach(function(node){
            arr.push(node.getData());
        });

        return arr;
    };

    module.exports = DoublyLinkedList;
}());