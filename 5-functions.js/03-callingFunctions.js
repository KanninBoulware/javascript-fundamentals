function hi(){
    console.log('Ayo');
}

hi();
hi;
console.log(hi);
console.log(hi());


// Create a function that, when invoked, lists out the numbers betwwen 1-10;

let printNumbers = function () {
    for(let i = 1; i<10; i++){
        console.log(i);
    }
}

printNumbers();

console.log(printNumbers);


(function() { console.log('Why is this working')})();