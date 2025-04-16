/* Helper Functions which may be used somewhere else */

const generateRandomNumber = () => Math.floor(Math.random() * 100 + 1)
const celciusToFahrenheit= (n) => (n * 9) / 5 + 32;

/* 
    CommonJS syntax: 
    module.exports = {generateRandomNumber, celciusToFahrenheit};
    
*/

export {generateRandomNumber, celciusToFahrenheit}