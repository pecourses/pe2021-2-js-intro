class RangeValidator {
  constructor(from, to) {
    this.valueFrom = from;
    this.valueTo = to;
  }
  validate(value) {
    if (typeof value !== 'number' || Number.isNaN(value)) {
      return false;
    }
    return value >= this.valueFrom && value <= this.valueTo;
  }
  get range() {
    return [this.valueFrom, this.valueTo];
  }

  set valueFrom(value) {
    if (typeof value !== 'number') {
      throw new TypeError('value must be number');
    }
    if (Number.isNaN(value)) {
      throw new RangeError('value must be not NaN');
    }
    if ('_valueTo' in this && value > this.valueTo) {
      throw new RangeError('from must be <= to');
    }
    this._valueFrom = value;
  }
  get valueFrom() {
    return this._valueFrom;
  }
  set valueTo(value) {
    if (typeof value !== 'number') {
      throw new TypeError('value must be number');
    }
    if (Number.isNaN(value)) {
      throw new RangeError('value must be not NaN');
    }
    if (value < this.valueFrom) {
      throw new RangeError('from must be <= to');
    }
    this._valueTo = value;
  }
  get valueTo() {
    return this._valueTo;
  }
}

try {
  const range1 = new RangeValidator(1, 5.5); // Отрабатывает

  // Работа сеттеров
  range1.valueFrom = 5; // Отрабатывает
  // range1.valueFrom = 200; // ОШИБКА!!!

  range1.valueTo = 80; // Отрабатывает
  // range1.valueTo = -55; // ОШИБКА!!!

  // Работа геттеров
  console.log(range1.valueFrom); // => 5
  console.log(range1.valueTo); // => 80

  // Работа геттера range
  console.log(range1.range); // => [5, 80]

  // Работа validate
  console.log(range1.validate(10)); // => true

  console.log(range1.validate('gdfgf')); // => false
} catch (e) {
  console.log('e :>> ', e);
}
