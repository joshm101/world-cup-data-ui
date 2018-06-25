import { combineReducers } from 'redux'

import teamsReducer from './teamsReducer'
import groupStandingsReducer from './groupStandingsReducer'
import matchesReducer from './matchesReducer'

const rootReducer = combineReducers({
  teams: teamsReducer,
  groupStandings: groupStandingsReducer,
  matches: matchesReducer
})

export default rootReducer
