import { actionTypes } from '@utils/constsants/actionTypes'

const initialState = {
  inputValue: '',
  outputValue: '',
  isConverted: false,
}

export const converterReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case actionTypes.SET_INPUT_VALUE:
      return {
        ...state,
        isConverted: false,
        inputValue: payload
      }
    case actionTypes.SET_OUTPUT_VALUE:
      return {
        ...state,
        isConverted: false,
        outputValue: payload
      }
    case actionTypes.CONVERT_INPUT_VALUE:
      return {
        ...state,
        isConverted: true,
        outputValue: payload
      }
    default:
      return state
  }
}
