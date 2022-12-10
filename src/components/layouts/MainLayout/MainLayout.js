import styles from '@components/layouts/MainLayout/MainLayout.module.scss'
import { Helmet } from 'react-helmet'
import { APP_NAME } from '@utils/constsants/general'

export const MainLayout = ({children}) => {
  return (
    <div className={styles.page}>
      <Helmet>
        <meta charSet="utf-8"/>
        <title>{APP_NAME}</title>
      </Helmet>
      <main>{children}</main>
    </div>
  )
}
