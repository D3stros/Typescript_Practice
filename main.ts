// Defining a class
class Point {
  x: number;
  y: number;
  // Parameters x and y are optional here because of the ?
  constructor(x?: number, y?: number) {
    this.x = x;
    this.y = y;
  }
  draw() {
    console.log("X:" + this.x + "Y:" + this.y);
  }
}

let point = new Point(1, 2);
point.draw();
