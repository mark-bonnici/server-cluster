import React from "react"
import * as PropTypes from "prop-types"

const Button = ({ text, modifier }) => (
  <>
    <div>
      <button className={`round-button ${modifier}`} />
    </div>
    <label>{text}</label>
  </>
)

Button.propTypes = {
  text: PropTypes.string,
  modifier: PropTypes.string
}

Button.defaultProps = {
  text: "",
  modifier: ""
}

export default Button
