// перше завдання

class Circle {
  
  constructor(radius) {
    this.radius = radius;
  }

  getRadius() {
    return this.radius;
  }

  setRadius(newRadius) {
    this.radius = newRadius;
  }

  getDiametr() {
    return this.radius *2;
  }

  showArea() {
    return Math.PI * this.radius * this.radius;
  }

  showLenght() {
    return 2 * Math.PI * this.radius;
  }

}

let circle = new Circle(2);
console.log(circle.getRadius());
console.log(circle.getDiametr());
circle.setRadius(6);
console.log(circle.getRadius());
console.log(circle.showArea());
console.log(circle.showLenght());


