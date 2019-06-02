import React from "react"
import MenuItem from "./MenuItem"
import { addApp, removeApp } from "../actions"
import * as PropTypes from "prop-types"
import { connect } from "react-redux"

const AppControl = ({ items, addApp, removeApp }) => (
  <ul className="app-control__items">
    {items.map(({ appName, color, initials }, index) => {
      const app = {
        initials: initials,
        appName: appName,
        color: color
      }
      return (
        <MenuItem {...app} key={index} addApp={addApp} removeApp={removeApp} />
      )
    })}
  </ul>
)

AppControl.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
  addApp: PropTypes.func.isRequired,
  removeApp: PropTypes.func.isRequired
}

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
)(AppControl)
