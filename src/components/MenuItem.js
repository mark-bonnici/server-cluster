import React from "react"
import Button from "./Button"
import * as PropTypes from "prop-types"

const BUTTON_MODIFIER = "round-button--small"

const MenuItem = ({ text }) => (
  <div className="menu-item">
    <span>{text}</span>
    <div className="menu-item__button-container">
      <Button type="add" modifier={BUTTON_MODIFIER} />
      <Button type="remove" modifier={BUTTON_MODIFIER} />
    </div>
  </div>
)

MenuItem.propTypes = {
  text: PropTypes.string
}

MenuItem.defaultProps = {
  text: ""
}

export default MenuItem
