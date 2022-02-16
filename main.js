// I created a variable (kelvin) with a primitive data type (number)
// with a constant, unchangable value.
const kelvin = 293;


// constant variable, celsius with value kelvin subtracted by 273
const celsius = kelvin - 273;


// constant variable, fahrenheit, using celsius inside its equation.
const fahrenheit = celsius * (9 / 5) + 32;
const temperature = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees fahrenheit`);

const newton = celsius * (33 / 100);
const fixedNewton = Math.floor(newton);

console.log(`The temperature is ${fixedNewton} in newton`);
