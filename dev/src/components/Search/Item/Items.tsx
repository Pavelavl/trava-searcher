import styles from './../Search.module.scss'
import { IRes } from '../../../types/query'

const Items = ({ data }: {data: IRes[] | undefined}): JSX.Element => {

    return (
        <div className={styles.page_res}>
            {data?.map(e => e.items.map(item => (
                <a href={item.link} key={item.title}>
                    <div className={styles.search_block}>
                        <div className={styles.textpart}>
                            <span className={styles.title}>{item.title}</span>
                            <span className={styles.desc}>{item.snippet}</span>
                        </div>
                        <div className={styles.imgpart}><img src={Array.isArray(item.pagemap?.cse_image) ? item.pagemap?.cse_image[0].src : ''} className={styles.search_img} alt="" /></div>
                    </div>
                </a>
            )))}
        </div>
    )
}

export default Items