import { combineReducers } from 'redux'

import teamsReducer from './teamsReducer'
import groupStandingsReducer from './groupStandingsReducer'

const rootReducer = combineReducers({
  teams: teamsReducer,
  groupStandings: groupStandingsReducer
})

export default rootReducer
