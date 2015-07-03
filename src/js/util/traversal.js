/**
 * Tree Traversal
 */

(function(){
    'use strict';

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

    module.exports = Traversal;
}());