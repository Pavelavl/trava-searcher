import React from 'react'
import sun from '../../../assets/sun.svg'
import moon from '../../../assets/moon.svg'
import styles from './Theme.module.scss'
import useTheme from '../../../hooks/useTheme'

const Theme: React.FC = (): JSX.Element => {
  const {theme, setTheme} = useTheme()
  return (
    <div>
      <img src={theme === 'light' ? moon : sun} alt="" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} className={theme === 'light' ? styles.moon : styles.sun}/>
    </div>
  )
}

export default Theme