import { actionTypes } from '@utils/constsants/actionTypes'

export const setPrefixOption = (value) => {
  return {
    type: actionTypes.SET_PREFIX_OPTION,
    payload: value
  }
}

export const resetOptions = () => {
  return {
    type: actionTypes.RESET_OPTIONS
  }
}
