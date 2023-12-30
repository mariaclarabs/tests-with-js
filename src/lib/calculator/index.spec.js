const { sum } = require('.')

describe('given sum method', () => {
  it('should sum numbers and return the correct result', () => {
    const firstNumber = 1
    const secondNumber = 2

    const expectedResult = firstNumber + secondNumber

    expect(sum(firstNumber, secondNumber)).toBe(expectedResult)
  })

  it('should sum and return the correct result even one of them is a string', () => {
    const firstNumber = '1'
    const secondNumber = '2'

    const expectedResult = 3

    expect(sum(firstNumber, secondNumber)).toBe(expectedResult)
  })

  it('should throw an error if provided parameters cannot be summed', () => {
    expect(() => {
      sum('', 1)
    }).toThrow()

    expect(() => {
      sum([1, 2])
    }).toThrow()

    expect(() => {
      sum({})
    }).toThrow()

    expect(() => {
      sum()
    }).toThrow()

    expect(() => {
      sum(undefined, 1)
    }).toThrow()

    expect(() => {
      sum(null, 1)
    }).toThrow()
  })
})
