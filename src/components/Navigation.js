import React from "react"
import * as PropTypes from "prop-types"
import ServerControl from "./ServerControl"
import AppControl from "./AppControl"
import { connect } from "react-redux"

const Navigation = ({ apps, modifier }) => (
  <nav className={`navigation navigation--${modifier}`}>
    <ServerControl />
    <div className="navigation__app-control">
      <strong>Available Apps</strong>
      <AppControl items={apps} />
    </div>
  </nav>
)
const mapStateToProps = ({ apps }) => ({
  apps: apps
})

const mapDispatchToProps = () => ({})

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
