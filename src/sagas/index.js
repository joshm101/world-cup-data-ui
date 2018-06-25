import { fork, all } from 'redux-saga/effects'

import teamsSagas from './teamsSagas'
import groupStandingsSagas from './groupStandingsSagas'
import matchesSagas from './matchesSagas'

const sagas = [
  ...teamsSagas,
  ...groupStandingsSagas,
  ...matchesSagas
]

export default function* rootSaga() {
  yield all(sagas.map(fork))
}
