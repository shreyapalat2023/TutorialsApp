import React, { Component } from 'react'

export default class ReactClassConstructor extends Component {
  constructor(props) {
    super(props);
    console.log("constructor called");
    this.state = { color: "red" }
  }
  render() {
    console.log("render called");
    return (
      <>
        <div>
        <h1>React Class Constructor</h1>
          {this.state.color}
          <p>A constructor is a method that is called automatically when we created an object from that class. It can manage initial initialization tasks such as defaulting certain object properties or sanity testing the arguments passed in. Simply placed, the constructor is a method that helps in the creation of objects.
          </p>
          <p>

            The constructor is no different in React. This can connect event handlers to the component and/or initialize the component’s local state. Before the component is mounted, the constructor() function is shot, and, like most things in React, it has a few rules that you can follow when using them.</p>

        </div>
      </>
    )
  }
}
