let i =7;

//For loop controller ie: (1 ; 2 ; 3 )
//pos1: Variable declaration and/or initialization
//pos2: Condition to run the loop(needs to be true)
//pos3: Incrementation or change to allow the condition to fail

for (i = 0; i < 10; i++) {
    console.log('nice');
    //increment i
    //verify conditional (hop up if true, leave loop if false)
}
let x = [];
for (let x = 0; x <= 20; x = x + 2) {
    console.log(x);
    
}

console.log(x); //0, undefined, error, null, []

//Count from 10 to 0

for  (let z = 10; z >=0; z --){
    console.log(z);
}

let name = "Patrick";
let pCharacter = name [name.length - 1];
console.log(pCharacter);

//Challenge
//Use a for loop, create a name variable, console log each character individually
//               012345
let challenge = 'Kannin'

challenge[0]
challenge[1]
challenge[2]

for (let a=0; a < challenge.length; a++){
    console.log(challenge[a]);
}

for (let c of challenge) {
    console.log(c);
}

let invoice = [3.1, 4.1, 89.98, 3.50];
let total = 0;

for (let i = 0; i < invoice.length; i++){
    total = total + invoice[i];
}
console.log(total);