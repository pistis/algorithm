var should = require('should');
import {ListGraph} from '../../src/js/util/list-graph.js';

describe('list-graph', function() {
    var graph = null;
    beforeEach(function() {
        graph = new ListGraph();
    });

    afterEach(function() {
        graph = null;
    });

    it('should have a working test environment', function() {
        true.should.equal(true);
    });

    it('test addEdge', function() {
        graph.addEdge('A', 'B', 1);
        graph.addEdge('A', 'C', 1);
        graph.addEdge('A', 'D', 1);
        graph.addEdge('B', 'E', 1);
        graph.addEdge('C', 'F', 1);
        graph.addEdge('D', 'H', 1);
        graph.addEdge('E', 'F', 1);
        graph.addEdge('F', 'H', 1);
        graph.addEdge('E', 'G', 1);
        graph.addEdge('G', 'I', 1);
        graph.addEdge('H', 'I', 1);
    });

    it('test dfs', function() {
        graph.addEdge('A', 'B', 1);
        graph.addEdge('A', 'C', 1);
        graph.addEdge('A', 'D', 1);
        graph.addEdge('B', 'E', 1);
        graph.addEdge('C', 'F', 1);
        graph.addEdge('D', 'H', 1);
        graph.addEdge('E', 'F', 1);
        graph.addEdge('F', 'H', 1);
        graph.addEdge('E', 'G', 1);
        graph.addEdge('G', 'I', 1);
        graph.addEdge('H', 'I', 1);

        var str = '';
        var visit = function(v) {
            str += v;
        };
        graph.visit = visit;
        graph.dfs();
        str.should.equal('ABEFCHDIG');
    });

    it('test dfs non-recursive', function() {
        graph.addEdge('A', 'B', 1);
        graph.addEdge('A', 'C', 1);
        graph.addEdge('A', 'D', 1);
        graph.addEdge('B', 'E', 1);
        graph.addEdge('C', 'F', 1);
        graph.addEdge('D', 'H', 1);
        graph.addEdge('E', 'F', 1);
        graph.addEdge('F', 'H', 1);
        graph.addEdge('E', 'G', 1);
        graph.addEdge('G', 'I', 1);
        graph.addEdge('H', 'I', 1);

        var str = '';
        var visit = function(v) {
            str += v;
        };
        graph.visit = visit;
        graph.dfsNR();
        str.should.equal('ADHIGEFCB');
    });

    it('test bfs', function() {
        graph.addEdge('A', 'B', 1);
        graph.addEdge('A', 'C', 1);
        graph.addEdge('A', 'D', 1);
        graph.addEdge('B', 'E', 1);
        graph.addEdge('C', 'F', 1);
        graph.addEdge('D', 'H', 1);
        graph.addEdge('E', 'F', 1);
        graph.addEdge('F', 'H', 1);
        graph.addEdge('E', 'G', 1);
        graph.addEdge('G', 'I', 1);
        graph.addEdge('H', 'I', 1);

        var str = '';
        var visit = function(v) {
            str += v;
        };
        graph.visit = visit;
        graph.bfs();
        str.should.equal('ABCDEFHGI');
    });

    it('test countComponents multi', function() {
        graph.addEdge('A', 'B', 1);
        graph.addEdge('A', 'C', 1);
        graph.addEdge('A', 'D', 1);

        graph.addEdge('E', 'F', 1);
        graph.addEdge('E', 'G', 1);
        graph.addEdge('F', 'H', 1);
        graph.addEdge('G', 'I', 1);
        graph.addEdge('H', 'I', 1);

        graph.countComponents().should.equal(2);
    });

    it('test find articulation point', function() {
        graph.addEdge('A', 'B', 1);
        graph.addEdge('A', 'C', 1);
        graph.addEdge('A', 'D', 1);
        graph.addEdge('B', 'E', 1);
        graph.addEdge('C', 'F', 1);
        graph.addEdge('D', 'H', 1);
        graph.addEdge('E', 'F', 1);
        graph.addEdge('F', 'H', 1);
        graph.addEdge('E', 'G', 1);
        graph.addEdge('G', 'I', 1);
        graph.addEdge('H', 'I', 1);

        graph.addEdge('D', 'J', 1);
        graph.addEdge('J', 'K', 1);
        graph.addEdge('J', 'L', 1);
        graph.addEdge('J', 'M', 1);
        graph.addEdge('M', 'O', 1);
        graph.addEdge('O', 'Q', 1);
        graph.addEdge('M', 'N', 1);
        graph.addEdge('Q', 'N', 1);
        graph.addEdge('N', 'P', 1);

        var list = graph.findAp();
        var apList = list.toArray();
        apList.should.eql(['D', 'M', 'N', 'J']);
    });
});