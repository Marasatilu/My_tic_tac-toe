import { useState } from "react";
import Cell from "./components/Cell";

const App = () => {
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
