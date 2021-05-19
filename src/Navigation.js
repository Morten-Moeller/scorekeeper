import styled from 'styled-components'
import Button from './Button'
import PropTypes from 'prop-types'

Navigation.propTypes = {
  onClickA: PropTypes.func,
  onClickB: PropTypes.func,
  nameA: PropTypes.string,
  nameB: PropTypes.string,
}

export default function Navigation({ nameA, nameB, onClickA, onClickB }) {
  return (
    <Nav>
      <Button onClick={onClickA}>{nameA}</Button>
      <Button onClick={onClickB}>{nameB}</Button>
    </Nav>
  )
}

const Nav = styled.nav`
  display: flex;
  justify-content: space-evenly;
  button {
    width: 50%;
  }
`
