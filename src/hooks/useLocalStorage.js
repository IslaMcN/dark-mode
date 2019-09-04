import React, {useState} from 'react';

const useLocalStorage = (key, initialValue) => {
    const thing = JSON.parse(localStorage.getItem(key));
    const [storedValue, setStoredValue] = useState(thing || initialValue);

    const setValue = (value) => {
        const value = localStorage
    }

    return [storedValue];
}

export default useLocalStorage;