const std1 = {
    name: "aman",
    age:25,
    marks:95,
    getMarks: function () {
        return this.marks;
    },
};
const std2 = {
    name: "eve",
    age:24,
    marks:75,
     getMarks: function () {
        return this.marks;
    },
};
const std3 = {
    name: "ansh",
    age:23,
    marks:75,
     getMarks: function () {
        return this.marks;
    },
};
 // for ooops
let arr= [1,2,3];
let arr2= [1,2,3];
arr.sayHello = () =>{
    console.log("hello");
};
arr2.sayHello = () =>{
    console.log("hello");
};

// Factory Function
// function PersonMaker(name, age) {
//     const person = {
//         name:name,
//         age:age,
//         talk() {
//             console.log(`Hi,my name is ${this.name} `);
//         },
//     };
//     return person;
// }

// new Operator
// function PersonMaker(name, age) {
//    this.name= name;
//    this.age = age;
//    console.log(this);
// }
// PersonMaker.prototype.talk = function () {
//     console.log(`Hi, my name is ${this.name}`);
// };
// let p1= new PersonMaker("adam" , 25);
// let p2 = new PersonMaker("eve", 24);

// classes
class PersonMaker {
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }
    talk() {
        console.log(`Hi , my name is ${this.name}`);
    }
}

let p1= new PersonMaker("adam" , 25);
let p2= new PersonMaker("eve" , 25);

// Inheritance
class Student extends PersonMaker {
    constructor(name,age,marks) {
        super(name,age);
        this.marks = marks;
    }
    greet() {
        return "hello";
    }
}

let s1= new Student("anmol",35,95);

