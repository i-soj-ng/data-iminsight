import React, { createContext, useState, useEffect } from 'react';

export const DataContext = createContext();

export function DataStore(props) {
    const [siteData, setSiteData] = useState([]);
    const [siteCode, setSiteCode] = useState('');

    return (
        <DataContext.Provider value={{
            siteData,
            setSiteData,
            siteCode,
            setSiteCode,
        }}>
            { props.children }
        </DataContext.Provider>
    )
}