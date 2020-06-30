let num = 6;

// Ternary    (condition)  ? (true)  :  (false)

num > 0 ? console.log("yes") : console.log("nah");

//Exactly this below
if (num > 0 && num < 5) {
  console.log("yes");
} else {
  console.log("nah");
}
//=====================
num > 0 && num < 5
  ? console.log("yes")
  : num > 5
  ? console.log("Im greater than 5")
  : console.log("nah");

let age = 30;

age >= 25
  ? console.log("Yay! You can rent a car!")
  : age >= 21
  ? console.log("Hey, you can purchase alcohol")
  : age >= 18
  ? console.log("Hey, you can vote!")
  : console.log("Sorry 'bout it");

function IAmADeclaration (cage) {

  return cage;

}
console.log(cage);

let generateTaxRate = (state) => 42;


let location = "IN"
let taxRate;




  (location === 'IN') ? taxRate = 0.07 : taxRate = 0.05;
  console.log(taxRate)
  
  let myName = 'abc'; 

  for (let i = 0;  i <= 5; i++) {

  }

  console.log // -> 6


  //for - in: Uses any kind of collection (obj, array, string);
  //for = on: Uses ITERABLE colections (array, strings, etc.)

  let names = ["a", "b", "c"];

  for (name of names) {
    console.log(name);
  }

  //IIFE -> Immediatly Invoked Function Expression
  (function () {
     console.log('abc123' ) 
  })();

(function(){
  //call out and say "visited site"
})