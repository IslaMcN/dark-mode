import React, {useState} from 'react';

const useLocalStorage = (key, initialValue) => {
    // const thing = JSON.parse(localStorage.getItem(key));
    const [storedValue, setStoredValue] = useState(() =>
    {
        const thing = window.localStorage.getItem(key);
        if (thing) {
            return JSON.parse(thing);
        } else {
            return initialValue;
        }
        
    })

    const setValue = (value) => {
        setStoredValue(value);
        window.localStorage.setItem(key, JSON.stringify(value));
    };

    return [storedValue, setValue];
}

export default useLocalStorage; 