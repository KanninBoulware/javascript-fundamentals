let myName = "Carson";

function someProcess() {
    const myName = "X-AESH-12";
console.log(myName);
}

//let myName = "potato"

//console.log(myName);

//someProcess();

let y = 12;

function scopey( ){
    y = 33;
     console.log(y);
}

console.log(y);
scopey();
console.log(y);


var slope = 12;

function varTest() {
    var slope = 56;
    if(true) {
        var slope = 9001;
        console.log(slope);
    }
    console.log(slope);
}

varTest();
console.log(slope);