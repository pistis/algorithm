var should = require('should');
import {ArrayGraph} from '../../src/js/util/array-graph.js';

describe('array-graph', function() {
    var graph = null;
    beforeEach(function() {
        graph = new ArrayGraph();
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
        str.should.equal('ABCDEFHGI');
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
        str.should.equal('AIGHFEDCB');
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

    it('test countComponents', function() {
        // TODO : countComponents 함수를 수정하고 테스트 코드 작성하자.
    });
});