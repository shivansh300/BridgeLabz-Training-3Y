"use strict";


function Person(name) {
    this.name = name;
}

Person.prototype.showName = function () {
    console.log("Name:", this.name);
};

function Student(name, branch) {
    Person.call(this, name);
    this.branch = branch;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.showBranch = function () {
    console.log("Branch:", this.branch);
};

const prototypeStudent = new Student("Amit", "CSE");


class PersonClass {
    constructor(name) {
        this.name = name;
    }

    showName() {
        console.log("Name:", this.name);
    }
}

class StudentClass extends PersonClass {
    constructor(name, branch) {
        super(name);
        this.branch = branch;
    }

    showBranch() {
        console.log("Branch:", this.branch);
    }
}

const classStudent = new StudentClass("Amit", "CSE");

console.log("Prototype-Based Version:");
prototypeStudent.showName();
prototypeStudent.showBranch();

console.log("ES6 Class-Based Version:");
classStudent.showName();
classStudent.showBranch();