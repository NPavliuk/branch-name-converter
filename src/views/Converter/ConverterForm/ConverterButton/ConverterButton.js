import { useDispatch, useSelector } from 'react-redux'
import { PrimaryButton } from '@components/buttons'
import { convertToKebabCase } from '@store/reducers/converterReducer/converterActions'

export const ConverterButton = () => {
  const dispatch = useDispatch()
  const options = useSelector(state => state.options)
  const currentInputValue = useSelector(state => state.converter.inputValue)

  const submitHandler = () => {
    if (currentInputValue !== '') {
      dispatch(convertToKebabCase(currentInputValue, options))
    }
  }

  return (
    <PrimaryButton handler={submitHandler} name={'Convert'} modifyClass={'success'}/>
  )
}
