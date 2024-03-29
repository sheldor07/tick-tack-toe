import React from 'react';
import Square from './Square'//same as export default function name
export default class Board extends React.Component{
    renderSquare = (i) => {
        return(<Square value = {this.props.squares[i]} handleClick = {()=>{this.props.clickAction(i)}}/>)
    }
    render(){
        return(
            <div className = "board">
            <div className ="board-row">
                {this.renderSquare(0)}
                {this.renderSquare(1)}
                {this.renderSquare(2)}
            </div>
            <div className ="board-row">
            {this.renderSquare(3)}  
            {this.renderSquare(4)}
            {this.renderSquare(5)}
            </div>
            <div className ="board-row">
            {this.renderSquare(6)}  
            {this.renderSquare(7)}
            {this.renderSquare(8)}
            </div>
            </div>
            
        )
    }
    
}