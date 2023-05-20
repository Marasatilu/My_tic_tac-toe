import { useState, useEffect } from "react";
import Cell from "./components/Cell";

const App = () => {

  const [cells, setCells] = useState(["", "", "", "", "", "", "", "", ""])
  const [go, setGo] = useState("circle")
  const [winningMessage, setWinningMessage] = useState (null)

  const message = "It is now " + go +"'s go."
      
    console.log(cells)


  const checkScore = () =>{
    const WinningCombos = [
      [0,1,2], [3,4,5], [6,7,8],
      [0,3,6], [1,4,7], [2,5,8],
      [0,4,8], [2,4,6]
    ]
    WinningCombos.forEach(array =>{
      let circleWins = array.every(cell => cells[cell] === "circle")
      if(circleWins) {
        setWinningMessage("Circle wins!")
        return
      }
    })
  
    WinningCombos.forEach(array =>{
      let crossWins = array.every(cell => cells[cell] === "cross")
      if(crossWins) {
        setWinningMessage("Cross wins!")
        return
      }
    })
  }


    useEffect(() => {
      checkScore()
    }, [cells])



    return (
      <div className="app">
        <div className="message">
        <p className="message">{winningMessage || message}</p>
        </div>
        <div className="gameboard">
          {cells.map((cell, index)=> 
          
              <Cell 
                key={index} 
                id={index} 
                cell={cell} 
                setCells={setCells}
                go={go}
                setGo={setGo}
                cells={cells}
                winningMessage={winningMessage}
              />)}
          
          </div>
          
          <button type="submit" className="tryAgain" onClick={() => window.location.reload(false)} >Try Again</button>
      </div>
      
    );


}


export default App;
