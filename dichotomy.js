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
  getElementIndexNative(number) {
    if (!number) {
      console.log('Введите порядковый номер элемента последовательности...');
    }
    for (let i = 0; i < this.fib.length; i++) {
      if (i === number) {
        return this.fib[i]
      }
    }
  }

  getElementIndexDichotomy(number) {
    if (!number) {
      console.error('Введите порядковый номер элемента последовательности...');
    }

    let start = 0
    let end = this.fib.length - 1

    while (end - start > 1) {
      const middle = Math.floor((start + end)/2)

      if (middle === number) {
        return this.fib[middle]
      }
      if (middle > number) {
        end = middle
      } else {
        start = middle
      }
    }
  }
}

module.exports = Fibonacci
