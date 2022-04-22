# ⚗️ local-storage-laboratory

In this assignment, we'll be storing information in the browser using [`local storage`](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage).

Local storage allows us to store information that will persist even after the page is refreshed.

When using local storage, there are always two things that you need to implement:
1. The part of the code that saves data in `localStorage`
2. The part of the code that retrieves data from `localStorage`

## Challenge 1: String saver

Your first challenge is to allow the user to save a string in local storage. 

To do this, create a text input and a button in HTML. From here, write JS so that when the button is clicked, whatever is in the text input is saved in local storage.

Below the text input and button, the string should also be displayed on the page. If the user enters "corndog" into the text input, clicks the button, then refreshes the page. The word "corndog" should appear on the page. 

## Challenge 2: Page load counter

Your next challenge is to implement a counter that stores a number indicating how many times the page has been loaded. Every time you refresh the page, this counter should increment by one.

To do this, you'll need to make it so that upon page load, you retrieve a number from localStorage (note: all values will be stored in localStorage as strings so type conversion may be necessary), add one to it, then display it on the page. One special case you'll need to handle is the first page load, when no number has been stored in local storage!

## Challenge 3: List builder

Y
To do this, our third challenge is to allow the user to store a list of strings.
once again create a text input and a button in HTML. Additionally, add an ordered list below the input and button. 

From here, add JS so that every time the user clicks the button, a new list item is added to ordered list that contains whatever the value of the text input was.

Similar to the previous challenges, these list items should persist between page loads.

The trick here is that you'll need to store an array in local storage. One major challenge here: only strings can be stored in local storage. You can convert an array to a string with `JSON.stringify()` and you can convert a string to an array with `JSON.parse()`
