import './Button.css'
import PropTypes from 'prop-types'

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  isActive: PropTypes.bool,
}

export default function Button({ onClick, isActive, children }) {
  return (
    <button className={isActive ? 'Button active' : 'Button'} onClick={onClick}>
      {children}
    </button>
  )
}
