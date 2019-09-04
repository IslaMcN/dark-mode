import React, {useState} from 'react';

const useLocalStorage = (key, initialValue) => {
    
    const [storedValue, setStoredValue] = useState(() =>
    {
        const thing = JSON.parse(localStorage.getItem(key));
        return thing ? JSON.parse(thing) : initialValue;
    })

    const setValue = (value) => {
        setStoredValue(value);
        window.localStorage.setItem(key, JSON.stringify(value));
    };

    return [storedValue, setValue];
}

export default useLocalStorage; 