import * as actionsTypes from '@utils/constsants/actionTypes'

const initialState = {
  inputValue: '',
  outputValue: '',
  isConverted: false
}

export const converterReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case actionsTypes.SET_INPUT_VALUE:
      return {
        ...state,
        isConverted: false,
        inputValue: payload
      }
    case actionsTypes.SET_OUTPUT_VALUE:
      return {
        ...state,
        isConverted: false,
        outputValue: payload
      }
    case actionsTypes.CONVERT_INPUT_VALUE:
      return {
        ...state,
        isConverted: true,
        outputValue: payload
      }
    default:
      return state
  }
}
