const massHeight = 1.69;
const massWeight = 78;
const johnWeight = 95;
const johnHeight = 1.88;
const johnBmi = johnWeight / (johnHeight * johnHeight);
const massBmi = massWeight / (massHeight * massHeight);
if (johnBmi > massBmi) {
  console.log(`Marks's BMI is higher than John's`);
  console.log(`Marks's BMI ${massBmi} is higher than John's ${johnBmi}`);
} else {
  console.log(`John's BMI is higher than Mark's`);
  console.log(`John's BMI ${massBmi} is higher than Mark's ${johnBmi}`);
}
