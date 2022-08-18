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

import searchApi from "../../apis/api";
import axios from "axios";

// const data = searchApi();

export default function Rechart() {
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        axios.get("/get")
            .then(function (response) {
                const dataTemp = response.data.map((data) => {
                    return {
                        mm: data.mm,
                        cnt: data.cnt,
                    }
                })
                setChartData([{}, ...dataTemp, {}]);
            })
            .catch(function (error) {
                console.log(error);
            })
    });

    return (
        <ResponsiveContainer width="100%" height="100%">
            <LineChart
                width={500}
                height={300}
                data={chartData}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
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
                    dataKey="pv"
                    stroke="#8884d8"
                    activeDot={{ r: 8 }}
                />
            </LineChart>
        </ResponsiveContainer>
    );
}