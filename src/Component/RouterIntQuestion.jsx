import React from 'react';

const RouterIntQuestion = () => {
    return (
        <>
            <h1 className='text-center shadow mt-5'> ReactJS Router Questions</h1>
            {/*------------------------------------------------- Question one--------------------------------------------------- */}
            <h3><button className='bd-red'>01</button> What is React Router?</h3>
            <p>React Router is a popular library used in React applications to manage <mark>navigation</mark> and <mark> routing </mark> between different views or pages. It allows developers to build single-page applications (SPAs) with multiple views without the need to refresh the page, making the user experience smoother and faster.</p>

            <p><strong className='text-decoration-underline fs-5 text-danger'>Key Concepts:</strong></p>
            <ol>
                <li><span style={{ fontSize: "1.5rem", color: "darkcyan" }}>Routing:</span>React Router lets you define routes in your application. Each route corresponds to a different component or view that should be rendered when the user navigates to a specific URL.</li>
                <li><span style={{ fontSize: "1.5rem", color: "darkcyan" }}>Single-Page Application (SPA):</span>In a SPA, the entire application runs on a single HTML page. React Router helps you switch between different views or components dynamically without reloading the page.</li>
                <li>
                    <span style={{ fontSize: "1.5rem", color: "darkcyan" }}>Components of React Router:</span>
                    <ul>
                        <li><strong>createBrowserRouter:</strong> This function is used to create a router instance for your application. It defines the routes and their corresponding components, which will be rendered when a user navigates to a specific path.</li>
                        <p><strong>Usage:</strong> You pass an array of route objects to createBrowserRouter, where each object specifies a path and the element to render at that path.</p>
                        <li><strong>RouterProvider:</strong>RouterProvider is used to supply the router (created by createBrowserRouter) to your React application. It ensures that the routing context is available throughout your app.</li>
                        <p><strong>Usage:</strong> You wrap your entire application with RouterProvider, passing the router as a prop.</p>
                        <li><strong>Link:</strong>Link is a component used for navigation in React Router without causing a full page reload. It's the React Router equivalent of an HTML &lt;a&gt; tag but designed to work seamlessly in single-page applications.</li>
                        <p><strong>Usage: </strong>You use Link to navigate between different routes within your application.</p>
                    </ul>
                </li>
            </ol>
            {/* ----------------------------------------------------Question two ------------------------------------------------*/}

            <h3><button className='bd-red'>02</button> Why do we need to React Router?</h3>
            <p>We need React Router to handle navigation within a React application, allowing us to build single-page applications (SPAs) with multiple views or pages. Here are the key reasons why React Router is important:</p>
            <details>
                <summary style={{ color: "green" }}>1.Navigation Without Full Page Reloads:</summary>
                React Router enables navigation between different components or "pages" without triggering a full page reload. This results in a faster, smoother user experience compared to traditional multi-page applications, where navigating between pages involves reloading the entire page.
            </details>

            <details>
                <summary style={{ color: "green" }}>2.Dynamic Routing:</summary>
                It allows for dynamic routing, meaning routes can be defined and changed at runtime. This is particularly useful for applications that need to display different content based on user input, authentication status, or other factors.
            </details>

            <details>
                <summary style={{ color: "green" }}>3.URL Management:</summary>
                React Router helps manage the URL of the application. It allows for deep linking, meaning users can directly navigate to specific views within the application via the URL. This is also important for bookmarking and sharing specific pages of the app.
            </details>

            <details>
                <summary style={{ color: "green" }}>4.Code Splitting:</summary>
                It facilitates code splitting by allowing developers to load only the parts of the app needed for the current route. This improves the app's performance by reducing the initial load time.
            </details>

            {/*------------------------------------------ ReactJs Router Questions START  ------------------------------------------------------*/}
            <h1 className='text-center shadow mt-5'> ReactJS Style Questions</h1>

            <h3><button className='bd-red'>01</button>How do you style React components?</h3>
            <p>Styling React components can be done in several ways,</p>
            <h4>1. CSS Stylesheets</h4>
            <ul>
                <li><strong>Traditional CSS Files:</strong> You can create a .css file and import it into your React component.</li>
                <li><strong>Usage:</strong> Write your styles in a .css file and import them at the top of your component file</li>
            </ul>
            <p><strong>Example:</strong></p>
            <div className='alert alert-info p-3'>
                import React from 'react'; <br />
                import './MyComponent.css'; <br />

                function MyComponent() &#123; <br />
                &nbsp;return &lt;div className="myClass"&gt;Hello, World! &lt;/div&gt;;<br />
                &#125;
            </div>

            <div className='alert alert-info p-3'>
                .myClass &#123; <br />
                color: blue; <br />
                font-size: 20px; <br />
                &#125;
            </div>
            <h4>2.Inline Style:</h4>
            <ul>
                <li><strong>Usage:</strong>Define styles directly within the component using JavaScript objects.</li>
                <li><strong>Advantages:</strong>Great for dynamic styling and small components.</li>
            </ul>
            <p><strong>Example:</strong></p>

            <div className='alert alert-info p-3'>
                function MyComponent() &#123;<br />
                const styles = &#123;<br />
                color: 'blue',<br />
                fontSize: '20px',<br />
                &#125;<br />
                return &lt;div style=&#123;styles&#125;&gt;Hello, World!&lt;/div&gt;; <br />
                &#125;
            </div>

            <h4>3. CSS Modules</h4>
            <ul>
                <li><strong>Usage:</strong>CSS Modules provide a way to locally scope CSS by default. Create a .module.css file and import styles as an object.</li>
                <li><strong>Advantage:</strong>Avoids global scope conflicts by automatically localizing styles.</li>
            </ul>
            <p><strong>Example:</strong></p>
            <div className='alert alert-info p-3'>
                import React from 'react';<br/>
                import styles from './MyComponent.module.css'; <br/>

                function MyComponent() &#123; <br/>
                return &lt;div className=&#123;styles.myClass&#125;&gt;Hello, World!&lt;/div&gt;;<br/>
                &#125;
            </div>



            {/*------------------------------------------ ReactJs Router Questions END  ------------------------------------------------------*/}


        </>
    );
};

export default RouterIntQuestion;