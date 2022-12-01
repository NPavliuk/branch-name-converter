import { TextInput } from '@components/forms'
import { useDispatch, useSelector } from 'react-redux'
import { changeInputValue } from '@store/reducers/converterReducer/converterActions'

export const ConverterInput = () => {
  const dispatch = useDispatch()
  const inputValue = useSelector(state => state.converter.inputValue)

  const inputHandle = (e) => {
    const currentInputValue = e.target.value
    dispatch(changeInputValue(currentInputValue))
  }

  return (
    <TextInput value={inputValue} handler={inputHandle} placeholder={'Enter string'}/>
  )
}
