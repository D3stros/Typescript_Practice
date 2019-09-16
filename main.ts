// Defining a class
class Point {
  // Access modifiers to control access of elements in a class. Here x and y can't be accessed outside.
  // Options are public, private and protected
  constructor(private x?: number, private y?: number) {
    this.x = x;
    this.y = y;
  }
  draw() {
    console.log("X:" + this.x + "Y:" + this.y);
  }
}

let point = new Point(1, 2);
point.draw();
