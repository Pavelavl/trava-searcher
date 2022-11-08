import React, { useEffect, useState } from 'react'
import styles from './Weather.module.scss'
import weather from '../../../assets/weather.svg'
import geo from '../../../assets/geo.svg'
import { IWeather, IGeo } from '../../../types/query'

const Weather: React.FC = (): JSX.Element => {
  const [locate, setLocate] = useState('Moscow')
  const [degrees, setDegrees] = useState('6°C')
  
  const success: PositionCallback = (position: GeolocationPosition) => {
    const latitude = position.coords.latitude
    const longitude = position.coords.longitude
    const weatherApiUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${latitude}%2C%20${longitude}?unitGroup=metric&key=8Z4CHSYTN3DUNLP7ZBLZTA52U&contentType=json`
    const geoApiUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
    
    let promiseLoad: Promise<[IWeather, IGeo]> = Promise.all([
      fetch(weatherApiUrl).then(res => res.json()),
      fetch(geoApiUrl).then(res => res.json())
    ])

    promiseLoad
      .then(res => {
        setDegrees(res[0].days[0].temp.toString())
        setLocate(res[1].city)
      })
  }

  const error = () => {
    alert(error)
  }

  navigator.geolocation.getCurrentPosition(success, error)
  console.log('render');
  
  return (
    <div>
      <div className={styles.weather}>
        <img src={weather} className={styles.weatherico} alt="" />
        <span>{degrees + '°'}</span>
      </div>
      <div className={styles.geo}>
        <img src={geo} className={styles.geoico} alt="" />
        <span>{locate}</span>
      </div>
    </div>
  )
}

export default Weather