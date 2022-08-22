import React, { createContext, useState, useEffect } from 'react';

import { SiteDataApi } from "../apis/SiteDataApi";
import { ChurnDataApi } from "../apis/ChurnDataApi";

export const DataContext = createContext();

export function DataStore(props) {
    const [siteData, setSiteData] = useState([]);
    const [siteCode, setSiteCode] = useState('');

    return (
        <DataContext.Provider value={{
            siteData,
            setSiteData,
        }}>
            { props.children }
        </DataContext.Provider>
    )
}