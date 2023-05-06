// Создадим типовой объект (Студента)
function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

// Добавим в прототип Студента свойство 'изучаемый предмет'
Student.prototype.setSubject = function (subjectName) {
  return this.subject = subjectName;
}

// Добавим в прототип Студента свойство 'перечень оценок'
Student.prototype.addMarks = function (...marksToAdd) {
  if (this.hasOwnProperty('marks')) {
    this.marks.push(...marksToAdd);
  }
}

// Добавим метод, вычисляющий среднее арифметическое оценок
Student.prototype.getAverage = function () {
  if (!this.hasOwnProperty('marks') || this.marks.length === 0) {
    return 0;
  }

  let result = this.marks.reduce((acc, item, idx, arr) => {
    acc += item;

    if (idx === arr.length - 1) {
      return acc / arr.length;
    } else {
      return acc;
    }
  }, 0);

  return result;
}

// Добавим метод, отчисляющий студента
Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;

  this.excluded = reason;
}