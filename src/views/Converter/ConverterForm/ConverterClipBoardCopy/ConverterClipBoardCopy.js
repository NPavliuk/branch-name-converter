import { PrimaryButton } from '@components/buttons'
import { useSelector } from 'react-redux'
import { copyToClipboard } from '@utils/helpers/copyToClipboard'

export const ConverterClipBoardCopy = () => {
  const currentOutput = useSelector(state => state.converter.outputValue)

  const clickHandler = () => {
    copyToClipboard(currentOutput)
  }

  return (
    <PrimaryButton name={'copy!'} handler={clickHandler} />
  )
}
