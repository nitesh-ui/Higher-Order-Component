import React from "react";

function FunctionClick() {

    function clickHandler() {
        alert("Button Clicked");
    }

    return(
        <div>
            <button onClick={clickHandler}>Function Click Event Button</button>
        </div>
    )
}

export default FunctionClick