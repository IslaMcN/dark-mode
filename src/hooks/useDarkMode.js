import React, {useEffect} from 'react';
import useLocalStorage from './useLocalStorage.js';

const useDarkMode = (initialValue) => {
    const [darkMode, setDarkMode] = useLocalStorage('dark-mode', initialValue);

    useEffect(() => {
        if (darkMode) {
            window.document.body.classList.add("dark-mode")
        } else {
            window.document.body.classList.remove("dark-mode")
        }
        
    })
    return [darkMode, setDarkMode]
}

export default useDarkMode;