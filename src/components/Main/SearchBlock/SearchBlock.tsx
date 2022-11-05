import React from 'react'
import { useNavigate } from 'react-router-dom'
import mic from '../../../assets/mic.svg'
import styles from './SearchBlock.module.scss'

const SearchBlock = ( { choice, placeholder }: {choice: string, placeholder: string } ): JSX.Element => {
    const navigate = useNavigate()

    const handleSubmit = (event: React.SyntheticEvent<EventTarget>) => {
        const query: string | undefined = document.querySelector('input')?.value
        event.preventDefault()
        
        navigate(`/search?q=${query}`,)
    }
    switch (choice) {
        case 'main':
            return (
                <form onSubmit={handleSubmit}>
                    <div className={styles.searchbox}>
                        <input className={styles.search} type="text" placeholder={placeholder} />
                        <div className={styles.mic}><img src={mic} alt="" /></div>
                    </div>
                </form>
            )
        default:
            return (
                <form onSubmit={handleSubmit} className={styles.subform}>
                    <div className={styles.searchbox_def}>
                        <input className={styles.search_def} type="text" placeholder={placeholder}/>
                        <div className={styles.mic_def}></div>
                    </div>
                    <button type="submit" className={styles.sub}>Найти</button>
                </form>
            )
    }
    
}

export default SearchBlock