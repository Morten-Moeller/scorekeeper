import PropTypes from 'prop-types'
import styled from 'styled-components'

PlayerForm.propTypes = {
  onSubmit: PropTypes.func,
}

export default function PlayerForm({ onSubmit }) {
  return (
    <form className="PlayerForm" onSubmit={handleSubmit}>
      <Label>
        Add player:
        <input name="name" placeholder="Player name" maxLength="14" required />
      </Label>
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

const Label = styled.label`
  font-weight: 300;
  display: grid;
  gap: 5px;
  margin-bottom: 20px;
`
