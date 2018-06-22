import { fork, all } from 'redux-saga/effects'

import teamsSagas from './teamsSagas'
import groupStandingsSagas from './groupStandingsSagas'

const sagas = [
  ...teamsSagas,
  ...groupStandingsSagas
]

export default function* rootSaga() {
  yield all(sagas.map(fork))
}
