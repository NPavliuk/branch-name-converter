import * as actionsTypes from '@utils/constsants/actionTypes'

export const setPrefixOption = (value) => {
  return {
    type: actionsTypes.SET_PREFIX_OPTION,
    payload: value
  }
}

export const resetOptions = () => {
  return {
    type: actionsTypes.RESET_OPTIONS
  }
}
