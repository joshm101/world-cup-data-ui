import { takeEvery, call, put } from 'redux-saga/effects'

import { getGroupStandings } from '../../services/groupStandings'
import { getGroupStandingsRoutine } from '../../actions'

/**
 * Submits a request for group stage standings and
 * dispatches a success/failure action based on
 * request result
 * @param {object} action - get group standings trigger action
 * @return {object[]} - Yielded group stage standings array
 */
function* getGroupStandingsHandler(action) {
  try {
    const groupStandings = yield call(getGroupStandings)
    yield put(
      getGroupStandingsRoutine.success(groupStandings)
    )
  } catch (error) {
    yield put(
      getGroupStandingsRoutine.failure(error.message)
    )
  }
}

function* getGroupStandingsSaga() {
  yield takeEvery(
    getGroupStandingsRoutine.TRIGGER,
    getGroupStandingsHandler
  )
}

export default getGroupStandingsSaga
