export const css = {
  title: "CSS3 Styling & Layouts",
  subtitle: "Make it beautiful. Master the box model, flexbox, and grid.",
  questions: [
    {
      id: "css-11",
      question: "What is CSS?",
      answer: "CSS (Cascading Style Sheets) is a stylesheet language used to describe the presentation, formatting, and layout of a document written in HTML.",
      story: { title: "The Interior Designer", text: "If HTML is the wooden frame of a house, CSS is the interior designer. It paints the walls, buys the furniture, and decides exactly where the TV should hang." },
      code: `body {\n  background-color: #f4f4f4;\n  font-family: Arial, sans-serif;\n}`
    },
    {
      id: "css-12",
      question: "Inline vs Internal vs External CSS?",
      answer: "Inline applies styles directly to an element via the 'style' attribute. Internal applies styles within a <style> block in the HTML <head>. External links to a separate .css file via the <link> tag (Best Practice).",
      story: { title: "The Wardrobe", text: "Inline: Wearing clothes directly. Internal: Keeping a wardrobe in your bedroom. External: A massive shared walk-in closet for the entire family (keeps your bedroom clean!)." },
      code: `<!-- Inline -->\n<p style="color: red;">Stop</p>\n\n<!-- External (Best Practice) -->\n<link rel="stylesheet" href="styles.css">`
    },
    {
      id: "css-13",
      question: "Explain CSS Specificity.",
      answer: "Specificity is the algorithm CSS uses to determine which rule applies when multiple rules target the same element. It calculates weight based on: Inline Styles (highest) > IDs > Classes/Attributes/Pseudo-classes > Elements/Pseudo-elements (lowest).",
      story: { title: "The Tie-Breaker", text: "Imagine multiple bosses giving you conflicting orders. Specificity tells you who to listen to. The CEO (Inline Style) overrides the Manager (ID), who overrides the Shift Lead (Class), who overrides a generic Employee (Tag)." },
      code: `/* HTML: <p id="title" class="text">Hello</p> */\n\np { color: green; } /* Weight: 1 */\n.text { color: blue; } /* Weight: 10 */\n#title { color: red; } /* Weight: 100 -> WINS! Text is red. */`
    },
    {
      id: "css-14",
      question: "Explain the CSS Box Model.",
      answer: "Every HTML element is wrapped in a rectangular box. The Box Model consists of four layers (from inside out): Content (the text/image), Padding (space around content), Border (line around padding), and Margin (space outside the border).",
      story: { title: "The Picture Frame", text: "Content is the photograph. Padding is the white matte paper surrounding the photo. Border is the wooden frame holding it. Margin is the empty wall space between this picture and the next picture on the wall." },
      code: `.box {\n  width: 100px;    /* Content */\n  padding: 10px;   /* Inside spacing */\n  border: 1px solid black; /* The Edge */\n  margin: 20px;    /* Outside spacing */\n}`
    },
    {
      id: "css-15",
      question: "Margin vs Padding?",
      answer: "Padding is the space INSIDE the element's border. Margin is the space OUTSIDE the element's border. Padding affects the element's background color size; margin pushes other elements away.",
      story: { title: "The Winter Coat", text: "Padding is the thick wool inside your coat keeping you warm. Margin is you holding your arms out telling people to stay 5 feet away from you." },
      code: `.button {\n  padding: 10px 20px; /* Makes button bigger inside */\n  margin-bottom: 15px; /* Pushes the next element down */\n}`
    },
    {
      id: "css-16",
      question: "Position: static, relative, absolute, fixed, sticky?",
      answer: "Static: Default normal flow. Relative: Moved relative to its normal position. Absolute: Removed from normal flow, positioned relative to closest positioned ancestor. Fixed: Removed from flow, positioned relative to viewport. Sticky: Toggles between relative and fixed based on scroll.",
      story: { title: "The Sticky Note", text: "Relative is nudging your coffee cup slightly right. Absolute is picking up a sticky note and placing it exactly on the top-right corner of your desk. Fixed is sticking it directly to your eyeball so it follows you everywhere." },
      code: `.modal {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}`
    },
    {
      id: "css-17",
      question: "Display: block, inline, inline-block, flex, grid?",
      answer: "Block: Full width, new line. Inline: Only required width, no top/bottom margins allowed. Inline-block: Flows like inline, but accepts height/margins. Flex/Grid: Advanced modern layout systems.",
      story: { title: "The Tetris Blocks", text: "Block is a long 4-square Tetris piece taking the whole row. Inline is a tiny 1-square piece that you can slide anywhere. Inline-block is a square block that plays nicely next to others but keeps its shape." },
      code: `.nav-item {\n  display: inline-block;\n  margin-top: 10px; /* Works perfectly! */\n}`
    },
    {
      id: "css-18",
      question: "What is Flexbox?",
      answer: "Flexbox (Flexible Box Layout) is a 1-dimensional layout model designed to distribute space along a single row or column. It excels at aligning items perfectly in the center and distributing remaining space dynamically.",
      story: { title: "The Beads on a String", text: "Imagine stringing beads on a necklace. Flexbox lets you push all the beads to the left, space them out evenly, or pull them apart to the edges perfectly, regardless of their individual sizes." },
      code: `.container {\n  display: flex;\n  justify-content: center; /* Horizontally center */\n  align-items: center;     /* Vertically center */\n}`
    },
    {
      id: "css-19",
      question: "What is CSS Grid?",
      answer: "CSS Grid is a powerful 2-dimensional layout system. Unlike Flexbox (rows OR columns), Grid handles BOTH rows and columns simultaneously, allowing you to create complex, magazine-style layouts effortlessly.",
      story: { title: "The Excel Spreadsheet", text: "Flexbox is writing a single line of text on ruled paper. Grid is opening an Excel spreadsheet where you can place an image in cell A1 and stretch a title across B2 to C3." },
      code: `.grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr); /* 3 equal columns */\n  gap: 20px;\n}`
    },
    {
      id: "css-20",
      question: "What are Media Queries?",
      answer: "Media Queries are CSS rules that only apply when certain conditions are met (like screen width). They are the core technology behind Responsive Web Design.",
      story: { title: "The Transformer Toy", text: "A Transformer looks like a car normally. But when the environment changes (like a battle), a Media Query triggers, and it transforms into a giant robot to fit the situation." },
      code: `/* Default mobile styles */\n.sidebar { display: none; }\n\n/* Desktop styles */\n@media (min-width: 768px) {\n  .sidebar { display: block; }\n}`
    },
    {
      id: "css-21",
      question: "What is Responsive Design?",
      answer: "Responsive Design is the practice of building web pages that detect the visitor's screen size and orientation and change the layout accordingly, ensuring a good experience on phones, tablets, and desktops.",
      story: { title: "Water in a Glass", text: "Be like water. If you pour water into a cup, it becomes the cup. If you pour a website into a mobile phone, the website should shrink and stack perfectly to become the phone." },
      code: `// Key ingredients:\n// 1. Fluid Grids (% instead of px)\n// 2. Flexible Images (max-width: 100%)\n// 3. Media Queries`
    },
    {
      id: "css-22",
      question: "Explain CSS Units (px, %, rem, em, vh, vw).",
      answer: "px = Absolute pixels. % = Percentage of parent. em = Relative to parent font size. rem = Relative to ROOT (html) font size. vh/vw = 1% of the viewport height/width.",
      story: { title: "The Measuring Tapes", text: "px is a solid ruler. It never changes. 'rem' is a magical tape measure that grows or shrinks based on how good your grandpa's eyesight is (browser root font size settings)." },
      code: `.hero-banner {\n  height: 100vh; /* Takes exactly 100% of the screen height */\n  font-size: 2rem; /* 2x the root font size */\n}`
    },
    {
      id: "css-23",
      question: "What is z-index?",
      answer: "z-index controls the vertical stacking order of elements that overlap. Elements with a higher z-index appear in front of those with a lower z-index. It only works on positioned elements (relative, absolute, fixed, sticky).",
      story: { title: "The Stack of Papers", text: "Imagine looking straight down at your desk. z-index=1 is a piece of paper on the wood. z-index=10 is a book placed on top of it. The book covers the paper." },
      code: `.popup {\n  position: absolute;\n  z-index: 9999; /* Guarantees it sits on top of everything */\n}`
    },
    {
      id: "css-24",
      question: "Pseudo Classes vs Pseudo Elements?",
      answer: "Pseudo-classes (:hover, :active, :nth-child) style an element based on its STATE. Pseudo-elements (::before, ::after, ::first-line) style a specific PART of an element, or insert fake content.",
      story: { title: "The Mood Ring vs The Tattoo", text: "A pseudo-class is a mood ring: it changes color when you touch it (:hover). A pseudo-element is a tattoo: you are permanently injecting fake ink (::before content) onto the skin." },
      code: `a:hover {\n  color: red; /* Pseudo-class */\n}\np::first-letter {\n  font-size: 200%; /* Pseudo-element */\n}`
    },
    {
      id: "css-25",
      question: "CSS Transitions vs Animations?",
      answer: "Transitions smoothly change a property value over time in response to a trigger (like hovering). Animations (using @keyframes) are much more complex, allowing multiple steps and loops without needing a trigger.",
      story: { title: "The Slide vs The Rollercoaster", text: "A Transition is a playground slide: you start at the top, end at the bottom, one simple motion. An Animation is a rollercoaster: up, down, loops, stops, and running on a continuous track." },
      code: `.box {\n  transition: background-color 0.3s ease; /* Simple hover effect */\n}\n\n@keyframes spin {\n  100% { transform: rotate(360deg); }\n} /* Complex looping effect */`
    }
  ]
};
