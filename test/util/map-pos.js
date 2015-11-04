var should = require('should');
import {MapPos} from '../../src/js/util/map-pos.js';

describe('map-pos', function() {
    beforeEach(function() {
    });

    afterEach(function() {
    });

    it('should have a working test environment', function() {
        true.should.equal(true);
    });

    it('test creation', function() {
        var pos = new MapPos('test', 0);
        pos.key.should.equal('test');
        pos.index.should.equal(0);
    });
});