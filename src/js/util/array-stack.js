/**
 * Stack
 * - array로 구현
 */
(function() {
    'use strict';

    function ArrayStack() {
        this.data = [null];
        this.top = 0;
    }

    ArrayStack.prototype.clear = function() {
        this.data = [null];
        this.top = 0;
        return this;
    };

    ArrayStack.prototype.isEmpty = function() {
      return !this.top;
    };

    ArrayStack.prototype.length = function() {
        return this.top;
    };

    ArrayStack.prototype.peek = function() {
        return this.data[this.top];
    };

    ArrayStack.prototype.pop = function() {
        if (this.top > 0) {
            this.top--;
            return this.data.pop();
        } else {
            return null;
        }
    };

    ArrayStack.prototype.push = function(data) {
        this.data[++this.top] = data;
        return this;
    };

    module.exports = ArrayStack;
}());