import styles from './PrimaryButton.module.scss'

export const PrimaryButton = ({name, handler}) => {
  return (
    <button className={styles.button} type={'button'} onClick={handler}>{name}</button>
  )
}
