import React, {useEffect, useState} from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
} from "recharts";

import searchApi from "../../apis/SiteDataApi";
import axios from "axios";

// const data = searchApi();

export default function Rechart(props) {
    const [chartData, setChartData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    console.log(props.year);

    const dataFiltering = () => {
        const dataTemp = chartData.map((data) => {
            if (data.yyyy === props.year) {
                return {
                    yyyy: data.yyyy,
                    mm: data.mm,
                    cnt: data.cnt,
                }
            }
        });
        setFilteredData([{}, ...dataTemp, {}]);
    }

    useEffect(() => {
        axios.get("/get")
            .then(function (response) {
                const dataTemp = response.data.map((data) => {
                    return {
                        yyyy: data.yyyy,
                        mm: data.mm,
                        cnt: data.cnt,
                    }
                })
                setChartData([{}, ...dataTemp, {}]);
            })
            .catch(function (error) {
                console.log(error);
            });

        dataFiltering();
    }, [props.year]);

    return (
        <ResponsiveContainer width="100%" height="100%">
            <LineChart
                width={500}
                height={300}
                data={filteredData}
                margin={{
                    top: 5,
                    right: 30,
                    left: 10,
                    bottom: 50
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="mm" />
                <YAxis dataKey="cnt"/>
                <Tooltip />
                <Legend />
                <Line
                    type="monotone"
                    dataKey="cnt"
                    stroke="#8884d8"
                    activeDot={{ r: 8 }}
                />
            </LineChart>
        </ResponsiveContainer>
    );
}