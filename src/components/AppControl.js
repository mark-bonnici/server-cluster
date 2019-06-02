import React from "react"
import MenuItem from "./MenuItem"
import * as PropTypes from "prop-types"

const AppControl = ({ items }) => (
  <ul className="app-control__items">
    {items.map(({ appName, color }, index) => {
      return <MenuItem key={index} modifier={color} text={appName} />
    })}
  </ul>
)

AppControl.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired
}

export default AppControl
