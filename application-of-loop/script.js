let arr=[];
for(let i=0;i<10;i++){
  arr.push(i+1);
}

for(let i=0;i<arr.length;i++){
  console.log(`Value at ${i} is ${arr[i]}`,typeof arr[i]);
}