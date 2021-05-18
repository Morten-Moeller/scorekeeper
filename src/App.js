import { useState } from 'react'
import './App.css'
import Button from './Button'
import Player from './Player'
import PlayerForm from './PlayerForm'

function App() {
  const [players, setPlayers] = useState([
    { name: 'John Doe', score: 0 },
    { name: 'Jane Doe', score: 10 },
  ])

  return (
    <div className="App">
      <PlayerForm onSubmit={createPlayer} />
      <section className="App__player">
        {players.map((player, index) => (
          <Player
            onMinus={() => updateScore(index, -1)}
            onPlus={() => updateScore(index, 1)}
            key={player.name}
            name={player.name}
            score={player.score}
          />
        ))}
      </section>
      <Button onClick={resetScores}>Reset score</Button>
      <Button onClick={resetAll}>Reset all</Button>
    </div>
  )

  function resetAll() {
    setPlayers([])
  }

  function resetScores() {
    setPlayers(players.map(player => ({ ...player, score: 0 })))
  }

  function updateScore(index, value) {
    const playerToUpdate = players[index]
    setPlayers([
      ...players.slice(0, index),
      { ...playerToUpdate, score: playerToUpdate.score + value },
      ...players.slice(index + 1),
    ])
  }

  function createPlayer(name) {
    setPlayers([...players, { name, score: 0 }])
  }
}

export default App
