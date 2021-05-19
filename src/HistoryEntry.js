import styled from 'styled-components'

export default function HistoryEntry({ name, players }) {
  return (
    <Wrapper>
      <h3>{name}</h3>

      <dl>
        {players.map((player, index) => (
          <div key={index}>
            <dt>{player.name}</dt>
            <dd>{player.score}</dd>
          </div>
        ))}
      </dl>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  dl {
    margin: 0;
    padding: 0;
    width: 100%;
  }

  dt {
    margin-top: 10px;
    float: left;
    width: 65%;
  }

  dd {
    text-align: right;
    float: right;
    width: 30%;
  }
`
