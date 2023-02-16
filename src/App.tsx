import React from 'react';
import './App.css';
import Accordion from "./componenets/Accordeon/Accordeon";
import {Rating} from "./componenets/Rating/Rating";

function App() {
    return (
        <div>
            <AppTitle/>
            Article1
            <Rating value={3}/>
            <Accordion/>
            Article2
            <Rating value={4}/>
        </div>
    );
}

function AppTitle() {
    console.log('Title')
    return <>App component</>;
}



export default App;