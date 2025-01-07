import React from 'react';

const RestVsSpreadComponentInReact = () => {
    // Spread Operator START
    const sum = (x, y, z) => {
        return x + y + z;
    }
    const numbers = [1, 2, 3];
    console.log(sum(...numbers));
    // Spread Operator END

    // // Rest Parameter START

    const summation = (a, ...b) => {
        return a + b;
    }
    console.log(summation(12, 34, 56, 789));
    // Rest Parameter END

   
    
    return (
        <>
            <h1>Rest Vs Spread</h1>
            <p> The spread (...) syntax allows an iterable, such as an array or string, to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected. In an object literal, the spread syntax enumerates the properties of an object and adds the key-value pairs to the object being created.</p>
            <p> Spread syntax looks exactly like rest syntax. In a way, spread syntax is the opposite of rest syntax. Spread syntax "expands" an array into its elements, while rest syntax collects multiple elements and "condenses" them into a single element. See rest parameters and rest property.  </p>

            <div className="alert alert-info p-3">
                const sum = (x, y, z) =&gt; &#123; <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   return x + y + z; <br />
                &#125; <br />
                const numbers = [1, 2, 3]; <br />
                console.log(sum(...numbers)); <br />
            </div>

            <div className="alert alert-info p-3">
                function myFunction(x, y, z) &#123;  &#125;<br />
                const args = [0, 1, 2];  <br />
                myFunction.apply(null, args);  <br />
            </div>
            <h3>Rest</h3>
            <div className="alert alert-info p-3">
                function myFunction(v, w, x, y, z)  &#123;  &#125;<br />
                const args = [0, 1]; <br />
                myFunction(-1, ...args, 2, ...[3]); <br />
                const parts = ["shoulders", "knees"]; <br />
                const lyrics = ["head", ...parts, "and", "toes"]; <br />
                //  ["head", "shoulders", "knees", "and", "toes"] <br />


                const sum = (x, ...y) =&gt; &#123; <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   return x + y + z; <br />
                &#125; <br />

                console.log(sum(12,45,98,654)); <br />
            </div>

            {/* Interview Questions START */}
            <h1>Interview Questions</h1>
            {/* Question one */}

            <p><strong>1.What is the spread operator in JavaScript? How is it used in React?</strong></p>
            <p>The spread operator (...) allows an iterable such as an array or an object to be expanded in places where zero or more arguments or elements are expected. In React, the spread operator is commonly used to:</p>
            <ul>
                <li>Clone objects or arrays.</li>
                <li>Combine multiple objects or arrays.</li>
                <li>Pass props to a component.</li>
            </ul>

            {/* Questio two */}

            <p><strong>2.What is the rest operator in JavaScript? How is it used in React?</strong></p>
            <p>The rest operator (...) collects all remaining elements into an array or object. It is used to:</p>
            <ul>
                <li>Gather remaining function arguments into an array.</li>
                <li>Destructure objects or arrays while capturing the rest of the properties or elements.</li>
            </ul>

            {/* Question three */}
            <p><strong>3.Can you explain how to use the spread operator to pass props in React?</strong></p>
            <p>he spread operator can be used to pass all properties of an object as props to a React component. This is particularly useful for forwarding props in higher-order components or when passing a large number of props</p>
            <div className="alert alert-info p-3">
                const extraProps = &#123; name: 'John', age: 30 &#125; <br />
                &lt;Component &#123; ...extraProps &#125; /&gt;<br />
            </div>


            {/* Question four */}
            <p><strong>4.How can the rest operator be used in a functional component to handle props?</strong></p>
            <p>The rest operator can be used to capture all remaining props that are not explicitly destructured in the component’s parameters.</p>
            <div className="alert alert-info p-3">
                const MyComponent = ( &#123; name, age, ...rest &#125; ) =&gt;  &123;
                return (
                <div>
                    <p>Name: &#123;name&#125;</p>
                    <p>Age: &#123;age&#125;</p>
                    <p>Other Props: &#123;JSON.stringify(rest)&#125;</p>
                </div>
                );
                &#125;
            </div>

            {/* Question Five */}
            <p><strong>5.What are some common use cases for the spread operator in React state management?</strong></p>
            <p> The spread operator is commonly used in React state management to update state immutably.</p>
            <ul>
                <li>Updating an object within the state:
                    javascript</li>
            </ul>
            <div className="alert alert-info p-3">
                const [state, setState] = useState(&#123;name: 'John', age: 30 &#125;); <br />

                const updateName = () =&gt; &#123; <br />
                setState((prevState) =&gt; (&#123; <br />
                ...prevState, <br />
                name: 'Jane' <br />
                &#125; )); <br />
                &#125;
            </div>
            <ul>
                <li>Updating an array within the state:</li>
            </ul>
            <div className="alert alert-info p-3">
                const [items, setItems] = useState([1, 2, 3]);<br />

                const addItem = (item) = &gt; &#123; <br />
                setItems((prevItems) =&gt; [...prevItems, item]); <br />
                &#125;

            </div>






            {/* Interview Questions END */}
        </>
    );
};

export default RestVsSpreadComponentInReact;