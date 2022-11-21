import { PrimaryButton } from '@components/buttons'
import { useDispatch, useSelector } from 'react-redux'
import { convertToKebabCase } from '@store/reducers/converterReducer/converterReducerActions'

export const ConverterButton = () => {
  const dispatch = useDispatch()
  const currentInputValue = useSelector(state => state.converter.inputValue)

  const submitHandler = () => {
    dispatch(convertToKebabCase(currentInputValue))
  }

  return (
    <PrimaryButton handler={submitHandler} name={'Convert'} />
  )
}
