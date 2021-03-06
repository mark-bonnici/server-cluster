import React from "react"
import { connect } from "react-redux"
import * as PropTypes from "prop-types"
import ServerList from "../components/ServerList"

const Home = ({ servers }) => {
  return (
    <>
      <ServerList servers={servers} />
    </>
  )
}

const mapStateToProps = ({ servers }) => ({
  servers: servers
})

const mapDispatchToProps = () => ({})

Home.propTypes = {
  servers: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
