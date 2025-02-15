// Create function for adding 2 numbers
let addition = (num1, num2) => num1 + num2;

// Create function for subtracting 2 numbers
let subtraction = (num1, num2) => num1 - num2;

// Create function for multiplying 2 numbers
let multiplication = (num1, num2) => num1 * num2;

// Create function for dividing 2 numbers
let division = (num1, num2) => num1 / num2;

// Create 3 variables to store each part of the operation(number, operator, another number)
let numA = '';
let numB = '';
let operator = null;

// Create buttons representing each digit and operator(including =)
const buttons = document.querySelector('#buttons');

function updateNum(i) {
  if (operator != null) {
    numB += i.toString();
    console.log('numB: ' + numB);
  } else {
    numA += i.toString();
    console.log('numA: ' + numA);
  }
};

for (let i = 9; i >= 0; i--) {
  const numButton = document.createElement('button');
  numButton.textContent = i;
  numButton.addEventListener('click', (event) => {
    updateNum(i);
    updateDisplay(numA, numB);
  });
  numButton.style.width = '100px';
  numButton.style.height = '100px';
  numButton.style.fontSize = '50px';
  numButton.style.margin = '5px';
  buttons.append(numButton);
}

const operators = ['+', '-', '*', '/'];
const operatorButtons = document.querySelector('#operatorButtons');

operators.forEach((symbol) => {
  const operatorButton = document.createElement('button');
  operatorButton.textContent = symbol;
  operatorButton.addEventListener('click', (event) => {
    operator = symbol;
    displayScreen.textContent = numA + ' ' + operator + ' ' + numB;
    console.log(operator);
  });
  operatorButton.style.width = '60px';
  operatorButton.style.height = '50px';
  operatorButtons.append(operatorButton);
});

const equalButton = document.createElement('button');
equalButton.textContent = '=';

// Create function that populates the display with clicked on digit buttons

function calculate(numA, numB, operator) {
  if ((numB === 0) && (operator == '/')) {
    displayScreen.textContent = 'Haha, nice!';
  } else if (operator == '+') {
    displayScreen.textContent = addition(numA, numB).toPrecision(5);
  } else if (operator == '-') {
    displayScreen.textContent = subtraction(numA, numB).toPrecision(5);
  } else if (operator == '*') {
    displayScreen.textContent = multiplication(numA, numB).toPrecision(5);
  } else {
    displayScreen.textContent = division(numA, numB).toPrecision(5);
  }
};

equalButton.addEventListener('click', (event) => {
  if ((numA != '') && (operator != null) && (numB != '')) {
    calculate(parseInt(numA), parseInt(numB), operator);
  } else {
    displayScreen.textContent = 'Error, does not compute'
  };
})
equalButton.style.width = '60px';
equalButton.style.height = '50px';
operatorButtons.append(equalButton);

// Create calculator display
const display = document.querySelector('#display');
const displayScreen = document.createElement('h2');
displayScreen.style.backgroundColor = '#949a79';
display.prepend(displayScreen);

function updateDisplay(numA,numB) {
  if (operator != undefined) {
    displayScreen.textContent = numA + ' ' + operator + ' ' + numB;
  } else {
    displayScreen.textContent = numA;
  }
};

// Create clear display button
const clearButton = document.createElement('button');
clearButton.textContent = 'Clear';

function clearDisplay() {
  displayScreen.textContent = '';
  numA = '';
  numB = '';
  operator = undefined;
};

clearButton.addEventListener('click', clearDisplay);
clearButton.style.width = '60px';
clearButton.style.height = '50px';
operatorButtons.append(clearButton);
