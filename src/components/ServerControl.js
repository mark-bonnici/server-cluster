import React from "react"
import * as PropTypes from "prop-types"
import Button from "./Button"
import { connect } from "react-redux"
import { addServer, removeServer } from "../actions"

const ADD_BUTTON_TEXT = "Add Server"
const REMOVE_BUTTON_TEXT = "Destroy Server"
const BUTTON_MODIFIER = "round-button--large"

const ServerControl = ({ addServer, removeServer }) => (
  <div className="server-control">
    <div className="server-control__button">
      <Button
        type="add"
        modifier={BUTTON_MODIFIER}
        action={() => addServer()}
      />
      <label className="server-control__label">{ADD_BUTTON_TEXT}</label>
    </div>
    <div className="server-control__button">
      <Button
        type="remove"
        modifier={BUTTON_MODIFIER}
        action={() => removeServer()}
      />
      <label className="server-control__label server-control__label--remove">
        {REMOVE_BUTTON_TEXT}
      </label>
    </div>
  </div>
)

ServerControl.propTypes = {
  addServer: PropTypes.func.isRequired,
  removeServer: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  servers: state.servers,
  apps: state.apps
})

const mapDispatchToProps = dispatch => ({
  addServer: () => dispatch(addServer()),
  removeServer: () => dispatch(removeServer())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ServerControl)
