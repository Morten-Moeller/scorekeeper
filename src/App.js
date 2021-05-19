import { useState } from 'react'
import Button from './Button'
import Player from './Player'
import PlayerForm from './PlayerForm'
import styled from 'styled-components'

function App() {
  const [players, setPlayers] = useState([
    { name: 'John Doe', score: 0 },
    { name: 'Jane Doe', score: 10 },
  ])

  return (
    <Wrapper>
      <PlayerForm onSubmit={createPlayer} />
      <section>
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
      <Button isActive onClick={resetScores}>
        Reset score
      </Button>
      <Button onClick={resetAll}>Reset all</Button>
    </Wrapper>
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

const Wrapper = styled.section`
  display: grid;
  gap: 10px;
  justify-content: center;
  width: 270px;
  border: 5px solid steelblue;
  border-radius: 15px;
  padding: 20px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
  background-color: white;
  align-self: center;

  section {
    margin-bottom: 10px;
  }
`

export default App
