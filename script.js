let getValueRange = document.querySelector('.input-button').value;
let gridChild = document.querySelectorAll('.grid-child');
let gridContainer = document.querySelector('.grid-container');
let getValueColor = document.querySelector('.input-color').value;
let x;
let alpha = 0;

console.log('Select first the size of the grid!');

const inputButton = document.querySelector('.input-button');
function changeSize() {
  restart();
  getValueRange = document.querySelector('.input-button').value;
  alpha = 0;
  createDiv();
  displayProportion();
  clearFunction();
  return getValueRange;
}
inputButton.addEventListener('click', changeSize);

function createDiv() {
  numberGrid = getValueRange * getValueRange;
  console.log(`Number of grid : ${numberGrid}`);
  for(let i = 0; i < numberGrid; i++) {
    gridChild = document.createElement('div');
    let size = 400 / getValueRange; 
    console.log(`Size of the cell : ${size}`);
    gridChild.style.flexBasis = size + 'px';
    gridChild.style.height = size + 'px';
    gridChild.addEventListener('mouseover', color);
    gridContainer.appendChild(gridChild);
  };
} 

function choiceColor() {
  if(x === 1 ) {
    getValueColor = 'white';
  } else if(x === 2) {
    getValueColor = rainbowColor(array);
  } else if(x === 3) {
    getValueColor = document.querySelector('.input-color').value;
  } else if(x === 4) {
    if(alpha < 0.99) {
      alpha += 0.1;
    } else {
      alpha = 0;
      alpha += 0.1;
    }
    getValueColor = degradedFunction();
  }
}

function color(e) {
    choiceColor();
    e.target.style.backgroundColor = getValueColor;
}

const eraserButton = document.querySelector('.eraser-button');
function eraserFunction() {
  x = 1;
}
eraserButton.addEventListener('click', eraserFunction);

function rainbowColor(array) {
  x = 2;
  const randomIndex = Math.floor(Math.random() * array.length);
  const choice = array[randomIndex];
  return choice;
}
const array = ['red','orange','yellow','green','blue','indigo','violet'];
const rainbowButton = document.querySelector('.rainbow-button');
rainbowButton.addEventListener('click', rainbowColor);

const colorInput = document.querySelector('.input-color');
function colorPicker() {
  x = 3;
} 
colorInput.addEventListener('click', colorPicker);

const degradedButton = document.querySelector('.degraded-button');
function degradedFunction() {
  x = 4;
  let red = 0;
  let green = 0;
  let blue = 0;
  let rgbaValue = `(${red}, ${green}, ${blue}, ${alpha})`;
  getValueColor = (`rgba${rgbaValue}`);
  return getValueColor;
}
degradedButton.addEventListener('click', degradedFunction);

let clearButton = document.querySelector('.clear-button');
function clearFunction() {
  alpha = 0;
  whiteDiv = document.querySelectorAll('div');
  whiteDiv.forEach((item) => {
    item.style.backgroundColor = 'white';
  });
}
clearButton.addEventListener('click', clearFunction);

function restart() {
  removeDiv = document.querySelectorAll('div');
  removeDiv.forEach((item) => {
    item.remove();
  });
}

const textSize = document.querySelector('.text-size');
function displayProportion() {
  textSize.textContent = `${getValueRange} x ${getValueRange}`;
}

/*  Need a container with grid inside
    The number of grid should be determined by the range slide
    when we hover over the grid we should paint it
    the color should be determine with a button or a color circle
    Moreover we have an rainbow mode who choice a random color
    An eraser, so return white color
    and a clear button that target all the grid and make it blank
    don't forget to make something when the webpage reduce */
