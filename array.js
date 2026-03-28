let names = ['Kevin', 'Collin', 'James', 'Kaden']
names.push('Mr G')
console.log(`The second value in the array is ${names[1]}.` )
for (let i = 0; i < names.length; i++) {
  console.log(names[i])
}


names.sort()

for (let name of names) {
  console.log(name);
}
names[3] = "I"

console.log(names)