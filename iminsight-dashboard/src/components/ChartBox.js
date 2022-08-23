import React, { useState, useEffect } from 'react';
import styled from "styled-components";

import { GmvChart, ProdOrderChart, NewMemberChart, PageViewChart } from "./charts";

const Box = styled.div`
  background-color: #FFFFFF;
  border-radius: 10px;
  box-shadow: 0 4px 14px -4px #D1D1D1;
  padding: 30px 30px 30px 30px;
  margin: 30px 30px 0 0;
  min-width: 400px;
  width: 42%;
  height: 450px;
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 0 20px 10px;
`

export function ChartBox() {
    const charts = [
        {
            title: 'GMV',
            chart: <GmvChart/>
        },
        {
            title: '상품 주문 수',
            chart: <ProdOrderChart/>
        },
        {
            title: '사이트 방문자 수',
            chart: <PageViewChart/>
        },
        {
            title: '사이트 신규 회원 수',
            chart: <NewMemberChart/>
        },
    ];

    return (
        charts.map((item, idx) =>
            <Box key={idx}>
                <Header>
                    <h3 style={{ color: '#333333', margin: 0 }}>{ item.title }</h3>
                </Header>
                { item.chart }
            </Box>
        )
    );
}