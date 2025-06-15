function init(){
    var name='sumit';
    function displayName(){
        console.log(`User Name Is : ${name}`)
    }
    displayName();
}
init()

if(Math.random()>0.5){
    var x=1;
}
else{
    var x=2;
}
console.log(x)

if(Math.random()>0.5){
    const y=2;
}
else{
    const y=1;    actually let and const keywords create scope with curly braces that's why at the time of logging y i am encountering error;
}
console.log(y);

function makeAdder(x){
  return function(y){
    return x+y;
  }
}

let add5=makeAdder(5);
let add10=makeAdder(10);
console.log(add5,add10);
console.log(add5(2),add10(1));

function addSize(size){
    return ()=>{
        console.log(size)
        document.body.style.fontSize=`${size}px`;
    }
}

document.getElementById('12_btn').addEventListener('click',addSize(12));
document.getElementById('14_btn').addEventListener('click',addSize(14));
document.getElementById('16_btn').addEventListener('click',addSize(16));


const counter=(function(){
    let privateCounter=0;
    function changeBy(value){
        privateCounter+=value;
    }
    return {
        increment(){
            privateCounter++;
        },
        decrement(){
            if(privateCounter>0)
             privateCounter--;
        },
        value(){
            return privateCounter;
        }
    }
})()
console.log(counter.value());
counter.increment();
counter.increment();
console.log(counter.value())