import { PrimaryButton } from '@components/buttons'
import { useDispatch, useSelector } from 'react-redux'
import { convertToKebabCase } from '@store/reducers/converterReducer/converterActions'

export const ConverterButton = () => {
  const dispatch = useDispatch()
  const options = useSelector(state => state.options)
  const currentInputValue = useSelector(state => state.converter.inputValue)

  const submitHandler = () => {
    dispatch(convertToKebabCase(currentInputValue, options))
  }

  return (
    <PrimaryButton handler={submitHandler} name={'Convert'}/>
  )
}
