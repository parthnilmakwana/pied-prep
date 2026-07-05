export const react = {
  title: "React.js Mastery",
  subtitle: "The UI powerhouse. Understand how React thinks to excel in frontend interviews.",
  questions: [
    {
      id: "react-71",
      question: "What is React?",
      answer: "React is a declarative, efficient, and flexible open-source JavaScript library for building user interfaces, primarily for single-page applications. It is maintained by Facebook.",
      story: { title: "The Lego Set", text: "React is a box of Lego bricks. Instead of building a massive plastic spaceship molded into one piece, you build reusable, small Lego blocks (Components) and snap them together." },
      code: `import React from 'react';\nfunction App() { return <h1>Hello React!</h1>; }`,
      output: `<h1>Hello React!</h1>`,
      outputExplanation: `React renders the App component and transforms the JSX into a React element, which is ultimately rendered to the DOM as an HTML <h1> tag containing the text "Hello React!".`
    },
    {
      id: "react-72",
      question: "Features of React",
      answer: "Key features include JSX syntax, Virtual DOM for performance, One-way Data Binding, Component-based architecture, and React Hooks for state management.",
      story: { title: "The Swiss Army Knife", text: "It has everything you need: JSX is the knife, Virtual DOM is the pliers (fast and strong), and Components are the interchangeable bits." },
      code: `// JSX, Components, and Hooks working together\nconst App = () => { const [count, setCount] = useState(0); return <div onClick={() => setCount(1)}></div>; }`,
      output: `<div onClick="..."></div> (Updates state on click)`,
      outputExplanation: `Initially, the App renders a div with an onClick handler. When clicked, setCount(1) updates the state 'count' to 1. This triggers a re-render of the App component with the new state, though the visual DOM remains the same unless the count is displayed.`
    },
    {
      id: "react-73",
      question: "SPA vs MPA",
      answer: "A Single Page Application (SPA) loads a single HTML page and dynamically updates it via JavaScript as the user interacts (React). A Multi-Page Application (MPA) reloads the entire page from the server on every click.",
      story: { title: "The Magic Book vs The Library", text: "An MPA is walking to the library, returning a book, and checking out a new one for every chapter. An SPA is a magic book where the ink physically rewrites itself when you turn the page." },
      code: `// React Router prevents full page reloads in SPAs\n<Link to="/about">About Us</Link>`,
      output: `<a href="/about">About Us</a> (Client-side navigation)`,
      outputExplanation: `The Link component from React Router renders an anchor <a> tag in the DOM. However, it intercepts the default browser click event, preventing a full page reload, and uses the HTML5 History API to update the URL and render the corresponding React component instead.`
    },
    {
      id: "react-74",
      question: "Virtual DOM",
      answer: "The Virtual DOM is a lightweight, in-memory representation of the Real DOM. Updating the Real DOM is slow, so React updates the Virtual DOM first, compares it to the previous version, and only applies the differences.",
      story: { title: "The Architect's Blueprint", text: "Instead of tearing down a wall to move a door (Real DOM), you draw a new blueprint (Virtual DOM). The builder compares blueprints and only moves the door." },
      code: `// You just update state. React handles the Virtual DOM diffing invisibly.\nsetCount(c => c + 1);`,
      output: `State is incremented (e.g., from 0 to 1), causing a re-render.`,
      outputExplanation: `Calling the state updater function schedules a re-render of the component. React calculates the new state, creates a new Virtual DOM tree, compares it with the previous Virtual DOM tree (diffing), and surgically updates only the changed parts in the Real DOM.`
    },
    {
      id: "react-75",
      question: "Diffing Algorithm",
      answer: "React's Diffing algorithm (part of Reconciliation) compares two Virtual DOM trees. It uses two assumptions: 1. Different component types produce different trees. 2. A 'key' prop identifies which child elements remained stable.",
      story: { title: "Spot the Difference", text: "Like the newspaper game 'Spot the 5 differences between these two pictures', React instantly highlights exactly what changed so the browser doesn't have to redraw everything." },
      code: `// React diffs this old tree with the new tree to find changes.`,
      output: `No direct output (Conceptual comment)`,
      outputExplanation: `During the Reconciliation process, React's diffing algorithm compares two Virtual DOM trees root-by-root and element-by-element. If it finds elements of different types, it tears down the old tree and builds a new one. If the types are the same, it keeps the DOM node and updates its attributes.`
    },
    {
      id: "react-76",
      question: "JSX",
      answer: "JSX (JavaScript XML) is a syntax extension for JavaScript that looks like HTML. It allows you to write UI markup directly alongside your JavaScript logic.",
      story: { title: "The Hybrid Language", text: "It's like speaking 'Spanglish'—a seamless blend of two languages (JS and HTML) that makes expressing complex ideas incredibly easy." },
      code: `// JSX gets compiled into React.createElement()\nconst element = <h1 className="title">Hello {name}!</h1>;`,
      output: `<h1 class="title">Hello {name}!</h1>`,
      outputExplanation: `Babel compiles the JSX into React.createElement('h1', { className: 'title' }, 'Hello ', name, '!'). At runtime, this creates a JavaScript object representing the DOM node, which React later uses to construct the actual <h1 class="title"> in the Real DOM.`
    },
    {
      id: "react-77",
      question: "Components",
      answer: "Components are independent, reusable pieces of UI. They can be thought of as custom JavaScript functions that return HTML via JSX.",
      story: { title: "The Car Parts", text: "A car is not one object. It's an Engine Component, 4 Tire Components, and a SteeringWheel Component all talking to each other." },
      code: `function Button() { return <button>Click</button>; }`,
      output: `<button>Click</button>`,
      outputExplanation: `This functional component returns JSX that gets translated into a React element. When rendered by React, it creates an HTML button element in the DOM with the text "Click".`
    },
    {
      id: "react-78",
      question: "Functional vs Class Components",
      answer: "Class components use ES6 classes, have a render() method, and use 'this.state'. Functional components are plain JS functions and use Hooks (useState, useEffect) for state and lifecycle.",
      story: { title: "The Typewriter vs The Laptop", text: "Class components are typewriters: bulky, require a lot of boilerplate ('this', bindings). Functional components with Hooks are modern laptops: lightweight, fast, and concise." },
      code: `// Functional (Modern)\nconst App = () => <div>Hello</div>;`,
      output: `<div>Hello</div>`,
      outputExplanation: `The functional component App is called by React, returning a React element. React mounts this element into the DOM, resulting in a simple <div> containing the text "Hello". Functional components have become the standard in modern React thanks to Hooks.`
    },
    {
      id: "react-79",
      question: "Props",
      answer: "Props (Properties) are read-only arguments passed from a parent component to a child component. They allow components to be dynamic and reusable.",
      story: { title: "The Instruction Manual", text: "Props are the instructions the Parent gives the Child. The Child cannot change the instructions, they just follow them." },
      code: `function Greeting(props) { return <h1>Hi {props.name}</h1>; }\n<Greeting name="Alice" />`,
      output: `<h1>Hi Alice</h1>`,
      outputExplanation: `When <Greeting name="Alice" /> is used, React passes an object { name: 'Alice' } as the 'props' argument to the Greeting function. The function returns a JSX element that dynamically interpolates props.name, rendering "Hi Alice".`
    },
    {
      id: "react-80",
      question: "State",
      answer: "State is a built-in React object that is used to contain data or information about the component. Unlike props, state is managed WITHIN the component and can change over time.",
      story: { title: "The Human Memory", text: "Props are what people tell you. State is what you remember yourself. You can change your own memory, but you can't change what someone else told you." },
      code: `const [age, setAge] = useState(25);\nsetAge(26); // Component re-renders`,
      output: `State changes from 25 to 26, component re-renders.`,
      outputExplanation: `useState initializes 'age' to 25. Calling setAge(26) updates the internal state tracked by React. This state update schedules a re-render of the component. On the next render, the 'age' variable will hold the value 26.`
    },
    {
      id: "react-81",
      question: "Props vs State",
      answer: "Props get passed DOWN from parents and are READ-ONLY. State is created WITHIN the component and is MUTABLE (changeable). A parent's state often becomes a child's props.",
      story: { title: "The Boss and The Employee", text: "State is the Boss's private plan. When the Boss assigns a task to the Employee, that task becomes the Employee's Props (immutable instructions)." },
      code: `// Parent State -> Child Prop\n<Child count={this.state.count} />`,
      output: `<Child /> renders with prop 'count' based on parent's state.`,
      outputExplanation: `The parent component passes its own state down to the child as a prop. If the parent's state changes, the parent re-renders, causing the child to also re-render with the newly updated prop value, demonstrating one-way data flow.`
    },
    {
      id: "react-82",
      question: "useState()",
      answer: "A React Hook that lets you add a state variable to your component. It returns an array with two values: the current state and a function to update it.",
      story: { title: "The Light Switch", text: "useState is installing a light switch on your wall. You get the current brightness (state) and the physical switch to flip it (setState)." },
      code: `const [isOn, setIsOn] = useState(false);\n<button onClick={() => setIsOn(!isOn)}>Toggle</button>`,
      output: `<button>Toggle</button> (Clicking toggles 'isOn' state)`,
      outputExplanation: `The button has an onClick event listener attached. When clicked, it calls setIsOn(!isOn), flipping the boolean state. This state mutation queues a re-render, and during the next render, 'isOn' will reflect the new toggled value, allowing the UI to update if 'isOn' is conditionally displayed.`
    },
    {
      id: "react-83",
      question: "useEffect()",
      answer: "A Hook that lets you synchronize a component with an external system (fetching data, DOM manipulation). It runs after the render.",
      story: { title: "The Room Service", text: "useEffect is room service. They come in and do work (fetching data, cleaning up) after you've already checked in (rendered)." },
      code: `useEffect(() => {\n  document.title = "Hello";\n}, []);`,
      output: `Browser tab title changes to "Hello".`,
      outputExplanation: `The useEffect hook executes its callback function after the component has rendered and the DOM has been updated. The empty dependency array [] ensures this side effect (mutating the document title) runs only once, immediately after the initial mount.`
    },
    {
      id: "react-84",
      question: "Dependency Array",
      answer: "The second argument to useEffect. It tells React when to re-run the effect. [] = run once. [x] = run when x changes. Omitted = run on every render.",
      story: { title: "The VIP List", text: "The effect only triggers if someone on the VIP list (dependency array) changes their outfit. If the array is empty, no one is on the list, so it only triggers on opening night." },
      code: `useEffect(() => { fetch(url); }, [url]); // Only runs when URL changes`,
      output: `Network request is triggered to the specified 'url'.`,
      outputExplanation: `React evaluates the dependency array [url] after every render. It compares the current 'url' with the 'url' from the previous render. If they differ, the effect callback runs, triggering the fetch. If 'url' is identical, the effect is skipped.`
    },
    {
      id: "react-85",
      question: "useRef()",
      answer: "A Hook that lets you reference a value that’s not needed for rendering. Changing a ref does NOT trigger a re-render. Perfect for direct DOM access.",
      story: { title: "The Secret Safe", text: "State is a whiteboard—change it, and everyone sees it (re-render). A Ref is a safe hidden behind a painting. You can change what's inside without anyone noticing." },
      code: `const inputRef = useRef(null);\ninputRef.current.focus(); // Direct DOM manipulation`,
      output: `The referenced input element gains focus.`,
      outputExplanation: `useRef creates a mutable object { current: null } that persists across renders. By attaching it to an element via the 'ref' prop, React assigns the DOM node to inputRef.current. Calling .focus() directly interacts with the Real DOM API without triggering a React re-render.`
    },
    {
      id: "react-86",
      question: "useMemo()",
      answer: "Caches the RESULT of an expensive calculation between renders. Only recalculates if dependencies change.",
      story: { title: "The Math Genius", text: "Instead of doing 345 * 987 on a calculator every time someone asks, you memorize the answer." },
      code: `const expensiveResult = useMemo(() => computeMath(a, b), [a, b]);`,
      output: `Returns the cached result of computeMath(a, b).`,
      outputExplanation: `useMemo executes the computeMath function during rendering and stores the result. On subsequent renders, if 'a' and 'b' have not changed, useMemo skips the calculation and simply returns the cached result, optimizing performance for expensive operations.`
    },
    {
      id: "react-87",
      question: "useCallback()",
      answer: "Caches a FUNCTION DEFINITION between renders so it doesn't get recreated on every render. Useful when passing callbacks to optimized child components.",
      story: { title: "The Recipe Card", text: "Instead of rewriting the cake recipe from scratch every time you enter the kitchen, you keep the same recipe card taped to the fridge." },
      code: `const handleClick = useCallback(() => { doSomething(a); }, [a]);`,
      output: `Returns a memoized function reference.`,
      outputExplanation: `Functions defined inside a component are recreated on every render. useCallback caches the function instance itself. It only returns a newly created function if the dependency 'a' changes. This is vital when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary re-renders.`
    },
    {
      id: "react-88",
      question: "React.memo()",
      answer: "A Higher Order Component (HOC) that wraps a functional component to prevent it from re-rendering if its props have not changed.",
      story: { title: "The Bouncer", text: "React.memo stands outside your component. It checks the props. If they are identical to last time, it says 'Go away, we don't need to redraw this'." },
      code: `const Child = React.memo(({ name }) => <div>{name}</div>);`,
      output: `<div>{name}</div> (Only re-renders if 'name' changes)`,
      outputExplanation: `React.memo is a higher-order component that memorizes the rendered output of the wrapped component. When the parent re-renders, React.memo performs a shallow comparison of the old and new props. If the 'name' prop is identical, it skips re-rendering the Child, boosting performance.`
    },
    {
      id: "react-89",
      question: "useContext()",
      answer: "A Hook that lets you read and subscribe to context from your component. It solves 'prop drilling' by allowing deep children to access global data.",
      story: { title: "The Intercom System", text: "Instead of whispering a message to a person, who whispers to another, down 10 floors (prop drilling), you use the building Intercom (useContext) so everyone hears it instantly." },
      code: `const theme = useContext(ThemeContext);`,
      output: `Returns the current value of ThemeContext (e.g., "dark" or "light").`,
      outputExplanation: `useContext reads the value provided by the nearest <ThemeContext.Provider> above it in the component tree. Whenever the Provider's value changes, any component calling useContext(ThemeContext) will automatically re-render with the latest value, bypassing intermediate components.`
    },
    {
      id: "react-90",
      question: "Context API",
      answer: "A React structure that enables you to exchange unique details and assists in solving prop-drilling from all levels of your application.",
      story: { title: "The Town Hall", text: "A central place where global truths (like the current Mayor or Theme color) are stored so any citizen (component) can look them up." },
      code: `const UserContext = React.createContext();\n<UserContext.Provider value={user}>\n  <App />\n</UserContext.Provider>`,
      output: `Context Provider wrapping the app, providing 'user' data globally.`,
      outputExplanation: `React.createContext creates a context object. The Provider component makes the 'value' prop (the user object) available to any descendant component in the tree that asks for it. This establishes a global state layer, effectively avoiding the need to manually pass props down multiple levels.`
    },
    {
      id: "react-91",
      question: "Controlled vs Uncontrolled Components",
      answer: "Controlled components derive their value from React state (value + onChange). Uncontrolled components maintain their own internal state, accessed via useRef.",
      story: { title: "Puppet vs Robot", text: "Controlled is a puppet; React holds the strings. Uncontrolled is a robot; it acts on its own, and you just ask it what it did." },
      code: `// Controlled\n<input value={text} onChange={e => setText(e.target.value)} />`,
      output: `<input /> element whose value is strictly dictated by React state.`,
      outputExplanation: `In a controlled component, the form element's data is handled by the React component. The input's 'value' is tied to the 'text' state. When a user types, the onChange event fires, updating the state via setText. React then re-renders the input with the new state, keeping the UI and state perfectly in sync.`
    },
    {
      id: "react-92",
      question: "Lifting State Up",
      answer: "Moving state from a child component to their closest common parent component so that sibling components can share and sync the same state.",
      story: { title: "The Sibling Dispute", text: "Two siblings are fighting over a toy. The Parent takes the toy (Lifting State Up) and manages who gets to play with it, keeping peace in the house." },
      code: `// Parent holds state and passes it down to both children\n<TemperatureInput scale="c" temp={temp} onTempChange={setTemp} />\n<TemperatureInput scale="f" temp={temp} onTempChange={setTemp} />`,
      output: `Two input components sharing and reacting to the exact same 'temp' state.`,
      outputExplanation: `By moving the 'temp' state to a common ancestor, both TemperatureInput components act as controlled components. If a user types in the Celsius input, it calls onTempChange (setTemp) in the parent. The parent's state updates, causing both inputs to re-render reflecting the synchronized temperature.`
    },
    {
      id: "react-93",
      question: "Conditional Rendering",
      answer: "Rendering different UI markup based on a condition (like an if statement). Usually done with ternary operators or logical && inside JSX.",
      story: { title: "The Fork in the Road", text: "If the user is logged in, show the Dashboard path. If not, show the Login path." },
      code: `<div>{isLoggedIn ? <Dashboard /> : <Login />}</div>`,
      output: `Either <Dashboard /> or <Login /> is rendered based on 'isLoggedIn'.`,
      outputExplanation: `JSX allows embedding JavaScript expressions. The ternary operator evaluates the 'isLoggedIn' boolean. If true, it returns the <Dashboard /> element to be mounted into the DOM. If false, it returns the <Login /> element. React reconciliation handles mounting/unmounting accordingly.`
    },
    {
      id: "react-94",
      question: "Lists and Keys",
      answer: "When rendering lists via map(), React requires a unique 'key' prop on each item to track which items change, get added, or removed.",
      story: { title: "The Coat Check", text: "If you give 10 identical black coats to a coat check, the tickets (Keys) are the only way they know whose coat is whose when one gets removed." },
      code: `users.map(user => <li key={user.id}>{user.name}</li>)`,
      output: `A list of <li> elements, each with a unique key.`,
      outputExplanation: `When rendering an array of elements, React needs a unique 'key' for each item. During reconciliation, keys help React identify which items have changed, been added, or been removed. This enables React to surgically update the DOM list efficiently instead of re-rendering the entire list.`
    },
    {
      id: "react-95",
      question: "Forms in React",
      answer: "Forms are typically 'controlled' in React. You attach an onChange handler to inputs to update React state, and an onSubmit handler to the form element to prevent default browser reload.",
      story: { title: "The Dictation", text: "Instead of letting the browser mail the form away blindly, React forces the user to dictate every single keystroke into State, and then React mails it." },
      code: `<form onSubmit={handleSubmit}>\n  <input value={name} onChange={(e) => setName(e.target.value)} />\n</form>`,
      output: `<form> containing a controlled <input>.`,
      outputExplanation: `The form submission is intercepted by 'handleSubmit' (which typically calls e.preventDefault() to stop the browser's default page reload). The input's value is controlled by React state. This gives React total authority over the form's data flow and submission logic.`
    },
    {
      id: "react-96",
      question: "Custom Hooks",
      answer: "A JavaScript function whose name starts with 'use' and that may call other Hooks. They allow you to extract reusable stateful logic from components.",
      story: { title: "The Premade Toolbox", text: "Instead of buying a hammer and nails every time you build a shelf, you create a Custom Hook called useShelfBuilder() that packages the tools for reuse." },
      code: `function useFetch(url) {\n  const [data, setData] = useState(null);\n  useEffect(() => { /* fetch logic */ }, [url]);\n  return data;\n}`,
      output: `Returns the 'data' state which updates after the fetch completes.`,
      outputExplanation: `Custom hooks are JavaScript functions that can leverage built-in React hooks. useFetch encapsulates the state (data) and the side effect (fetching data). When the fetch completes and setData is called, any component using this hook will re-render with the fetched data, promoting clean, reusable logic.`
    },
    {
      id: "react-97",
      question: "React Router",
      answer: "The standard routing library for React. It enables navigation among views of various components in a Single Page Application, keeping the UI in sync with the URL.",
      story: { title: "The GPS System", text: "React Router watches the URL address bar. If you type '/about', the Router recalculates the route and displays the About component without refreshing the page." },
      code: `<BrowserRouter>\n  <Routes>\n    <Route path="/home" element={<Home />} />\n  </Routes>\n</BrowserRouter>`,
      output: `Renders the <Home /> component when the URL path matches "/home".`,
      outputExplanation: `BrowserRouter uses the HTML5 history API to keep the UI in sync with the URL. Routes acts as a switchboard, and Route checks if the current URL matches its 'path'. If it's a match, it renders the React element passed to the 'element' prop, enabling client-side routing.`
    },
    {
      id: "react-98",
      question: "Nested Routing",
      answer: "Defining routes inside other routes. The parent route renders a layout, and the <Outlet /> component dictates where the child route's UI should be injected.",
      story: { title: "The Picture-in-Picture", text: "The outer TV frame stays the same (Navbar, Sidebar), but the screen inside changes channels based on the URL." },
      code: `<Route path="/dashboard" element={<DashboardLayout />}>\n  <Route path="settings" element={<Settings />} />\n</Route>`,
      output: `Renders <DashboardLayout /> containing <Settings /> when path is "/dashboard/settings".`,
      outputExplanation: `Nested routing allows defining route hierarchies. The parent route (/dashboard) renders a layout component. Inside that layout component, an <Outlet /> is placed. When the URL is /dashboard/settings, React Router injects the <Settings /> component directly into the parent's Outlet.`
    },
    {
      id: "react-99",
      question: "Lazy Loading",
      answer: "A technique to defer loading non-critical components until they are actually needed (rendered on screen). It drastically reduces the initial bundle size.",
      story: { title: "Just-In-Time Delivery", text: "A car factory doesn't store 10,000 steering wheels in the lobby. They order them to arrive exactly the minute they are needed on the assembly line." },
      code: `const HeavyChart = React.lazy(() => import('./HeavyChart'));`,
      output: `A dynamically imported component ready for Suspense.`,
      outputExplanation: `React.lazy takes a function that calls a dynamic import(). This tells the bundler (like Webpack or Vite) to split the HeavyChart code into a separate chunk. The code is only downloaded from the server when HeavyChart is actually rendered for the first time on the screen.`
    },
    {
      id: "react-100",
      question: "Suspense",
      answer: "A React component that lets you specify a fallback UI (like a spinner) in case some components in its tree are not yet ready to render (e.g., waiting on lazy loading or data).",
      story: { title: "The Waiting Room", text: "While the doctor (component) is getting ready, Suspense is the waiting room providing magazines (loading spinners) so you don't stare at a blank wall." },
      code: `<Suspense fallback={<Spinner />}>\n  <HeavyChart />\n</Suspense>`,
      output: `Renders <Spinner /> while <HeavyChart /> is loading, then switches to <HeavyChart />.`,
      outputExplanation: `Suspense listens for any promises thrown by its children (like a lazy-loaded component fetching its bundle). While the promise is pending, Suspense renders the 'fallback' UI. Once the promise resolves, it seamlessly swaps out the fallback for the actual child component.`
    },
    {
      id: "react-101",
      question: "Error Boundaries",
      answer: "React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of crashing the whole app.",
      story: { title: "The Blast Shield", text: "If a component explodes with an error, the blast shield catches it, protecting the rest of the application from crashing." },
      code: `// Must be a Class Component using static getDerivedStateFromError()\n<ErrorBoundary>\n  <MyWidget />\n</ErrorBoundary>`,
      output: `Renders <MyWidget /> normally, or a fallback UI if an error crashes it.`,
      outputExplanation: `Error Boundaries act like a JavaScript catch {} block for the component tree. If <MyWidget /> or its children throw an error during rendering, lifecycle methods, or inside constructors, the Error Boundary catches it, updates its state to display a fallback UI, and prevents the whole app from white-screening.`
    },
    {
      id: "react-102",
      question: "React Lifecycle",
      answer: "The phases a component goes through: Mounting (inserted into DOM), Updating (state/props change), and Unmounting (removed from DOM). Handled by useEffect in functional components.",
      story: { title: "The Human Life", text: "Mounting is being born. Updating is growing up and learning new things. Unmounting is... passing away. useEffect handles all 3 phases." },
      code: `// Mounting: useEffect(fn, [])\n// Updating: useEffect(fn, [deps])\n// Unmounting: return () => cleanup(); inside useEffect`,
      output: `Lifecycle behavior mapped to the useEffect hook.`,
      outputExplanation: `In functional components, useEffect replaces traditional lifecycle methods. An empty dependency array [] simulates componentDidMount. A populated dependency array [deps] simulates componentDidUpdate. Returning a cleanup function simulates componentWillUnmount, giving developers unified control over the component's lifecycle.`
    },
    {
      id: "react-103",
      question: "Reconciliation",
      answer: "The process through which React updates the DOM. It diffs the Virtual DOM trees and applies the minimal set of changes to the Real DOM.",
      story: { title: "The Art Restorer", text: "An art restorer doesn't paint over the entire Mona Lisa to fix a scratch. They use a magnifying glass (Reconciliation) to apply a single drop of paint exactly where needed." },
      code: `// Internally handles translating state changes to DOM mutations.`,
      output: `No direct output (Internal mechanism)`,
      outputExplanation: `Reconciliation is React's engine. When state or props change, React generates a new Virtual DOM tree. It then diffs this tree against the previous one. Instead of tearing down the entire UI, reconciliation calculates the most efficient way to patch the Real DOM with only the specific changes.`
    },
    {
      id: "react-104",
      question: "Code Splitting",
      answer: "The practice of splitting the app's JavaScript bundle into smaller chunks which can be loaded on demand (via React.lazy or dynamic imports), improving load time.",
      story: { title: "The Encyclopedia", text: "Instead of handing the user a 50-pound A-Z encyclopedia on page load, you just hand them 'Volume A'. When they ask for 'B', you download it." },
      code: `// Webpack splits this automatically\nimport('lodash').then(_ => console.log(_.add(1, 2)));`,
      output: `Logs '3' to the console after lodash is downloaded and executed.`,
      outputExplanation: `Using the dynamic import() syntax signals the bundler to extract the imported module into a separate JavaScript file. When this line of code executes at runtime, the browser makes a network request to fetch the chunk, and once loaded, the promise resolves, allowing the code to execute.`
    },
    {
      id: "react-105",
      question: "React Performance Optimization",
      answer: "Techniques include using React.memo for pure components, useMemo/useCallback for caching, lazy loading routes, avoiding anonymous functions in JSX props, and proper list keys.",
      story: { title: "The F1 Pit Crew", text: "Shaving milliseconds off every operation. Caching tools so you don't walk back to the truck (useMemo). Replacing heavy parts with carbon fiber (lazy loading)." },
      code: `// Wrap expensive components\nconst MemoizedComponent = React.memo(MyComponent);`,
      output: `A higher-order component that skips unnecessary re-renders.`,
      outputExplanation: `React.memo wraps a functional component and memoizes its result. When the parent component re-renders, React checks if the props passed to MemoizedComponent have changed using strict equality (shallow compare). If they are identical, React skips rendering MyComponent entirely, saving valuable processing time.`
    }
  ]
};
