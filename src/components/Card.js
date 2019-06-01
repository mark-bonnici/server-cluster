import React from "react"
import * as PropTypes from "prop-types"

const Card = ({ initials, appName, color, timeAdded, onClick }) => (
  <div className={`card card--${color}`} onClick={onClick}>
    <div className="card__info">
      <h3 className="card__title">{initials}</h3>
      <p className="card__name">
        <strong>{appName}</strong>
      </p>
      <p className="card__date">{timeAdded}</p>
    </div>
  </div>
)

Card.propTypes = {
  onClick: PropTypes.func.isRequired,
  initials: PropTypes.string,
  appName: PropTypes.string,
  color: PropTypes.string,
  timeAdded: PropTypes.string
}

Card.defaultProps = {
  initials: "",
  appName: "",
  color: "",
  timeAdded: ""
}

export default Card
