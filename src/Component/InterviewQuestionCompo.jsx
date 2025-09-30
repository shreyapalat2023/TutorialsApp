import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import RouterIntQuestion from './RouterIntQuestion.jsx';
import LazyLoadingIntQueCompo from './LazyLoadingIntQue.jsx';
import question from "../question.png";
const InterviewQuestionCompo = () => {
    return (
        <>
            <div className='container'>

                <div className="container mt-5">
                    <div className="row justify-content-center">
                        <div className="col-md-12 text-center">
                            <div className="card shadow-lg border-0 rounded-4">
                                <div className="card-body p-5">
                                    <img src={question} />
                                    <h2 className="fw-bold mb-3 text-primary">
                                        {/* <i className="bi bi-mortarboard-fill me-2"></i> */}
                                        Interview Quesition
                                    </h2>
                                    <p className="text-muted">
                                        Learn React with <span className="fw-semibold">Class</span> and{" "}
                                        <span className="fw-semibold">Functional Components</span>.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/*------------------------------------- Basic Interview Question START ----------------------------------------------*/}
                <div className='mb-4 shadow-sm mt-4 p-5'>
                    {/* Question one */}
                    <h3><button className='bd-red shadow'>1</button> What are the features of React?</h3>
                    <p><strong className='text-decoration-underline fs-5 text-primary'>JSX:</strong> JSX is a syntax extension to JavaScript. It is used with React to describe what the user interface should look like. By using JSX, we can write HTML structures in the same file that contains JavaScript code.</p>

                    <p><strong className='text-decoration-underline fs-5 text-primary'>Components:</strong> Components are the building blocks of any React application, and a single app usually consists of multiple components. It splits the user interface into independent, reusable parts that can be processed separately.</p>

                    <p><strong className='text-decoration-underline fs-5 text-primary'>Virtual DOM:</strong> React keeps a lightweight representation of the real DOM in the memory, and that is known as the virtual DOM. When the state of an object changes, virtual DOM changes only that object in the real DOM, rather than updating all the objects.</p>


                    <p><strong className='text-decoration-underline fs-5 text-primary'>One-way data-binding:</strong>  React’s one-way data binding keeps everything modular and fast. A unidirectional data flow means that when designing a React app, you often nest child components within parent components.</p>

                    <p><strong className='text-decoration-underline fs-5 text-primary'>High Performance:</strong>  React updates only those components that have changed, rather than updating all the components at once. This results in much faster web applications.</p>

                    {/* Quesition two */}

                    <h3><button className='bd-red'>2</button> What is JSX ?</h3>
                    <p>JSX is a syntax extension of JavaScript. It is used with React to describe what the user interface should look like. By using JSX, we can write HTML structures in the same file that contains JavaScript code.</p>

                    {/* Question three */}
                    <h3><button className='bd-red'>3</button>Can web browsers read JSX directly?</h3>
                    <ul>
                        <li>Web browsers cannot read JSX directly. This is because they are built to only read regular JS objects and JSX is not a regular JavaScript object </li>
                        <li>For a web browser to read a JSX file, the file needs to be transformed into a regular JavaScript object. For this, we use Babel</li>
                    </ul>

                    {/* Question four */}
                    <h3><button className='bd-red'>4</button>What is the virtual DOM?</h3>
                    <p>DOM stands for Document Object Model. The DOM represents an HTML document with a logical tree structure. Each branch of the tree ends in a node, and each node contains objects.</p>
                    <p>React keeps a lightweight representation of the real DOM in the memory, and that is known as the virtual DOM. When the state of an object changes, the virtual DOM changes only that object in the real DOM, rather than updating all the objects. The following are some of the most frequently asked react interview questions.</p>

                    {/* Questio five */}
                    <h3><button className='bd-red'>5</button>Why use React instead of other frameworks, like Angular?</h3>
                    <p><strong className='text-decoration-underline fs-5 text-warning'> Easy creation of dynamic applications:</strong>  React makes it easier to create dynamic web applications because it provides less coding and provides more functionality, whereas, with JavaScript applications, code tends to get complex very quickly.</p>

                    <p><strong className='text-decoration-underline fs-5 text-warning'> Improved performance:</strong> React uses virtual DOM, which makes web applications perform faster. Virtual DOM compares its previous state and updates only those components in the real DOM, whose states have changed, rather than updating all the components — like conventional web applications.</p>

                    <p><strong className='text-decoration-underline fs-5 text-warning'> Reusable components:</strong> Components are the building blocks of any React application, and a single app usually consists of multiple components. These components have their own logic and controls, and they can be reused through the application, which, in turn, dramatically reduces the development time of an application.</p>


                    <p><strong className='text-decoration-underline fs-5 text-warning'> Unidirectional data flow:</strong> React follows a unidirectional data flow. This means that when designing a React app, we often nest child components within parent components. And since the data flows in a single direction, it becomes easier to debug errors and know where the problem occurs in an application at the moment.</p>

                    <p><strong className='text-decoration-underline fs-5 text-warning'> Dedicated tools for easy debugging</strong> Facebook has released a chrome extension that we can use to debug React applications. This makes the process of debugging React to web applications faster and easier.</p>

                    {/* Question six */}

                    <h3><button className='bd-red'>6</button>What is the difference between the ES6 and ES5 standards?</h3>
                    <p>These are the few instances where ES6 syntax has changed from ES5 syntax</p>
                    <p><strong className='text-decoration-underline fs-5 text-warning'> Class Components</strong>
                        <ul>
                            <li>In ES6, React components are often defined using classes, which provide a clearer and more concise syntax for creating components.</li>
                            <li>In ES5, components are defined using React.createClass, which involves more boilerplate code and lacks the syntactic sugar of ES6 classes.</li>
                        </ul>
                    </p>

                    <p><strong className='text-decoration-underline fs-5 text-warning'>Arrow Functions</strong>
                        <ul>
                            <li>Arrow functions provide a shorter syntax and do not have their own this context, which can make them more convenient to use in certain scenarios, especially in event handlers.</li>
                            <li>In ES5, regular functions are used, and you often need to bind this to ensure the correct context.</li>
                        </ul>
                    </p>

                    <p><strong className='text-decoration-underline fs-5 text-warning'>Destructuring</strong>
                        <ul>
                            <li>Destructuring allows you to unpack values from arrays or properties from objects into distinct variables, making the code more readable.</li>
                            <li>In ES5, you manually access properties, which can be more verbose.</li>
                        </ul>
                    </p>

                    <p><strong className='text-decoration-underline fs-5 text-warning'>Modules</strong>
                        <ul>
                            <li>ES6 introduced a standardized module system using import and export statements.</li>
                            <li>In ES5, module systems like CommonJS are used, with require statements.</li>
                        </ul>
                    </p>
                    {/* Question Seven */}

                    <h3><button className='bd-red'>7</button>What are events in React?</h3>
                    <p>In React, an event is an action that can be triggered by the user or by the browser itself. Events are things like clicking a button, submitting a form, typing in a text input, or even when a web page has finished loading. React has its own event handling system, which is similar to handling events in plain HTML but with some syntactical and functional differences.</p>
                    Here are some key points about handling events in React:
                    <p><strong className='text-decoration-underline fs-5 text-warning'>Event Naming:</strong>In React, event names are written in camelCase, rather than lowercase. For example, the onclick event in HTML is written as <b>onClick</b> in React.</p>

                    <p><strong className='text-decoration-underline fs-5 text-warning'>Event Handling:</strong>In React, you pass a function as the event handler, rather than a string. For example, in HTML, you might write:</p>
                    <pre style={{ color: "blue" }}>
                        &lt;button onclick=<span className='mark'>"handleClick()"</span>&gt;Click me&lt;/button&gt;
                    </pre>
                    <p>In React it looks like,</p>
                    <pre style={{ color: "blue" }}>
                        &lt;button onclick=<span className='mark'>&#123;handleClick&#125;</span>&gt;Click me&lt;/button&gt;
                    </pre>

                    {/* Question Eight */}
                    <h3><button className='bd-red'>8</button>What are synthetic events in React?</h3>
                    <p>In React, a SyntheticEvent is a cross-browser wrapper around the browser’s native event. This means that React’s event system is normalized to work the same across all browsers. Synthetic events are part of React’s event handling system, which provides a consistent interface to handle events, abstracting away differences between browsers.</p>
                    <h4>Key Features of SyntheticEvent</h4>
                    <p><strong className='text-decoration-underline fs-5 text-warning'>Cross-browser compatibility:</strong>SyntheticEvent normalizes the event object across different browsers, ensuring that you don't need to write browser-specific code to handle events.</p>

                    <p><strong className='text-decoration-underline fs-5 text-warning'>Event Pooling:</strong> For performance reasons, React reuses event objects in a process known as event pooling. This means that the SyntheticEvent object is reused and all properties are nullified after the event callback has been invoked. To retain the event object, you must call event.persist().</p>

                    <p><strong className='text-decoration-underline fs-5 text-warning'>Properties and Methods:</strong> SyntheticEvent mimics the native event interface and includes properties such as type, target, currentTarget, eventPhase, bubbles, cancelable, defaultPrevented, isTrusted, and methods like preventDefault() and stopPropagation().</p>

                    {/* Question Nine */}
                    <h3><button className='bd-red'>9</button>What is an arrow function and how is it used in React?</h3>
                    <p>An arrow function is a concise way to define functions in JavaScript. Introduced in ES6, arrow functions have a shorter syntax compared to traditional function expressions and do not have their own this context, which can be particularly useful in React components for handling events and defining methods.</p>

                    <p><strong className='text-decoration-underline fs-5 text-warning'>Lexical this Binding:</strong>  Arrow functions do not have their own this context. Instead, they inherit this from the surrounding lexical context. This is particularly useful in React class components where you want to avoid manually binding this.</p>

                    <p><strong className='text-decoration-underline fs-5 text-warning'>Concise Syntax:</strong> Arrow functions provide a shorter and more readable syntax, making the code cleaner and easier to maintain.</p>

                    <p><strong className='text-decoration-underline fs-5 text-warning'>Implicit Returns::</strong>For functions with a single expression, arrow functions allow you to omit the return keyword and curly braces, which can make the code more concise.</p>

                    {/* Qujestion Ten */}
                    <h3><button className='bd-red'>10</button> What are the components in React?</h3>
                    <p>Components are the building blocks of any React application, and a single app usually consists of multiple components. A component is essentially a piece of the user interface. It splits the user interface into independent, reusable parts that can be processed separately.</p>
                    <p>There are two types of components in React:</p>
                    <p><strong className='text-decoration-underline fs-5 text-warning'>Functional Components:</strong>These types of components have no state of their own and only contain render methods, and therefore are also called stateless components. They may derive data from other components as props (properties).</p>
                    <pre>
                        function Greeting(props) &#123; <br />

                        return &lt;h1&gt;Welcome to &#123;props.name&#125;&lt;/h1&gt;

                        &#125;
                    </pre>
                    <p><strong className='text-decoration-underline fs-5 text-warning'>Class Components:</strong>These types of components can hold and manage their own state and have a separate render method to return JSX on the screen. They are also called Stateful components as they can have a state.</p>
                    <pre>
                        class Greeting extends React.Component &#123;

                        render() &#123;

                        return &lt;h1&gt;Welcome to &#123;this.props.name&#125;&lt;/h1&gt;;

                        &#125;

                        &#125;
                    </pre>
                    {/* Question Eleven */}
                    <h3><button className='bd-red'>11</button> What is render and Re-render method in React?</h3>
                    <ol>
                        <li style={{ color: "green" }}>Render:</li>
                        <ul>
                            <li>Render refers to the initial process of creating the virtual DOM representation of your React component.</li>
                            <li>When a React component is first loaded, its render method is called. This method returns the JSX (or React elements) that 0describe what the UI should look like.</li>
                            <li>The React library takes this JSX and converts it into a structure called the Virtual DOM. React then compares this Virtual DOM with the real DOM and updates the real DOM to match the virtual one.</li>
                        </ul>
                        <li style={{ color: "green" }}>Re-render:</li>
                        <ul>
                            <li>Re-render occurs when a component's state or props change. When React detects a change, it calls the render method again to update the UI.</li>
                            <li>React efficiently updates only the parts of the DOM that have changed by comparing the new virtual DOM with the previous one (a process known as "reconciliation").</li>
                            <li><strong>State and Props:</strong> The primary triggers for re-rendering are changes to a component's state or its received props.</li>
                        </ul>
                    </ol>
                    {/* Question twelve */}
                    <h3><button className='bd-red'>12</button> How is React different from React Native?</h3>
                    <ol>
                        <li><strong>Purpose:</strong></li>
                        <ul>
                            <li>React:</li>
                            <ul>
                                <li>A JavaScript library used for building user interfaces, primarily for web applications.</li>
                                <li>It focuses on creating reusable UI components that manage their own state and can be composed together to build complex UIs.</li>
                            </ul>
                            <li>React Native:</li>
                            <ul>
                                <li>A framework for building native mobile applications for iOS and Android using React.</li>
                                <li>It allows developers to use React components to build mobile UIs, but instead of rendering to the browser's DOM, it renders to native mobile UI elements.</li>
                            </ul>
                        </ul>
                        <li><strong>Platform:</strong></li>
                        <ul>
                            <li>React:Targets web browsers, meaning the output is HTML, CSS, and JavaScript that runs in a web environment.</li>
                            <li>React Native: Targets mobile platforms (iOS and Android), meaning the output is native mobile components like &lt;View&gt;, &lt;Text&gt;, and &lt;Button&gt;, which map to the corresponding native elements.</li>
                        </ul>
                        <li><strong>Rendering:</strong></li>
                        <ul>
                            <li>React: Uses a virtual DOM to update the web page in response to state changes. The virtual DOM is a lightweight copy of the real DOM.</li>
                            <li>React Native: Does not use the virtual DOM; instead, it directly renders native components on the device, providing better performance for mobile apps.</li>
                        </ul>
                        <li><strong>Styling:</strong></li>
                        <ul>
                            <li>React: Styling is done using CSS (or CSS-in-JS libraries).</li>
                            <li>React Native:Styling is done using a subset of CSS properties via a JavaScript object (similar to inline styles in React), but these styles are translated into native styles.</li>
                        </ul>
                        <li><strong>Libraries and Ecosystem:</strong></li>
                        <ul>
                            <li>React:: Has a vast ecosystem of web-specific libraries, tools, and packages for routing, state management, etc.</li>
                            <li>React Native:Has its own ecosystem with libraries and tools specifically designed for mobile development, such as navigation libraries like React Navigation and device APIs.</li>
                        </ul>
                        <li><strong>Code Sharing:</strong></li>
                        <ul>
                            <li>React:Typically used for web-only applications.</li>
                            <li>React Native:Enables sharing some code (especially business logic) between web and mobile apps, though UI code is usually platform-specific.</li>
                        </ul>
                    </ol>
                    {/* Question thirteen */}
                    <h3><button className='bd-red'>13</button> How is React different from Angular?</h3>
                    <ol>
                        <li><strong className='text-decoration-underline fs-5 text-warning'>Type:</strong></li>
                        <ul>
                            <li>React:</li>
                            <ul>
                                <li>A JavaScript library focused on building user interfaces, primarily the view layer (V in MVC).</li>
                                <li>React is primarily concerned with rendering components and handling state.</li>
                            </ul>
                            <li>Angular:</li>
                            <ul>
                                <li>A full-fledged framework developed by <mark>Google</mark> that provides a comprehensive solution for building web applications.</li>
                                <li>Angular offers a complete set of tools and libraries for building not just the UI, but also handling routing, forms, state management, HTTP requests, and more.</li>
                            </ul>
                        </ul>
                        <li className='text-decoration-underline fs-5 text-warning'>Language:</li>
                        <ul>
                            <li>React:</li>
                            <ul>
                                <li>Primarily uses JavaScript (ES6+) with JSX, a syntax extension that allows writing HTML-like code within JavaScript.</li>
                                <li>TypeScript can be used with React, but it’s optional.</li>
                            </ul>
                            <li>Anglular:</li>
                            <ul>
                                <li>Built with TypeScript, a statically typed superset of JavaScript, which provides additional features like interfaces and decorators. TypeScript is the default language for Angular</li>
                            </ul>
                        </ul>

                        <li className='text-decoration-underline fs-5 text-warning'>Architecture:</li>
                        <ul>
                            <li>React:</li>
                            <ul>
                                <li>React follows a component-based architecture, where the application is divided into reusable components.</li>
                                <li>React focuses only on the view layer, relying on external libraries for things like routing, state management (e.g., Redux), and form handling.</li>
                            </ul>
                            <li>Anglular:</li>
                            <ul>
                                <li>Angular follows an MVC (Model-View-Controller) or MVVM (Model-View-ViewModel) architecture.</li>
                                <li>It includes a complete framework with built-in tools for routing, HTTP services, form validation, dependency injection, and more.</li>
                            </ul>
                        </ul>
                        <li className='text-decoration-underline fs-5 text-warning'>Data Binding:</li>
                        <ul>
                            <li>React:</li>
                            <ul>
                                <li>Uses one-way data binding, where the data flows in a single direction from parent to child components.</li>
                                <li>State management in React is typically done using useState, useReducer, or external libraries like Redux.</li>
                            </ul>
                            <li>Angular:</li>
                            <ul>
                                <li>Supports two-way data binding, where changes in the UI are automatically reflected in the model and vice versa.</li>
                                <li>This is handled using Angulars built-in directives, such as ngModel.</li>
                            </ul>
                        </ul>
                    </ol>
                    {/* Question Fourteen */}

                    <h3><button className='bd-red'>14</button>What is a state in React?</h3>
                    <ul>
                        <li>The state is a built-in React object that is used to contain data or information about the component. The state in a component can change over time, and whenever it changes, the component re-renders.</li>
                        <li>The change in state can happen as a response to user action or system-generated events. It determines the behavior of the component and how it will render.</li>
                    </ul>
                    {/* Questoin Fifteen */}

                    <h3><button className='bd-red'>15</button> How do you implement state in React?</h3>
                    <p><strong className='text-decoration-underline fs-5 text-success'> Using Functional Components with the useState Hook</strong></p>
                    <ol>
                        <li>Import useState</li>
                        <li>Initialize State:Use the useState hook to declare a state variable and a function to update it. The useState hook takes the initial state as an argument.</li>
                        <li>Update State:Use the state updater function (e.g., setCount) to update the state. This triggers a re-render of the component with the updated state.</li>
                        <li>Render State:Use the state variable in your JSX to display or use its value.</li>
                    </ol>
                    <p><strong className='text-decoration-underline fs-5 text-success'>Using Class Components</strong></p>
                    <p>Before React Hooks, state was managed in class components using this.state and this.setState.</p>
                    <ol>
                        <li>Create a Class Component</li>
                        <li>Initialize State:Initialize the state in the constructor method using this.state.</li>
                        <li>Update State:Use this.setState to update the state. This triggers a re-render of the component with the updated state.</li>
                        <li>Render State:Use the state variable in the render method to display or use its value.</li>
                    </ol>
                    {/* Question sixteen */}
                    <h3><button className='bd-red'>16</button> What are props in React?</h3>
                    <ul>
                        <li>Props are short for Properties. It is a React built-in object that stores the value of attributes of a tag and works similarly to HTML attributes.</li>
                        <li>Props provide a way to pass data from one component to another component. Props are passed to the component in the same way as arguments are passed in a function.</li>
                    </ul>
                    {/* Question seventeen */}
                    <h3><button className='bd-red'>17</button> How do you pass props between components ?</h3>
                    <p>Passing props between components in React allows you to share data and functionality between different parts of your application. Props are short for "properties" and are used to pass data from a parent component to a child component.</p>
                    <ol>
                        <li><strong className='text-decoration-underline fs-5 text-success'>Create a Parent Component</strong></li>
                        <p>The parent component is where the data or functions originate. You’ll pass this data or functions down to child components via props.</p>
                        <p>Example:</p>
                        <div className='alert alert-info p-3'>
                            import React from 'react';<br />
                            import Greeting from './Greeting'; // Importing the child component<br /><br />

                            function ParentComponent() &#123;<br />
                            &nbsp;&nbsp;const name = "John"; // Data to pass<br /><br />

                            &nbsp;&nbsp;return (<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt;<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Greeting name=&#123;name&#125; /&gt;<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;<br />
                            &nbsp;&nbsp;);<br />
                            &#125;<br /><br />

                            export default ParentComponent;
                        </div>
                        <li><strong className='text-decoration-underline fs-5 text-success'> Pass Props to the Child Component</strong></li>
                        <p>In the parent component’s JSX, pass props to the child component by adding attributes that correspond to the props you want to pass.</p>
                        <li><strong className='text-decoration-underline fs-5 text-success'>  Access Props in the Child Components</strong></li>
                        <p>In the child component, you can access the props using the props object in a class component or directly through the function parameters in a functional component</p>
                        <p>Example</p>
                        <div className='alert alert-info p-3'>
                            import React from 'react';<br /><br />

                            function Greeting(props) &#123;<br />
                            &nbsp;&nbsp;return &lt;h1&gt;Hello, &#123;props.name&#125;!&lt;/h1&gt;;<br />
                            &#125;<br /><br />

                            export default Greeting;
                        </div>
                        <li><strong className='text-decoration-underline fs-5 text-success'>Pass Multiple Props</strong></li>
                        <p>You can pass as many props as you need by adding more attributes to the child component.</p>
                        <p>Example:</p>
                        <div className='alert alert-info p-3'>
                            function ParentComponent() &#123;<br />
                            &nbsp;&nbsp;const name = "John";<br />
                            &nbsp;&nbsp;const age = 25;<br /><br />

                            &nbsp;&nbsp;return (<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt;<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Greeting name=&#123;name&#125; age=&#123;age&#125; /&gt;<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;<br />
                            &nbsp;&nbsp;);<br />
                            &#125;
                        </div>
                        <p>In the child component, you can access both props:</p>
                        <div className='alert alert-info p-3'>
                            function Greeting(&#123;name, age&#125;) &#123; <br />
                            &nbsp; return &lt;h1&gt;Hello, &#123;name&#125;! You are &#123;age&#125; years old.&lt;/h1&gt;; <br />
                            &#125;

                        </div>
                    </ol>
                    {/* Question eighteen */}
                    <h3><button className='bd-red'>18</button> what default props do in react ?</h3>
                    <p>In React, defaultProps is a way to define default values for the props of a component. If a prop is not passed by the parent component, the component will use the value specified in defaultProps. This ensures that the component has a value to work with even if the parent doesn't provide one.</p>
                    <p><strong className='text-decoration-underline fs-5 text-warning'>Key Points About defaultProps:</strong></p>
                    <ol>
                        <li>Provide Default Values:</li>
                        <p>defaultProps allows you to set default values for props that might be undefined when the component is rendered.</p>
                        <li>Applies to Missing Props Only:</li>
                        <p>If a prop is passed with a value, that value takes precedence over defaultProps. defaultProps only applies to props that are missing or undefined.</p>
                        <li>Works with Both Functional and Class Components:</li>
                        <p>You can define defaultProps for both functional and class components.</p>
                        <li>Commonly Used for Optional Props:</li>
                        <p>It’s particularly useful when you want to make some props optional, allowing the component to have a fallback value.</p>
                    </ol>
                    <p>Example:</p>
                    <p>Functional Component with defaultProps:</p>
                    <div className="alert alert-info p-3">
                        function Button(&#123; color, text &#125;) &#123;
                        return &lt;button style=&#123;&#123; backgroundColor: color &#125;&#125;&gt;&#123;text&#125;&lt;/button&gt;;
                        &#125; <br />

                        // Setting defaultProps <br />
                        Button.defaultProps = &#123; <br />
                        color: 'blue',  // Default color <br />
                        text: 'Click Me'  // Default text <br />
                        &#125;; <br />

                        export default Button;
                    </div>
                    <p>Class Component with defaultProps:</p>

                    <div className='alert alert-info p-3'>
                        class Button extends React.Component &#123; <br />
                        render() &#123; <br />
                        return &lt;button style=&#123;&#123; backgroundColor: this.props.color &#125;&#125;&gt;&#123;this.props.text&#125;&lt;button&gt;; <br />
                        &#125; <br />
                        &#125; <br />

                        // Setting defaultProps <br />
                        Button.defaultProps = &#123;<br />
                        color: 'blue',  // Default color <br />
                        text: 'Click Me'  // Default text <br />
                        &#125;; <br />

                        export default Button; <br />
                    </div>
                    <p>Usage in Parent Component:</p>
                    <div className='alert alert-info p-3'>
                        function App() &#123;<br />
                        &nbsp;&nbsp;return (<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt;<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Button /&gt; &#123;/* Will use defaultProps: color = 'blue', text = 'Click Me' */&#125;<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Button color="red" /&gt; &#123;/* Will use color = 'red', text = 'Click Me' (default) */&#125;<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Button text="Submit" /&gt; &#123;/* Will use color = 'blue' (default), text = 'Submit' */&#125;<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;<br />
                        &nbsp;&nbsp;);<br />
                        &#125;
                    </div>

                    {/* Question nineteen */}
                    <h3><button className='bd-red'>19</button> How do we validate props?</h3>
                    <p>In React, PropTypes is a way to validate the props passed to a component to ensure they are of the correct type. This helps catch bugs and improve the reliability of your components by ensuring they receive the expected data types.</p>
                    <p><strong className='text-decoration-underline fs-5 text-info'>Steps to Validate PropTypes:</strong></p>
                    <ol>
                        <li>Import PropTypes</li>
                        <li>Define propTypes in Your Component</li>
                        <li>Specify the Expected Types</li>
                        <li>Optional vs. Required Props</li>
                    </ol>
                    <p>Example:</p>
                    <div className='alert alert-info p-3'>
                        import React from 'react';<br />
                        import PropTypes from 'prop-types';<br /><br />

                        function Greeting(&#123; name, age, isMember &#125;) &#123;<br />
                        &nbsp;&nbsp;return (<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt;<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h1&gt;Hello, &#123;name&#125;!&lt;/h1&gt;<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;Age: &#123;age&#125;&lt;/p&gt;<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;&#123;isMember ? "You are a member!" : "Please sign up!"&#125;&lt;/p&gt;<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;<br />
                        &nbsp;&nbsp;);<br />
                        &#125;<br /><br />

                        // Defining propTypes<br />
                        Greeting.propTypes = &#123;<br />
                        &nbsp;&nbsp;name: PropTypes.string.isRequired,  // name must be a string and is required<br />
                        &nbsp;&nbsp;age: PropTypes.number,              // age must be a number<br />
                        &nbsp;&nbsp;isMember: PropTypes.bool            // isMember must be a boolean<br />
                        &#125;;<br /><br />

                        // Setting defaultProps (optional)<br />
                        Greeting.defaultProps = &#123;<br />
                        &nbsp;&nbsp;age: 18,         // Default age if not provided<br />
                        &nbsp;&nbsp;isMember: false  // Default isMember to false if not provided<br />
                        &#125;;<br /><br />

                        export default Greeting;
                    </div>
                    {/* Question twentey */}
                    <h3><button className='bd-red'>20</button> What are the differences between state and props?</h3>
                    <p><strong className='text-decoration-underline fs-5 text-success'>Use:</strong></p>
                    <ul>
                        <li>State holds information about the components.</li>
                        <li>Props allow to pass data from one component to other components as an argument</li>

                    </ul>
                    <p><strong className='text-decoration-underline fs-5 text-success'>Mutability:</strong></p>
                    <ul>
                        <li>States are mutable</li>
                        <li>Props are Immutable</li>
                    </ul>
                    <p><strong className='text-decoration-underline fs-5 text-success'>Read-only:</strong></p>
                    <ul>
                        <li>States can be changed.</li>
                        <li>Props are read-only.</li>
                    </ul>
                    <p><strong className='text-decoration-underline fs-5 text-success'>Child-Component:</strong></p>
                    <ul>
                        <li>Child Component cannot acces states.</li>
                        <li>Child Component can access props.</li>
                    </ul>
                    {/* Question twenty one */}
                    <h3><button className='bd-red'>21</button>What is a higher-order component in React?</h3>
                    <p>A Higher-Order Component (HOC) in React is a pattern used to share common functionality between components without repeating code. It is a function that takes a component as an argument and returns a new component with added props, state, or other logic.</p>
                    {/* ----------------------------------------Basic Interview Question END----------------------------------- */}


                    <RouterIntQuestion />
                    <LazyLoadingIntQueCompo />

                </div>
            </div>
            <Outlet />
        </>

    );
};

export default InterviewQuestionCompo;