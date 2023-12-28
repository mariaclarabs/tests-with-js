const { sum } = require("./calculator")

it('should sum numbers and return the correct result in sum method', () => {
  const firstNumber = 1
  const secondNumber = 2

  const expectedResult = firstNumber + secondNumber

  expect(sum(firstNumber, secondNumber)).toBe(expectedResult)
})
