import React from 'react'
import { connect } from 'react-redux'

import { getGroupStandingsRoutine } from '../actions'

export default (ComposedComponent) => {
  const withGroupStandings = (props) => {
    return <ComposedComponent {...props} />
  }

  const mapDispatchToProps = {
    getGroupStandingsRoutine
  }

  const mapStateToProps = (state) => ({
    groupStandings: state.groupStandings
  })

  return connect(
    mapStateToProps, mapDispatchToProps
  )(withGroupStandings)
}
