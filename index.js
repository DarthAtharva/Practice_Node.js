/* 
    CommonJS syntax: 
    const {generateRandomNumber, celciusToFahrenheit} = require('./utils'); 
*/

/* Below is the package type is ESmodule; used throughout this repository, braces are not required for 'export default functions' */
import { generateRandomNumber, celciusToFahrenheit } from "./utils.js";

console.log(`Random number: ${generateRandomNumber()}`);
console.log(`Celcius to Farenheit: ${celciusToFahrenheit(0)}`);