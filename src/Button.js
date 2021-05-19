import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

Button.propTypes = {
  onClick: PropTypes.func,
  isActive: PropTypes.bool,
  children: PropTypes.string,
}

export default function Button(props) {
  return <ButtonStyled {...props} />
}

const ButtonStyled = styled.button`
  border: 0;
  background-color: ${props => (props.isActive ? 'tomato' : 'skyblue')};
  color: white;
  padding: 5px 9px;
  border-radius: 3px;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.5);

  :hover {
    background-color: ${props => (props.isActive ? 'indianred' : 'steelblue')};
  }
`
