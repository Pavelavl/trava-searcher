import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import styles from './Search.module.scss'
import logo from '../../assets/logo_white.svg'

const Search: React.FC = (): JSX.Element => {
  const [searchParams] = useSearchParams()
  const [data, setData] = useState([])
  //https://jsonplaceholder.typicode.com/users

  //https://www.googleapis.com/customsearch/v1?cx=e014fbd90e93841ac&key=[Your_Google_Api_Key]&q=${searchParams.get('q')}
  useMemo(() => {
    try {
      fetch(`https://jsonplaceholder.typicode.com/users`)
        .then(res => res.json())
        .then(res => setData(res))
    } catch (e) {
      console.log('Ошибка,', e)
    }
  }, [searchParams])

  console.log(data)

  return (
    <div className={styles.top}>
      <div><img className={styles.logo} src={logo} alt="" /></div>

    </div>
  )
}

export default Search