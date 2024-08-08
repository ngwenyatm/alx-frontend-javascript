import { array, number } from "yargs";

export default class HolbertonCourse{
    constructor(name,length,students){
        if (typeof(name) === string){
            this._name = name;
        }
        else throw new TypeError('name must be a string');

        if (typeof(length) === number){
            this._length = length;
        }
        else throw new TypeError('length must be a number');

        if (Array.isArray(students)) {
            this._students = students;
        }
        else throw new TypeError('Length must be a number');
    }

    get name(){
        return this._name;
    }

    set name(name){
        if (typeof(name) === 'string'){
            this._name = name;
        }
        else throw new TypeError('name must be a string')
    }

    get length(){
        return this._length;

    }
    set length(length){

        if (typeof(length) !== 'number') {
            throw new TypeError('Length must be a number');
        }
        this._length = length;

    }

    get students(){
        this._students;

    }

    set students(students){
        if (!Array.isArray(students)) {
            throw new TypeError('Students must be an array of string');
        }
        this._students = students;
    }
}
