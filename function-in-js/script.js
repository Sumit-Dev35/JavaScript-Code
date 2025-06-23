function logger(){
  console.log("Hello World");
}

logger();

function fruitProcessor(apples,oranges){//parameters
  console.log(apples,oranges);
  const juice=`Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice=fruitProcessor(5,0);//value passed in this function known as argumnets
console.log(appleJuice);
console.log(fruitProcessor(2,4))

const appleOrangeJuice=fruitProcessor(3,8);
console.log(appleOrangeJuice);