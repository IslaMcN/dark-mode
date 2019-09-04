import React, {useEffect} from 'react';
import {useLocalStorage} from './useLocalStorage';

const useDarkMode = () => {
    const [something, setSomething] = useLocalStorage('Arya');

    useEffect(() => {
        if (useLocalStorage(value) === true) {
            document.classList.add(dark-mode)
        } else {
            document.classList.remove(dark-mode)
        }
        []
    })
    return [something, setValue]
}

export default useDarkMode;