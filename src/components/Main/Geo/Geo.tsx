import React from 'react'
import geo from '../../../assets/geo.svg'
import styles from './Geo.module.scss'
const Geo: React.FC = (): JSX.Element => {
  return (
    <div className={styles.geo}>
        <img src={geo} className={styles.geoico} alt="" />
        <span>Moscow</span>
    </div>
  )
}

export default Geo