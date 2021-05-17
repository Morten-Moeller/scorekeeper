import './Player.css'
import PropTypes from 'prop-types'

Player.propTypes = {
  setScore: PropTypes.func,
  score: PropTypes.number,
  playerName: PropTypes.string,
}

export default function Player({ playerName, score, setScore }) {
  return (
    <section className="Player">
      <span>{playerName}:</span>
      <div>
        <button name="minus" onClick={handleMinus}>
          {' '}
          -{' '}
        </button>
        <span> {score} </span>
        <button name="plus" onClick={handlePlus}>
          {' '}
          +{' '}
        </button>
      </div>
    </section>
  )

  function handleMinus() {
    setScore(score--)
  }

  function handlePlus() {
    setScore(score++)
  }
}
