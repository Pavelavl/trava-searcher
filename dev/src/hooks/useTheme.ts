import { useLayoutEffect, useState } from "react";

interface ITheme {
    theme: string,
    setTheme: React.Dispatch<React.SetStateAction<string>>
}

const isDarkTheme = window?.matchMedia('(prefers-color-scheme: dark)').matches
const defaultTheme = isDarkTheme ? 'dark' : 'light'


const useTheme = (): ITheme => {
    const [theme, setTheme] = useState(localStorage.getItem('app-theme') || defaultTheme)

    useLayoutEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)
        localStorage.setItem('app-theme', theme)
    })

    return { theme, setTheme }
}

export default useTheme