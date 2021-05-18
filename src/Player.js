import './Player.css'
import PropTypes from 'prop-types'

Player.propTypes = {
  score: PropTypes.number,
  name: PropTypes.string,
  onMinus: PropTypes.func.isRequired,
  onPlus: PropTypes.func.isRequired,
}

export default function Player({ name, score, onPlus, onMinus }) {
  return (
    <section className="Player">
      <span>{name}:</span>
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
    </section>
  )
}
