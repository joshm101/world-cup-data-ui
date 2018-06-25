import React from 'react'
import { connect } from 'react-redux'

import { getMatchesRoutine } from '../actions'

export default (ComposedComponent) => {
  const withMatches = (props) => {
    return <ComposedComponent {...props} />
  }

  const mapDispatchToProps = {
    getMatchesRoutine
  }

  const mapStateToProps = (state) => ({
    matches: state.matches
  })

  return connect(
    mapStateToProps, mapDispatchToProps
  )(withMatches)
}