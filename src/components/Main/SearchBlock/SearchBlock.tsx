import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import mic from '../../../assets/mic.svg'
import micslash from '../../../assets/mic-slash.svg'
import styles from './SearchBlock.module.scss'
import { inherits } from 'util'

const speechRec = window.webkitSpeechRecognition || window.SpeechRecognition
const record = new speechRec()
record.continuous = true
record.interimResults = true
record.lang = 'ru-RU'

const SearchBlock = ({ choice, placeholder }: { choice: string, placeholder: string }): JSX.Element => {
    const navigate = useNavigate()
    const searchStr = useRef<HTMLInputElement>(null)
    let query = searchStr.current!
    const [isListening, setIsListening] = useState(false)

    useEffect(() => {
        handleListen()
    }, [isListening])


    const handleListen = () => {
        if (isListening) {
            record.start()
            record.onend = () => {
                console.log('continue..')
                record.start()
            }
        } else {
            record.stop()
            record.onend = () => {
                console.log('stopped mic')
            }
        }
        record.onstart = () => {
            console.log('mic is on')
        }
        record.onresult = (event: any) => {
            const transcript = Array.from(event.results)
                .map((result: any) => result[0])
                .map(result => result.transcript)
                .join('')
            console.log(transcript)
            query.value = transcript
            record.onerror = (event: any) => {
                console.log(event.error)
            }

        }
    }

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault()
        navigate(`/search?q=${query.value}`)
        window.location.reload()
    }

    switch (choice) {
        case 'main':
            return (
                <form onSubmit={handleSubmit}>
                    <div className={styles.searchbox}>
                        <input ref={searchStr} className={styles.search} type="text" placeholder={placeholder} />
                        <div onClick={() => setIsListening(prev => !prev)} className={styles.mic}><img src={!isListening ? micslash : mic} alt="" /></div>
                    </div>
                </form>
            )
        default:
            return (
                <form onSubmit={handleSubmit} className={styles.subform}>
                    <div className={styles.searchbox_def}>
                        <input ref={searchStr} className={styles.search_def} type="text" placeholder={placeholder} />
                        <div onClick={() => setIsListening(prev => !prev)} className={styles.mic}><img src={!isListening ? micslash : mic} alt="" /></div>
                    </div>
                    <button type="submit" className={styles.sub}>Найти</button>
                </form>
            )
    }

}

export default SearchBlock