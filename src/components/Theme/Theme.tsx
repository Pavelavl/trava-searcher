import React from 'react'
import sun from '../../assets/sun.svg'
import styles from './Theme.module.css'

const Theme: React.FC = (): JSX.Element => {
  return (
    <div>
      <img src={sun} alt="" className={styles.sun}/>
    </div>
  )
}

export default Theme