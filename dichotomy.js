class Fibonacci {
  constructor(index) {
    this.index = index
  }

  getFib(index) {
    const fib = [0,1]
    for (let i = 0; i < index; i++) {
      fib.push(fib[i] + fib[i+1])
    }
    return fib
  }
}

module.exports = Fibonacci
