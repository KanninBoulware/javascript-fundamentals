let calculateBalance = function (debits, credits) {
    // parameter debits = [ numbers ]
    //parameter credits = [ numbers ]
    let total = 0;
    for (debits of debits) {
        total -= debits;
    
    }
    for (credit of credits) {
        total += credit;
    
    }
console.log(total)
}
            //  0       1      2
 let mydeb =[150.00, 34.00, 23.98]
 let mycred=[1000.00, 50.00, 25.00]


 calculateBalance(mydeb, mycred)
