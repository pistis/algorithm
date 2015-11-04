var should = require('should');
import {ArraySeqMap} from '../../src/js/util/array-seq-map.js';
import {MapPos} from '../../src/js/util/map-pos.js';

describe('array-seq-map', function() {
    var map = null;
    beforeEach(function() {
        map = new ArraySeqMap();
    });

    afterEach(function() {
        map = null;
    });

    it('should have a working test environment', function() {
        true.should.equal(true);
    });

    it('test insert/remove', function() {
        map.insert(10);
        map.insert(5);
        map.insert(23);
        map.insert(7);
        map.insert(2);
        map.insert(34);
        map.insert(41);
        map.getLength().should.equal(7);
        map.remove(10);
        map.remove(5);
        map.remove(23);
        map.remove(7);
        map.remove(2);
        map.remove(34);
        map.remove(41);
        map.isEmpty().should.equal(true);
    });

    it('test find', function() {
        map.insert(10);
        map.insert(5);
        map.insert(23);
        map.insert(7);
        map.insert(23);
        map.insert(7);
        map.insert(2);
        map.insert(34);
        map.insert(41);
        map.find(10).should.equal(10);
        should.equal(map.find(100), null);
        map.findFirst(7, new MapPos()).should.equal(7);
        map.findNext(new MapPos(7, 4)).should.equal(7);
        should.equal(map.findNext(new MapPos(7, 5)), null);
    });
});