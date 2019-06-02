import React from "react"
import * as PropTypes from "prop-types"

import { TITLE } from "../helpers/constants"
import Card from "./Card"

const ServerList = ({ servers }) => (
  <div className="server-list">
    <h1>{TITLE}</h1>
    <div className="page__inner server-list__inner">
      {servers.map(({ initials, appName, color, timeAdded }, index) => {
        const card = {
          initials: initials,
          appName: appName,
          color: color,
          timeAdded: timeAdded
        }

        return <Card {...card} key={index} />
      })}
    </div>
  </div>
)

ServerList.propTypes = {
  servers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      initials: PropTypes.string,
      appName: PropTypes.string,
      color: PropTypes.string,
      timeAdded: PropTypes.any
    }).isRequired
  ).isRequired
}

ServerList.defaultProps = {
  servers: []
}

export default ServerList
