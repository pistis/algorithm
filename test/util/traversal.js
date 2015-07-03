var should = require('should');
var Node = require('../../src/js/util/binary-tree-node');
var Traversal = require('../../src/js/util/traversal');

describe('traversal', function() {

    var tempTree = function() {
        var root = new Node('1');
        var a = new Node('2');
        var b = new Node('3');
        var c = new Node('4');
        var d = new Node('5');
        var e = new Node('6');
        var f = new Node('7');
        root.left = a;
        root.right = b;
        a.left = c;
        a.right = d;
        b.left = e;
        b.right = f;
        return root;
    };

    beforeEach(function() {

    });

    afterEach(function() {

    });

    it('should have a working test environment', function() {
        true.should.equal(true);
    });

    it('should tree traversal by preorder', function () {
        var node = tempTree();

        var result = '';
        var traversal = new Traversal().setVisit(function(data){
            result += data;
        });

        traversal.preOrder(node);
        result.should.equal('1245367');
    });

    it('should tree traversal by inorder', function () {
        var node = tempTree();

        var result = '';
        var traversal = new Traversal().setVisit(function(data){
            result += data;
        });

        traversal.inOrder(node);
        result.should.equal('4251637');
    });

    it('should tree traversal by postorder', function () {
        var node = tempTree();

        var result = '';
        var traversal = new Traversal().setVisit(function(data){
            result += data;
        });

        traversal.postOrder(node);
        result.should.equal('4526731');
    });

});