//it doesn't have any state so we can use functional component
import React from 'react';
export default function Square(props){
    return(
            
            <button className="square" onClick={props.handleClick}>{props.value}</button>
        
    )
}