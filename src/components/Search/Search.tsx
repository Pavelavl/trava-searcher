import { useCallback, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import styles from './Search.module.scss'
import SearchBlock from '../Main/SearchBlock/SearchBlock';
import Theme from '../Main/Theme/Theme';
import { IRes } from '../../types/query';
import Items from './Item/Items';



const Search: React.FC = (): JSX.Element => {
  const [searchParams] = useSearchParams()
  const [data, setData] = useState<IRes>()
  const param: string = searchParams.get('q') ?? '';
  const query: string = `https://www.googleapis.com/customsearch/v1?cx=e014fbd90e93841ac&key=AIzaSyAP8ZRohc3B5Hirc_QzeC0lEXYSEhSdu7I&q=${param}&start=`
  const [pages, setPages] = useState(0)
  let isLoading = false
  let shouldLoad = true

  async function checkPosition() {
    const screenHeight = window.innerHeight
    const scrolled = window.scrollY
    const position = scrolled + screenHeight

    if (position >= screenHeight) {
      setPages(prev => prev + 10)
      await getItemsFromApi()
    }
  }

  ; (() => {
    window.addEventListener('scroll', checkPosition)
    window.addEventListener('resize', checkPosition)
  })()

  const getItemsFromApi = useCallback(async () => {
    if (isLoading || !shouldLoad) return
    isLoading = true
    fetch(query + pages)
      .then(res => res.json())
      .then(res => setData(res))
      .catch(e => console.log('Error:', e))
  }, [searchParams])

  return (
    <div id='main'>
      <div className={styles.toper}>
        <div className={styles.top}>
          <div className={styles.logo}></div>
          <SearchBlock choice={""} placeholder={param}/>
        </div>
        <Theme />
      </div>
      
    </div>
  )
}

export default Search