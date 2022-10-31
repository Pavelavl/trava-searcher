import React from 'react'
import logo from '../../assets/logo2.svg'
import styles from './MainLogo.module.css'
import Theme from '../Theme/Theme.tsx';

const MainLogo: React.FC = (): JSX.Element => {
  return (
    <div className={styles.head}>
      <div className={styles.circle}>
        <img src={logo} alt="" />
      </div>
      <Theme />
    </div>
  )
}

export default MainLogo