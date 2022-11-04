import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import styles from './Search.module.scss'
import SearchBlock from '../Main/SearchBlock/SearchBlock';
import Theme from '../Main/Theme/Theme';
import { IRes } from '../../types/query';
import Item from './Item/Item';



const Search: React.FC = (): JSX.Element => {
  const [searchParams] = useSearchParams()
  const [data, setData] = useState<IRes>()
  const query: string | null = searchParams.get('q');
  //https://jsonplaceholder.typicode.com/users

  useMemo(() => {
    try {
      fetch(`https://www.googleapis.com/customsearch/v1?cx=e014fbd90e93841ac&key=AIzaSyAP8ZRohc3B5Hirc_QzeC0lEXYSEhSdu7I&q=${query}`)
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
      <Item data={data}/>
    </div>
  )
}

export default Search