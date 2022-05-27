let name = prompt('Як тебе звати?');
console.log('Привіт,' + ' ' + name);

const currentYear = new Date().getFullYear();
let birthYear = prompt('Коли ти народився?');
let currentAge = currentYear - parseInt(birthYear);
console.log('Тобі зараз' + ' ' + currentAge + ' ' + 'років');

let sideOfSquare = prompt('Яка довжина сторони квадрата?');
let perimeterOfSquare = parseInt(sideOfSquare) * 4;
console.log('Периметр квадрата дорівнює' + ' ' + perimeterOfSquare + ' ' + 'сантиметрів');



let radius = prompt('Який радіус кола?');
let p = Math.PI;
let circleArea = parseInt(radius) * p;
console.log('Площа кола дорівнює' + ' ' + circleArea + ' ' + 'сантиметрів');

let distance = prompt('Яка відстань між містами?');
let hours = prompt('За який час потрібно дістатися?');
let averageSpeed = parseInt(distance) / parseInt(hours);
console.log('Середня швидкість для цієї відстані буде' + ' ' + averageSpeed + ' ' + 'кілометрів');
