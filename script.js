const arrayColor = ['red','orange','yellow','green','blue','indigo','violet'];

let sizeInputValue = document.querySelector('.size-input').value;
let colorInputValue = document.querySelector('.color-input').value;

let colorCode;
let alpha = 0;

const colorInput = document.querySelector('.color-input');
colorInput.addEventListener('click', () => colorCode = 1);

const rainbowButton = document.querySelector('.rainbow-button');
rainbowButton.addEventListener('click', () => colorCode = 2);

const eraserButton = document.querySelector('.eraser-button');
eraserButton.addEventListener('click', () => colorCode = 3);

const fadeButton = document.querySelector('.fade-button');
fadeButton.addEventListener('click', () => colorCode = 4);

function rainbowFunction(array) { // Choose a random color from the array
  let randomIndex = Math.floor(Math.random() * array.length);
  let color = array[randomIndex];

  return color;
}

function fadeColor(alpha) { // Create a rbga value with only the transparency modifiable
  let red, green, blue;
  let rgbaValue = `${red = 0}, ${green = 0}, ${blue = 0}, ${alpha}`;
  let color = `rgba(${rgbaValue})`; // Convert to a string

  return color;
}

function mainFunction() {
  let color;
  if (colorCode === 1) {
    color = document.querySelector('.color-input').value;
  } else if (colorCode === 2) {
    color = rainbowFunction(arrayColor);
  } else if (colorCode === 3) {
    color = 'white';
  } else if (colorCode === 4) {
    if (alpha < 0.99) {
      alpha += 0.1;
    } else {
      alpha = 0;
      alpha += 0.1;
    }
    color = fadeColor(alpha);
  }
  return color;
}

function color(e) {
  let color = mainFunction();
  e.target.style.backgroundColor = color;
}

function createCell() {
  let gridSection = document.querySelector('.grid-section');
  let numberCell = sizeInputValue * sizeInputValue;
  console.log(`Number of cell : ${numberCell}`);

  for(let i = 0; i < numberCell; i++) {
    let cell = document.createElement('div');
    let gridSize = 400;

    let size = gridSize / sizeInputValue; 
    console.log(`Size of the cell : ${size}`);

    cell.style.flexBasis = size + 'px'; // Width of the cell
    cell.style.height = size + 'px';

    cell.addEventListener('mouseover', color);
    gridSection.appendChild(cell);
  };
} 

const clearButton = document.querySelector('.clear-button');
function clearColor() { // Clear the grid of all colors
  let gridCells = document.querySelectorAll('div');
  gridCells.forEach((cell) => cell.style.backgroundColor = 'white');
}
clearButton.addEventListener('click', clearColor);

function removeCell() { // Remove the grid of all cells
  let gridCells = document.querySelectorAll('div');
  gridCells.forEach((cell) => cell.remove());
}

function displayProportion() {
  let sizeInputValue = document.querySelector('.size-input').value;
  let sizeText = document.querySelector('.size-text');
  sizeText.textContent = `${sizeInputValue} x ${sizeInputValue}`;
}

const sizeInput = document.querySelector('.size-input');
function changeGridSize() { // main function
  removeCell();

  let sizeInputValue = document.querySelector('.size-input').value;
  let alpha = 0;

  createCell();
  displayProportion();
  clearColor();

  return sizeInputValue, alpha;
}
sizeInput.addEventListener('click', changeGridSize);

document.addEventListener("DOMContentLoaded", () => { // Run on the onload with base value 32
  changeGridSize();
})

/*  Need a container with grid inside
    The number of grid should be determined by the range slide
    when we hover over the grid we should paint it
    the color should be determine with a button or a color circle
    Moreover we have an rainbow mode who choice a random color
    An eraser, so return white color
    and a clear button that target all the grid and make it blank
    don't forget to make something when the webpage reduce */
