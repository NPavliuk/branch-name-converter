import { PrimaryButton } from '@components/buttons'
import { useDispatch, useSelector } from 'react-redux'
import { changeInputValue, changeOutputValue } from '@store/reducers/converterReducer/converterActions'

export const ConverterClearButton = () => {
  const dispatch = useDispatch()
  const currentOutput = useSelector(state => state.converter.outputValue)

  const clickHandler = () => {
    dispatch(changeInputValue(''))
    dispatch(changeOutputValue(''))
  }

  return (
    currentOutput !== ''
      ? <PrimaryButton name={'Clear'} handler={clickHandler} modifyClass={'danger'}/>
      : <div></div>
  )
}
