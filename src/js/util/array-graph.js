var ListStack = require('./list-stack.js');
var ListQueue = require('./list-queue.js');
var DoublyLinkedList = require('./doubly-linked-list');
/**
 * 그래프를 인접행렬로 구현
 */
export class ArrayGraph {
    constructor(size) {
        this.size = size || 100;       // 배열 크기
        this.vCount = 0;        // vertex 수
        this.vertices = new Array(this.size);   // vertex를 저장하는 배열
        this.edges = new Array(this.size);  // edge정보를 저장하는 2차원 배열
        for (let i = 0; i < this.size; i++) {
            this.edges[i] = new Array(this.size);
        }
    }

    /**
     * edge는 0인경우 간선이 없음, 1인경우 간선이 있음
     * @param v1
     * @param v2
     * @param edge
     * @returns {boolean}
     */
    addEdge(v1, v2, edge) {
        let tv1, tv2;
        tv1 = this._findVertex(v1);
        if (tv1 < 0) {
            tv1 = this._addVertex(v1)
        }
        if (tv1 < 0) {
            return false;
        }

        tv2 = this._findVertex(v2);
        if (tv2 < 0) {
            tv2 = this._addVertex(v2)
        }
        if (tv2 < 0) {
            return false;
        }

        this._setEdgeByIndex(tv1, tv2, edge);
        this._setEdgeByIndex(tv2, tv1, edge);

        return true;
    }

    addEdgeDir(v1, v2, edge) {

    }

    getEdge(v1, v2) {

    }

    setEdge(v1, v2, edge) {

    }

    visit(v) {
        console.log(v);
    }

    /**
     * depth first search(깊이 우선 탐색)
     */
    dfs() {
        var checkMap = {};
        for (let i = 0; i < this.vCount; i++) {
            if (!checkMap[this.vertices[i]]) {
                this._dfs(i, checkMap);
            }
        }
    }

    _dfs(i, checkMap) {
        checkMap[this.vertices[i]] = true;
        this.visit(this.vertices[i]);
        // i와 인접한 노드들을 탐색한다.
        for (let j = 0; j < this.vCount; j++) {
            if (this._getEdgeByIndex(i, j) != 0 && !checkMap[this.vertices[j]]) {
                this._dfs(j, checkMap);
            }
        }
    }

    dfsNR() {
        var checkMap = {};
        var stack = new ListStack();

        for (var i = 0; i < this.vCount; i++) {
            if (!checkMap[this.vertices[i]]) {
                stack.push(i);
                checkMap[this.vertices[i]] = true;

                while(!stack.isEmpty()) {
                    i = stack.pop();
                    this.visit(this.vertices[i]);
                    for (var j = 0; j < this.vCount; j++) {
                        if (this._getEdgeByIndex(i, j) != 0 &&  !checkMap[this.vertices[j]]) {
                            stack.push(j);
                            checkMap[this.vertices[j]] = true;
                        }
                    }
                }
            }
        }
    }

    bfs() {
        var checkMap = {};
        var queue = new ListQueue();

        for (var i = 0; i < this.vCount; i++) {
            if (!checkMap[this.vertices[i]]) {
                queue.enqueue(i);
                checkMap[this.vertices[i]] = true;

                while(!queue.isEmpty()) {
                    i = queue.dequeue();
                    this.visit(this.vertices[i]);
                    for (var j = 0; j < this.vCount; j++) {
                        if (this._getEdgeByIndex(i, j) != 0 &&  !checkMap[this.vertices[j]]) {
                            queue.enqueue(j);
                            checkMap[this.vertices[j]] = true;
                        }
                    }
                }
            }
        }
    }

    countComponents() {
        // TODO : Bug 존재...계속 1로 나옴.. 수정하자.
        //var count = 0;
        //var checkMap = {};
        //var stack = new ListStack();
        //
        //for (let i = 0; i < this.vCount; i++) {
        //    if (!checkMap[this.vertices[i]]) {
        //        count++;
        //        stack.push(i);
        //        checkMap[this.vertices[i]] = true;
        //
        //        while(!stack.isEmpty()) {
        //            let k = stack.pop();
        //            for (var j = 0; j < this.vCount; j++) {
        //                if (this._getEdgeByIndex(k, j) != 0 && !checkMap[this.vertices[j]]) {
        //                    stack.push(j);
        //                    checkMap[this.vertices[j]] = true;
        //                }
        //            }
        //        }
        //    }
        //}
        //return count;
    }

    /**
     * find articulation point
     * 단절점을 찾는다.
     * @param apList 단절점의 리스트를 반환하기 위한 참조 변수
     */
    findAp() {
        var apList = new DoublyLinkedList();
        var orderList = [];
        var sonOfRoot = 0;
        sonOfRoot = this._findAp(0, 1, apList, orderList, sonOfRoot);
        if (sonOfRoot > 1) {
            apList.insertFirst(this.vertices[0].v);
        }
        return apList;
    }

    _findAp(i, order, apList, orderList, sonOfRoot) {
        var min, m;
        orderList[i] = min = ++order;



    }

    /**
     * 인자로 주어진 vertex가 몇번째 정점인지 찾음
     * @param v
     * @private
     */
    _findVertex(v) {
        for (let i = 0; i < this.vCount; i++) {
            if (this.vertices[i] == v) return i;
        }

        return -1;
    }

    /**
     * 새로운 정점을 추가
     * @param v
     * @private
     */
    _addVertex(v) {
        if (this.vCount >= this.size) return -1;
        this.vertices[this.vCount] = v;
        return this.vCount++;
    }

    /**
     * 2차원 edge배열에서 간선의 값을 읽음(0:없음, 1:있음)
     * @param i
     * @param j
     * @private
     */
    _getEdgeByIndex(i, j) {
        return this.edges[i][j];
    }

    /**
     * 2차원 edge배열에 간선의 값을 설정
     * @param i
     * @param j
     * @param edge
     * @returns {boolean}
     * @private
     */
    _setEdgeByIndex(i, j, edge) {
        if (i < 0 || i >= this.vCount || j < 0 || j >= this.vCount) {
            return false;
        }
        this.edges[i][j] = edge;
        return true;
    }
}