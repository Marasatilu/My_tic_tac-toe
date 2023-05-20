import { useState } from "react";
import Cell from "./components/Cell";

const App = () => {

  const [cells, setCells] = useState(["", "", "", "", "", "", "", "", ""])
    return (
      <div className="app">
        <div className="gameboard">
          <Cell />
          
          </div>
          <p></p>
      </div>
    );
}

export default App;
