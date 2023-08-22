import {Persons} from "./persons.js";
export class Employee extends Persons{


    constructor(id, firstName, lastName, birthDate, salary, yearsInCompany, position) {
        super(id, firstName, lastName, birthDate);
        this._id = id;
        this._firstName = firstName;
        this._lastName = lastName;
        this._birthDate = birthDate;
        this._salary = salary;
        this._yearsInCompany = yearsInCompany
        this._position = position
    }


    get id() {
        return this._id;
    }

    get firstName() {
        return this._firstName;
    }

    get lastName() {
        return this._lastName;
    }

    get birthDate() {
        return this._birthDate;
    }

    get salary() {
        return this._salary;
    }

    set salary(value) {
        this._salary = +value;
    }

    get yearsInCompany() {
        return this._yearsInCompany;
    }

    set yearsInCompany(value) {
        this._yearsInCompany = value;
    }

    get position() {
        return this._position;
    }

    set position(value) {
        this._position = value;
    }
}

export let empl = 'Heeere'