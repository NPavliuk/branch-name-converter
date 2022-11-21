import * as actionsTypes from '@utils/constsants/actionTypes'
import { toKebabCase } from '@utils/helpers/convertFunctions'

export const changeInputValue = (value) => {
  return {
    type: actionsTypes.SET_INPUT_VALUE,
    payload: value
  }
}

export const changeOutputValue = (value) => {
  return {
    type: actionsTypes.SET_OUTPUT_VALUE,
    payload: value
  }
}

export const convertToKebabCase = (value, options) => {
  let output

  if (value !== '') {
    output = toKebabCase(value)
  }

  if (options.isAnyOptions) {
    switch (true) {
      case options.prefix !== '':
        output = options.prefix.concat('/', output)
        break
      default:
        break
    }
  }

  return {
    type: actionsTypes.CONVERT_INPUT_VALUE,
    payload: output
  }
}
