import React from 'react'
import styles from './SearchString.module.css'
import mic from '../../../assets/mic.svg'

const strslyle: string[] = [styles.searchbox, "gcse-search"]

const SearchString: React.FC = (): JSX.Element => {
    return (
        <div className={styles.ctrblock}>
            <span className={styles.trava}>Trava</span>
            <div className={styles.stringblock}>
                <form>
                    <div className={strslyle.join(" ")}>
                        <input className={styles.search} type="text" />
                        <div className={styles.mic}><img src={mic} alt="" /></div>
                    </div>
                </form>
                <div className={styles.courses}>
                    <div className={styles.usd}>
                        <span className={styles.course}>USD 0,09</span>
                        <span className={styles.courser}>-0,0005</span>
                    </div>
                    <div className={styles.eur}>
                        <span className={styles.course}>EUR 0,08</span>
                        <span className={styles.courser}>-0,00001</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchString