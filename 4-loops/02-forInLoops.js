let student = {
 name: "Gloria",   
awesome: true,
specialty: "JavaScript",
week: 1

};

console.log(student.name);
console.log(student['awesome']);

for(x in student){
    console.log(student[x]);
}

console.log(typeof student)

let grades =["A", "F", "F-", "C++", "B"];
for(x in 'grades') {
    console.log(x);
}

//For-in-loop will return to you the keys of soem collection