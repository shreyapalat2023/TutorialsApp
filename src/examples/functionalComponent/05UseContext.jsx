import { Link, Outlet } from "react-router-dom";
import React, { createContext, useState } from "react";
import Child5 from "./06ChildCompoForUseContext";
export const Context = createContext();

const Child4 = () => {
    return <Child5 />;
};

const Child3 = () => {
    return <Child4 />;
};

const Child2 = () => {
    return <Child3 />;
};

const Child = () => {
    return <Child2 />;
};

const UseContextCustomHook = () => {
    const [username, setUsername] = useState("something");
    // setUsername("Shreya");


    return (
        <>
            <h1 className="text-center">Built-in React Hooks</h1>
            <h3>Context Hooks</h3>
            <p>Context lets a component receive information from distant parents without passing it as props. For example, your app’s top-level component can pass the current UI theme to all components below, no matter how deep.</p>
            <p>
                The useContext hook in React is a powerful tool for managing state and passing data through a component tree without having to pass props down manually at every level. This is particularly useful for global state management or sharing state between deeply nested components. Here's an overview of how to use useContext:
            </p>
            <h5>Steps to use Hooks</h5>
            <ul>
                <li>Create a Context:</li>
                <p>First, you need to create a context using React.createContext.</p>
                <li>Provide the Context</li>
                <p>Use a Context Provider to wrap the component tree where you want the context to be accessible. The provider accepts a value prop which is the data you want to pass to the consuming components.</p>
                <li>Consume the Context</li>
                <p>Use the useContext hook to access the context value in any component within the provider's tree.</p>
            </ul>

            <h3>Advantages of using usecontext</h3>
            <ul>
                <li><strong>Simplifies Prop Drilling:</strong> It eliminates the need to pass props through every level of the component tree.</li>
                <li><strong>Global State Management:</strong> Useful for global state that needs to be accessible by multiple components.</li>
                <li><strong>Cleaner Code: </strong>Helps in maintaining cleaner and more readable code.</li>
            </ul>
            <h3>Considerations:</h3>
            <ul>
                <li>
                    <strong>Performance:</strong> Frequent updates to context can cause performance issues because any component that uses the context will re-render whenever the context value changes.
                </li>
                <li><strong>Debugging:</strong>Overusing context can make debugging more challenging because it becomes harder to trace where state changes are originating from.</li>
            </ul>

            <h3>Best Practices</h3>
            <li>Use context for global or shared state that doesn't change frequently.</li>
            <li>Avoid using context for state that only needs to be accessed by a few components; use props instead.</li>
            <li>Combine useReducer with useContext for more complex state logic, as it can help organize state management better.
            </li>
            <h3> When do you need context?</h3>
            <p>You can hold inside the context:</p>
            <ul>
                <li> global state</li>
                <li>theme</li>
                <li>application configuration</li>
                <li> user settings</li>
                <li>preferred language</li>
                <li> a collection of services</li>
                <li>authenticated user name</li>
            </ul>

            {/* Interview Questions START */}
            <h1>Interview Questions</h1>
            {/* Question one  */}
            <p><strong>1.What is the useContext hook in React, and why is it used?</strong></p>
            <p>Context lets a component receive information from distant parents without passing it as props. For example, your app’s top-level component can pass the current UI theme to all components below, no matter how deep.</p>
            <p>
                The useContext hook in React is a powerful tool for managing state and passing data through a component tree without having to pass props down manually at every level. This is particularly useful for global state management or sharing state between deeply nested components. Here's an overview of how to use useContext:
            </p>
            {/* Question Two */}

            <p><strong>2.How do you create a context in React?</strong></p>
            <p>You can create a context in React using the createContext function.</p>
            <pre>
                import React, {createContext} from 'react'; <br />

                // Create a context with a default value <br />
                const MyContext = createContext(defaultValue);<br />

                // Export the context to use it in other components <br />
                export default MyContext;
            </pre>

            {/* Question Three */}
            <p><strong>3.Steps to use the useContext hook in a functional component?</strong></p>
            <ul>
                <li>Create a Context:</li>
                <p>First, you need to create a context using React.createContext.</p>
                <li>Provide the Context</li>
                <p>Use a Context Provider to wrap the component tree where you want the context to be accessible. The provider accepts a value prop which is the data you want to pass to the consuming components.</p>
                <li>Consume the Context</li>
                <p>Use the useContext hook to access the context value in any component within the provider's tree.</p>
            </ul>

            {/* Question Four */}
            <p><strong>4.How does useContext differ from prop drilling, and why might you choose one approach over the other?</strong></p>
            <p>useContext avoids the need to pass props down through multiple levels of components (prop drilling), which can make the code cleaner and easier to maintain. Prop drilling can become cumbersome and error-prone, especially in large applications with deeply nested components. useContext provides a way to directly access the context value wherever it is needed, improving code readability and maintainability.</p>

            {/* Interview Questions END */}
            <h3>Example</h3>
            <ol>
                <li>Theme <a href="https://www.freecodecamp.org/news/react-context-in-5-minutes/"><Link to="usecontextchangetheme">Example Using usecontext</Link></a></li>
                <Link to="usestatechangetheme">Example Using usestate</Link>
                <li>Login Logout <a href="https://dev.to/hey_yogini/usecontext-for-better-state-management-51hi">Example</a></li>
                <Link to="loginlogoutusecontext">My Example</Link>
                <li>user Name Data pass in all compo <a href="https://dmitripavlutin.com/react-context-and-usecontext/">Example</a></li>
                <li>Notification</li>
                <li>Books data <a href="https://www.robinwieruch.de/react-usecontext-hook/">Ref</a></li> <Link to= "usecontextbooksdata">My Example</Link>
            </ol>

            {/* <div className="container">
                <div className="col-6-text-center">
                    <Outlet />
                </div>
            </div> */}

            <Context.Provider value={{ Data: username }}>
                <Child5 />
            </Context.Provider>
        </>

    );

}
export default UseContextCustomHook
