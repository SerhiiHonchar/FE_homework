// Перше завдання

// Function declaration
function add(a, b) {        
  console.log(a + b);
}

add(2, 3);

// Function Expression
let exp = function(a, b) {
  console.log(a+b);
};

exp(2, 3);

// Arrow Function
let arrow = (a, b) => a + b;
 
console.log(arrow(3, 2));

// Друге завдання

function getArguments() {
  console.log(arguments.length);
}

getArguments(1,3,5,10);

// Третє завдання


let a = +prompt('Введи перше число');
let b = +prompt('Введи друге число');

function getNum (a, b) {
  if (a < b) {
    console.log('-1');
    return -1;
  }
  else if (a > b) {
    console.log('1');
    return 1;
  }
  else {
    console.log('0');
    return 0;
  }
}

getNum (a, b);


// Четверте завдання

function factorial(n) {
  if ((n === 0) || (n === 1))
    return 1;
  else 
    return (n * factorial(n - 1));
}

// Пяте завдання

let firstNumber = +prompt('Введи перше число');
let secondNumber = +prompt('Введи друге число');
let thirdNumber = +prompt('Введи третє число');
let numbers;

function getSum (a, b, c) {
    numbers = a + '' + b + '' + c;
    console.log(numbers);
}

getSum(firstNumber, secondNumber, thirdNumber);


// норма 

// перше завдання

function isPerfect(number)
{
let temp = 0;
   for(let i=1;i<=number/2;i++)
     {
        if(number%i === 0)
        {
          temp += i;
        }
     }
   
     if(temp === number && temp !== 0)
        {
       console.log("It is a perfect number.");
        } 
     else
        {
       console.log("It is not a perfect number.");
        }   
 } 
isPerfect(6);

// друге завдання

function getPerfect(a, b) {
  let result = [];
  for (let i = a; i < b; i++) {
    sum = 0;
    for (let n = 1; n <= i/2; n++) {
      if (i % n === 0) sum += n;
    }
    if (i === sum) result.push(i);
  }
  return result;
}
 
console.log(getPerfect(1, 10000));