import React from 'react';
import axios from 'axios';

export function ChurnDataApi() {
    console.log("get churn data...");

    axios
        .get("/get-churn-data")
        .then(function (response) {
            console.log(response.data);
            return(response.data);
        })
        .catch(function (error) {
            console.log(error);
        })
}
