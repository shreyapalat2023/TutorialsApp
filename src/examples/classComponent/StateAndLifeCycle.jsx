import React from 'react';
import lifecyclephase from "./lifecycle.png"

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }


    render() {
        return (
            <div>
                <h1>React Lifecycle</h1>
                <p>React Lifecycle is defined as the series of methods that are invoked in different stages of the component’s existence. The definition is pretty straightforward but what do we mean by different stages? A React Component can go through four stages of its life as follows. </p>
                <h3>Phases of LifeCycle:</h3>
                <ol>
                    <li><strong>Initialization phase</strong>This is the stage where the component is constructed with the given Props and default state. This is done in the constructor of a Component Class.</li>
                    <li><strong>Mounting Phase</strong>Mounting is the stage of rendering the JSX returned by the render method itself.</li>
                    <li><strong> Updating</strong>Updating is the stage when the state of a component is updated and the application is repainted.</li>
                    <li><strong>Unmounting</strong>As the name suggests Unmounting is the final step of the component lifecycle where the component is removed from the page.

                        React provides the developers with a set of predefined functions that if present are invoked around specific events in the lifetime of the component. Developers are supposed to override the functions with the desired logic to execute accordingly. We have illustrated the gist in the following diagram.</li>
                </ol>
                <img src={lifecyclephase} />
                <div className='text-center'>
                    <h4>Example : Adding Lifecycle Methods to a Class</h4>
                    <h5>Hello, world!</h5>
                    <h2>It is {this.state.date.toLocaleTimeString()}.</h2>

                </div>

            </div>
        );
    }
}

// const StateAndLifeCycle = () => {
//     return (
//         <div>

//         </div>
//     );
// };

export default Clock;