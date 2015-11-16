var should = require('should');
var dp = require('../src/js/dp');
var assert = require('assert');

describe('dp', function() {
    it('should have a working test environment', function() {
        true.should.equal(true);
    });

    it('should return pascal integer value', function() {
        var result = [
            [1],
            [1,1],
            [1,2,1],
            [1,3,3,1],
            [1,4,6,4,1]
        ];
        dp.pascal(5).should.eql(result);
    });

    it('should return max number of triangle', function() {
        var testTri1 = [[3],
            [7,4],
            [2,4,6],
            [8,5,9,3]];
        dp.maxOfTriangle(testTri1).should.equal(23);

        var testTri2 = [
            [75],
            [95, 64],
            [17, 47, 82],
            [18, 35, 87, 10],
            [20, 4, 82, 47, 65],
            [19, 1, 23, 75, 3, 34],
            [88, 2, 77, 73, 7, 63, 67],
            [99, 65, 4, 28, 6, 16, 70, 92],
            [41, 41, 26, 56, 83, 40, 80, 70, 33],
            [41, 48, 72, 33, 47, 32, 37, 16, 94, 29],
            [53, 71, 44, 65, 25, 43, 91, 52, 97, 51, 14],
            [70, 11, 33, 28, 77, 73, 17, 78, 39, 68, 17, 57],
            [91, 71, 52, 38, 17, 14, 91, 43, 58, 50, 27, 29, 48],
            [63, 66, 4, 68, 89, 53, 67, 30, 73, 16, 69, 87, 40, 31],
            [4, 62, 98, 27, 23, 9, 70, 98, 73, 93, 38, 53, 60, 4, 23]
        ];
        dp.maxOfTriangle(testTri2).should.equal(1074);
    });
});