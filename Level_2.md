# Level 2: Handling User Actions and Mutating the DOM using JavaScript
## Event Handling:

- Events are actions that occur in a web page, such as clicking a button, hovering over an element, or typing text.
- You can use JavaScript to listen for events and respond to them.

### Example:
HTML:
```html

<button id="myButton">Click me</button>
<p id="result"></p>
```
JavaScript:
```javascript

var button = document.getElementById("myButton");
var result = document.getElementById("result");

button.addEventListener("click", function() {
  result.textContent = "You clicked the button!";
});
```

### DOM Manipulation:

- You can dynamically create, modify, and remove elements in the DOM using JavaScript.

### Example:
JavaScript:
```javascript
// Create a new paragraph element
var newParagraph = document.createElement("p");

// Set its text content
newParagraph.textContent = "This is a new paragraph.";

// Append it to the body
document.body.appendChild(newParagraph);
```
### Combining Event Handling and DOM Manipulation:
HTML:
```HTML
<input type="text" id="nameInput">
<button id="submitButton">Submit</button>
<p id="greeting"></p>
```
JavaScript:
```javascript
var nameInput = document.getElementById("nameInput");
var submitButton = document.getElementById("submitButton");
var greeting = document.getElementById("greeting");

submitButton.addEventListener("click", function() {
  var name = nameInput.value;
  greeting.textContent = "Hello, " + name + "!";
});
```

## Toggling Element Visibility
HTML:
```HTML
<button id="toggleButton">Toggle Visibility</button>
<div id="hiddenElement">This element is initially hidden.</div>
```

JavaScript:
```javascript
var toggleButton = document.getElementById("toggleButton");
var hiddenElement = document.getElementById("hiddenElement");

toggleButton.addEventListener("click", function() {
  if (hiddenElement.style.display === "none") {
    hiddenElement.style.display = "block";
  } else {
    hiddenElement.style.display = "none";
  }
});
```

## Creating Dynamic Content
```javascript
function createListItem(text) {
  var listItem = document.createElement("li");
  listItem.textContent = text;
  return listItem;
}

var list = document.getElementById("myList");
var input = document.getElementById("textInput");
var addButton = document.getElementById("addButton");

addButton.addEventListener("click", function() {
  var text = input.value;
  if (text !== "") {
    var newListItem = createListItem(text);
    list.appendChild(newListItem);
    input.value = "";
  }
});
```

## Drag and Drop
HTML:
```html
<div id="draggable" draggable="true">Drag me</div>
<div id="droppable">Drop here</div>
```

JavaScript:
```javascript
var draggable = document.getElementById("draggable");
var droppable = document.getElementById("droppable");

draggable.addEventListener("dragstart", function(event) {
  event.dataTransfer.setData("text/plain", event.target.id);
});

droppable.addEventListener("drop", function(event) {
  event.preventDefault();
  var data = event.dataTransfer.getData("text/plain");
  droppable.appendChild(document.getElementById(data));
});

droppable.addEventListener("dragover", function(event) {
  event.preventDefault();
});
```