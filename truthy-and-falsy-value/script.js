console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean({}));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));

const money = 0;

if (money) {
  console.log("Don't spend it all ;");
} else {
  console.log("You should get a Job !");
}
