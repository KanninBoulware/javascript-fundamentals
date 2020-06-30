let person1 ={
    name: 'Macy',
    age: 24,
    canVote: true

}

let person2 ={
    name: 'Nicolas',
    age: 56,
    canVote: true
}

let person3 = {
    name: 'Argyle',
    age: 15,
    canVote: false

}

//function createPerson(name, age, canVote){
//    let person = {
//        name: name,
//        age: age,
//        canVote: canVote 
//    }

//    return person;
//}

function Person(name, age, canVote){
    this.name = name;
    this.age = age;
    this.canVote = age >= 18;

    this.greeting = () => `Hello, my name is ${ this.name }`;

}

function Person(name, age) {
    let mtobj = {
        name: name,
        age: age,
        canVote: age >= 18,
        greeting: () => `Hello, my name is ${this.name}`
    }
}

//Instances of a Person object
let macyJones = new Person('Macy', 24);
let macy = Person1 ('Macy', 24);
let sseth = new Person('Seth', 54 );
let troy = new Person('Troy', 12);
 

console.log(macyJones);
console.log(macy );
//console.log( sseth.greeting() )
//console.log( troy.greeting() )


function Array(item1, item2, item3){
    this.items = {
        0: item1,
        1: item2,
        2: item3
    }



}

let myList = [1, 2, 3];