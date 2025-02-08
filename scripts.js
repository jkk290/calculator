// Create function for adding 2 numbers
let addition = (num1, num2) => num1 + num2;

// Create function for subtracting 2 numbers
let subtraction = (num1, num2) => num1 - num2;

// Create function for multiplying 2 numbers
let multiplication = (num1, num2) => num1 * num2;

// Create function for dividing 2 numbers
let division = (num1, num2) => num1 / num2;

// Create 3 variables to store each part of the operation(number, operator, another number)
let numA = 0;
let numB = 0;
let operator;

// Create buttons representing each digit and operator(including =)
const buttons = document.querySelector('#buttons');

for (let i = 0; i <= 9; i++) {
  const numButton = document.createElement('button');
  numButton.textContent = i;
  numButton.addEventListener('click', (event) => {
    displayScreen.textContent += i;
  });
  buttons.append(numButton);
}

const operators = ['+', '-', '*', '/'];
operators.forEach((symbol) => {
  const operatorButton = document.createElement('button');
  operatorButton.textContent = symbol;
  operatorButton.addEventListener('click', (event) => {
    displayScreen.textContent += ' ' + symbol + ' ';
  });
  buttons.append(operatorButton);
});

const equalButton = document.createElement('button');
equalButton.textContent = '=';
buttons.append(equalButton);

// Create calculator display
const display = document.querySelector('#display');
const displayScreen = document.createElement('h2');
displayScreen.style.backgroundColor = '#949a79';
displayScreen.textContent = '10 + 2 = 12';
display.prepend(displayScreen);

// Create clear display button
const clearButton = document.createElement('button');
clearButton.textContent = 'Clear';

function clearDisplay() {
  displayScreen.textContent = '';
};

clearButton.addEventListener('click', clearDisplay);

buttons.append(clearButton);




// Create function that populates the display with clicked on digit buttons
