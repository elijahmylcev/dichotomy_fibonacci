class Fibonacci {
  constructor(index) {
    this.index = index
    this.fib = [0,1]
    for (let i = 0; i < this.index; i++) {
      this.fib.push(this.fib[i] + this.fib[i+1])
    }
  }

  getSequence() {
    return this.fib
  }
  
  // На данный момент метод getElement возвращает ИНДЕКС ЭЛЕМЕНТА МАССИВА
  getElement(number) {
    if (!number) {
      console.log('Введите порядковый номер элемента последовательности...');
    }
    switch (number) {
      case 0:
        return 0
      case 1:
        return 1
      case 2:
        return 1
      default:
        break;
    }
    for (let i = 3; i < this.fib.length; i++) {
      if (i === number) {
        return this.fib[i]
      }
    }
  }
}

module.exports = Fibonacci
