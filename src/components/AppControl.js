import React from "react"
import MenuItem from "./MenuItem"
import * as PropTypes from "prop-types"

const AppControl = ({ items }) => (
  <ul className="app-control__items">
    {items.map(({ pageTitle }, index) => {
      const _index = "app-" + index

      return (
        <MenuItem key={_index} modifier="menu-item--blue" text={pageTitle} />
      )
    })}
  </ul>
)

AppControl.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired
}

export default AppControl
