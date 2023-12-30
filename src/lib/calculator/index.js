const sum = (firstNumber, secondNumber) => {
  const parsedFirstNumber = parseInt(firstNumber, 10)
  const parsedSecondNumber = parseInt(secondNumber, 10)

  if (isNaN(parsedFirstNumber) || isNaN(parsedSecondNumber))
    throw new Error('Please provide two numbers to get the result')

  return parsedFirstNumber + parsedSecondNumber
}

module.exports = { sum }
