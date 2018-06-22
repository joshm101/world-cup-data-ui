import { takeEvery, call, put } from 'redux-saga/effects'

import { getTeams } from '../../services/teams'
import { getTeamsRoutine } from '../../actions'

/**
 * Submits a request for teams and dispatches
 * a success/failure action based on request
 * result
 * @param {object} action - get teams trigger action
 * @return {object[]} - Yielded teams array
 */
function* getTeamsHandler(action) {
  try {
    const teams = yield call(getTeams)
    yield put(
      getTeamsRoutine.success(teams)
    )

  } catch (error) {
    yield put(
      getTeamsRoutine.failure(error.message)
    )
  }
}

function* getTeamsSaga() {
  yield takeEvery(
    getTeamsRoutine.TRIGGER,
    getTeamsHandler
  )
}

export default getTeamsSaga
