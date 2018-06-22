import { fork, all } from 'redux-saga/effects'

import teamsSagas from './teamsSagas'

const sagas = [
  ...teamsSagas
]

export default function* rootSaga() {
  yield all(sagas.map(fork))
}
