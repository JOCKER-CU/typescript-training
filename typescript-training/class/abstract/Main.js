"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Circle_1 = require("./Circle");
const Rectangle_1 = require("./Rectangle");
let shapeCircle = new Circle_1.Circle(22, 22, 22);
// console.log(shapeCircle.getInfo());
// let shapeShape = new Shape(22, 23);
// console.log(shapeShape.getInfo());
let shapeRectangle = new Rectangle_1.Rectangle(0, 0, 2, 4);
// console.log(shapeRectangle.getInfo());
let theShapes = [];
theShapes.push(shapeCircle);
// theShapes.push(shapeShape);
theShapes.push(shapeRectangle);
for (let tempshape of theShapes) {
    console.log(tempshape.getInfo());
    console.log(tempshape.calculateArea());
    console.log();
}
