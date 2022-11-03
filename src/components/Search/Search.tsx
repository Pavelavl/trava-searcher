import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import styles from './Search.module.scss'
import logo from '../../assets/logo_white.svg'
import SearchBlock from '../Main/SearchBlock/SearchBlock';
import '../Root.scss'
import Theme from '../Main/Theme/Theme';
import { IRes } from '../../types/query';


const Search: React.FC = (): JSX.Element => {
  const [searchParams] = useSearchParams()
  const [data, setData] = useState<IRes>()
  //https://jsonplaceholder.typicode.com/users

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
    <div>
      <div className={styles.toper}>
        <div className={styles.top}>
          <div className={styles.logo}></div>
          <SearchBlock choice={""} />
        </div>
        <Theme />
      </div>
      {data?.items&& <div>a da?</div>}
    </div>
  )
}

export default Search