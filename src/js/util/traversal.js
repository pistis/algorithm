/**
 * Tree Traversal
 */

(function(){
    'use strict';

    var Stack = require('./list-stack');
    var Queue = require('./list-queue');

    function Traversal() {
        this.visit = function(data) {
            console.log(data);
        }
    }

    Traversal.prototype.setVisit = function(visit) {
        this.visit = visit;
        return this;
    };

    Traversal.prototype.preOrder = function(node) {
        if(!node) {
            return;
        }
        this.visit(node.getData());
        this.preOrder(node.left);
        this.preOrder(node.right);
    };

    Traversal.prototype.preOrderNonRecursive = function(node) {
        if(!node) {
            return;
        }
        var stack = new Stack();
        stack.push(node);

        while(!stack.isEmpty()) {
            var node = stack.pop();
            if (node) {
                this.visit(node.getData());
                stack.push(node.right);
                stack.push(node.left);
            }
        }
    };

    Traversal.prototype.inOrder = function(node) {
        if(!node) {
            return;
        }
        this.inOrder(node.left);
        this.visit(node.getData());
        this.inOrder(node.right);
    };

    Traversal.prototype.postOrder = function(node) {
        if(!node) {
            return;
        }
        this.postOrder(node.left);
        this.postOrder(node.right);
        this.visit(node.getData());
    };

    Traversal.prototype.levelOrder = function(node) {
        if(!node) {
            return;
        }
        var queue = new Queue();
        queue.enqueue(node);

        while(!queue.isEmpty()) {
            var node = queue.dequeue();
            if (node) {
                this.visit(node.getData());
                queue.enqueue(node.left);
                queue.enqueue(node.right);
            }
        }
    };

    module.exports = Traversal;
}());