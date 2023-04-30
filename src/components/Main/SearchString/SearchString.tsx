import React from 'react'
import styles from './SearchString.module.scss'
import SearchBlock from '../SearchBlock/SearchBlock'

const SearchString: React.FC = (): JSX.Element => {
    return (
        <div className={styles.ctrblock}>
            <span className={styles.trava}>Trava</span>
            <div className={styles.stringblock}>
                <SearchBlock choice='main' placeholder='mm.. nice trava'/>
            </div>
        </div>
    )
}

export default SearchString