let getValueRange = document.querySelector('.input-button').value;
let gridChild = document.querySelectorAll('.grid-child');
const gridContainer = document.querySelector('.grid-container');

let getValueColor = document.querySelector('.input-color').value;
console.log(getValueColor);

const inputButton = document.querySelector('.input-button');
function changeSize() {
  getValueRange = document.querySelector('.input-button').value;
  console.log(getValueRange);
  createDiv();
  displayProportion();
  return getValueRange;
}
inputButton.addEventListener('click', changeSize);

function color(e) {
  getValueColor = document.querySelector('.input-color').value;
  e.target.style.backgroundColor = getValueColor;
}
// x change color | x clear | x color overflow
// when eraser is active run function
// same for rainbow
// change the size call clear function 
function createDiv() {
  numberGrid = getValueRange * getValueRange;
  console.log(numberGrid);
  for(let i = 0; i < numberGrid; i++) {
    gridChild = document.createElement('div');

    let size = 400 / getValueRange; 
    console.log(size);
    gridChild.style.flexBasis = size + 'px';
    gridChild.style.height = size + 'px';
    gridChild.addEventListener('mouseover', color);
    gridContainer.appendChild(gridChild);
  };
} 
//
const eraserButton = document.querySelector('.eraser-button');
function eraserFunction(e) {
  getValueColor = 'white';
  e.target.style.backgroundColor = getValueColor;
}
//work only for one div
function test() {
  let x = 1
  if(x === 1) {
    numberGrid = getValueRange * getValueRange;
    for(let i = 0; i < numberGrid; i++) {
      gridChild.addEventListener('mouseover', eraserFunction);
    };
    console.log('hi');
  }
}
eraserButton.addEventListener('click', test);
//

const textSize = document.querySelector('.text-size');
function displayProportion() {
  textSize.textContent = `${getValueRange} x ${getValueRange}`;
}

function rainbowColor(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  const choice = array[randomIndex];
  return choice;
}
const array = ['red','orange','yellow','green','blue','indigo','violet'];
const rainbowButton = document.querySelector('.rainbow-button');
rainbowButton.addEventListener('click', rainbowColor);
rainbowColor(array);

//doesnt work
let clearButton = document.querySelector('.clear-button');
function clearFunction() {
  for(key in gridChild) {
    key.style.backgroundColor = 'white';
  }
}
clearButton.addEventListener('click', clearFunction);



// https://stackoverflow.com/questions/58955134/hover-over-one-element-at-the-time-with-dom-manipulation
/*
  gridChild.forEach((item) => {
    item.style.backgroundColor = 'white';
  });
/*
Set the value of input
loop to create div
color hover don't work
*/
/*
Need a container with grid inside
The number of grid should be determined by the range slide
when we hover over the grid we should paint it
the color should be determine with a button or a color circle
Moreover we have an rainbow mode who choice a random color
An eraser, so return white color
and a clear button that target all the grid and make it blank
don't forget to make something when the webpage reduce
*/