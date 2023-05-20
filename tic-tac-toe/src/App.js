import { useState } from "react";
import Cell from "./components/Cell";

const App = () => {

  const [cells, setCells] = useState(["", "", "", "", "", "", "", "", ""])
  const [go, setGo] = useState("circle")
  const [winningMessage, setWinningMessage] = useState (null)

  const message = "It is now " + go +"'s go."
    return (
      <div className="app">
        <div className="gameboard">
          {cells.map((cell, index)=> 
          
              <Cell 
                key={index} 
                id={index} 
                cell={cell} 
                setCells={setCells}
                
              />)}
          
          </div>
          <p>{message}</p>
      </div>
    );
}

export default App;
