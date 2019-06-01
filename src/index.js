import React from "react"
import { render } from "react-dom"
import { Provider } from "react-redux"
import { ConnectedRouter } from "connected-react-router"
import store, { history } from "./store"

import "sanitize.css/sanitize.css"
import "./styles/index.scss"

import App from "./components/App"

const target = document.querySelector("#root")

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  target
)
