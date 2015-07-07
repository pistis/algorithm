/**
 * 중위표기법을 후위표기법으로 변환한 후 수식을 계산한다.
 * 조건
 * 1) 자연수만 계산한다(부호없음, 실수아님)
 * 2) 사칙연산만 한다.
 * 목적
 * stack을 이용한 간단한 사칙연산기를 만들어본다.
 */

(function(){
    'use strict'

    var Node = require('./util/binary-tree-node');
    var Stack = require('./util/list-stack');
    var OPERATOR = {
        PARENTHESIS_START_SYMBOL : '(',
        PARENTHESIS_END_SYMBOL : ')',
        ADDITION_SYMBOL : '+',
        SUBTRACTION_SYMBOL : '-',
        MULTIPLICATION_SYMBOL : '*',
        DIVISION_SYMBOL : '/'
    };

    function SimpleCalc() {
        this._stack = new Stack();
    }

    /**
     * 알고리즘
     * 1) Operand는 만나면 Operand를 stack에 push
     * 2) Operator는 stack에서 pop을 두번 해서 그 두값으로 연산을 한 다음, 그 결과를 다시 stack에 push
     * 3) 최종결과는 마지막에 stack에 남아있는 값
     * @param postfix
     * @returns {number}
     */
    SimpleCalc.prototype.calcPostfix = function(postfix) {
        var result, i = 0,
            postfixArr,
            leftOperand,
            rightOperand,
            data;
        this._stack.clear();

        postfixArr = postfix.split(' ');

        while(postfixArr[i]) {
            data = postfixArr[i];
            if(this.isOperator(data)) {
                rightOperand = this._stack.pop();
                leftOperand = this._stack.pop();
                this._stack.push(this.calc(leftOperand, rightOperand, data));
            } else if(this.isOperand(data)) {
                this._stack.push(parseInt(data));
            }
            i++;
        }

        return this._stack.pop();
    };

    SimpleCalc.prototype.calcInfix = function(infix) {
        return this.calcPostfix(this.infixToPostfix(infix));
    };

    /**
     * 알고리즘
     * Operator의 우선순위
     * - '(' : 0, '+' or '-' : 1, '*' or '/' : 2
     * 1) '('는 stack에 push
     * 2) ')'는 stack에서 '('가 나올때까지 pop하여 결과를 더하고 '('는 버린다.
     * 3) Operator는 stack에서 그것보다 낮은 순위의 Operator를 만날떄까지 pop하여 결과에 더한 뒤 자신을 push한다.
     * 4) Operand는 그냥 결과에 더한다.
     * 5) 모든 입력이 완료되면 stack에 남아있는 Operator들을 pop하여 결과에 더한다.
     * @param infix
     * @returns {string}
     */
    SimpleCalc.prototype.infixToPostfix = function(infix) {
        var postfix = '',
            infixArr,
            stackItem,
            data,
            i = 0;
        this._stack.clear();

        infixArr = infix.split('');

        while(infixArr[i]) {
            data = infixArr[i];
            if(data === OPERATOR.PARENTHESIS_START_SYMBOL) {
                this._stack.push(data);
                i++;
            } else if(data === OPERATOR.PARENTHESIS_END_SYMBOL) {
                while(!this._stack.isEmpty()) {
                    stackItem = this._stack.pop();
                    if (stackItem === OPERATOR.PARENTHESIS_START_SYMBOL) {
                        break;
                    } else {
                        postfix += stackItem;
                        postfix += ' ';
                    }
                }
                i++;
            } else if(this.isOperator(data)) {
                while(!this._stack.isEmpty() && this.getPrecedence(data) <= this.getPrecedence(this._stack.peek())) {
                    stackItem = this._stack.pop();
                    postfix += stackItem;
                    postfix += ' ';
                }
                this._stack.push(data);
                i++;
            } else if(this.isOperand(data)) {
                do {
                    postfix += data;
                    data = infixArr[++i];
                } while(data && this.isOperand(data));
                postfix += ' ';
            } else {
                i++;
            }
        }

        while(!this._stack.isEmpty()) {
            postfix += this._stack.pop();
            postfix += ' ';
        }

        return postfix.trim();
    };

    SimpleCalc.prototype.getPrecedence = function(operator) {
        if(operator === OPERATOR.PARENTHESIS_START_SYMBOL) {
            return 0;
        } else if(operator === OPERATOR.ADDITION_SYMBOL || operator === OPERATOR.SUBTRACTION_SYMBOL) {
            return 1;
        } else if(operator === OPERATOR.MULTIPLICATION_SYMBOL || operator === OPERATOR.DIVISION_SYMBOL){
            return 2;
        } else {
            return -1;
        }
    };

    SimpleCalc.prototype.isOperator = function(data) {
        return data === OPERATOR.ADDITION_SYMBOL || data === OPERATOR.SUBTRACTION_SYMBOL
        || data === OPERATOR.MULTIPLICATION_SYMBOL || data === OPERATOR.DIVISION_SYMBOL;
    };

    SimpleCalc.prototype.isOperand = function(data) {
        return data.charCodeAt() >= 48 && data.charCodeAt() <= 57;
    };

    SimpleCalc.prototype.calc = function(leftOperand, rightOperand, operator) {
        if(operator === OPERATOR.ADDITION_SYMBOL) {
            return leftOperand + rightOperand;
        } else if(operator === OPERATOR.SUBTRACTION_SYMBOL) {
            return leftOperand - rightOperand;
        } else if(operator === OPERATOR.MULTIPLICATION_SYMBOL) {
            return leftOperand * rightOperand;
        } else if(operator === OPERATOR.DIVISION_SYMBOL) {
            return leftOperand / rightOperand;
        }
        throw 'invalid operator';
    };

    /**
     * 1. operand 는 node를 만들어 stack에 push
     * 2. operator는 node를 만들어
     *  - stack에서 pop한 노드를 right
     *  - stack에서 pop한 노드를 left
     *  - operator node를 stack에 push
     * 3. stack에 마지막으로 남은 노드가 root
     * @param postfix
     * @returns {*}
     */
    SimpleCalc.prototype.buildTreeByPostfix = function(postfix) {
        // 3 1 2 + +
        var postfixArr = postfix.split(' '),
            data,
            node,
            i = 0;
        this._stack.clear();

        while(postfixArr[i]) {
            data = postfixArr[i];
            if(this.isOperator(data)) {
                node = new Node(data);
                node.right = this._stack.pop();
                node.left = this._stack.pop();
                this._stack.push(node);
            } else if(this.isOperand(data)) {
                node = new Node(data);
                this._stack.push(node);
            }
            i++;
        }
        return this._stack.pop();
    };

    module.exports = SimpleCalc;
}());