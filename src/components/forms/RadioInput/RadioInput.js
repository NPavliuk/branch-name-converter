import styles from './RadioInput.module.scss'

export const RadioInput = ({id, value, content, groupName, handler, refHandler}) => {
  return (
    <label htmlFor={id} className={styles.label}>
      <input className={styles.input} type="radio" id={id} value={value} name={groupName} onClick={handler} ref={refHandler} />
      <span className={styles.mark}></span>
      {content}
    </label>
  )
}
