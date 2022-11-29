import { ConverterPrefixOptions } from '@views/Converter/ConverterOptions/ConverterPrefixOptions/ConverterPrefixOptions'

import styles from './ConverterOptions.module.scss'

export const ConverterOptions = () => {
  return (
    <div className={styles.wrapper}>
      <ConverterPrefixOptions/>
    </div>
  )
}
