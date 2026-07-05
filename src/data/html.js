export const html = {
  title: "HTML5 Foundations",
  subtitle: "The skeleton of the web. Perfect these basics to show strong fundamentals.",
  questions: [
    {
      id: "html-1",
      question: "What is HTML?",
      answer: "HTML (HyperText Markup Language) is the standard markup language used to create the structure and content of web pages. It uses 'tags' to define elements like headings, paragraphs, links, and images.",
      story: { title: "The House Frame", text: "Think of HTML as the wooden frame and bricks of a house. It defines where the walls, doors, and windows go, but it doesn't add any paint or electricity." },
      code: `<!DOCTYPE html>\n<html>\n  <head><title>My App</title></head>\n  <body>\n    <h1>Hello World</h1>\n  </body>\n</html>`
    },
    {
      id: "html-2",
      question: "What is the difference between HTML and HTML5?",
      answer: "HTML5 is the latest major version of HTML. It introduced semantic tags (<header>, <footer>, <article>), native multimedia support (<audio>, <video> without Flash), and powerful new APIs (LocalStorage, Geolocation, Canvas).",
      story: { title: "The Smartphone Upgrade", text: "HTML is like an old flip phone—it makes calls and texts perfectly. HTML5 is a smartphone. It still makes calls, but now it has a camera, GPS, and apps built right in." },
      code: `<!-- HTML4 Way -->\n<div class="header">...</div>\n\n<!-- HTML5 Way -->\n<header>...</header>`
    },
    {
      id: "html-3",
      question: "What are semantic HTML tags?",
      answer: "Semantic tags clearly describe their meaning in a human- and machine-readable way. Examples include <nav>, <article>, <section>, and <aside>. They improve SEO and Web Accessibility (screen readers).",
      story: { title: "The Label Maker", text: "Imagine packing boxes for moving. A non-semantic tag is a box labeled 'STUFF'. A semantic tag is a box labeled 'KITCHEN PLATES'. The movers (Google Bots and Screen Readers) know exactly what's inside without opening it." },
      code: `<article>\n  <header>\n    <h2>Blog Post Title</h2>\n  </header>\n  <p>Content goes here...</p>\n</article>`
    },
    {
      id: "html-4",
      question: "What is the difference between <div> and <span>?",
      answer: "<div> is a block-level element used to group larger chunks of code and structure layouts. <span> is an inline-level element used to wrap small portions of text or elements within a block without breaking the flow.",
      story: { title: "The Box vs The Highlighter", text: "A <div> is a cardboard box you put items into. A <span> is a yellow highlighter pen you use on a single word in a sentence without changing the paragraph." },
      code: `<div>\n  <p>This is a paragraph with a <span style="color: red;">red word</span> in the middle.</p>\n</div>`
    },
    {
      id: "html-5",
      question: "What are block and inline elements?",
      answer: "Block elements (e.g., <div>, <p>, <h1>) always start on a new line and take up the full available width. Inline elements (e.g., <span>, <a>, <img>) do not start on a new line and only take up as much width as necessary.",
      story: { title: "The Couch vs The Chair", text: "A block element is a giant 3-seater couch. Even if one person sits on it, it takes up the whole wall space. An inline element is a folding chair. You can put 5 of them right next to each other in a row." },
      code: `<!-- Block -->\n<h1>Takes whole line</h1>\n<p>Takes whole line</p>\n\n<!-- Inline -->\n<a href="#">Link 1</a> <a href="#">Link 2</a>`
    },
    {
      id: "html-6",
      question: "What is the purpose of the DOCTYPE declaration?",
      answer: "The <!DOCTYPE html> declaration is an instruction to the web browser about what version of HTML the page is written in. It ensures the browser renders the page in 'Standards Mode' rather than 'Quirks Mode'.",
      story: { title: "The Rulebook", text: "Before playing a board game, you show the referee the rulebook edition. DOCTYPE tells the browser, 'Hey, play by the strict modern HTML5 rules, not the weird 1999 rules!'" },
      code: `<!DOCTYPE html>\n<html lang="en">\n<!-- Modern HTML5 document -->`
    },
    {
      id: "html-7",
      question: "What are data-* attributes?",
      answer: "Data attributes allow you to store custom, invisible data directly on HTML elements. This data can then be easily accessed and manipulated using JavaScript via the dataset property.",
      story: { title: "The Secret Sticky Note", text: "It's like putting a sticky note on the back of a painting. The museum guests (users) can't see it, but the curator (JavaScript) can peek behind it to read a secret ID code." },
      code: `<button id="btn" data-user-id="42" data-role="admin">Delete</button>\n\n// In JS:\nconst btn = document.getElementById('btn');\nconsole.log(btn.dataset.userId); // "42"`
    },
    {
      id: "html-8",
      question: "What is the difference between id and class?",
      answer: "An 'id' must be totally unique within an HTML document and is used to identify a single, specific element. A 'class' can be reused on multiple elements to apply the same styling or behavior.",
      story: { title: "The SSN vs The Uniform", text: "An ID is a Social Security Number—only one person has it. A Class is a police uniform—many people can wear it to show they belong to the same group." },
      code: `<h1 id="main-title">Unique Header</h1>\n<p class="highlight">Paragraph 1</p>\n<p class="highlight">Paragraph 2</p>`
    },
    {
      id: "html-9",
      question: "How do forms work in HTML?",
      answer: "Forms collect user input. The <form> tag acts as a container for inputs, selects, and buttons. When submitted, it traditionally sends an HTTP request to the URL specified in the 'action' attribute using the method (GET/POST).",
      story: { title: "The Envelope", text: "The form is a mailing envelope. The inputs are the letter you write inside. The 'action' attribute is the address you mail it to, and the 'method' is whether you send it by regular mail (GET) or a secure armored truck (POST)." },
      code: `<form action="/submit" method="POST">\n  <label for="name">Name:</label>\n  <input type="text" id="name" name="name">\n  <button type="submit">Send</button>\n</form>`
    },
    {
      id: "html-10",
      question: "What are the new HTML5 APIs (Canvas, Geolocation, Local Storage)?",
      answer: "HTML5 brought JavaScript APIs to the browser natively. Canvas allows 2D/3D drawing. Geolocation gets the user's GPS coordinates. LocalStorage saves key-value data persistently in the browser without cookies.",
      story: { title: "The Swiss Army Knife", text: "Browsers used to just display text. Now, HTML5 turned them into a Swiss Army Knife: Canvas is the pen, Geolocation is the compass, and Local Storage is the pocket notebook." },
      code: `// Geolocation API example\nnavigator.geolocation.getCurrentPosition((pos) => {\n  console.log(pos.coords.latitude, pos.coords.longitude);\n});`
    }
  ]
};
