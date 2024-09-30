# Level 1: HTML Layout, DOM, and CSS Styling
## HTML Layout
### Basic Structure:

```html
<!DOCTYPE html>
<html>
<head>
  <title>My Webpage</title>
</head>
<body>
  </body>
</html>
```

- `<!DOCTYPE html>`: Declares the document type as HTML5.
- `<html>`: The root element of an HTML page.
- `<head>`: Contains metadata about the page (title, links to stylesheets, scripts, etc.).
- `<body>`: Contains the visible content of the page.

### Common HTML Elements:

- Headings: `<h1>`, `<h2>`, `<h3>`, `<h4>`, `<h5>`, `<h6>`
- Paragraphs: `<p>`
- Lists: `<ul>` (unordered), `<ol>` (ordered), `<li>` (list item)
- Links: `<a>` (with href attribute)
- Images: `<img>` (with src and alt attributes)
- Forms: `<form>`, `<input>`, `<label>`, `<button>`, `<select>`, etc.

### Example:
```html
<!DOCTYPE html>
<html>
<head>
  <title>My First Webpage</title>
</head>
<body>
  <h1>Welcome to My Website</h1>
  <p>This is a paragraph of text.</p>
  <ul>
    <li>Item 1</li>
    <li>Item 2</li>
  </ul>
  <img src="image.jpg" alt="A beautiful image">
</body>
</html>
```

### DOM (Document Object Model)
- The DOM represents an HTML document as a tree structure of nodes.
- Nodes can be elements, text, attributes, or comments.
- You can access and manipulate elements in the DOM using JavaScript.

### Example:
```javascript
// Accessing an element by its ID
var heading = document.getElementById("myHeading");

// Changing its text content
heading.textContent = "New Heading";
```

### CSS Styling
- CSS (Cascading Style Sheets) is used to style HTML elements.
- It consists of selectors, properties, and values.

### Selectors:

- ID: #myElement
- Class: .myClass
- Element: p
- Attribute: [href]

### Properties:

- `color`, `font-size`, `background-color`, `margin`, `padding`, `border`, `display`, `float`, `position`, etc.

### Example:
```css
/* Styling a paragraph with a specific color and font-size */
p {
  color: blue;
  font-size: 20px;
}

/* Styling an element with a specific class */
.myClass {
  background-color: yellow;
  border: 2px solid red;
}
```