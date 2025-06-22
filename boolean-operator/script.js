const hasDriversLicence = true;
const hasGoodVison = false;

console.log(hasDriversLicence && hasGoodVison);
console.log(hasDriversLicence || hasGoodVison);
console.log(!hasDriversLicence);

const shouldDrive = hasDriversLicence && hasGoodVison;
if (shouldDrive) {
  console.log("You are able to drive !");
} else {
  console.log("Someone else shoudl drive !");
}
