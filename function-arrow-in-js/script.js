//Arrow function
const add=(a,b)=>a+b;
console.log(add(2,7));
console.log(add(93,38));

const yearsUntilRetirement=(yearOfBirth,firstName)=>{
  const age=new Date().getFullYear()-yearOfBirth;
  const retirement=65-age;
  return `${firstName} retires in ${retirement} years`;
}
console.log(yearsUntilRetirement(1990,'Sumit'));