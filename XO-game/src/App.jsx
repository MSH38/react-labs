import Player from "./components/Player.jsx"
import GameBoard from "./components/GameBoard.jsx"  
import { useState } from "react";

function App() {
  const [activePlayer, setActivePlayer] = useState('X');
  function handelSelectSquare (){
    setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X');
  }
  return <main>
    <div id="game-container">
      <ol id="players" className="highlight-player">
        <Player intialName="player 1" symbol="X" isActive={activePlayer === 'X'}/>
        <Player intialName="player 2" symbol="O" isActive={activePlayer === 'O'} />
      </ol>
      <GameBoard onSelectSquare={handelSelectSquare} activePlayerSymbol={activePlayer} />
    </div>
    LOG
  </main>
}

export default App
