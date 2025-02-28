let sizeInputValue = document.querySelector('.size-input').value;
let colorInputValue = document.querySelector('.color-input').value;

let gridChild = document.querySelectorAll('.grid-child');
let gridSection = document.querySelector('.grid-section');


function createCell() {
  numberCell = sizeInputValue * sizeInputValue;
  console.log(`Number of cell : ${numberCell}`);

  for(let i = 0; i < numberCell; i++) {
    cell = document.createElement('div');
    gridSize = 400;

    let size = gridSize / sizeInputValue; 
    console.log(`Size of the cell : ${size}`);

    cell.style.flexBasis = size + 'px'; // Width of the cell
    cell.style.height = size + 'px';

    cell.addEventListener('mouseover', color);
    gridSection.appendChild(cell);
  };
} 

function choiceColor() { // Color choice depends on the button
  if(colorCode === 1 ) {
    colorInputValue = 'white'; // Eraser color
  } else if(colorCode === 2) {
    colorInputValue = rainbowFunction(array);
  } else if(colorCode === 3) {
    colorInputValue = document.querySelector('.color-input').value;
  } else if(colorCode === 4) { // Fade color from transparent to solid
    if(alpha < 0.99) {
      alpha += 0.1;
    } else {
      alpha = 0;
      alpha += 0.1;
    }
    colorInputValue = fadeFunction();
  }
}

function color(e) {
    choiceColor();
    e.target.style.backgroundColor = colorInputValue;
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
  let colorCode = 3;
} 
colorInput.addEventListener('click', colorPicker);

const fadeButton = document.querySelector('.fade-button');
function fadeColor() { // Create a rbga value with only the transparency modifiable
  let colorCode = 4;

  let red, green, blue;
  let rgbaValue = `${red = 0}, ${green = 0}, ${blue = 0}, ${alpha}`;
  let colorInputValue = `rgba${rgbaValue}`; // Convert to a string

  return colorInputValue;
}
fadeButton.addEventListener('click', fadeColor);

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

const sizeText = document.querySelector('.size-text');
const displayProportion = () => sizeText.textContent = `${sizeInputValue} x ${sizeInputValue}`;

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
