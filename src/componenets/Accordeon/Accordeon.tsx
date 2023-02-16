import React from "react";


type AccordionPropsType = {
    titleValue: string,
    collapsed: boolean
}

export function Accordion(props: AccordionPropsType) {
    // console.log("Accordion")
    debugger
    if (props.collapsed === true) {
        return <div>
            <AccordionTitle title={props.titleValue}/>
            {/*<AccordionBody/>*/}
        </div>
    } else {
        return <div>
            <AccordionTitle title={props.titleValue}/>
            <AccordionBody/>
        </div>
    }
}

type AccordionTitleType = {
    title: string
}

function AccordionTitle(props: AccordionTitleType) {
    // console.log('ATitle')
    return <h3>{props.title}</h3>
}

function AccordionBody() {
    // console.log('Abody')
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

export default Accordion;
