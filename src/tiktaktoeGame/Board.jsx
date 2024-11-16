import React,{setState,useState}from 'react'

import Square from './Square'
const Board = () => {
    const [state,setState]=useState(Array(9).fill(null));
    const [isXTurn,setIsXturn]=useState(true);
    const checkWinner=()=>{
        const winnerLogin=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];
    for(let logic of winnerLogin)
    {
        const[a,b,c]=logic;
        if(state[a]===state[b]&& state[b]===state[c])
        {
            return state[a];
        }
        
    }
    return false;
    };

    const isWinner=checkWinner();
    const isTie = !isWinner && state.every((square) => square !== null); 
    const handleClick = (index) => {
        if(state[index]!=null)
        {
            return;
        }
       const copyState = [...state];
       copyState[index]=isXTurn? "X":"0";
       setState(copyState);
       setIsXturn(!isXTurn);
    };
    const handleReset=()=>{
        setState(Array(9).fill(null));
       };
  return (

    <div className='board-container'>
        {isWinner ? (
            <>{isWinner} <h1>won</h1>
            <button onClick={handleReset}>
               <h1> play again</h1>
            </button>
            </>

        ):isTie ?(
            <>
            <h1>match tied</h1>
            <button onClick={handleReset}>
                play again
            </button>
            </>
        ):
        (
            <>
            <h3><h1>Player {isXTurn ? "X":"O"}</h1></h3>
                    <div className="board-row">
             <Square onClick={()=> handleClick(0)} value={state[0]}/>
            <Square onClick={()=> handleClick(1)} value={state[1]}/>
            <Square onClick={()=> handleClick(2)} value={state[2]}/> 
        </div>
        <div className="board-row">
        <Square onClick={()=> handleClick(3)} value={state[3]}/>
            <Square onClick={()=> handleClick(4)} value={state[4]}/>
            <Square onClick={()=> handleClick(5)} value={state[5]}/> 
        </div>
        <div className="board-row">
        <Square onClick={()=> handleClick(6)} value={state[6]}/>
            <Square onClick={()=> handleClick(7)} value={state[7]}/>
            <Square onClick={()=> handleClick(8)} value={state[8]}/> 

        </div>
</>
        )}
    </div>
  )
}

export default Board
