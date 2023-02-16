import React from 'react';
import './App.css';
import Accordion from "./componenets/Accordeon/Accordeon";
import {Rating} from "./componenets/Rating/Rating";

function App() {
    return (
        <div>
            <AppTitle titleValue={'App component'}/>
            <AppTitle titleValue={'Other component'}/>
            Article1
            <Rating value={3}/>
            <Accordion titleValue={"Menu"} collapsed={false}/>
            <Accordion titleValue={"Users"} collapsed={true}/>
            Article2
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
        </div>
    );
}

type AppTitleType = {
    titleValue: string
}

function AppTitle(props: AppTitleType) {
    console.log('Title')
    return <div>{props.titleValue}</div>;
}


export default App;