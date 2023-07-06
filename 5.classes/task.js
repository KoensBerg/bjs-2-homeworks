// — — — — — — — — — — — — — — — — — — — — — — — —
// Задание 1 - ПЕЧАТНОЕ ИЗДАНИЕ
// — — — — — — — — — — — — — — — — — — — — — — — —

class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;                  // название
    this.releaseDate = releaseDate;    // дата выпуска
    this.pagesCount = pagesCount;      // количество страниц
    this.state = 100;                  // состояние
    this.type = null;                  // тип
  }

  set state(value) {
    if (value < 0) {
      this._state = 0;
    } else if (value > 100) {
      this._state = 100;
    } else {
      this._state = value;
    }
    // this._newState = this.state;
  }

  get state() {
    return this._state;
  }

  fix() {
    this.state *= 1.5;
    if (this.state > 100) {
      this.state = 100;
    }

  }
}

// — — — — — — — — — — — — — — — — — — — — — — — —

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = 'magazine';
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.author = author;
    this.type = 'book';
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = 'novel';
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = 'fantastic';
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = 'detective';
  }
}

// — — — — — — — — — — — — — — — — — — — — — — — —
// Задание 2 - БИБЛИОТЕКА
// — — — — — — — — — — — — — — — — — — — — — — — —

class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    }
  }

  findBookBy(type, value) {
    let searchingBook = this.books.find(item => item[type] === value);
    if (searchingBook) {
      return searchingBook;
    }

    return null;
  }

  giveBookByName(bookName) {
    let searchingBook = this.findBookBy('name', bookName);
    if (!searchingBook) return null;

    this.books = this.books.filter(item => item !== searchingBook);
    return searchingBook;
  }
}

// — — — — — — — — — — — — — — — — — — — — — — — —
// Задание 3 - ЖУРНАЛ УСПЕВАЕМОСТИ
// — — — — — — — — — — — — — — — — — — — — — — — —

class Student {
  constructor(name) {
    this.name = name;
    this.marks = {};
  }

  // добавим оценку по предмету
  addMark(mark, subjectName) {
    mark = parseFloat(mark);
    
    if (mark >= 2 && mark <= 5) {
      if (!this.marks.hasOwnProperty(subjectName)) {
        this.marks[subjectName] = [];
      }
      this.marks[subjectName].push(mark);
    }
  }

  // вычислим среднюю оценку по конкретному предмету
  getAverageBySubject(subjectName) {
    if (!this.marks.hasOwnProperty(subjectName) || 
    this.marks[subjectName].length === 0) {
      return 0;
    }
    
    return +(this.marks[subjectName].reduce((a, b) => a + b) / this.marks[subjectName].length).toFixed(2);
  }

  // вычислим среднюю успеваемость по всем предметам
  getAverage() {
    const arrayOfSubjects = Object.keys(this.marks);
    const arrayOfAverages = [];
    
    arrayOfSubjects.forEach(item => arrayOfAverages.push(this.marks[item].reduce((a, b) => a + b) / this.marks[item].length));

    if (arrayOfAverages.length === 0) {
      return 0;
    }

    return +(arrayOfAverages.reduce((a, b) => a + b) / arrayOfAverages.length).toFixed(2);
  }
}