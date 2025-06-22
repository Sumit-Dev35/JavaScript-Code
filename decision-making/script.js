const age = 15;
const isOldEnough = age >= 18;

if (isOldEnough) {
  console.log("Sumit can start driving licensc");
} else {
  console.log(`Should wait for ${18 - age} years to start driving licence`);
}

const birthYear = 1991;
let centruy;
if (birthYear <= 2000) {
  centruy = 20;
} else {
  centruy = 21;
}

console.log(centruy);
