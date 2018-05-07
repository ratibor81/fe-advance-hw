class Shape {
  constructor(color, initX, initY) {
    this.color = color;
    this.initX = initX;
    this.initY = initY;
  }
  get getColor() {
    return this.color;
  }
  setColor(val) {
    this.color = val;
  }
  get getCoords() {
    return `(x: ${this.initX}, y: ${this.initY})`;
  }
  moveTo(newX, newY) {
    this.initX = newX;
    this.initY = newY;
  }
}

class Rectangle extends Shape {
  constructor(color, initX, initY, initWidth, initHeight) {
    super(color, initX, initY);
    this.initWidth = initWidth;
    this.initHeight = initHeight;
  }
  setWidth(newWidth) {
    this.initWidth = newWidth;
  }
  setHeight(newHeight) {
    this.initHeight = newHeight;
  }
  get getDims() {
    return `width: ${this.initWidth}, height: ${this.initHeight}`;
  }
  draw() {
    console.log(`Drawing a Rectangle at:\n${this.getCoords}\nWith dimentions:\n${this.getDims}\nFilled with color: ${this.getColor}`);
  }
}

class Circle extends Shape {
  constructor(color, initX, initY, initRadius) {
    super(color, initX, initY);
    this.initRadius = initRadius;
  }
  get getRadius() {
    return this.initRadius;
  }
  setRadius(val) {
    this.initRadius = val;
  }
  draw() {
    console.log(`Drawing a Circle at:\n${this.getCoords}\nWith dimentions:\nradius: ${this.getRadius}\nFilled with color: ${this.getColor}`);
  }
}
// Экземпляры классов для проверки
const rectangle = new Rectangle('green', 10, 20, 1000, 2000);
const circle = new Circle('blue', 30, 40, 100);
console.log(rectangle, circle);
console.log(rectangle.draw(), circle.draw());
