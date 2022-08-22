import React from 'react';
import axios from 'axios';

export function SiteDataApi() {
    console.log("get site data...");

    axios
        .get("/get-site-data")
        .then(function (response) {
            console.log(response.data);
            return(response.data);
        })
        .catch(function (error) {
            console.log(error);
        })
}
