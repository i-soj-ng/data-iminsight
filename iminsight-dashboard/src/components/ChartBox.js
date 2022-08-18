import React from 'react';
import { ReBarChart, ReChart } from "./charts";
import styled from "styled-components";

const charts = [
    {
        title: '사이트 신규 회원 수',
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
  padding: 15px 30px 30px 30px;
  margin: 30px 30px 0 0;
  min-width: 380px;
  width: 35%;
  height: 450px;
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