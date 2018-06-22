import { getGroupStandingsRoutine } from '../../actions'

const initialState = {
  data: [],
  loading: false,
  error: ''
}

const groupStandingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case getGroupStandingsRoutine.TRIGGER:
      return handleGetGroupStandingsTrigger(state)
    case getGroupStandingsRoutine.SUCCESS:
      return handleGetGroupStandingsSuccess(state, action)
    case getGroupStandingsRoutine.FAILURE:
      return handleGetGroupStandingsFailure(state, action)
    default:
      return state
  }
}

const handleGetGroupStandingsTrigger = (state) => ({
  ...state,
  loading: true,
  error: ''
})

const handleGetGroupStandingsSuccess = (state, action) => ({
  ...state,
  data: action.payload,
  loading: false
})

const handleGetGroupStandingsFailure = (state, action) => ({
  ...state,
  loading: false,
  error: action.payload
})

export default groupStandingsReducer
