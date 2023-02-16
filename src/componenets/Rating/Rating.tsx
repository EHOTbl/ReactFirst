import React from "react";

export function Rating(props:any) {
    console.log("rating")
    return (
        <div>
            <Star selected={true}/>
            <Star selected={false}/>
            <Star selected={false}/>
            <Star selected={false}/>
            <Star selected={false}/>
        </div>
    )
}

function Star(props: any) {
    debugger
    console.log('star')
    // return (props.selected) ?  <span> <b>star</b> </span> : <span> star </span>
    if (props.selected === true) {
        return <span> <b>star</b></span>
    } else {
        return <span> star </span>
    }
}