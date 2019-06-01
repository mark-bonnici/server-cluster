import React from "react"
import { connect } from "react-redux"
import * as PropTypes from "prop-types"
import ServerList from "../components/ServerList"
import { TITLE } from "../helpers/constants"

const Home = ({ servers }) => {
  return (
    <>
      <h1>{TITLE}</h1>
      <ServerList servers={servers} />
    </>
  )
}

const mapStateToProps = ({ servers }) => ({
  servers: servers
})

const mapDispatchToProps = () => ({})

Home.propTypes = {
  servers: PropTypes.objectOf(PropTypes.any).isRequired
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
