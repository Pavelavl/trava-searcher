import React from 'react'
import geo from '../../assets/geo.svg'
import styles from './Geo.module.css'
function Geo() {
  return (
    <div className={styles.geo}>
        <img src={geo} className={styles.geoico} alt="" />
        <span>Moscow</span>
    </div>
  )
}

export default Geo