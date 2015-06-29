/**
 * 소수 구하기
 * 소수 : 1과 자기 자신 외에는 나누어 떨어지는 정수가 없는 양의 정수
 * 알고리즘
 * 1) 2 ~ N-1까지의 정수로 나누어 보는 방법 - O(N)
 * 2) 2 ~ sqrt(N)까지의 정수로 나누어 보는 방법 - O(N^0.5)
 *  : N제곱근 * N제곱근 = N 이므로 N제곱근 즉, sqrt(N)까지만 계산하면 된다.
 */
exports.isPrime = function isPrime(n) {
    var i,
        sqrn = parseInt(Math.sqrt(n));


    for (i = 2; i < sqrn; i++) {
        if (n % i == 0) {
            return false;
        }
    }

    return true;
};

/**
 * 에라토스테네스의 체
 *  : n미만의 자연수 중 몇개의 소수가 있는지 판별
 *  : 반환값을 바꿔서 소수를 반환하도록 할 수 있다.
 * @param n
 */
exports.getPrimeNumberCount = function(n) {
    var i,
        j,
        sqrn = parseInt(Math.sqrt(n));

    var arr = new Array(n + 1);
    for (i = 0; i <= n; i++) {
        arr[i] = true;
    }
    arr[0] = false; arr[1] = false;

    for (i = 2; i <= sqrn; i++) {
        if (!arr[i]) {
            continue;
        }
        for (j = i + i; j <= n; j+=i) {
            arr[j] = false;
        }
    }

    return arr.filter(function(item){ return item;}).length;
};