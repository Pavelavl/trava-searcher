import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import mic from '../../../assets/mic.svg'
import micslash from '../../../assets/mic-slash.svg'
import styles from './SearchBlock.module.scss'

const speechRec = window.webkitSpeechRecognition || window.SpeechRecognition
const record = new speechRec()
record.continuous = true
record.interimResults = true
record.lang = 'ru-RU'

const SearchBlock = ({ choice, placeholder }: { choice: string, placeholder: string }): JSX.Element => {
    const navigate = useNavigate()
    let query: string = document.querySelector('input')?.value!
    const searchStr = document.querySelector('input')!
    const [isListening, setIsListening] = useState(false)
    const [value, setValue] = useState<string>('')

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
            searchStr.value = query = transcript
            setValue(transcript)
            record.onerror = (event: any) => {
                console.log(event.error)
            }

        }
    }

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault()

        navigate(`/search?q=${query}`)
    }

    switch (choice) {
        case 'main':
            return (
                <form onSubmit={handleSubmit}>
                    <div className={styles.searchbox}>
                        <input className={styles.search} type="text" placeholder={placeholder} />
                        <div onClick={() => setIsListening(prev => !prev)} className={styles.mic}><img src={!isListening ? micslash : mic} alt="" /></div>
                    </div>
                </form>
            )
        default:
            return (
                <form onSubmit={handleSubmit} className={styles.subform}>
                    <div className={styles.searchbox_def}>
                        <input className={styles.search_def} type="text" placeholder={placeholder} />
                        <div onClick={() => setIsListening(prev => !prev)} className={styles.mic}><img src={!isListening ? micslash : mic} alt="" /></div>
                    </div>
                    <button type="submit" disabled={!value} className={styles.sub}>Найти</button>
                </form>
            )
    }

}

export default SearchBlock