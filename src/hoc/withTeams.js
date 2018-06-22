import React from 'react'
import { connect } from 'react-redux'

import { getTeamsRoutine } from '../actions'

export default (ComposedComponent) => {
  const withTeams = (props) => {
    return <ComposedComponent {...props} />
  }

  const mapDispatchToProps = {
    getTeamsRoutine
  }

  const mapStateToProps = (state) => ({
    teams: state.teams
  })

  return connect(mapStateToProps, mapDispatchToProps)(withTeams)
}
