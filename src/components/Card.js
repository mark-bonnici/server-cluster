import React from "react"
import * as PropTypes from "prop-types"
import { distanceInWords } from "date-fns"

const Card = ({ initials, appName, color, timeAdded }) => (
  <div className={`card card--${color}`}>
    <div className="card__info">
      <h3 className="card__title">{initials}</h3>
      <p className="card__name">
        <strong>{appName}</strong>
      </p>
      {timeAdded && (
        <p className="card__date">{distanceInWords(timeAdded, new Date())}</p>
      )}
    </div>
  </div>
)

Card.propTypes = {
  initials: PropTypes.string,
  appName: PropTypes.string,
  color: PropTypes.string,
  timeAdded: PropTypes.any
}

Card.defaultProps = {
  initials: "",
  appName: "",
  color: "",
  timeAdded: ""
}

export default Card
