import React from 'react';
import './App.css';
import Accordion from "./componenets/Accordeon/Accordeon";
import {Rating} from "./componenets/Rating/Rating";

function App() {
    return (
        <div>
            <AppTitle/>
            <Rating/>
            <Accordion/>
            <Rating/>
        </div>
    );
}

function AppTitle() {
    console.log('Title')
    return <>App component</>;
}



export default App;