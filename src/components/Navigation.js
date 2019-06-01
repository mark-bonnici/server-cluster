import React from "react"
import * as PropTypes from "prop-types"
import ServerControl from "./ServerControl"
import AppControl from "./AppControl"

const Navigation = ({ list, modifier }) => (
  <nav className={`navigation navigation--${modifier}`}>
    <ServerControl />
    <div className="navigation__app-control">
      <strong>Available Apps</strong>
      <AppControl items={list} />
    </div>
  </nav>
)

Navigation.propTypes = {
  list: PropTypes.arrayOf(PropTypes.any).isRequired,
  modifier: PropTypes.string
}

Navigation.defaultProps = {
  modifier: ""
}

export default Navigation
