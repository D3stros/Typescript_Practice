// Defining a class
export class Point {
  // Access modifiers to control access of elements in a class. Here x and y can't be accessed outside.
  // Options are public, private and protected.
  // Naming convention for private variables is _
  constructor(private _x?: number, private _y?: number) {}
  draw() {
    console.log("X:" + this._x + "Y:" + this._y);
  }
}
