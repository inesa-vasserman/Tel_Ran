export class Persons {

    constructor(id,firstName,lastName,birthDate) {
        this._id =id;
        this._firstName = firstName;
        this._lastName = lastName;
        this._birthDate = new Date(birthDate);
        this._birthDate = birthDate;
    }

    get firstName() {
        return this._firstName;
    }

    set firstName(value) {
        this._firstName = value;
    }

    get lastName() {
        return this._lastName;
    }

    set lastName(value) {
        this._lastName = value;
    }

    get id() {
        return this._id;
    }

    get birthDate() {
        return this._birthDate;
    }

    get age(){
        const ageDiffMs = (new Date()) - this._birthDate;
        const ageDate = new Date(ageDiffMs);
        return (ageDate.getUTCFullYear() - 1970);
    }

    fullName = function (){
        return `${this._firstName} ${this._lastName}`
    }
}
