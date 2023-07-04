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
    if (this.state > 0 && this.state < 100) {
      this.state *= 1.5;
    }
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
    let searchingBook = this.books.find(item => item.name === bookName);
    
    if (searchingBook) {
      let idx = this.books.indexOf(searchingBook);
      delete this.books[idx];
      this.books = this.books.filter(item => item);

      return searchingBook;
    }

    return null;
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
    
    return +(this.marks[subjectName].reduce((a, b) => a + b) / this.marks[subjectName].length).toFixed(1);
  }

  // вычислим среднюю успеваемость по всем предметам
  getAverage() {
    let arrayOfSubjects = Object.keys(this.marks);
    let arrayOfAverages = [];
    
    arrayOfSubjects.forEach(item => arrayOfAverages.push(this.marks[item].reduce((a, b) => a + b) / this.marks[item].length));

    if (arrayOfAverages.length === 0) {
      return 0;
    }

    return arrayOfAverages.reduce((a, b) => a + b) / arrayOfAverages.length;
  }
}