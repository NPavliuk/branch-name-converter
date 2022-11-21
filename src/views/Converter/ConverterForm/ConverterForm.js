import { ConverterInput } from '@views/Converter/ConverterForm/ConverterInput/ConverterInput'
import { ConverterButton } from '@views/Converter/ConverterForm/ConverterButton/ConverterButton'
import { ConverterOutput } from '@views/Converter/ConverterForm/ConverterOutput/ConverterOutput'
import { ConverterClipBoardCopy } from '@views/Converter/ConverterForm/ConverterClipBoardCopy/ConverterClipBoardCopy'

export const ConverterForm = () => {
  return (
    <div>
      <ConverterInput/>
      <ConverterButton/>
      <ConverterOutput/>
      <ConverterClipBoardCopy/>
    </div>
  )
}
