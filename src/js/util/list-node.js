/**
 * List의 Node
 */
(function() {
    'use strict';

    function Node(data) {
        this.data = data || null;
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