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
            onMinus={() => handleMinus(index)}
            onPlus={() => handlePlus(index)}
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

  function handleMinus(index) {
    const playerToUpdate = players[index]
    setPlayers([
      ...players.slice(0, index),
      { ...playerToUpdate, score: playerToUpdate.score - 1 },
      ...players.slice(index + 1),
    ])
  }

  function handlePlus(index) {
    const playerToUpdate = players[index]
    setPlayers([
      ...players.slice(0, index),
      { ...playerToUpdate, score: playerToUpdate.score + 1 },
      ...players.slice(index + 1),
    ])
  }

  function createPlayer(name) {
    setPlayers([...players, { name, score: 0 }])
  }
}

export default App
