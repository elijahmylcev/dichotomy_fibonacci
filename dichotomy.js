class Fibonacci {
  constructor(index) {
    this.index = index
    const fib = [0,1]
    for (let i = 0; i < this.index; i++) {
      fib.push(fib[i] + fib[i+1])
    }
    return fib
  }

  getElement(index) {

  }
}

module.exports = Fibonacci
