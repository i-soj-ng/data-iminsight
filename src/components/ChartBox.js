import React from 'react';
import { MyResponsiveCalendar, ReBarChart, ReChart } from "./charts";
import styled from "styled-components";

const charts = [
    {
        title: '캘린더',
        chart: <MyResponsiveCalendar/>
    },
    {
        title: '방문자 통계',
        chart: <ReChart/>
    },
    {
        title: 'GMV',
        chart: <ReBarChart/>
    },
];

const Box = styled.div`
  background-color: #FFFFFF;
  border-radius: 10px;
  box-shadow: 0 4px 14px -4px #D1D1D1;
  padding: 30px;
  margin: 20px;
  width: 30%;
  height: 380px;
`

export function ChartBox() {
    return (
        charts.map((item, idx) =>
            <Box key={idx}>
                <h3 style={{ color: '#333333' }}>{ item.title }</h3>
                { item.chart }
            </Box>
        )
    );
}