import Player from "./components/Player.jsx"
import GameBoard from "./components/GameBoard.jsx"  
function App() {
  return <main>
    <div id="game-container">
      <ol id="players">
        <Player intialName="player 1" symbol="X" />
        <Player intialName="player 2" symbol="O" />
      </ol>
      <GameBoard />
    </div>
    LOG
  </main>
}

export default App
