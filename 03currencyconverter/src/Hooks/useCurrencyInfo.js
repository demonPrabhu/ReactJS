import { useState, useEffect } from 'react';
import React from 'react'

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});
    useEffect( ()=> {  
    const url =` https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
    fetch(url)
    .then(result=>result.json())
    .then(result=>setData(result[currency]))
    .catch(error=>alert(error)) 
    }, [currency]);
    console.log(data)
    return data;
}

export default useCurrencyInfo