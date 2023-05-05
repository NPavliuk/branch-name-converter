import styles from './TextInput.module.scss'

export const TextInput = ({value, handler, placeholder}) => {
  return (
    <input className={styles.field} type="text" value={value} onChange={handler} placeholder={placeholder}/>
  )
}
