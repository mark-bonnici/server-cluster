import React, { Component } from "react"
import Home from "../containers/Home"
import Navigation from "./Navigation"

class App extends Component {
  render() {
    const navigationModifier = "theme--dark"

    return (
      <div className="page">
        <Navigation modifier={navigationModifier} />
        <Home />
      </div>
    )
  }
}

export default App
