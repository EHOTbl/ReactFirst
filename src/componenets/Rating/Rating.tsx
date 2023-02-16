import React from "react";

export function Rating() {
    console.log("rating")
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

function Star() {
    console.log('star')
    return <span> <b>star</b> </span>
}