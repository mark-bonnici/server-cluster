import React from "react"
import Button from "./Button"

const ADD_BUTTON_TEXT = "Add Server"
const REMOVE_BUTTON_TEXT = "Destroy Server"
const BUTTON_MODIFIER = "round-button--large"

const ServerControl = () => (
  <div className="server-control">
    <div className="server-control__button">
      <Button type="add" modifier={BUTTON_MODIFIER} />
      <label className="server-control__label">{ADD_BUTTON_TEXT}</label>
    </div>
    <div className="server-control__button">
      <Button type="remove" modifier={BUTTON_MODIFIER} />
      <label className="server-control__label server-control__label--remove">
        {REMOVE_BUTTON_TEXT}
      </label>
    </div>
  </div>
)

export default ServerControl
