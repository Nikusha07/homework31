const numberArray = [1,2,3,4,5,6,7,8,9,10]
const initialValue = 0;
const sumWithInitial = numberArray.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);

console.log(sumWithInitial);


function myDisplayer(some) {
    totalSum  = some;
  }
  
  function myCalculator(num1, num2) {
    let sum = num1 + num2;
    myDisplayer(sum);
  }
  
  myCalculator(5, 5)
  console.log(totalSum)


function mathPow (number) {
    calc = Math.pow(number , 2)
    return calc
}   
mathPow(10)
console.log(calc)

const firstObject = [
    {
        name : "lilia",
        surName : "abuladze",
        age : 25
    },
    {
        name : "lia",
        surName : "abuladze",
        age : 20
    },
    {
        name : "gio",
        surName : "birkadze",
        age : 28
    },
    
]

const secondObject = [
   {
    point: 15,
    new: "date",
    local:"storage",
   },
   {
    point: 13,
    new: "date",
    local:"storage",
   },
   {
    point: 16,
    new: "date",
    local:"storage",
   },
   
]

function mergeObjects(obj1, obj2) {
    const mergedObject = obj1.map((obj, index) => ({
      ...obj,
      ...obj2[index]
    }));
  
    return mergedObject;
  }
  const merged = mergeObjects(firstObject, secondObject);
  console.log(merged);

function calculatorNumber (a , b){
    if(a > b){
        return 1
    }
    else return 0
}
console.log(calculatorNumber(5, 10))

function textLengthChecker (text){
    if (text.length < 6){
        return "აფერი"
    }
    else return "ბარო ბიძიკო"
}
console.log(textLengthChecker("gio"))

function toStringtWord (x) {
    result = x.toString()
    return result
}

const wordArray = ["giorgi", "hello", "bravo"]
console.log(toStringtWord(wordArray))

function domManipulation (name) {
  const newDiv = document.createElement("div");
    newDiv.innerHTML = `
    <p> ${name} </p>
    `;
    document.body.appendChild(newDiv);
}

console.log(domManipulation("Nika"))

function alertFunction () {
  alert ("nika tefnadze")
}