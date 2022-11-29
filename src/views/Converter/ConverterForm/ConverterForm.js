import { ConverterInput } from '@views/Converter/ConverterForm/ConverterInput/ConverterInput'
import { ConverterButton } from '@views/Converter/ConverterForm/ConverterButton/ConverterButton'
import { ConverterOutput } from '@views/Converter/ConverterForm/ConverterOutput/ConverterOutput'
import { ConverterClipBoardCopy } from '@views/Converter/ConverterForm/ConverterClipBoardCopy/ConverterClipBoardCopy'

import styles from './ConverterForm.module.scss'

export const ConverterForm = () => {
  return (
    <div className={styles.form}>
      <div className={styles.form_item}>
        <ConverterInput/>
        <ConverterButton/>
      </div>
      <div className={styles.form_item}>
        <ConverterOutput/>
        <ConverterClipBoardCopy/>
      </div>
    </div>
  )
}
