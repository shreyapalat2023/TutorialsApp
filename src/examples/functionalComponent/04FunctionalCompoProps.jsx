import React from 'react';
import PropTypes from "react"

const FunctionalCompoProps = (props) => {
    return (
        <>

            <h1 className='text-center'>Props in React</h1>
            <p>React components use props to communicate with each other. Every parent component can pass some information to its child components by giving them props. Props might remind you of HTML attributes, but you can pass any JavaScript value through them, including objects, arrays, and functions</p>
            <p>In React props are read-only and should not be directly mutated. Attempts to write code like `props. title = "New Title"` will cause a compiler error</p>
            <h3>What are PropTypes?</h3>
            <p>PropTypes are simply a mechanism that ensures that the passed value is of the correct datatype. This makes sure that we don’t receive an error at the very end of our app by the console which might not be easy to deal with.</p>
            <h4>How to use PropTypes</h4>
            <p>We can use PropTypes to validate any data we are receiving from props. But before using it we will have to import it as always in our app</p>
            <p>PropTypes are also objects with a key and a value pair where the ‘key’ is the name of the prop while the value represents the type or class by which they are defined.</p>
            <h4>Basis type of PropTypes:</h4>

            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Type</th>
                        <th scope="col">Class</th>
                        <th scope="col">Example</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>String</td>
                        <td>PropType.string</td>
                        <td>"hello"</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Object</td>
                        <td>PropType.object</td>
                        <td> &#123; name: "Rohit" &#125;</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Number</td>
                        <td>PropType.number</td>
                        <td> &#123; name: "Rohit" &#125;</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Number</td>
                        <td>PropType.number</td>
                        <td>10</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Boolean</td>
                        <td>PropType.bool</td>
                        <td>true/false</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Function</td>
                        <td>PropType.number</td>
                        <td> const say =  &#123; console.log("helloo") &#125;</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Symbol</td>
                        <td>PropType.symbol</td>
                        <td>Symbol("m")</td>
                    </tr>
                </tbody>
            </table>

            <h5>Default PropTypes</h5>
            <p>Sometimes, we want to be able to set a default value for a prop. For instance, our parent component might not require a title to be passed. But we still want a title to be rendered.</p>
            <p>In cases like this, we can set a default value for our title which will automatically be rendered if the title has not been passed as a prop from our parent component.</p>
            <h5>Example:</h5>
            <p>Title of a Book: {props.title}</p>
            <p>Name of Author: {props.name}</p>
            <p>Released Year: {props.year}</p>
            <p>Total Sold Book: {props.total}</p>
        </>
    );
};

export default FunctionalCompoProps;

FunctionalCompoProps.propTypes = { title: PropTypes.string }


