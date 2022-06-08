// перше завдання

let driverName = prompt('Вкажіть імя водія');
let driverAge = +prompt('Вкажіть вік водія');
let fuelBalance = +prompt('Вкажіть залишок палива');
let newFuelInTank = +prompt('Введіть бажану кількість палива');
let distance = +prompt('Введіть відстань яку треба проїхати');

let carInfo = {
    carName: 'volkswagen',
    carModel: 'golf',
    carYear: 2003,
    averageSpeed: 110,
    fuelConsumption: '8 на 100км',
    volumeFuelTank: 60,
}

let fullFuelTank = fuelBalance + newFuelInTank;
let distanceWithFullTank = (fullFuelTank *100)/8;
let roadTime = distance/carInfo.averageSpeed;


function info() {
  for(let key in carInfo) {
    console.log(`${key} : ${carInfo[key]}`);
  }
}

info();


function driver() {
  if (driverAge >= 18) {
    alert('Все ок. Гарної дороги');
  }
  else {
    alert('Шкода. Але тобі ще рано за руль');
  }
}

driver();

function carFuel() {
  if (fullFuelTank <= 60) {
    alert('Все ок. Можна ще долити палива');
  }
  else {
    alert('Повний бак!!!');
  }
}

carFuel();











