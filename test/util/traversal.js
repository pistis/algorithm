var should = require('should');
var Node = require('../../src/js/util/binary-tree-node');
var Traversal = require('../../src/js/util/traversal');

describe('traversal', function() {
    var tree = null;
    beforeEach(function() {
        tree = new Node('1');
        var a = new Node('2');
        var b = new Node('3');
        var c = new Node('4');
        var d = new Node('5');
        var e = new Node('6');
        var f = new Node('7');
        tree.left = a;
        tree.right = b;
        a.left = c;
        a.right = d;
        b.left = e;
        b.right = f;
    });

    afterEach(function() {
        tree = null;
    });

    it('should have a working test environment', function() {
        true.should.equal(true);
    });

    it('should tree traversal by preorder', function () {
        var result = '';
        var traversal = new Traversal().setVisit(function(data){
            result += data;
        });

        traversal.preOrder(tree);
        result.should.equal('1245367');
    });

    it('should tree traversal by preorder(non recursive)', function () {
        var result = '';
        var traversal = new Traversal().setVisit(function(data){
            result += data;
        });

        traversal.preOrderNonRecursive(tree);
        result.should.equal('1245367');
    });

    it('should tree traversal by inorder', function () {
        var result = '';
        var traversal = new Traversal().setVisit(function(data){
            result += data;
        });

        traversal.inOrder(tree);
        result.should.equal('4251637');
    });

    it('should tree traversal by postorder', function () {
        var result = '';
        var traversal = new Traversal().setVisit(function(data){
            result += data;
        });

        traversal.postOrder(tree);
        result.should.equal('4526731');
    });

    it('should tree traversal by levelorder', function () {
        var result = '';
        var traversal = new Traversal().setVisit(function(data){
            result += data;
        });

        traversal.levelOrder(tree);
        result.should.equal('1234567');
    });

});