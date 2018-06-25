import { getMatchesRoutine } from '../../actions'

const initialState = {
  data: [],
  loading: false,
  error: ''
}

const matchesReducer = (state = initialState, action) => {
  switch (action.type) {
    case getMatchesRoutine.TRIGGER:
      return handleGetMatchesTrigger(state)
    case getMatchesRoutine.SUCCESS:
      return handleGetMatchesSuccess(state, action)
    case getMatchesRoutine.FAILURE:
      return handleGetMatchesFailure(state, action)
    default:
      return state
  }
}

const handleGetMatchesTrigger = (state) => ({
  ...state,
  loading: true,
  error: ''
})

const handleGetMatchesSuccess = (state, action) => ({
  ...state,
  data: action.payload,
  loading: false
})

const handleGetMatchesFailure = (state, action) => ({
  ...state,
  loading: false,
  error: action.payload
})

export default matchesReducer
