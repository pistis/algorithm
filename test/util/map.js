var should = require('should');
import {Map} from '../../src/js/util/map.js';

describe('map', function() {

    beforeEach(function() {
    });

    afterEach(function() {
    });

    it('should have a working test environment', function() {
        true.should.equal(true);
    });

    it('test es6 class.', function() {
        var map = new Map(10);
        map.getCount().should.equal(10);
    });
});