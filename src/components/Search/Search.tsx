import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import { URLSearchParamsInit, SetURLSearchParams } from '../../types/Query'
import styles from './Search.module.css'

const Search: React.FC = (): JSX.Element => {
  const [searchParams] = useSearchParams()
  const [data, setData] = useState({})
  //

  //https://www.googleapis.com/customsearch/v1?cx=e014fbd90e93841ac&key=AIzaSyAP8ZRohc3B5Hirc_QzeC0lEXYSEhSdu7I&q=${searchParams.get('q')}
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
    <div></div>
  )
}

export default Search