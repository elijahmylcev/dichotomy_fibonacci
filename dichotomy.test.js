const Fibonacci = require('./dichotomy');
const fibTest = new Fibonacci(9)

describe('Fibonacci sequence', () => {
  test('getSequence method return an array', () => {
    expect(Array.isArray(fibTest.getSequence())).toBeTruthy();
  });
  test('Each subsequent number in the sequence[array] is equal to the sum of the previous two numbers', () => {
    const expected = [0, 1, 1, 2, 3, 5, 8]
    expect(fibTest.getSequence()).toEqual(expect.arrayContaining(expected));
  });
});

describe('getElementIndexNative(number)', () => {
  test('should return message: !number', () => {
    jest.spyOn(console, 'log');

    expect(console.log.mock.calls.length).toBe(0);
    fibTest.getElementIndexNative();
    expect(console.log.mock.calls.length).toBe(1);
    expect(console.log.mock.calls[0][0]).toBe('Введите порядковый номер элемента последовательности...');
  });
  test('Returns the element in a sequence at the specified index', () => {
    expect(fibTest.getElementIndexNative(1)).toEqual(1);
    expect(fibTest.getElementIndexNative(2)).toEqual(1);
    expect(fibTest.getElementIndexNative(4)).toEqual(3);
    expect(fibTest.getElementIndexNative(6)).toEqual(8);
  })

  afterEach(() => {
    jest.clearAllMocks();
  });
});

describe('getElementIndexDichotomy(number) method', () => {
  test('Should return error if !number', () => {
    jest.spyOn(console, 'error')

    expect(console.error.mock.calls.length).toBe(0);
    fibTest.getElementIndexDichotomy();
    expect(console.error.mock.calls.length).toBe(1);
    expect(console.error.mock.calls[0][0]).toBe('Введите порядковый номер элемента последовательности...');
  });

  test('Should return element at the specified index ', () => {
    expect(fibTest.getElementIndexDichotomy(1)).toEqual(1);
    expect(fibTest.getElementIndexDichotomy(2)).toEqual(1);
    expect(fibTest.getElementIndexDichotomy(4)).toEqual(3);
    expect(fibTest.getElementIndexDichotomy(6)).toEqual(8);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
