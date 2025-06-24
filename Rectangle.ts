interface Rectangle {
  width: number;
  height: number;
}

function calcRectArea(rectangle: Rectangle): number | string {
  const { width, height } = rectangle;
  if (width <= 0 || height <= 0) {
    return "Value must be greater then 0";
  }
  return width * height;
}

const rect1: Rectangle = { width: 5, height: 10 };
const rect2: Rectangle = { width: 23, height: 8 };
const rect3: Rectangle = { width: 48, height: 16 };

console.log(calcRectArea(rect1));
console.log(calcRectArea(rect2));
console.log(calcRectArea(rect3));
