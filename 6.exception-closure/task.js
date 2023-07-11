function parseCount(arg) {
  let value = Number.parseFloat(arg);

  if (Number.isNaN(value)) {
    throw new Error('Невалидное значение');
  }

  return value;
}

function validateCount(arg) {  
  try {
    return parseCount(arg);
  } catch (error) {
    return error;
  }
}

class Triangle {
  constructor(a, b, c) {
    if (a + b < c || a + c < b || b + c < a) {
      throw new Error('Треугольник с такими сторонами не существует');
    }
    this._perimeter = a + b + c;

    let p = (a + b + c) / 2;
    this._area = +(Math.sqrt(p * (p - a) * (p - b) * (p - c))).toFixed(3);
  }

  get perimeter() {
    return this._perimeter;
  }

  get area() {
    return this._area;
  }
}

class falseTriangle {
  get perimeter() {
    return 'Ошибка! Треугольник не существует';
  }

  get area() {
    return 'Ошибка! Треугольник не существует';
  }
}

function getTriangle(a, b, c) {
  try {
    return new Triangle(a, b, c);
  } catch(error) {
    return new falseTriangle();
  }
}