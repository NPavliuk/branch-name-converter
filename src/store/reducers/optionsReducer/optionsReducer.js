import * as actionsTypes from '@utils/constsants/actionTypes'

const initialState = {
  prefix: '',
  isAnyOptions: false,
  defaultPrefixes: ['task', 'feature', 'bug', 'fix', 'hotfix']
}

export const optionsReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case actionsTypes.SET_PREFIX_OPTION:
      return {
        ...state,
        isAnyOptions: true,
        prefix: payload
      }
    case actionsTypes.RESET_OPTIONS:
      return {
        ...state,
        prefix: '',
        isAnyOptions: false
      }
    default:
      return state
  }
}
