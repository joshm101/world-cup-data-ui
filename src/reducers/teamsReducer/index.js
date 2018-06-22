import { getTeamsRoutine } from '../../actions'

const initialState = {
  data: [],
  loading: false,
  error: ''
}

const teamsReducer = (state = initialState, action) => {
  switch (action.type) {
    case getTeamsRoutine.TRIGGER:
      return handleGetTeamsTrigger(state)
    case getTeamsRoutine.SUCCESS:
      return handleGetTeamsSuccess(state, action)
    case getTeamsRoutine.FAILURE:
      return handleGetTeamsFailure(state, action)
    default:
      return state
  }
}

const handleGetTeamsTrigger = (state) => ({
  ...state,
  loading: true
})

const handleGetTeamsSuccess = (state, action) => ({
  ...state,
  data: action.payload,
  loading: false
})

const handleGetTeamsFailure = (state, action) => ({
  ...state,
  loading: false,
  message: action.payload
})

export default teamsReducer
