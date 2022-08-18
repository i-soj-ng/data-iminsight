import React from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
} from "recharts";

const data = [
    {
        name: "Jan",
        GMV: 10000,
        amt: 2400
    },
    {
        name: "Feb",
        GMV: 13000,
        amt: 2210
    },
    {
        name: "Mar",
        GMV: 9000,
        amt: 2290
    },
    {
        name: "Apr",
        GMV: 11000,
        amt: 2000
    },
    {
        name: "May",
        GMV: 8000,
        amt: 2181
    },
    {
        name: "Jun",
        GMV: 12000,
        amt: 2500
    },
    {
        name: "Jul",
        GMV: 16000,
        amt: 2100
    }
];

export default function ReBarChart() {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <BarChart
                width={580}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 50
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="GMV" fill="#8884d8" background={{ fill: "#eee" }} />
            </BarChart>
        </ResponsiveContainer>
    );
}
