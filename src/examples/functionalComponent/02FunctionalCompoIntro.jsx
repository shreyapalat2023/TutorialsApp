import React from 'react';

const FunctionalCompoIntro = () => {
    return (
        <>
            <h3>Functional Component</h3>
            <p>Functional Component will be created with function in reactJS</p>
            <p>we mainly use arrow for defining functional component</p>
            <p>As you can see, the function component requires fewer lines of code, making it more readable and less error-prone. Function components offer better performance than class components. This improvement is due to the introduction of React Hooks, which allow function components to manage state and side effects efficiently.</p>
            <div class="crayons-article__body text-styles spec__body" data-article-id="1650724" id="article-body">
                <p>In the ever-evolving world of web development, React.js has emerged as a powerful and popular library for building user interfaces. While React allows developers to create components using both functions and classes, the use of functions has gained prominence in recent years. In this article, we will explore why functions are considered superior to classes in React.js development. We'll provide examples and insights to illustrate why this shift in preference has occurred.</p>

                <h2>
                    <a name="understanding-the-basics" href="#understanding-the-basics"></a>
                    Understanding the Basics
                </h2>

                <p><strong>1. Functions and Classes in React.js</strong><br />
                    Before we delve into the advantages of using functions over classes, let's briefly understand the key differences between the two in the context of React.js.</p>

                <p><strong>1.1 Classes</strong><br />
                    Classes in React are often referred to as "class components." They are traditionally used to define components and manage their state and lifecycle. Class components extend the React.Component class and require more boilerplate code.</p>

                <p><strong>1.2 Functions</strong><br />
                    Function components, on the other hand, are a more concise and modern way to define React components. They are also known as "functional components." Function components are essentially JavaScript functions that return JSX elements.</p>
                <h2>
                    <a name="advantages-of-using-functions" href="#advantages-of-using-functions">
                    </a>
                    Advantages of Using Functions
                </h2>

                <p>Now that we have a basic understanding of both functions and classes in React.js, let's explore why functions have become the preferred choice for many developers.</p>

                <p><strong>2. Simplicity and Readability</strong><br />
                    One of the primary reasons developers favor function components is their simplicity. Function components are more concise and easier to read compared to class components. Let's take a look at an example to illustrate this:</p>

                <p><strong>Class Component:</strong><br />
                </p>

                <div class="highlight js-code-highlight">
                    <pre class="highlight plaintext"><code>class MyComponent extends React.Component &#123;
                        render() &#123;
                        return &lt;div&gt;Hello, World!&lt;/div&gt;;
                        &#125;
                        &#125;
                    </code></pre>
                    <div class="highlight__panel js-actions-panel">
                        <div class="highlight__panel-action js-fullscreen-code-action">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-on"><title>Enter fullscreen mode</title>
                                <path d="M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z"></path>
                            </svg>

                            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-off"><title>Exit fullscreen mode</title>
                                <path d="M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z"></path>
                            </svg>

                        </div>
                    </div>
                </div>



                <p><strong>Function Component:</strong><br />
                </p>

                <div class="highlight js-code-highlight">
                    <pre class="highlight plaintext"><code>function MyComponent() &#123;
                        return &lt;div&gt;Hello, World!&lt;/div&gt;;
                        &#125;
                    </code></pre>
                    <div class="highlight__panel js-actions-panel">
                        <div class="highlight__panel-action js-fullscreen-code-action">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-on"><title>Enter fullscreen mode</title>
                                <path d="M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z"></path>
                            </svg>

                            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-off"><title>Exit fullscreen mode</title>
                                <path d="M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z"></path>
                            </svg>

                        </div>
                    </div>
                </div>



                <p>As you can see, the function component requires fewer lines of code, making it more readable and less error-prone.</p>

                <p><strong>3. Improved Performance</strong><br />
                    Function components offer better performance than class components. This improvement is due to the introduction of React Hooks, which allow function components to manage state and side effects efficiently. Hooks, such as <code>useState</code>and <code>useEffect</code>, have simplified state management and lifecycle operations.</p>

                <p><strong>4. Reusability</strong><br />
                    Function components promote reusability. They are easier to extract into smaller, reusable components, making your codebase more modular and maintainable. This reusability is essential for building scalable applications.</p>

                <p><strong>5. Hooks and State Management</strong><br />
                    React Hooks, introduced in React 16.8, have revolutionized the way developers handle state management in function components. With hooks, you can manage component state and lifecycle events without the need for class-based components. This not only reduces boilerplate code but also enhances code clarity.</p>
                <h2>
                    <a name="examples-and-use-cases" href="#examples-and-use-cases">
                    </a>
                    Examples and Use Cases
                </h2>

                <p><strong>Example: Creating a Counter Component</strong><br />
                    Let's create a simple counter component to demonstrate the difference between a class component and a function component:</p>

                <p><strong>Class Component:</strong><br />
                </p>

                <div class="highlight js-code-highlight">
                    <pre class="highlight plaintext"><code>class Counter extends React.Component &#123;
                        constructor(props) &#123;
                        super(props);
                        this.state = &#123;count: 0 &#125;;
                        &#125;

                        increment = () =&gt; &#123;
                        this.setState(&#123; count: this.state.count + 1 &#125;);
                        &#125;

                        render() &#123;
                        return (
                        &lt;div&gt;
                        &lt;p&gt;Count: &#123;this.state.count&#125;&lt;/p&gt;
                        &lt;button onClick=&#123;this.increment&#125;&gt;Increment&lt;/button&gt;
                        &lt;/div&gt;
                        );
                        &#125;&#125;

                    </code></pre>
                    <div class="highlight__panel js-actions-panel">
                        <div class="highlight__panel-action js-fullscreen-code-action">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-on"><title>Enter fullscreen mode</title>
                                <path d="M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z"></path>
                            </svg>

                            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-off"><title>Exit fullscreen mode</title>
                                <path d="M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z"></path>
                            </svg>

                        </div>
                    </div>
                </div>



                <p><strong>Function Component using Hooks:</strong><br />
                </p>

                <div class="highlight js-code-highlight">
                    <pre class="highlight plaintext"><code>import React, &#123;useState&#125; from 'react';

                        function Counter() &#123;
                        const [count, setCount] = useState(0);

                        const increment = () =&gt; &#123;
                        setCount(count + 1);
                        &#125;;

                        return (
                        &lt;div&gt;
                        &lt;p&gt;Count: &#123;count&#125;&lt;/p&gt;
                        &lt;button onClick=&#123;increment&#125;&gt;Increment&lt;/button&gt;
                        &lt;/div&gt;
                        );
                        &#125;

                    </code></pre>
                    <div class="highlight__panel js-actions-panel">
                        <div class="highlight__panel-action js-fullscreen-code-action">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-on"><title>Enter fullscreen mode</title>
                                <path d="M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z"></path>
                            </svg>

                            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-off"><title>Exit fullscreen mode</title>
                                <path d="M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z"></path>
                            </svg>

                        </div>
                    </div>
                </div>



                <p>In this example, the function component using hooks is more concise and easier to understand.</p>

                <p><strong>Conclusion</strong><br />
                    In the world of React.js development, function components have risen in popularity due to their simplicity, improved performance, reusability, and the power of React Hooks for state management. While class components still have their place, especially in legacy codebases, function components are the preferred choice for new projects and modern development practices.</p>

                <p>Incorporating function components into your React.js projects will not only streamline your code but also make it more maintainable and adaptable to future changes.</p>


            </div>
        </>
    );
};

export default FunctionalCompoIntro;