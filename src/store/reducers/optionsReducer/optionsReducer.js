import { actionTypes } from '@utils/constsants/actionTypes'

const initialState = {
  prefix: '',
  isAnyOptions: false,
  defaultPrefixes: ['task', 'feature', 'bug', 'fix', 'hotfix']
}

export const optionsReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case actionTypes.SET_PREFIX_OPTION:
      return {
        ...state,
        isAnyOptions: true,
        prefix: payload
      }
    case actionTypes.RESET_OPTIONS:
      return {
        ...state,
        prefix: '',
        isAnyOptions: false
      }
    default:
      return state
  }
}
