import React from 'react';
import './App.css';

function App() {
    debugger
    return (
        <div>
            App component
            <Rating/>
            <Accordeon/>
        </div>
    );
}

function Hello() {
    debugger
    return console.log("hello")
}

// Hello();

export default App;

function Rating() {
    debugger
    return (
        <div>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
        </div>
    )
}

function Accordeon() {
    debugger
    return <div>
        <h3>Menu</h3>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    </div>
}

function Star() {
    return <div>Star</div>
}
