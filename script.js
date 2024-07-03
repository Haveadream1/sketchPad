let getValueRange = document.querySelector('.size-input').value;
let getValueColor = document.querySelector('.color-input').value;

let gridChild = document.querySelectorAll('.grid-child');
let gridSection = document.querySelector('.grid-section');

let colorCode;
let alpha = 0;


const sizeButton = document.querySelector('.size-input');
function changeSize() { // main function
  restart();

  getValueRange = document.querySelector('.size-input').value;
  alpha = 0;

  createCell();
  displayProportion();
  clearFunction();

  return getValueRange;
}
sizeButton.addEventListener('click', changeSize);

document.addEventListener("DOMContentLoaded", () => { // Run on the onload with base value 32
  changeSize()
})

function createCell() {
  numberCell = getValueRange * getValueRange;
  console.log(`Number of cell : ${numberCell}`);

  for(let i = 0; i < numberCell; i++) {
    cell = document.createElement('div');
    gridSize = 400;

    let size = gridSize / getValueRange; 
    console.log(`Size of the cell : ${size}`);

    cell.style.flexBasis = size + 'px'; // Width of the cell
    cell.style.height = size + 'px';

    cell.addEventListener('mouseover', color);
    gridSection.appendChild(cell);
  };
} 

function choiceColor() { // Color choice depends on the button
  if(colorCode === 1 ) {
    getValueColor = 'white'; // Eraser color
  } else if(colorCode === 2) {
    getValueColor = rainbowFunction(array);
  } else if(colorCode === 3) {
    getValueColor = document.querySelector('.color-input').value;
  } else if(colorCode === 4) { // Fade color from transparent to solid
    if(alpha < 0.99) {
      alpha += 0.1;
    } else {
      alpha = 0;
      alpha += 0.1;
    }
    getValueColor = fadeFunction();
  }
}

function color(e) {
    choiceColor();
    e.target.style.backgroundColor = getValueColor;
}

const eraserButton = document.querySelector('.eraser-button');
function eraseFunction() {
  colorCode = 1;
}
eraserButton.addEventListener('click', eraseFunction);

const array = ['red','orange','yellow','green','blue','indigo','violet'];
const rainbowButton = document.querySelector('.rainbow-button');
function rainbowFunction(array) { // Choose a random color from the array
  colorCode = 2;

  const randomIndex = Math.floor(Math.random() * array.length);
  const choice = array[randomIndex];

  return choice;
}
rainbowButton.addEventListener('click', rainbowFunction);

const colorInput = document.querySelector('.color-input');
function colorPicker() {
  colorCode = 3;
} 
colorInput.addEventListener('click', colorPicker);

const fadeButton = document.querySelector('.fade-button');
function fadeFunction() { // Create a rbga value with only the transparency modifiable
  colorCode = 4;

  let red, green, blue;
  let rgbaValue = `${red = 0}, ${green = 0}, ${blue = 0}, ${alpha}`;
  getValueColor = `rgba${rgbaValue}`; // Convert to a string

  return getValueColor;
}
fadeButton.addEventListener('click', fadeFunction);

const clearButton = document.querySelector('.clear-button');
function clearFunction() { // Select all the cell to clear the color
  gridCell = document.querySelectorAll('div');
  gridCell.forEach((cell) => {
    cell.style.backgroundColor = 'white';
  });
}
clearButton.addEventListener('click', clearFunction);

function restart() { // Clear the grid of all cells
  removeCell = document.querySelectorAll('div');
  removeCell.forEach((cell) => {
    cell.remove();
  });
}

const sizeText = document.querySelector('.size-text');
function displayProportion() {
  sizeText.textContent = `${getValueRange} x ${getValueRange}`;
}

/*  Need a container with grid inside
    The number of grid should be determined by the range slide
    when we hover over the grid we should paint it
    the color should be determine with a button or a color circle
    Moreover we have an rainbow mode who choice a random color
    An eraser, so return white color
    and a clear button that target all the grid and make it blank
    don't forget to make something when the webpage reduce */
