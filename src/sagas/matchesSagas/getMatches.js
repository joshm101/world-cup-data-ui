import { takeEvery, call, put } from 'redux-saga/effects'

import { getMatches } from '../../services/matches'
import { getMatchesRoutine } from '../../actions'

/**
 * Submits a request for matches and dispatches a
 * success/failure action based on request result
 * @param {object} action - get matches trigger action
 * @return {object[]} - Yielded matches array
 */
function* getMatchesHandler(action) {
  try {
    const {
      startDate,
      endDate
    } = action.payload
    const matches = yield call(getMatches, startDate, endDate)
    yield put(
      getMatchesRoutine.success(matches)
    )
  } catch (error) {
    yield put(
      getMatchesRoutine.failure(error.message)
    )
  }
}

function* getMatchesSaga() {
  yield takeEvery(
    getMatchesRoutine.TRIGGER,
    getMatchesHandler
  )
}

export default getMatchesSaga
