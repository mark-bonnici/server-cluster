import React from "react"
import * as PropTypes from "prop-types"
import ServerControl from "./ServerControl"
import AppControl from "./AppControl"
import { connect } from "react-redux"
import { addServer, removeServer, addApp, removeApp } from "../actions"

const Navigation = ({ apps, modifier }) => (
  <nav className={`navigation navigation--${modifier}`}>
    <ServerControl addServer={addServer} removeServer={removeServer} />
    <div className="navigation__app-control">
      <strong className="navigation__title">Available Apps</strong>
      <AppControl items={apps} addApp={addApp} removeApp={removeApp} />
    </div>
  </nav>
)
const mapStateToProps = state => ({
  servers: state.servers,
  apps: state.apps
})

const mapDispatchToProps = dispatch => ({})

Navigation.propTypes = {
  list: PropTypes.arrayOf(PropTypes.any).isRequired,
  modifier: PropTypes.string
}

Navigation.defaultProps = {
  modifier: "",
  list: []
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navigation)
