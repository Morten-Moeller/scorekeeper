import './PlayerForm.css'
import PropTypes from 'prop-types'

PlayerForm.propTypes = {
  onSubmit: PropTypes.func,
}

export default function PlayerForm({ onSubmit }) {
  return (
    <form className="PlayerForm" onSubmit={handleSubmit}>
      <label>
        Add player:
        <input name="name" placeholder="Player name" />
      </label>
    </form>
  )

  function handleSubmit(event) {
    event.preventDefault()
    const input = event.target.elements.name
    console.log(input)
    onSubmit(input.value)
    input.value = ''
  }
}
