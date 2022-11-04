import React from 'react'
import styles from './../Search.module.scss'
import { IRes } from '../../../types/query'

interface IProps {
    data: IRes | undefined,
}

const Item: React.FC<IProps> = ({ data }: IProps): JSX.Element => {
    return (
        <div className={styles.page_res}>
            {data?.items.map(item => (
                <a href={item.link}>
                    <div className={styles.search_block}>
                        <div className={styles.textpart}>
                            <span className={styles.title}>{item.title}</span>
                            <span className={styles.desc}>{item.snippet}</span>
                        </div>
                        <div><img src={item.pagemap?.cse_image[0] ? item.pagemap.cse_image[0].src : ''} className={styles.search_img} alt="" /></div>
                    </div>
                </a>
            ))}
        </div>
    )
}

export default Item