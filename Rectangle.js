function calcRectArea(rectangle) {
    var width = rectangle.width, height = rectangle.height;
    if (width <= 0 || height <= 0) {
        return "Value must be greater then 0";
    }
    return width * height;
}
var rect1 = { width: 5, height: 10 };
var rect2 = { width: 23, height: 8 };
var rect3 = { width: 48, height: 16 };
console.log(calcRectArea(rect1));
console.log(calcRectArea(rect2));
console.log(calcRectArea(rect3));
