import { useRef } from 'react'
import { useSelector } from 'react-redux'
import { PrimaryButton } from '@components/buttons'
import { copyToClipboard } from '@utils/helpers/copyToClipboard'
import { updateElementName } from '@utils/helpers/updateElementName'

export const ConverterCopyButton = () => {
  const copyButtonRef = useRef()
  const currentOutput = useSelector(state => state.converter.outputValue)

  const clickHandler = () => {
    copyToClipboard(currentOutput)
    updateElementName(copyButtonRef, 'Copy', 'Copied', 1000)
  }

  return (
    currentOutput !== ''
      ? <PrimaryButton name={'Copy'} handler={clickHandler} refHandler={copyButtonRef}/>
      : <div></div>
  )
}
