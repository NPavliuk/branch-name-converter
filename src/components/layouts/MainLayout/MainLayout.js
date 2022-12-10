import styles from '@components/layouts/MainLayout/MainLayout.module.scss'

export const MainLayout = ({children}) => {
  return (
    <div  className={styles.page}>
      <main>{children}</main>
    </div>
  )
}
