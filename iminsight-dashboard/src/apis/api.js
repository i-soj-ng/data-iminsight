import React from 'react';
import axios from 'axios';

const searchApi = async () => {
    console.log("get data...")

    await axios
        .get("/get")
        .then(function (response) {
            console.log(response.data);
            return(response.data);
        })
        .catch(function (error) {
            console.log(error);
        })
}

export default searchApi;
