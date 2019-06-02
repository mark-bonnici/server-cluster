import React from "react"
import Button from "./Button"
import * as PropTypes from "prop-types"

const BUTTON_MODIFIER = "round-button--small"

const MenuItem = ({ text, modifier }) => (
  <div className="menu-item">
    <div className={`menu-item__border menu-item__border--${modifier}`} />
    <span className="menu-item__text">{text}</span>
    <div className="menu-item__button-container">
      <Button type="remove" modifier={BUTTON_MODIFIER} />
      <Button
        type="add"
        modifier={`round-button--${modifier} ${BUTTON_MODIFIER}`}
      />
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
