/**
 * DP
 * pascal : 파스칼의 삼각형
 * maxOfTriangle : 삼각형의 경로중 최대값(euler 18번 문제)
 */
exports.pascal = function pascal(n) {
    var arr = [];

    for (var i = 0; i < n; i++) {
        arr[i] = [];
    }
    //arr[0][0] = 1;
    for (i = 0; i < n; i++) {
        for (var j = 0; j <= i; j++) {
            if (j == 0 || j == i) {
                arr[i][j] = 1;
            } else {
                arr[i][j] = arr[i-1][j] + arr[i-1][j-1];
            }
        }
    }
    return arr;
};

/**
 * DP(동적 계획법)
 *  : 삼각형의 아래에서 부터 위로 올라가며 max값을 위의 경로의 값에 더해 놓는다.(각 부분별 최적의 해를 한번만 계산하도록)
 * @param triangle
 * @returns {*}
 */
exports.maxOfTriangle = function maxOfTriangle(triangle) {
    var count = 0;
    var row = triangle.length - 1;
    for (var i = 0; i < row; i++) {
        var col = triangle[row - i].length - 1;
        for (var j = 0; j < col; j++) {
            triangle[row - i - 1][j] += Math.max(triangle[row - i][j], triangle[row - i][j + 1]);
            count++;
        }
    }
    console.log('count', count);
    return triangle[0][0];
};