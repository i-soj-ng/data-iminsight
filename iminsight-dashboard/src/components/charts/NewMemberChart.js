import React, { useEffect, useState } from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer, Bar, BarChart
} from "recharts";
import axios from "axios";

export default function NewMemberChart() {
    const [chartData, setChartData] = useState([]);

    const getData = async () => {
        const response = await axios.get("/get-site-new-member-data", {
            params: {
                site_code: 'S201807025b39df3757642',
            }
        });
        setChartData(response.data);
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <ResponsiveContainer width="100%" height="100%">
            <BarChart
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
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="cnt" fill="#8884d8" />
            </BarChart>
        </ResponsiveContainer>
    );
}
