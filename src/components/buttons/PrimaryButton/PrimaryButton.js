import styles from './PrimaryButton.module.scss'

export const PrimaryButton = ({name, handler, refHandler}) => {
  return (
    <button className={styles.button} type={'button'} onClick={handler} ref={refHandler}>{name}</button>
  )
}
