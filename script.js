// 1. Select the HTML elements using querySelector
const counterBtn = document.querySelector('#counter-btn');
const counterDisplay = document.querySelector('#counter-display');
// 2. Initialize the counter variable
let count = 0;

// 3. Add an event listener to the button
counterBtn.addEventListener('click', function() {
  count++; // Increases count by 1
  counterDisplay.textContent = count; // Updates the text in the <span>
});
// --- FEATURE 2: TEXT TOGGLER ---

// 1. Select the elements
const toggleBtn = document.querySelector('#toggle-btn');
const toggleText = document.querySelector('#toggle-text');

// 2. Add event listener
toggleBtn.addEventListener('click', function() {
  toggleText.classList.toggle('hidden');
});
// --- FEATURE 3: LIVE INPUT ECHO ---

// 1. Select the input field and display span
const echoInput = document.querySelector('#echo-input');
const echoDisplay = document.querySelector('#echo-display');

// 2. Add an event listener for the 'input' event
echoInput.addEventListener('input', function() {
  echoDisplay.textContent = echoInput.value;
});
// --- FEATURE 4: DYNAMIC LIST ---

// 1. Select the input, button, and unordered list
const listInput = document.querySelector('#list-input');
const addBtn = document.querySelector('#add-btn');
const itemList = document.querySelector('#item-list');

// 2. Add event listener to the "Add Item" button
addBtn.addEventListener('click', function() {
  // Check that the user didn't leave the input blank
  if (listInput.value.trim() !== "") {
    // Step A: Create a new <li> element
    const newLi = document.createElement('li');
    
    // Step B: Set its text content to whatever was typed in the input box
    newLi.textContent = listInput.value;
    
    // Step C: Append the new <li> into the <ul> list
    itemList.appendChild(newLi);
    
    // Step D: Clear the input box so it's ready for the next entry
    listInput.value = "";
  }
});
