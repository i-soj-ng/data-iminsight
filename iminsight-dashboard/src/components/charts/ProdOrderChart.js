import React, { useEffect, useState, useContext } from "react";
import { DataContext } from "../../store/DataStore";
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
import axios from "axios";

export default function ProdOrderChart() {
    const [chartData, setChartData] = useState([]);

    const context = useContext(DataContext);
    const { siteCode } = context;

    const getData = async () => {
        const response = await axios.get("/get-site-order-prod-data", {
            params: {
                site_code: siteCode,
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
                <Bar dataKey="order_prod_count" fill="#8884d8" />
            </BarChart>
        </ResponsiveContainer>
    );
}
