import React from 'react'
import logo from '../../assets/logo2.svg'
import styles from './MainLogo.module.css'
import Theme from '../Theme/Theme.tsx';

function MainLogo() {
  return (
    <div className="head">
      <div className={styles.circle}>
        <img src={logo} alt="" />
      </div>
      <Theme />
    </div>
  )
}

export default MainLogo