import React, { Component } from "react"
import * as PropTypes from "prop-types"
import Home from "../pages/Home"
import Navigation from "./Navigation"

class App extends Component {
  render() {
    const navigationModifier = "theme--dark"

    return (
      <div className="page">
        {/* <Navigation list="" modifier={navigationModifier} /> */}
        <Home />
      </div>
    )
  }
}

export default App
