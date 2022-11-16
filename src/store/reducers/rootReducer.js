import { combineReducers } from 'redux'
import { testReducer } from '@store/reducers/testReducer/testReducer'

const reducers = combineReducers({
  test: testReducer
})

export default reducers
