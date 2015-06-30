/**
 * Stack
 * - array로 구현
 */
(function() {
    'use strict';

    function Stack() {
        this.data = [null];
        this.top = 0;
    }

    Stack.prototype.clear = function() {
        this.data = [null];
        this.top = 0;
        return this;
    };

    Stack.prototype.isEmpty = function() {
      return !this.top;
    };

    Stack.prototype.length = function() {
        return this.top;
    };

    Stack.prototype.peek = function() {
        return this.data[this.top];
    };

    Stack.prototype.pop = function() {
        if (this.top > 0) {
            this.top--;
            return this.data.pop();
        } else {
            return undefined;
        }
    };

    Stack.prototype.push = function(arg) {
        this.data[++this.top] = arg;
        return this;
    };

    module.exports = Stack;
}());