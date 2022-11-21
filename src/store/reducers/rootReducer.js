import { combineReducers } from 'redux'
import { converterReducer } from '@store/reducers/converterReducer/converterReducer'

const reducers = combineReducers({
  converter: converterReducer
})

export default reducers
