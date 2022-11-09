import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import styles from './Search.module.scss'
import SearchBlock from '../Main/SearchBlock/SearchBlock';
import Theme from '../Main/Theme/Theme';
import { IRes } from '../../types/query';
import Items from './Item/Items';


const Search: React.FC = (): JSX.Element => {
  const [searchParams] = useSearchParams()
  const [data, setData] = useState<IRes[]>([])
  const param: string = searchParams.get('q') ?? '';
  const query: string = `https://www.googleapis.com/customsearch/v1?cx=e014fbd90e93841ac&key=AIzaSyAP8ZRohc3B5Hirc_QzeC0lEXYSEhSdu7I&q=${param}&start=`
  const [pages, setPages] = useState(0)
  const [fetching, setFetching] = useState(true)

  useEffect(() => {
    if (fetching) {
      fetch(query + pages)
        .then(res => res.json())
        .then(res => {
          setData(prev => [...prev, res])
          setPages(prev => prev + 10)
        })
        .finally(() => setFetching(false))
    }
  })

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler)
    return () => document.removeEventListener('scroll', scrollHandler)
  })

  const scrollHandler = ()  => {
    if (document.documentElement.scrollHeight - (document.documentElement.scrollTop + window.innerHeight) < 10) {
      setFetching(true)
    }
  }

  console.log('render')
  console.log(data)
  console.log(pages)

  return (
    <div>
      <div className={styles.toper}>
        <div className={styles.top}>
          <div className={styles.logo}></div>
          <SearchBlock choice={""} placeholder={param}/>
        </div>
        <Theme />
      </div>
      <Items data={data} />
    </div>
  )
}

export default Search