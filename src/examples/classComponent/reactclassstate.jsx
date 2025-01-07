import React, { Component } from 'react'

export default class reactclassstate extends Component {
    render() {
        return (
            <>

                <div>
                <h1>React State</h1>
                    <p>
                        The State is a way to store and manage the information or data while creating a React Application. The state is a JavaScript object that contains the real-time data or information on the webpage.
                    </p>
                    <h3>What is React State?</h3>
                    <p>The state in React is an instance of the React Component Class that can be defined as an object of a set of observable properties that control the behavior of the component.</p>
                    <p>In other words, the State of a component is an object that holds some information that may change over the lifetime of the component.</p>
                    <p>

                        Creating a state is essential to building dynamic and interactive components.

                        We can create a state object within the constructor of the class component.
                    </p>
                    <h3>Conventions of Using State in React</h3>
                    <ul>
                        <li>The state of a component should prevail throughout its lifetime, thus we must first have some initial state, to do so we should define the State in the constructor of the component’s class.</li>
                        <li>The state should never be updated explicitly. React uses an observable object as the state that observes what changes are made to the state and helps the component behave accordingly.</li>
                        <li>
                        React provides its own method setState(). setState() method takes a single parameter and expects an object which should contain the set of values to be updated. Once the update is done the method implicitly calls the render() method to repaint the page. Hence, the correct method of updating the value of a state will be similar to the code below. 
                        </li>
                        <li>State updates should be independent. The state object of a component may contain multiple attributes and React allows to use setState() function to update only a subset of those attributes as well as using multiple setState() methods to update each attribute value independently.</li>
                        <li>
                        The only time we are allowed to define the state explicitly is in the constructor to provide the initial state. 
                        </li>
                    </ul>
                    <h3>Updating State in React</h3>
                    <p>In React, a State object can be updated using setState() method.</p>
                    <p>React may update multiple setState() updates in a single go. Thus using the value of the current state may not always generate the desired result.</p>
                </div>
            </>
        )
    }
}
