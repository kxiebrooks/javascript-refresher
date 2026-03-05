console.log("Hello, World!");
message = "How are you today?";
console.log(message);
greeting = "Hello";
name = "Sue"
console.log(greeting +" " +name+"!");
age = 13;
console.log("You are "+age);
console.log("In ten years you will be "+(10+age));

// part 2
// if (name == "Bob"){
//   console.log("I know it was you, "+name +"!");  
// }
// else if(name !="Bob"){
//     console.log("Hey Sue, you're not Bob!");  
// }
// iAmWearingABelt=true;
// iAmWearingGlasses = false;

// if (iAmWearingABelt & iAmWearingGlasses){
//     console.log("Probably not Mr. Gorton");  
// }
// else if (iAmWearingABelt & !iAmWearingGlasses){
//     console.log("Probably is Mr. Gorton");  
// }
// else{
//    console.log("Probably just some dude");  
// }

// part 3
for (let i = 1; i <= 6; i++) {
  console.log("comp sci is awesome");
}
for (let i = 0; i <= 10; i++) {
  console.log(i);
}
tellMeMyAge();
function tellMeMyAge() {
  console.log("You are "+age+" years old.");
}

function makePizza(type, size) {
  console.log("One " +size+" " +type +" pizza coming up!");
}

makePizza("cheese", "large");
makePizza("pepperoni", "large");


howMuchForAPizza="large"

function pricePizza(ty) {
    if(ty=="large"){
        console.log(17);
    }
    else{
        console.log(13);
    }
}

pricePizza(howMuchForAPizza);
x=1

for (let i = 0; i <= 0; i++) {
  console.log("");
}
console.log(x);
console.log(i);







