import styles from './Converter.module.scss'
import { MainLayout } from '@components/layouts'
import { ConverterForm } from '@views/Converter/ConverterForm/ConverterForm'

export const Converter = () => {
  return (
    <MainLayout>
      <h1 className={styles.title}>Branch Name Converter</h1>
      <blockquote className={styles.quote}>
        <p>"Because it's hard to name our branches just copying from our task's title, right?"</p>
        <span>— Every developer, ever</span>
      </blockquote>
      <ConverterForm/>
    </MainLayout>
  )
}
