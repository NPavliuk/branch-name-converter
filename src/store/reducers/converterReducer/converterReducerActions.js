import * as actionsTypes from '@utils/constsants/actionTypes'
import { toKebabCase } from '@utils/helpers/convertFunctions'

export const changeInputValue = (value) => {
  return {
    type: actionsTypes.CHANGE_INPUT_VALUE,
    payload: value
  }
}

export const changeOutputValue = (value) => {
  return {
    type: actionsTypes.CHANGE_OUTPUT_VALUE,
    payload: value
  }
}

export const convertToKebabCase = (value) => {
  const output = toKebabCase(value)

  return {
    type: actionsTypes.CONVERT_INPUT_VALUE,
    payload: output
  }
}
