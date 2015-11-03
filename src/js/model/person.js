export class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }

    /**
     * == operator
     * @param person
     * @returns {boolean}
     */
    equal(person) {
        return this.id == person.id;
    }

    /**
     * > operator
     */
    greaterThan(person) {
        return this.id > person.id;
    }
}