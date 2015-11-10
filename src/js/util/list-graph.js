var Node = require('./list-node.js');
var DoublyLinkedList = require('./doubly-linked-list');
var ListStack = require('./list-stack.js');
var ListQueue = require('./list-queue.js');

/**
 * Vertex와 연결리스트를 저장
 */
class Item {
    constructor(v) {
        this.v = v || null;
        this.adjList = new DoublyLinkedList();
    }
}

/**
 * 인접 정점들을 저장하는 연결리스트의 Node
 */
class Adj {
    constructor(v, w) {
        this.v = v || null;
        this.weight = w || 1;
    }

    /**
     * == operator
     * @param person
     * @returns {boolean}
     */
    equal(adj) {
        return this.v == adj.v;
    }
}

/**
 * 그래프를 인접리스트로 구현
 */
export class ListGraph {
    constructor(size) {
        this.vertices = new Array(this.size);   // vertex를 저장하는 배열(Item class instance)
        this.vCount = 0;                        // vertex 수
        this.size = size || 100;                // 배열 크기
        this.sonOfRoot = 0;
    }

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

        this.vertices[tv1].adjList.insert(new Adj(v2, edge));
        this.vertices[tv2].adjList.insert(new Adj(v1, edge));

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

    dfs() {
        var checkMap = {};
        for (let i = 0; i < this.vCount; i++) {
            if (!checkMap[this.vertices[i].v]) {
                this._dfs(i, checkMap);
            }
        }
    }

    _dfs(i, checkMap) {
        checkMap[this.vertices[i].v] = true;
        this.visit(this.vertices[i].v);
        var node = this.vertices[i].adjList.iterator.first();
        while(node) {
            let adj = node.getData();
            if (!checkMap[adj.v]) {
                this._dfs(this._findVertex(adj.v), checkMap);
            }
            node = this.vertices[i].adjList.iterator.next();
        }
    }

    dfsNR() {
        var checkMap = {};
        var stack = new ListStack();

        for (let i = 0; i < this.vCount; i++) {
            if (!checkMap[this.vertices[i].v]) {
                stack.push(i);
                checkMap[this.vertices[i].v] = true;

                while(!stack.isEmpty()) {
                    i = stack.pop();
                    this.visit(this.vertices[i].v);
                    var node = this.vertices[i].adjList.iterator.first();
                    while(node) {
                        let adj = node.getData();
                        if (!checkMap[adj.v]) {
                            stack.push(this._findVertex(adj.v));
                            checkMap[adj.v] = true;
                        }
                        node = this.vertices[i].adjList.iterator.next();
                    }
                }
            }
        }
    }

    bfs() {
        var checkMap = {};
        var queue = new ListQueue();

        for (let i = 0; i < this.vCount; i++) {
            if (!checkMap[this.vertices[i].v]) {
                queue.enqueue(i);
                checkMap[this.vertices[i].v] = true;

                while(!queue.isEmpty()) {
                    i = queue.dequeue();
                    this.visit(this.vertices[i].v);
                    var node = this.vertices[i].adjList.iterator.first();
                    while(node) {
                        let adj = node.getData();
                        if (!checkMap[adj.v]) {
                            queue.enqueue(this._findVertex(adj.v));
                            checkMap[adj.v] = true;
                        }
                        node = this.vertices[i].adjList.iterator.next();
                    }
                }
            }
        }
    }

    countComponents() {
        var count = 0;
        var checkMap = {};
        var stack = new ListStack();

        for (let i = 0; i < this.vCount; i++) {
            if (!checkMap[this.vertices[i].v]) {
                count++;
                stack.push(i);
                checkMap[this.vertices[i].v] = true;

                while(!stack.isEmpty()) {
                    i = stack.pop();
                    var node = this.vertices[i].adjList.iterator.first();
                    while(node) {
                        let adj = node.getData();
                        if (!checkMap[adj.v]) {
                            stack.push(this._findVertex(adj.v));
                            checkMap[adj.v] = true;
                        }
                        node = this.vertices[i].adjList.iterator.next();
                    }
                }
            }
        }
        return count;
    }

    /**
     * find articulation point
     * 단절점을 찾는다.
     * @param apList 단절점의 리스트를 반환하기 위한 참조 변수
     */
    findAp() {
        var checkMap = {};
        this.sonOfRoot = 0;
        var apList = new DoublyLinkedList();
        var orderList = [];
        this._findAp(0, 1, apList, orderList, checkMap);
        if (this.sonOfRoot > 1) {
            apList.insertFirst(this.vertices[0].v);
        }
        this.sonOfRoot = 0;
        return apList;
    }

    /**
     * DFS에서 이미 방문을 한 정점은 non-tree edge가 되며, 처음 방문 하는 정점은 tree edge가 된다.
     * @param i 노드의 위치
     * @param order 현재 노드의 순서
     * @param apList 단절점 정보
     * @param orderList 정점들의 탐색 순서
     * @param checkMap 노드 방문 정보
     * @returns {number|*}
     * @private
     */
    _findAp(i, order, apList, orderList, checkMap) {
        var min, m;
        orderList[i] = min = ++order;
        checkMap[this.vertices[i].v] = true;

        var node = this.vertices[i].adjList.iterator.first();
        while(node) {
            let adj = node.getData();
            let k = this._findVertex(adj.v);
            if (!checkMap[adj.v]) {        // tree edge
                if (i == 0) {
                    this.sonOfRoot++;
                }
                m = this._findAp(k, order, apList, orderList, checkMap);
                if (m < min) min = m;       // 최소값 업데이트
                if (m >= orderList[i] && i != 0) {
                    if (apList.indexOf(this.vertices[i].v) == -1) {
                        apList.insertFirst(this.vertices[i].v);
                    }
                }
            } else {    // non-tree edge
                if (orderList[k] < min) {
                    min = orderList[k];
                }
            }
            node = this.vertices[i].adjList.iterator.next();
        }
        return min;
    }

    /**
     * 인자로 주어진 vertex가 몇번째 정점인지 찾음
     * @param v
     * @private
     */
    _findVertex(v) {
        for (let i = 0; i < this.vCount; i++) {
            if (this.vertices[i].v == v) return i;
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
        this.vertices[this.vCount] = new Item(v);
        return this.vCount++;
    }

    /**
     * 2차원 edge배열에서 간선의 값을 읽음(0:없음, 1:있음)
     * @param i
     * @param j
     * @private
     */
    _getEdgeByIndex(i, j) {

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

    }
}

