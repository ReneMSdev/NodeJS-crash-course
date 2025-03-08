const generateRandomNumber = () => Math.floor(Math.random() * 100 + 1)

const celciusToFahrenheit = (celcius) => (celcius * 9) / 5 + 32

module.exports = {
  generateRandomNumber,
  celciusToFahrenheit,
}
