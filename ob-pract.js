const student1={fName:'Sue', lName: 'Smith', gpa: 3.6, volleyball: true}
console.log("I know " + student1.fName +" "+ student1.lName + " !")

if (student1.volleyball){console.log("She is on the volleyball team.")}else{console.log("She is not on the volleyball team.")}

const student2 ={fName:'Bob', lName: 'Loblaw', gpa: 2.1, volleyball: false}

let students = [student1, student2]
students.push({fName:'Kevin', gpa:5.0})
console.table(students)

