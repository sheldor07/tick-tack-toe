import React from 'react';
import Board from './Board'
export default class Game extends React.Component{
    constructor(){
        super()
        this.state = {
            xIsNext:true,
            stepNumber:0,
            history:[
                {squares : Array(9).fill(null)},
            ],
            // value:5
        }
      
    }
    // changeState = () =>{
    //     this.setState({
    //         value : 6
    //     })
    //     console.log()
    // }
    // someFunction=function(){
    //     return 5
    // }

    handleClick = (i) => {
        const history = this.state.history
        const current = history[history.length-1]
        const squares = current.squares
        if(squares[i]){
            return null
        }
        squares[i] = this.state.xIsNext ? 'X': '0'
        this.setState({
            history : history.concat({squares:squares}),
            xIsNext:!(this.state.xIsNext),
            stepNumber: this.state.stepNumber + 1
        })
        const winner = calculateWinner(squares)
        if(winner){
            return null
        }
    }
    render(){
        // console.log(this.state)//we should update state using setState as everytime we change state the render function is called
        // const result = this.someFunction()
        const history = this.state.history
        const current = history[this.state.stepNumber]
        const squares = current.squares
        let status
        const winner = calculateWinner(squares)

        if(winner) {
        status = 'Winner is ' + winner
        } else if(this.state.stepNumber===9){
            status = 'Draw! Boohoo'
        }else if(this.state.stepNumber===0){
            status = 'Welcome! Click a square to start'
        }else{
        status = 'Next Player is ' + (this.state.xIsNext ? 'X' : 'O')
        }
    
        return(
            <div className = 'container' style={{backgroundColor:"#B6EADA"}}>
                <div className = 'game-title'>Tick-Tack-Toe</div>
                <div className = "game">
                    <Board clickAction = {(i)=>{this.handleClick(i)}} squares = {current.squares}/>
                    
                </div>
                <div className = "status-container">
                <div className = "game-info">{status}</div>
                </div>
                
           </div>
            
        )
    }
   
   

}
function calculateWinner (squares) {
    console.log('-----------------------')
    const possibilities = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]
  
    for(let i = 0; i < possibilities.length; i++) {
      const [a, b, c] = possibilities[i]
      
      if(squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
        return squares[a]
      }
      console.log(squares[a],squares[b],squares[c])
    }
  
    return null
  }