import {MapPos} from './map-pos.js';
/**
 * 순차 검색 클래스
 * - Sequential Search
 * -- 무순서로 저장된 자료집합에서 검색하고자 하는 key를 처음부터 차례로 비교해서 찾아내는 방법
 * - algorithm
 * -- 삽입 : 자료집합 제일 뒤에 새로운 자료 추가 - O(1) -> 새로운 자료는 뒤에 추가만 하면 된다.
 * -- 검색 : 자료집합의 처음부터 key를 찾음 - O(N) -> 최악의 경우 없는 자료를 찾을때 N번의 비교가 필요.
 * -- 제거 : 자료집합에서 key를 찾아 해당 레코드를 삭제하고 뒷부분을 앞으로 당김(메모리 이동, 갯수감소) - O(N) -> find비용 + reorganization 비용
 */
export class ArraySeqMap {
    constructor() {
        this.data = [];
    }

    // util functions
    getLength() {
        return this.data.length;
    }

    isEmpty() {
        return this.data.length == 0;
    }

    removeAll() {
        this.data = [];
    }

    // operations
    find(key) {
        var pos = new MapPos(key, 0);

        if (!this._find(pos)) {
            return null;
        }
        return this.data[pos.index];
    }

    findFirst(key, pos) {
        pos.key = key;
        pos.index = 0;
        if (!this._find(pos)) {
            return null;
        }
        return this.data[pos.index];
    }

    findNext(pos) {
        pos.index++;
        if (!this._find(pos)) {
            return null;
        }
        return this.data[pos.index];
    }

    insert(value) {
        this.data.push(value);
        return true;
    }

    remove(key) {
        var pos = new MapPos(key, 0);
        if (!this._find(pos)) {
            return null;
        }

        this.removeAt(pos);
        return true;
    }

    removeAt(pos) {
        for (let i = pos.index + 1; i < this.getLength(); i++) {
            this.data[i - 1] = this.data[i];
        }
        this.data.pop();
        return true;
    }

    _find(pos) {
        if (pos.index >= this.getLength()) {
            return false;
        }
        var found = false;
        for (var i = pos.index; i < this.getLength(); i++) {
            if (this.data[i] == pos.key) {
                found = true;
                break;
            }
        }
        if (found) {
            pos.index = i;
            return true;
        } else {
            return false;
        }
    }
}