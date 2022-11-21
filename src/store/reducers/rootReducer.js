import { combineReducers } from 'redux'
import { converterReducer } from '@store/reducers/converterReducer/converterReducer'
import { optionsReducer } from '@store/reducers/optionsReducer/optionsReducer'

const reducers = combineReducers({
  converter: converterReducer,
  options: optionsReducer
})

export default reducers
