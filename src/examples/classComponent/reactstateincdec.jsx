

import React from "react";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count : 0,
        };
    }

    increment = () => {
        this.setState((prevState) => ({
            count: prevState.count + 1,
        }));
    };

    decrement = () => {
        this.setState((prevState) => ({
            count: prevState.count - 1,
        }));
    };

    render() {
        return (
            <div>
                <h1>
                    The current count is :{""}
                    {this.state.count}
                </h1>
                <button onClick={this.increment} className="btn btn-primary">
                    Increase
                </button> &nbsp;
                <button onClick={this.decrement} className="btn btn-secondary">
                    Decrease
                </button>
            </div>
        );
    }
}
export default App

// const root = ReactDOM.createRoot(
//     document.getElementById("root")
// );
// root.render(
//     <React.StrictMode>
//         <App />
//     </React.StrictMode>
// );

