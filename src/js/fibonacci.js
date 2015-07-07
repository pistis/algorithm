/**
 * 피보나치 수열
 * F(n) = F(n-1) + F(n-2), 단 F(1) = F(2) = 1
 */

/**
 * recursive version
 * @param n
 * @returns {*}
 */
exports.fibonacci = function fibonacci(n) {
    if(n === 0) {
        return 0;
    } else if(n === 1) {
        return 1;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

/**
 * non recursive version
 * @param n
 * @returns {*}
 */
exports.fibonacciNonRecursive = function fibonacci(n) {
    var r = 0,
        a = b = 1;
    if(n === 1 || n === 2) {
        return 1;
    }

    while(n-- > 2) {
        r = a + b;
        a = b;
        b = r;
    }

    return r;
}