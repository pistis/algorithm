
/**
 * 유클리드 알고리즘 (기본 개념)
 * 임의의 두 정수 u, v에 대해
 * 1) v가 u보다 크다면 v와 u의 값을 바꾼다.
 * 2) u = u - v
 * 3) u가 0이면 v가 최대공약수
 *    0이 아니면 1)로 돌아감
 */

exports.getGCD = function getGCD(u, v) {
    var t;
    while (u) {
        if (u < v) {
            t = u;
            u = v;
            v = t;
        }
        u = u - v;
    }
    return v;
}

/**
 * 위 getGCD의 문제점
 * - 값의 차이가 클때 뺄셈 연산이 많이 일어나게 된다.
 * - 뺄셈을 하는 이유는 결국 나머지를 구하는 과정이다.
 * 최적화
 * - GCD(u, v) = GCD(u%v, v) = GCD(v, u%v)
 * - u%v < v
 */

/**
 * 유클리드 알고리즘(최적화)
 *
 * 1) v가 0이 아니면
 *  가) u = u % v
 *  나) u와 v를 교환
 *  다) 1)로 돌아
 * 2) v가 0이면 u가 GCD
 */
exports.getGCDOptimization = function getGCDOptimization (u, v) {
    var t;
    while (v) {
        t = u % v;
        u = v;
        v = t;
    }

    return u;
}

/**
 * recursive 버전
 */
exports.getGCDRecursion = function getGCDRecursion(u, v) {
    if (v == 0) {
        return u;
    } else {
        return getGCDRecursion(v, u % v);
    }
}