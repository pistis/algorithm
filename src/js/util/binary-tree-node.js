/**
 * BinaryTree의 Node
 */
(function() {
    'use strict';

    function BinaryTreeNode(data) {
        this.data = data || null;
        this.right = null;
        this.left = null;
    }

    BinaryTreeNode.prototype.hasRight = function() {
        return this.right !== null;
    };

    BinaryTreeNode.prototype.hasLeft = function() {
        return this.left !== null;
    };

    BinaryTreeNode.prototype.getData = function() {
        return this.data;
    };

    BinaryTreeNode.prototype.toString = function() {
        if (typeof this.data === 'object') {
            return JSON.stringify(this.data);
        } else {
            return String(this.data);
        }
    };

    module.exports = BinaryTreeNode;
}());