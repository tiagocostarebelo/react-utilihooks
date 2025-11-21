import { useState } from "react";

export function useLocalStorage(key, initialValue) {
    const [value, setValue] = useState(() => {
        try {
            const stored = localStorage.getItem(key);
            return stored !== null ? JSON.parse(stored) : initialValue;
        } catch (err) {
            console.log("useLocalStorage: read error", err);
            return initialValue;
        }
    })

    useEffect(() => {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (err) {
            console.log("useLocalStorage: write error", err)
        }
    }, [key, value]);

    return [value, setValue];
}