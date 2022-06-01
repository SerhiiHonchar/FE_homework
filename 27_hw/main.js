let age = +prompt('Вкажи свій вік');

switch (true) {
  case (age >= 0 && age < 11)
    :alert('Немовля'); 
    break;
  case (age >= 12 && age < 17)
    :alert('Підліток'); 
    break;
  case (age >= 18 && age < 59)
    :alert('Дорослий'); 
    break;
  case (age >= 60 && age < 120)
    :alert('Пенсія'); 
    break;
  default: 
    alert('Треба вказати вік');    
}


let symbol = +prompt('Вкажи число від 0 до 9');

switch (symbol) {

  case 0:
    alert(')');
    break;

  case 1:
    alert('!');
    break;

  case 2:
    alert('@');
    break;

  case 3:
    alert('#');
    break;

  case 4:
    alert('$');
    break;

  case 5:
    alert('%');
    break;

  case 6:
    alert('^');
    break;

  case 7:
    alert('&');
    break;

  case 8:
    alert('*');
    break;

  case 9:
    alert('(');
    break;

  default:
    alert('Немає такого символу');
}


let firstNumber = +prompt('Вкажи перше число');
let secondNumber = +prompt('Вкажи друге число');

for ( let i = (firstNumber +1); i <secondNumber; i++) {
  console.log(i);
}

let frstNumber = prompt('Вкажи перше число');
let scndNumber = prompt('Вкажи друге число');
let nod;
while (frstNumber != scndNumber) {
  if (frstNumber > scndNumber) {
    frstNumber = frstNumber - scndNumber;
  }
  else {
    scndNumber = scndNumber - frstNumber;
  }
}

nod = frstNumber;
alert ('Спільний дільник є ' + nod);


let userNumber = +prompt('Вкажи число');
for (let i = 1; i <= userNumber; i++) {
  if (userNumber % i == 0) {
    console.log(i);
  }
}


let numberFive = prompt('Вкажи будь-яке число');
let polindrom = true;
for (let i=0; i < numberFive.length / 2; i++) {
  if (numberFive[i] != numberFive[numberFive.length - (i +1)]) {
    polindrom = false;
    break;
  }
}  

  if (polindrom) {
    alert('Поліндром');
  } else {
    alert('Не є поліндромом');
  }


  let price = +prompt('price for this item');

  switch (true) {

    case(price >= 200 && price <= 300):
      alert('the amout is' + ' ' + (price - (price*0.03)));
      break; 

    case(price >= 301 && price <= 500):
      alert('the amout is' + ' ' + (price - (price*0.05)));
      break;  

    case(price >= 501):
      alert('the amout is' + ' ' + (price - (price*0.07)));
      break; 

    default: alert('the amout is' + ' ' + price);
}




let day = true;
let i = 0;
while (day) {
  i= (i > 6) ? i = 0 : i++;

  switch (i) {

    case 0:
      alert('Monday');
      break;

    case 1:
      alert('Tuesday');
      break;  

    case 2:
      alert('Wednesday');
      break;
      
    case 3:
      alert('Thursday');
      break;

    case 4:
      alert('Friday');
      break;

    case 5:
      alert('Saturday');
      break;

    case 6:
      alert('Sunday');
      break;
  }

  i++;
  day = confirm('Хочеш побачити наступний день? ');
}


let down = 0;
let up = 100;
let res;

alert ('Загадай число від 0 до 100');

while (true) {
    res = Math.floor((up + down) / 2);
    res = Math.trunc(res);

    let check = prompt('Ваше число > ' + res + ', ' + ' < ' + res + ' або = ' + res + ' ?' );
    if (check == '=') {
        alert (res);
        break;
    }

    else if (check == '>') {
        down = Math.floor((up + down) / 2);
    }
    else {
        up = Math.floor((up + down) / 2);
    }
}


for (let i = 2; i < 10; i++) {
  for (let j = 1; j < 11; j++) {
    console.log(i * j);
  }
}

