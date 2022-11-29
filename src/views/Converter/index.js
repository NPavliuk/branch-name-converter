import { ConverterForm } from '@views/Converter/ConverterForm/ConverterForm'
import { ConverterOptions } from '@views/Converter/ConverterOptions/ConverterOptions'

import styles from './index.module.scss'

export const Converter = () => {
  return (
    <div className={styles.page}>
      <ConverterForm/>
      <ConverterOptions/>
    </div>
  )
}
