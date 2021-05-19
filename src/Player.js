import PropTypes from 'prop-types'
import styled from 'styled-components'

Player.propTypes = {
  score: PropTypes.number,
  name: PropTypes.string,
  onMinus: PropTypes.func.isRequired,
  onPlus: PropTypes.func.isRequired,
}

export default function Player({ name, score, onPlus, onMinus }) {
  return (
    <Wrapper>
      <span>{name}</span>
      <div>
        <button name="minus" onClick={onMinus}>
          {' '}
          -{' '}
        </button>
        <span className="Player__score"> {score} </span>
        <button name="plus" onClick={onPlus}>
          {' '}
          +{' '}
        </button>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;

  span {
    display: inline-block;
    min-width: 3.5ch;
    text-align: center;
  }
`
