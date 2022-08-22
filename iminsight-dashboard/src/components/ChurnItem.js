import React, { useEffect, useState } from 'react';
import axios from "axios";
import styled from "styled-components";

const Item = styled.span`
  margin-right: 20px;
`

export function ChurnItem() {
    const [churnData, setChurnData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            await axios
                .get("/get-churn-data")
                .then(function (response) {
                    console.log(response.data);
                    setChurnData(response.data);
                })
                .catch(function (error) {
                    console.log(error);
                })
        }
        getData();
    }, []);

    return (
        churnData.map((item, idx) =>
            <div key={idx}>
                <Item>{ idx + 1 }</Item>
                <Item>{ item.domain_name }</Item>
                <Item>{ item.version }</Item>
            </div>
        )
    );
}