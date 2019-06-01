import React from "react"
import * as PropTypes from "prop-types"

const Button = ({ type, modifier }) => (
  <>
    <div>
      <button className={`round-button ${modifier} round-button--${type}`} />
    </div>
  </>
)

Button.propTypes = {
  type: PropTypes.string,
  modifier: PropTypes.string
}

Button.defaultProps = {
  type: "",
  modifier: ""
}

export default Button
