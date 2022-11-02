import React from 'react'
import styles from './Weather.module.css'
import weather from '../../../assets/weather.svg'

const Weather: React.FC = (): JSX.Element => {
  return (
    <div className={styles.weather}>
        <img src={weather} className={styles.weatherico} alt="" />
        <span>6°</span>
    </div>
  )
}

export default Weather