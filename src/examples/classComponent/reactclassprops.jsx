import React, { Component } from 'react'

export default class reactclassprops extends Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <>

                <div>
                <h1>React Props</h1>
                    <h3>What is props?</h3>
                    <p>React allows us to pass information to a Component using something called props ( stands for properties). Props are objects which can be used inside a component.</p>
                    <h3>Passing and Accessing Props</h3>
                    <p>React components use props to communicate with each other. Every parent component can pass some information to its child components by giving them props. Props might remind you of HTML attributes, but you can pass any JavaScript value through them, including objects, arrays, and functions.</p>
                    <h3>Familiar props</h3>
                    <p>Props are the information that you pass to a JSX tag. For example, className, src, alt, width, and height are some of the props you can pass to an &lt;img&gt;</p>

                    <h3>Learn :</h3>
                    <ul>
                        <li>How to pass props to a component</li>
                        <li>How to read props from a component.</li>
                        <li>How to specify default values for props</li>
                        <li>How to pass some JSX to a component</li>
                        <li>How props change over time</li>
                    </ul>
                </div>
            </>
        )
    }
}
