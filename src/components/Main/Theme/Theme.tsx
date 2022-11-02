import React from 'react'
import sun from '../../../assets/sun.svg'
import styles from './Theme.module.scss'
import useTheme from '../../../hooks/useTheme'

const Theme: React.FC = (): JSX.Element => {
  const {theme, setTheme} = useTheme()
  return (
    <div>
      <img src={sun} alt="" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} className={styles.sun}/>
    </div>
  )
}

export default Theme