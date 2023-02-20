import { ConverterInput } from '@views/Converter/ConverterForm/ConverterInput/ConverterInput'
import { ConverterButton } from '@views/Converter/ConverterForm/ConverterButton/ConverterButton'
import { ConverterOutput } from '@views/Converter/ConverterForm/ConverterOutput/ConverterOutput'
import { ConverterCopyButton } from '@views/Converter/ConverterForm/ConverterCopyButton/ConverterCopyButton'
import { ConverterClearButton } from '@views/Converter/ConverterForm/ConverterClearButton/ConverterClearButton'
import { ConverterOptions } from '@views/Converter/ConverterForm/ConverterOptions/ConverterOptions'
import styles from './ConverterForm.module.scss'

export const ConverterForm = () => {
  return (
    <div className={styles.form}>
      <div className={styles.convertInput}>
        <ConverterInput/>
      </div>
      <div className={styles.convertButton}>
        <ConverterButton/>
      </div>

      <div className={styles.convertOutput}>
        <ConverterOutput/>
      </div>
      <div className={styles.copyButton}>
        <ConverterCopyButton/>
      </div>

      <div className={styles.options}>
        <ConverterOptions/>
      </div>
      <div className={styles.clearButton}>
        <ConverterClearButton/>
      </div>
    </div>
  )
}
