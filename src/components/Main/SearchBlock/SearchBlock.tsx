import React from 'react'
import { useNavigate } from 'react-router-dom'
import mic from '../../../assets/mic.svg'
import styles from './SearchBlock.module.scss'

const SearchBlock: React.FC = (): JSX.Element => {
    const navigate = useNavigate()

    const handleSubmit = (event: React.SyntheticEvent<EventTarget>) => {
        const query: string | undefined = document.querySelector('input')?.value
        event.preventDefault()
        
        navigate(`/search?q=${query}`,)
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className={styles.searchbox}>
                <input className={styles.search} type="text" placeholder='mmm.. nice trava' />
                <div className={styles.mic}><img src={mic} alt="" /></div>
            </div>
        </form>
    )
}

export default SearchBlock