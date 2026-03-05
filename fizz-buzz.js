// for (let i = 1; i <= 1000; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("fizz buzz");
//   } else if (i % 3 === 0) {
//     console.log("fizz");
//   } else if (i % 5 === 0) {
//     console.log("buzz");
//   } else {
//     console.log(i);
//   }
// }
fb=0;
b=0;
f=0;
i=0;

while(fb<1323){
  if (i %3===0 & i%5===0) {
    console.log("fizz buzz"+fb);
    fb=fb+1;
  } else if (i % 3 === 0) {
    console.log("fizz");
    f=f+1;
  } else if (i % 5 === 0) {
    console.log("buzz");
    b=b+1;
  } else {
    console.log(i);
  }
  i=i+1;
}