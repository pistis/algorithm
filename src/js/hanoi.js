/**
 * 하노이의 탑
 * 조건
 * - 한 번에 하나의 원판만 옮길 수 있다.
 * - 큰 원판이 작은 원판 위에 있어서는 안 된다.
 */
(function() {
    'use strict'

    function Hanoi() {
        this.count = 0;
    }

    /**
     * 기둥1에서 n개의 원반을 기둥 2를 이용하여 기둥3으로 옮기는 알고리즘
     * 1. 기둥1에서 n-1개의 원반을 기둥3을 이용하여 기둥2로 옮긴다.
     * 2. 기둥1에서 1개의 원반을 기둥3으로 옮긴다.
     * 3. 기둥2에서 n-1개의 원반을 기둥1을 이용하여 기둥3으로 옮긴다.
     * @param n
     * @param from
     * @param by
     * @param to
     */
    Hanoi.prototype.hanoi = function(n, from, by, to) {
        if(n === 1) {
            this.move(n, from, to);
        } else {
            this.hanoi(n - 1, from, to, by);
            this.move(n, from, to);
            this.hanoi(n - 1, by, from, to);
        }
    };

    Hanoi.prototype.move = function(n, from, to) {
        this.count++;
        //console.log('Move %d, move from %d to %d.', n, from, to);
    };

    Hanoi.prototype.getCount = function() {
        return this.count;
    };

    Hanoi.prototype.clearCount = function() {
        this.count = 0;
    };

    module.exports = Hanoi;
}());
