// Defining a class
class Point {
  // Access modifiers to control access of elements in a class. Here x and y can't be accessed outside.
  // Options are public, private and protected.
  // Naming convention for private variables is _
  constructor(private _x?: number, private _y?: number) {}
  draw() {
    console.log("X:" + this.x + "Y:" + this.y);
  }

  get X() {
    return this.x;
  }

  set X(value) {
    if (value < 0) throw new Error("value cannot be less than 0.");

    this.x = value;
  }
}

let point = new Point(1, 2);
let x = point.X;
point.X = 10;
point.draw();
