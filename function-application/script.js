function cutFruitPices(fruit){
  return fruit*4;
}

function fruitProcessor(apples,oranges){
  const applePieces=cutFruitPices(apples);
  const orangePices=cutFruitPices(oranges);
  const juice=`Juice with ${applePieces} pices of apples and ${orangePices} pieces of oranges.`;
  return juice;
}

console.log(fruitProcessor(2,3));
