import styles from './PrimaryButton.module.scss'
import { classNames } from '@utils/helpers/classNames'

export const PrimaryButton = ({name, handler, refHandler, modifyClass}) => {
  return (
    <button className={classNames({
      [styles.button]: true,
      [styles.success]: modifyClass === 'success',
      [styles.danger]: modifyClass === 'danger',
    })} type={'button'} onClick={handler} ref={refHandler}>{name}</button>
  )
}
