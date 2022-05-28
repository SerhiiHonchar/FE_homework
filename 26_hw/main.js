let number = 0.1 + 0.2;
console.log(number.toFixed(2));

let string = "1";
let num = 2;
console.log(+string + num);

let flashDrive = prompt('Який обсяг флешки?');
const file = 820;
alert('Тут поміститься' + ' ' + (Math.round((+flashDrive*1000)/file)));



let cash = prompt('Скільки грошей в гаманці?');
let costOfOneChocolate = prompt('Ціна однієї шоколадки?');
let dealWithChoc = cash/costOfOneChocolate;
let change = cash % costOfOneChocolate;
alert('Ти можеш купити' + ' ' + Math.floor(dealWithChoc) + ' ' + ',i твоя здача становить' + ' ' + change);

let threeNumber = prompt('Введіть тризначне число');
function getReversedNum(threeNumber) {
    let result = 0;
    while (threeNumber) {
      result = result * 10 + threeNumber % 10;
      threeNumber = Math.floor(threeNumber / 10);
    }
  
    return result;
  }
  alert(getReversedNum(threeNumber));



let deposit = prompt('Сума вкладу?');
let percent = 0.05;
let yearProfit = (percent/12*deposit);
alert('Ваш прибуток за 2 місяці становить' + ' ' + yearProfit.toFixed(2)); 


console.log (2 && 0 && 3);
// виведе 0, тому що && шукає перше хибне значення і зупиняється
console.log (2 || 0 || 3);
// виведе 2, тому що || шукає перше вірне значення і зупиняється
console.log (2 && 0 || 3);
// виведе 3, тому що має більший пріорітет

