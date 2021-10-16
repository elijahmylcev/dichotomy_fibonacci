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
  
  getElement() {
    
  }
}

module.exports = Fibonacci
