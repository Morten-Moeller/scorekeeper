import styled from 'styled-components'

export default function HistoryEntry({ name, players }) {
  return (
    <Wrapper>
      <Heading>{name}</Heading>

      <List>
        {players.map((player, index) => (
          <div key={index}>
            <dt>{player.name}</dt>
            <dd>{player.score}</dd>
          </div>
        ))}
      </List>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
`
const Heading = styled.h3`
  font-weight: 300;
`
const List = styled.dl`
  margin: 0;
  padding: 0;
  width: 100%;
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
