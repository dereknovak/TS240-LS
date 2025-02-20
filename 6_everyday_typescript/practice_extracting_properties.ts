interface ShapeCommon {
  color: string;
}

interface Rectangle extends ShapeCommon {
  length: number;
  width: number;
}

interface Circle extends ShapeCommon {
  radius: number;
}

type Shape = Rectangle | Circle;

function isCircle(shape: Shape): shape is Circle {
  return 'radius' in shape;
}

function displayShapeInfo(shape: Shape) {
  let area: number;

  if (isCircle(shape)) {
    area = Math.PI * (shape.radius ** 2);
  } else {
    area = shape.length * shape.width;
  }

  return `The ${shape.color} shape has an area of ${area}.`;
}