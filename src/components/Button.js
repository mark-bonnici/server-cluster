import React from "react"
import * as PropTypes from "prop-types"

const Button = ({ type, modifier, action }) => (
  <>
    <div>
      <button
        className={`round-button ${modifier} round-button--${type}`}
        onClick={action}
      />
    </div>
  </>
)

Button.propTypes = {
  type: PropTypes.string,
  modifier: PropTypes.string,
  action: PropTypes.func.isRequired
}

Button.defaultProps = {
  type: "",
  modifier: ""
}

export default Button
