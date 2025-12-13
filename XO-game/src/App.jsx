import Player from "./components/Player.jsx"
function App() {
  return <main>
    <div id="game-container">
      <ol id="players">
        <Player intialName="player 1" symbol="X" />
        <Player intialName="player 2" symbol="O" />
      </ol>
      Game Over
    </div>
    LOG
  </main>
}

export default App
