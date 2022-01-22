import { useEffect, useState } from "react";

export const BASE_URL = 'http://localhost:5000';

const useFetch = <T extends object>(link: string) => {
    const [data, setData] = useState<T | null>(null);
    const [error, setError] = useState('');
    useEffect(() =>{
        const fetchData = async () => {
            try {
                const response = await fetch(`${BASE_URL}${link}`);
                const json = await response.json();
                setData(json);
            }
            catch (error) {
                setError((error as Error).message);
            }
        }
        fetchData();
    }, []);
    return [data, error];
}

export default useFetch;