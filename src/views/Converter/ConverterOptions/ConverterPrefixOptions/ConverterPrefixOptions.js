import { RadioInput } from '@components/forms'
import { PrimaryButton } from '@components/buttons'
import { useDispatch, useSelector } from 'react-redux'
import { resetOptions, setPrefixOption } from '@store/reducers/optionsReducer/optionsActions'

export const ConverterPrefixOptions = () => {
  const dispatch = useDispatch()
  const prefixOptions = useSelector(state => state.options.defaultPrefixes)

  const radioHandle = (e) => {
    const currentPrefix = e.target.value
    dispatch(setPrefixOption(currentPrefix))
  }

  const clickHandle = () => {
    prefixOptions.map(prefixOption => document.querySelector(`#prefix-${prefixOption}`).checked = false)
    dispatch(resetOptions())
  }

  return (
    <div>
      {prefixOptions.map(prefixOption => <RadioInput key={prefixOptions.indexOf(prefixOption)} id={`prefix-${prefixOption}`} value={prefixOption} handler={radioHandle} groupName={'prefix'}/>)}
      <PrimaryButton name={'Not use prefixes'} handler={clickHandle}/>
    </div>
  )
}
