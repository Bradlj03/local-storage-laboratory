

const stringInputForm = document.querySelector("#string-saver-form");
const stringInput = document.querySelector("#string-saver-input");
const savedStr = document.querySelector("#saved-string");

const counter = document.querySelector("#counter");
let hitCounter = localStorage.getItem("count");

const listForm = document.querySelector("#list-builder-form");
const listInput = document.querySelector("#list-builder-input");
const listOfItems = document.querySelector("#list");

const clearAll = document.querySelector("#clear-all");

/*! Challenge 1:  =====================================================
Your first challenge is to allow the user to save a string in local storage.

To do this, create a text input and a button in HTML. From here, write JS so that
when the button is clicked, whatever is in the text input is saved in local storage.
Below the text input and button, the string should also be displayed on the page. 
If the user enters "corndog" into the text input, clicks the button, 
then refreshes the page. The word "corndog" should appear on the page.
When the page is loaded, load information from local storage */

const savedStrValue = localStorage.getItem("savedStrValue");

if (savedStrValue === null) {
	savedStr.innerText = "Nothing stored in local storage.";
} else {
	savedStr.innerText = savedStrValue;
	console.log(savedStrValue);
}

//! When the form is submitted, save something to local storage=====================

stringInputForm.addEventListener("submit", function (event) {
	event.preventDefault();

	localStorage.setItem("savedStrValue", stringInput.value);
});

/* Challenge 2: Page load counter ================================================
Your next challenge is to implement a counter that stores a number indicating how many times the 
page has been loaded. Every time you refresh the page, this counter should increment by one.
To do this, you'll need to make it so that upon page load, you retrieve a 
number from localStorage (note: all values will be stored in localStorage as strings so 
type conversion may be necessary), add one to it, then display it on the page. One special case 
you'll need to handle is the first page load, when no number has been stored in local storage! */


if (hitCounter === null) {
	hitCounter = 0;
} else {
	hitCounter++;
}

console.log(hitCounter);

localStorage.setItem("count", hitCounter);
counter.innerHTML = localStorage["count"];

/* Challenge 3: List builder ====================================================
Your third challenge is to allow the user to store a list of strings.

To do this, once again create a text input and a button in HTML. Additionally, add an ordered list below the input and button.

From here, add JS so that every time the user clicks the button, a new list item is added to ordered list that contains whatever the value of the text input was.

Similar to the previous challenges, these list items should persist between page loads.

The trick here is that you'll need to store an array in local storage. One major challenge here: only strings can be stored in local storage. 
You can convert an array to a string with JSON.stringify() and you can convert a string to an array with JSON.parse() */



const itemList = localStorage.getItem("lists");

if (itemList === null) {
	list.innerHTML = "List is Empty";
} else {
	for (const item of JSON.parse(localStorage.lists)) {
		let node = document.createElement("LI");
		let textnode = document.createTextNode(item["listInputValue"]);

		node.appendChild(textnode);

		listOfItems.appendChild(node);
	}
}

listForm.addEventListener("submit", function (event) {
	event.preventDefault();
	listInputValue = listInput.value;

	
	const newlistItem = {
		listInputValue,
	};
	let lists = localStorage.getItem("lists");

	if (lists === null) {
		lists = [newlistItem];
		localStorage.setItem("lists", JSON.stringify(lists));
	} else {
		lists = JSON.parse(lists);
		lists.push(newlistItem);
		localStorage.setItem("lists", JSON.stringify(lists));
	}
});

clearAll.addEventListener("click", function (event) {
	event.preventDefault();

	localStorage.clear();
});