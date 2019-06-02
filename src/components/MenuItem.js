import React from "react"
import Button from "./Button"
import * as PropTypes from "prop-types"
import { connect } from "react-redux"
import { addApp, removeApp } from "../actions"

const BUTTON_MODIFIER = "round-button--small"

const MenuItem = ({ initials, appName, color, addApp, removeApp }) => (
  <div className="menu-item">
    <div className={`menu-item__border menu-item__border--${color}`} />
    <span className="menu-item__text">{appName}</span>
    <div className="menu-item__button-container">
      <Button
        type="remove"
        modifier={BUTTON_MODIFIER}
        action={() => removeApp(initials, appName, color)}
      />
      <Button
        type="add"
        modifier={`round-button--${color} ${BUTTON_MODIFIER}`}
        action={() => addApp(initials, appName, color)}
      />
    </div>
  </div>
)

MenuItem.propTypes = {
  appName: PropTypes.string,
  initials: PropTypes.string,
  color: PropTypes.string,
  addApp: PropTypes.func.isRequired,
  removeApp: PropTypes.func.isRequired
}

MenuItem.defaultProps = {}

const mapStateToProps = state => ({
  servers: state.servers,
  apps: state.apps
})

const mapDispatchToProps = dispatch => ({
  addApp: (appName, color, initials) =>
    dispatch(addApp(appName, color, initials)),
  removeApp: (appName, color, initials) =>
    dispatch(removeApp(appName, color, initials))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuItem)
