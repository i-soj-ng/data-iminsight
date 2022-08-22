import React, { useState, useEffect } from 'react';
import styled from "styled-components";

import { ReBarChart, ReChart } from "./charts";
import { Filter } from "../components/Filter";

const Box = styled.div`
  background-color: #FFFFFF;
  border-radius: 10px;
  box-shadow: 0 4px 14px -4px #D1D1D1;
  padding: 30px 30px 30px 30px;
  margin: 30px 30px 0 0;
  min-width: 380px;
  width: 35%;
  height: 450px;
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 0 20px 10px;
`

export function ChartBox() {
    const [year, setYear] = useState(2022);

    const charts = [
        {
            title: '사이트 신규 회원 수',
            chart: <ReChart year={year} />
        },
        {
            title: 'GMV',
            chart: <ReBarChart year={year} />
        },
    ];

    return (
        charts.map((item, idx) =>
            <Box key={idx}>
                <Header>
                    <h3 style={{ color: '#333333', margin: 0 }}>{ item.title }</h3>
                    <Filter onChange={(e) => setYear(e.currentTarget.value)}/>
                </Header>
                { item.chart }
            </Box>
        )
    );
}